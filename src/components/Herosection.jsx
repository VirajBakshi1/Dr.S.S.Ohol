import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const circleTextRef = useRef(null);
  
  // Animation for rotating text
  useEffect(() => {
    const text = circleTextRef.current;
    if (!text) return;
    
    let angle = 0;
    const rotate = () => {
      angle = (angle + 0.2) % 360;
      text.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(rotate);
    };
    
    const animationId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div id="home" className="bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements - subtle and professional */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl py-20 mx-auto w-full flex justify-center relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-16 lg:gap-24 items-center">
          {/* Profile Image with subtle effect - centered in mobile view */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative group mx-auto md:mx-0">
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
              <img 
                src="https://irins.org/assets/profile_images/126037.JPG" 
                alt="Dr. S. S. Ohol" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Circular rotating text */}
            <div 
              ref={circleTextRef} 
              className="absolute inset-0 w-full h-full -z-10"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path 
                  id="textPath" 
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                  fill="none" 
                />
                <text className="text-xs font-medium fill-blue-700">
                  <textPath href="#textPath" startOffset="0%">
                    Dr. S. S. Ohol • Engineer • Robotics •
                  </textPath>
                </text>
                
                {/* Small stars */}
                <circle cx="50" cy="12" r="1.5" fill="blue" className="animate-pulse opacity-50" />
                <circle cx="50" cy="88" r="1.5" fill="blue" className="animate-pulse opacity-50" />
              </svg>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <div className="space-y-2 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
                Dr. S. S. <br />
                Ohol
              </h1>
              <h2 className="text-2xl font-light tracking-wider text-gray-600">Professor</h2>
              <div className="w-20 h-1 bg-blue-600 md:mx-0 mx-auto mt-2"></div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Associate Professor of Mechanical Engineering at COEP 
                Technological University. With 27+ years in academia and 17 years 
                in research, I lead the Center of Excellence in Robotics & AI, 
                specializing in automation and intelligent systems.
              </p>
              <p className="leading-relaxed">
                My research has yielded 2 patents, 26 international journal 
                publications, and attracted significant funding from DRDO, 
                ARMREB, and industry partners. I've guided numerous student 
                projects while serving in key positions including Chair of IEEE 
                Pune's Robotics Chapter and member of The Robotics Society's 
                Governing Council.
              </p>
              <p className="font-medium text-gray-800 italic">
                "I'm dedicated to advancing robotics technology through innovative 
                research and mentoring the next generation of engineers."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements - more subtle */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-blue-200 rounded-sm opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border border-blue-100 rotate-45 opacity-10 animate-spin-slow"></div>
    </div>
  );
};

export default HeroSection;