import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavigationHeader } from './components/NavigationHeader';
import { NavigationFooter } from './components/NavigationFooter';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { OverviewPage } from './pages/OverviewPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResumePage } from './pages/ResumePage';

// Scroll to top helper on route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

export default function App() {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#090a0c] text-[#e3e2e5] font-body selection:bg-[#ff2a3b] selection:text-white flex flex-col justify-between">
        <NavigationHeader onToggleAiAssistant={() => setIsAiAssistantOpen(!isAiAssistantOpen)} />
        
        <main className="w-full pt-16 bg-[#090a0c] flex-1">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/projects-and-dossier" element={<ProjectsPage />} />
            <Route path="/resume-and-credentials" element={<ResumePage />} />
          </Routes>
        </main>

        <NavigationFooter />

        {/* AI Assistant Drawer connecting to backend /api/assistant/chat */}
        <AiAssistantDrawer
          isOpen={isAiAssistantOpen}
          onClose={() => setIsAiAssistantOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
