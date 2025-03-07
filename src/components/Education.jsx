import React from 'react';

const EducationSection = () => {
  // Education data is preserved from the original component
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
    <section id="education" className="py-20 bg-white text-gray-800 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full translate-y-1/3 -translate-x-1/4 opacity-30"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Education
          </h2>
          <div className="h-1 w-16 bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border-l-4 border-blue-700 relative overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm7 10.82L12 17l-7-3.82v-3.64L12 13l7-3.82v4.64zM12 5l8 4-8 4-8-4 8-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <div className="text-blue-700 font-medium text-sm">{edu.institution}</div>
                <div className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-800 text-xs font-medium ml-2">
                  {edu.year}
                </div>
              </div>
              
              <div className="text-gray-600 border-t border-gray-100 pt-3 mt-1">
                {edu.content.split('|').map((part, idx) => (
                  <div key={idx} className={`${idx > 0 ? 'mt-1' : ''} text-sm`}>
                    {part.trim()}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional section showing professional certifications */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:px-8 relative z-10 mt-8">
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 border-t border-gray-200">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Professional Development</h3>
          <p className="text-gray-600 mb-4">Continuous professional development through various workshops, seminars, and training programs in robotics, AI, and engineering education.</p>
          
          <div className="flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">Robotics & AI</span>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">Engineering Education</span>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">Mechanical Engineering</span>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">Automation</span>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">Research Methodology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;