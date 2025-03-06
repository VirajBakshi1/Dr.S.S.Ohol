// src/components/ExperienceSection.jsx
import React from 'react';

const ExperienceSection = () => {
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-6 bottom-0 w-0.5 bg-blue-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Circle on timeline */}
                <div className="absolute left-6 top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-black z-10"></div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-300">{exp.title}</h3>
                  <p className="text-lg mt-1 text-white">{exp.company}</p>
                  
                  <div className="inline-block px-3 py-1 rounded-md bg-gray-800 text-sm mt-2 mb-3">
                    {exp.period}
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
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
