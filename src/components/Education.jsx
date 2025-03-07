// src/components/EducationSection.jsx
import React from 'react';

const EducationSection = () => {
  // Education data from the provided table
  const education = [
    {
      degree: "B.E. (Mech.)",
      institution: "Pune University, Govt. College of Engineering, Pune",
      year: "Graduated: 1994",
      content: "Major Subject: I.C. Engine & Automobile Engineering | First Class"
    },
    {
      degree: "M.E. (Prod.)",
      institution: "Pune University",
      year: "Graduated: 1998",
      content: "Major Subject: Manufacturing Automation | First Class"
    },
    {
      degree: "Ph.D. (Mech.)",
      institution: "Pune University",
      year: "Graduated: May 2010",
      content: "Major Subject: Mechanical Engineering | Completed"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-800 text-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800 rounded-full translate-y-1/3 -translate-x-1/4 opacity-40"></div>
      
      {/* Floating icons */}
      <div className="absolute top-24 right-32 opacity-10">
        <svg className="w-20 h-20 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-40 opacity-10">
        <svg className="w-16 h-16 text-blue-800 rotate-45" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 7v2c0 .55.45 1 1 1h16v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm17 11c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-2h18v2zm-1-7H4v4h16v-4z"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-gray-200">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-t-4 border-blue-300 relative overflow-hidden group"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content - layered on top of the background */}
              <div className="relative z-10">
                {/* Degree Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm7 10.82L12 17l-7-3.82v-3.64L12 13l7-3.82v4.64zM12 5l8 4-8 4-8-4 8-4z"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-100">{edu.degree}</h3>
                
                <div className="mb-3 text-blue-300 font-medium">{edu.institution}</div>
                
                <div className="inline-block px-3 py-1 rounded-md bg-blue-900 text-blue-200 text-sm mb-4 font-medium">
                  {edu.year}
                </div>
                
                <div className="text-gray-300 border-t border-gray-200 pt-3">
                  {edu.content.split('|').map((part, idx) => (
                    <div key={idx} className={`${idx > 0 ? 'mt-1' : ''}`}>
                      {part.trim()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;