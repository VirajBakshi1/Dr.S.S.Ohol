import React from 'react';

const ExperienceSection = () => {
  // Experiences data is preserved from the original component
  const experiences = [
    {
      title: "Quality-Control-Engineer",
      company: "Suyaan Transmissions Pvt. Ltd., Pune",
      period: "July 1994 – November 1995",
      responsibilities: [
        "Managed quality control and local area management responsibilities."
      ]
    },
    {
      title: "Lecturer in Mechanical Engineering Department",
      company: "A.I.S.S.M.S.'s College of Engineering, Pune",
      period: "August 1996 – March 2003",
      responsibilities: [
        "Handled teaching and allied responsibilities."
      ]
    },
    {
      title: "Assistant Professor in Mechanical Engineering Department",
      company: "Maeers' Maharashtra Academy of Naval Education & Training (MANET), Pune",
      period: "March 2003 – October 2003",
      responsibilities: [
        "Managed teaching and allied responsibilities."
      ]
    },
    {
      title: "Lecturer in Mechanical Engineering Department",
      company: "PIET's College of Engineering, Pune",
      period: "November 2003 – November 2005",
      responsibilities: [
        "Oversaw teaching and allied responsibilities."
      ]
    },
    {
      title: "Assistant Professor in Mechanical Engineering Department",
      company: "PIET's College of Engineering, Pune",
      period: "December 2005 – November 2008",
      responsibilities: [
        "Handled teaching and allied responsibilities."
      ]
    },
    {
      title: "Associate Professor in Mechanical Engineering Department",
      company: "College of Engineering Pune (COEP), Pune",
      period: "December 2008 – June 2023",
      responsibilities: [
        "Managed teaching and allied responsibilities."
      ]
    },
    {
      title: "Associate Professor in Mechanical Engineering Department",
      company: "COEP Technological University, Pune",
      period: "June 2023 – Present",
      responsibilities: [
        "Oversees teaching and allied responsibilities, including roles as Nodal Center Coordinator for Maharashtra Drone Mission, Head of Center of Excellence in Robotics & AI, Chairman of Scholarship Committee, Member of Academic Council, Faculty Adviser for Robot Study Circle, UG/PG Course Coordinator for Robotics & AI, Advisor for The Robotics Society Student Chapter, and Lab In-Charge for Centralized Robotics & Automation Lab."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 text-gray-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Professional Experience</h2>
          <div className="h-1 w-16 bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-6 bottom-0 w-0.5 bg-blue-700 opacity-70"></div>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Circle on timeline */}
                <div className="absolute left-6 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white z-10 shadow-sm"></div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                      <p className="text-blue-700 font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-800 text-xs font-medium">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="mt-3 space-y-1 text-gray-700">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-700 before:rounded-full">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;