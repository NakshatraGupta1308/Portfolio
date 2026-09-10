import React, { useEffect, useState, useRef } from 'react';
import { soundEngine } from '../utils/audioFeedback';

export const HardwareReticleCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);

  // Position references for high-performance animation without React state lag
  const mousePos = useRef({ x: -100, y: -100 });
  const reticlePos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouch(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // If pointer is coarse/touch, skip custom cursor visual positioning
    if (!mediaQuery.matches) {
      // Still listen for tactile drum click on touch if desirable
      const handleTouchClick = () => {
        soundEngine.playLightKick(0.9);
      };
      window.addEventListener('touchstart', handleTouchClick, { passive: true });
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        window.removeEventListener('touchstart', handleTouchClick);
      };
    }

    // Hide native cursor class on desktop
    document.documentElement.classList.add('has-hardware-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if current target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [tabindex="0"], label, .interactive-target, [data-interactive="true"]'
        );

        if (interactive) {
          setIsHovered(true);
          const tagName = interactive.tagName.toLowerCase();
          if (tagName === 'a') {
            setHoverType('LINK // ACQ');
          } else if (tagName === 'button') {
            setHoverType('EXEC // CMD');
          } else if (tagName === 'input' || tagName === 'textarea') {
            setHoverType('INPUT // SYS');
          } else {
            setHoverType('TARGET // LOCK');
          }
        } else {
          setIsHovered(false);
          setHoverType(null);
        }
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
      // Play warm drum kick click sound!
      soundEngine.playLightKick(1.0);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Request Animation Frame loop for butter-smooth interpolation
    let animationFrameId: number;

    const render = () => {
      // 1. Center dot has zero latency (exact mouse position)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // 2. Outer reticle follows with subtle, springy damping (mimicking mechanical hardware gimbal)
      const lerpFactor = 0.32;
      reticlePos.current.x += (mousePos.current.x - reticlePos.current.x) * lerpFactor;
      reticlePos.current.y += (mousePos.current.y - reticlePos.current.y) * lerpFactor;

      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate3d(${reticlePos.current.x}px, ${reticlePos.current.y}px, 0)`;
      }

      if (tagRef.current) {
        tagRef.current.style.transform = `translate3d(${reticlePos.current.x}px, ${reticlePos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      document.documentElement.classList.remove('has-hardware-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouch) {
    return null;
  }

  // Dimensions based on state
  // Normal reticle: 26px box
  // Hover reticle: 42px box + 45 deg rotation
  // Click snap: scale down abruptly
  const reticleSize = isHovered ? 42 : 26;
  const bracketLength = isHovered ? 8 : 6;
  const rotation = isHovered ? 45 : 0;
  const scale = isClicked ? 0.72 : 1.0;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ZERO-LATENCY CENTER DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[2.5px] -mt-[2.5px] pointer-events-none will-change-transform"
      >
        <div
          className={`w-[5px] h-[5px] rounded-full transition-all duration-150 ${
            isHovered
              ? 'bg-[#ffffff] shadow-[0_0_10px_#ff2a3b,0_0_4px_#ff2a3b] scale-125'
              : 'bg-[#ff2a3b] shadow-[0_0_6px_rgba(255,42,59,0.7)]'
          } ${isClicked ? 'scale-75 bg-[#ff4d5d]' : ''}`}
        />
      </div>

      {/* DAMPED HARDWARE RETICLE & CORNER BRACKETS */}
      <div
        ref={reticleRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className="relative flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
            width: `${reticleSize}px`,
            height: `${reticleSize}px`,
          }}
        >
          {/* Top-Left Bracket */}
          <div
            className={`absolute top-0 left-0 border-t-[1.5px] border-l-[1.5px] transition-colors duration-150 ${
              isHovered ? 'border-[#ffffff]' : 'border-[#ff2a3b]'
            }`}
            style={{ width: `${bracketLength}px`, height: `${bracketLength}px` }}
          />

          {/* Top-Right Bracket */}
          <div
            className={`absolute top-0 right-0 border-t-[1.5px] border-r-[1.5px] transition-colors duration-150 ${
              isHovered ? 'border-[#ffffff]' : 'border-[#ff2a3b]'
            }`}
            style={{ width: `${bracketLength}px`, height: `${bracketLength}px` }}
          />

          {/* Bottom-Left Bracket */}
          <div
            className={`absolute bottom-0 left-0 border-b-[1.5px] border-l-[1.5px] transition-colors duration-150 ${
              isHovered ? 'border-[#ffffff]' : 'border-[#ff2a3b]'
            }`}
            style={{ width: `${bracketLength}px`, height: `${bracketLength}px` }}
          />

          {/* Bottom-Right Bracket */}
          <div
            className={`absolute bottom-0 right-0 border-b-[1.5px] border-r-[1.5px] transition-colors duration-150 ${
              isHovered ? 'border-[#ffffff]' : 'border-[#ff2a3b]'
            }`}
            style={{ width: `${bracketLength}px`, height: `${bracketLength}px` }}
          />

          {/* Cardinal Axis Micro-Ticks (North, South, East, West) */}
          <div
            className={`absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-1 transition-opacity duration-150 ${
              isHovered ? 'opacity-90 bg-[#ffffff]' : 'opacity-40 bg-[#ff2a3b]'
            }`}
          />
          <div
            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-[1px] h-1 transition-opacity duration-150 ${
              isHovered ? 'opacity-90 bg-[#ffffff]' : 'opacity-40 bg-[#ff2a3b]'
            }`}
          />
          <div
            className={`absolute -left-1 top-1/2 -translate-y-1/2 h-[1px] w-1 transition-opacity duration-150 ${
              isHovered ? 'opacity-90 bg-[#ffffff]' : 'opacity-40 bg-[#ff2a3b]'
            }`}
          />
          <div
            className={`absolute -right-1 top-1/2 -translate-y-1/2 h-[1px] w-1 transition-opacity duration-150 ${
              isHovered ? 'opacity-90 bg-[#ffffff]' : 'opacity-40 bg-[#ff2a3b]'
            }`}
          />
        </div>
      </div>

      {/* TARGET ACQUISITION MONOSPACE TAG (VISIBLE ON HOVER) */}
      <div
        ref={tagRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`absolute left-5 top-4 whitespace-nowrap font-mono text-[9px] tracking-widest uppercase transition-all duration-150 select-none flex items-center gap-1 ${
            isHovered && hoverType
              ? 'opacity-90 translate-x-0'
              : 'opacity-0 -translate-x-1'
          } ${isClicked ? 'scale-90 text-[#ff4d5d]' : 'text-[#ff2a3b]'}`}
        >
          <span className="w-1 h-1 rounded-full bg-[#00ff66] inline-block animate-ping" />
          <span className="bg-[#090a0c]/90 px-1 py-0.5 border border-[rgba(255,42,59,0.3)] shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {hoverType}
          </span>
        </div>
      </div>
    </div>
  );
};
