/**
 * Web Audio API synthesizer for tactile engineering sound feedback.
 * Synthesizes a warm, low-frequency "light kick on a drum" transient on demand
 * without external audio asset dependencies or network latency.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nakshatra_portfolio_sfx_muted');
      this.isMuted = saved === 'true';
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('nakshatra_portfolio_sfx_muted', muted ? 'true' : 'false');
    }
    if (!muted) {
      this.playLightKick();
    }
    return this.isMuted;
  }

  public toggleMute(): boolean {
    return this.setMuted(!this.isMuted);
  }

  /**
   * Synthesizes a warm, punchy "light kick on a drum"
   * Frequency sweep: 135Hz -> 42Hz exponentially over 65ms
   * Amplitude envelope: fast attack, warm exponential decay
   */
  public playLightKick(volumeScale: number = 1.0) {
    if (this.isMuted) return;

    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. Fundamental Oscillator (Warm Sine Sweep)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';

      // Pitch sweep mimicking the beater striking a drum head
      osc.frequency.setValueAtTime(135, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.065);

      // Volume envelope
      const baseGain = 0.22 * Math.min(1.5, Math.max(0.2, volumeScale));
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(baseGain, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      // 2. Beater impact transient (Low-pass filtered subtle punch)
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.04);

      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }
}

export const soundEngine = new SoundEngine();
