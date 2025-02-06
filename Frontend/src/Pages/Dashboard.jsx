import React, { useState } from 'react';
import { BottomNav } from "../Components/Dashboard/BottomNav";
import { Header } from "../Components/Dashboard/Header";

// Import all your page components
import Home from '../Components/Dashboard/Home';
import AIAssistant from '../Components/Dashboard/AIAssistant';
import Notion from '../Components/Dashboard/Notion';
import CareerPath from '../Components/Dashboard/CareerPath';
import VideoSummarizer from '../Components/Dashboard/VideoSummarizer'

// Import icons
import { Home as HomeIcon, Cpu, Notebook, Briefcase, PlaySquare } from 'lucide-react';

const Dashboard = () => {
  // State to keep track of the current active page
  const [activePage, setActivePage] = useState('home');

  // Navigation items with components
  const navItems = [
    { 
      id: "home", 
      icon: HomeIcon, 
      label: "Home", 
      component: Home 
    },
    { 
      id: "ai-assistant", 
      icon: Cpu, 
      label: "AI Assistant", 
      component: AIAssistant 
    },
    { 
      id: "notion", 
      icon: Notebook, 
      label: "Notion", 
      component: Notion 
    },
    { 
      id: "career-path", 
      icon: Briefcase, 
      label: "Career Path", 
      component: CareerPath 
    },
    { 
      id: "video-summarizer", 
      icon: PlaySquare, 
      label: "Video Summarizer", 
      component: VideoSummarizer 
    },
  ];

  // Find the current page component
  const ActivePageComponent = navItems.find(item => item.id === activePage)?.component || Home;

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900">
      {/* Header (Fixed at the Top) with page change functionality */}
      <nav className="fixed w-full top-0 z-50">
        <Header 
          onNavItemClick={(id) => setActivePage(id)} 
          activePage={activePage} 
        />
      </nav>

      {/* Main Content Container */}
      <div className="pt-17 w-full px-4 rounded-3xl">
        {/* Scrollable content container */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto scrollbar-hidden rounded-2xl bg-black dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8">
            <ActivePageComponent />
          </div>
        </div>
      </div>


      {/* Bottom Navigation (Fixed at Bottom) */}
      <BottomNav 
        navItems={navItems} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
    </div>
  );
};

export default Dashboard;
