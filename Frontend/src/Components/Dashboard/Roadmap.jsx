import React, { useState, useEffect, useRef } from "react";

const Roadmap = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const [milestones] = useState([
    {
      title: "HTML/CSS Fundamentals",
      progress: 100,
      status: "completed",
      description: "Mastered core concepts of semantic HTML and modern CSS layouts"
    },
    {
      title: "JavaScript Core",
      progress: 85,
      status: "in-progress",
      description: "Advanced concepts: Closures, Prototypes, ES6+ Features"
    },
    {
      title: "React Framework",
      progress: 70,
      status: "in-progress",
      description: "Building complex applications with hooks and context API"
    },
    {
      title: "Backend Development",
      progress: 45,
      status: "not-started",
      description: "Node.js, Express, and REST API development"
    },
    {
      title: "Database Systems",
      progress: 30,
      status: "not-started",
      description: "SQL/NoSQL databases and data modeling"
    },
    {
      title: "System Design",
      progress: 15,
      status: "not-started",
      description: "Architecting scalable and maintainable systems"
    }
  ]);

  useEffect(() => {
    setTimeout(() => setAnimationStarted(true), 500);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-black';
      case 'in-progress': return 'bg-yellow-400';
      default: return 'bg-gray-200';
    }
  };

  const handleMouseEnter = (milestone) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSelectedMilestone(milestone);
    }, 300); // 300ms delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setSelectedMilestone(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 ">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold mb-6">Development Roadmap</h3>
        <button className="px-7 cursor-pointer h-10 bg-black text-white font-semibold rounded-xl"> Start</button>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-black/10 rounded-full" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="relative flex items-start group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(milestone)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Timeline dot */}
              <div className={`
                absolute left-3 top-4 w-3 h-3 rounded-full border-2 border-black
                ${milestone.status === 'completed' ? 'bg-black' : 
                  milestone.status === 'in-progress' ? 'bg-yellow-400' : 'bg-white'}
                transform group-hover:scale-150 transition-all duration-300 z-10
              `} />

              <div className="ml-8 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{milestone.title}</h4>
                  <span className="text-sm font-medium">
                    {animationStarted ? milestone.progress : 0}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ease-out
                      ${milestone.status === 'completed' ? 'bg-green-400' : 
                        milestone.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-300'}
                    `}
                    style={{ 
                      width: animationStarted ? `${milestone.progress}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>

                {/* Description popup */}
                {selectedMilestone === milestone && (
                  <div 
                    className="mt-3 p-4 bg-white border-2 border-black rounded-xl 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                      transition-all duration-300 ease-out origin-top animate-scaleIn"
                  >
                    <p className="text-sm font-medium">{milestone.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`
                        px-3 py-1 text-xs font-bold border-2 border-black rounded-lg
                        ${milestone.status === 'completed' ? 'bg-green-400 text-white' : 
                          milestone.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-200'}
                      `}>
                        {milestone.status.replace('-', ' ')}
                      </span>
                      <span className="text-xs font-medium">
                        Last updated: {Math.floor(Math.random() * 30 + 1)} days ago
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;