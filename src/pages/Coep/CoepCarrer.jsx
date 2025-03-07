import React, { useState } from 'react';

const CoepActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState('positions');

  const tabs = [
    { id: 'positions', label: 'Positions' },
    { id: 'lab', label: 'Lab Development' },
    { id: 'student', label: 'Student Activities' },
    { id: 'research', label: 'Research Projects' },
    { id: 'academic', label: 'Academic Contributions' },
    { id: 'patents', label: 'Patents' },
    { id: 'mous', label: 'Industry Partnerships' }
  ];

  const currentPositions = [
    "Associate Professor in Mechanical Engineering Department (Since June 2023 - Present)",
    "Nodal Center Coordinator for Maharashtra Drone Mission",
    "Head of Center of Excellence in Robotics & AI",
    "Chairman of Scholarship Committee",
    "Member of Academic Council",
    "Faculty Adviser for Robot Study Circle (RSC)",
    "UG Course Coordinator for BTech (Robotics & AI)",
    "PG Course Coordinator for MTech (Robotics & AI)",
    "Advisor for Student Chapter of The Robotics Society of India",
    "Lab In-charge of Centralized Robotics & Automation Lab (Since 2004, ~18 years)"
  ];

  const previousPositions = [
    "Associate Professor in Mechanical Engineering Department (December 2008 - June 2023)",
    "TEQIP I - Assistant to Institute's Procurement Coordinator",
    "TEQIP II & III - Institute's Procurement Coordinator",
    "Faculty Advisor for Mechanical Engineering Students Association (MESA) - 2 years",
    "Faculty Advisor for Institute Magazine - 2 years",
    "Stationery In-charge at Institute level - 4 years"
  ];

  const labDevelopment = {
    title: "Robotics & Automation Laboratory",
    description: "I have been instrumental in developing the Robotics & Automation Laboratory at COEP from 2004 to present. The lab currently includes:",
    items: [
      "Six trainer robots from Parallex, USA (smaller lab version)",
      "One toy robot (Robosepian)",
      "Six industrial robots from world-renowned brands",
      "Transducer trainer kit for sensors and actuators training",
      "Total investment: Approximately Rs. 75,00,000/-"
    ],
    recent: "Naming of MANGESH KALE Robotics & Automation Lab and WIPRO-PARI Advanced Technology Center at COEP through MoU with WIPRO-PARI India Ltd, Pune (February 2022) - Rs. 2,00,00,000/- (2 Crores)"
  };

  const studentActivities = {
    rsc: {
      title: "Robot Study Circle (RSC)",
      items: [
        "Founder and Faculty Coordinator (Since 2004)",
        "Established with 40+ active members yearly",
        "Regular workshops on microcontroller design and industrial robot programming",
        "Interdepartmental/interdisciplinary activities in robotics"
      ]
    },
    competitions: {
      title: "Competition Achievements",
      items: [
        "National Champions at ROBOCON 2017 - Faculty Adviser of Robot Study Circle",
        "6th Rank, Prof Nagasse Award, and Most Lovely Robot Award at International ROBOCON 2017 in Tokyo, Japan",
        "Secured sponsorships for competition participation:",
        "- VOLKSWAGEN India Pvt. Ltd. - Rs. 3,50,000/- (2017)",
        "- Siemens Industry Software India - Rs. 25,50,000/- (2017-2019)"
      ]
    },
    projects: {
      title: "Student Project Guidance",
      items: [
        "UG Projects: ~60 completed",
        "UG Mini-Projects: ~20 completed",
        "PG Projects (MTech): 51 completed across specializations",
        "- Design, Mechatronics, Automotive, AI & Robotics, Robotics & AI",
        "PhD Supervision: 3 completed, 4 in progress"
      ]
    }
  };

  const research = {
    completed: {
      title: "Completed Projects",
      items: [
        "Simulation & Development of Robotics Gripper - Contract for Acquisition of Research Services (CARS) project by R & DE (E), DRDO - Rs. 10 Lakhs (2013)",
        "Dynamic Simulation of unwinding metallic strips & optimization of timing for unwinding with stabilization - CARS project by ARDE, DRDO - Rs. 10 Lakhs (2016)",
        "Feasibility Study of Automatic Dry Function Test for Corner Shot Weapon System - CARS project by ARDE, DRDO - Rs. 10 Lakhs (2017)"
      ]
    },
    recent: {
      title: "Recent Grant",
      items: [
        "Feasibility Analysis and Experimental Study of Turret Gun Control System - Grant-in-Aid scheme by Army Research Board (ARMREB), DRDO - Rs. 99.60 Lakhs (February 2024)"
      ]
    },
    equipment: {
      title: "Equipment Procurement Funds",
      items: [
        "TEQIP-I: Wheeled, Biped & Hex-crawler Robot (PARALLEX, USA) - Rs. 19,22,000/-",
        "TEQIP-II: ABB 1520ID Robot + Training Cell - Rs. 25,50,337/-",
        "TEQIP-III:",
        "- NAO-6 Humanoid Robot - Rs. 8,18,181/-",
        "- 6 DoF Stewart platform - Rs. 4,86,160/-",
        "- Software Based Calibration - Rs. 4,68,000/-",
        "- DYNALAB Industrial Control Training System - Rs. 18,88,000/-",
        "Institute level funding: Collaborative Robot - Rs. 25,00,000/-",
        "Total funds received for equipment: Rs. 1,06,32,678/-"
      ]
    }
  };

  const academic = {
    curriculum: {
      title: "Curriculum Development",
      items: [
        "Developed syllabus for \"Robotics and Automation\" for BTech (Mech)",
        "Developed syllabus for \"Mechatronics\" for TYBTech (Mech) as an elective",
        "Designed syllabus for \"Robotics\" as Institute-level elective",
        "Created syllabus for \"Robotics\" as Department-level elective in Mechanical Engineering",
        "Committee member for AICTE Model curriculum for Minor Degree in Robotics (2020)",
        "Committee member for AICTE Model curriculum for four-year UG program in \"Robotics and Artificial Intelligence\""
      ]
    },
    courses: {
      title: "Courses Taught at COEP",
      ug: [
        "Robotics (Institute Level Elective) - 5 years",
        "Robotics & Automation (BTech Mech Elective) - 8 years",
        "Robotics & Mechatronics (BTech Mech Elective) - 5 years",
        "Basics of Robotics & AI (BTech Robotics & AI) - 1 year"
      ],
      pg: [
        "Robotics (MTech Design Elective) - 9 years",
        "Sensors & Actuators in Robotics (MTech RAI) - 3 years",
        "Autonomous Robots & Telechirs (MTech RAI) - 2 years",
        "Institute level open elective - Robotics - 7 years"
      ]
    },
    events: {
      title: "Events and Workshops Organized",
      items: [
        "National ROBOTEX Competition - Regional Competition of ROBOTEX International organized with ROBOTEX India (July 2019)",
        "Two-day Webinar on Robotics with Simscape Multibody by MathWorks experts (March 2020)",
        "AICTE-sponsored short-term training program on \"Robotics in Manufacturing\" (December 2017)",
        "One-day seminar on \"Advances in Industrial Robotics\" with Collaborative Robot demonstration (December 2018)",
        "Workshop on \"Making of Line follower Robot\" for 12th Sci Students (August 2011)",
        "Workshop on \"Making of Line Follower Robot using Microcontroller\" for FYBTech students (October 2011)"
      ]
    }
  };

  const patents = {
    awarded: {
      title: "Awarded Patents",
      items: [
        "\"AN ARRANGEMENT TO MAINTAIN STABILITY OF A BODY MOUNTED ON A ROCKER-BOGIE MECHANISM\" - Indian Patent No. 362205 (2021)",
        "\"NON-CONVENTIONAL CALIBRATION SYSTEM FOR INDUSTRIAL ROBOTS\" - Indian Patent No. 511178 (2024)"
      ]
    },
    filed: {
      title: "Filed Patents",
      items: [
        "\"AN AUTONOMOUS IN-PIPE INSPECTION ROBOTIC SYSTEM\" - Application No. 202121031359 (2021)",
        "\"AN AUTOMATIC BONE ALIGNMENT SYSTEM\" - Application No. 202121047545 (2021)"
      ]
    }
  };

  const mous = [
    "VOLKSWAGEN India Pvt. Ltd., Pune (August 2017) - Rs. 3,50,000/-",
    "Siemens Industry Software (India) Pvt. Ltd., Pune (2017-2020) - Rs. 25,50,000/-",
    "Robotex, India (November 2019) - For organizing regional ROBOTEX competition",
    "iRobotics/iTech Robotics & Automation Pvt. Ltd. (November 2020) - Teaching, Training, Research, Internship",
    "WIPRO-PARI India Ltd, Pune (February 2022) - Rs. 2,00,00,000/- (2 Crores)",
    "InfinityXTech System Pvt Ltd, Pune (January 2023) - FTC challenge Competition",
    "EPLAN Software & Services India Pvt Ltd (January 2024) - 35 user licenses + trainer license"
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-semibold mb-2 text-center text-gray-900">COEP Technological University Activities</h1>
          <div className="h-1 w-16 bg-blue-700 mx-auto mb-4"></div>
          <p className="text-base text-center max-w-2xl mx-auto text-gray-600">
            Academic contributions, leadership roles, and research activities at COEP Technological University
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-20 shadow-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 mx-1 rounded transition-all whitespace-nowrap text-sm font-medium ${
                  activeTab === tab.id 
                    ? 'bg-blue-700 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Positions Tab */}
        {activeTab === 'positions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Current Positions</h2>
                <ul className="space-y-3">
                  {currentPositions.map((position, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Previous Positions</h2>
                <ul className="space-y-3">
                  {previousPositions.map((position, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Lab Development Tab */}
        {activeTab === 'lab' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{labDevelopment.title}</h2>
              <p className="mb-4 text-gray-600">{labDevelopment.description}</p>
              
              <ul className="space-y-3 mb-6">
                {labDevelopment.items.map((item, index) => (
                  <li 
                    key={index} 
                    className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-medium text-gray-800 mb-2">Recent Lab Upgrade</h3>
                <p className="text-gray-700">{labDevelopment.recent}</p>
              </div>
            </div>
          </div>
        )}

        {/* Student Activities Tab */}
        {activeTab === 'student' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{studentActivities.rsc.title}</h2>
                <ul className="space-y-3">
                  {studentActivities.rsc.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{studentActivities.competitions.title}</h2>
                <ul className="space-y-3">
                  {studentActivities.competitions.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{studentActivities.projects.title}</h2>
                <ul className="space-y-3">
                  {studentActivities.projects.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Research Projects Tab */}
        {activeTab === 'research' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{research.completed.title}</h2>
                <ul className="space-y-3">
                  {research.completed.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{research.recent.title}</h2>
                <ul className="space-y-3">
                  {research.recent.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{research.equipment.title}</h2>
                <ul className="space-y-3">
                  {research.equipment.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Academic Contributions Tab */}
        {activeTab === 'academic' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{academic.curriculum.title}</h2>
                <ul className="space-y-3">
                  {academic.curriculum.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{academic.courses.title}</h2>
                
                <h3 className="text-lg font-medium mb-2 text-gray-700">Undergraduate Courses</h3>
                <ul className="space-y-3 mb-6">
                  {academic.courses.ug.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-medium mb-2 text-gray-700">Postgraduate Courses</h3>
                <ul className="space-y-3">
                  {academic.courses.pg.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{academic.events.title}</h2>
                <ul className="space-y-3">
                  {academic.events.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Patents Tab */}
        {activeTab === 'patents' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{patents.awarded.title}</h2>
                <ul className="space-y-3">
                  {patents.awarded.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{patents.filed.title}</h2>
                <ul className="space-y-3">
                  {patents.filed.items.map((item, index) => (
                    <li 
                      key={index} 
                      className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Industry Partnerships Tab */}
        {activeTab === 'mous' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-700">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">MoUs with Industries Established at COEP</h2>
              <ul className="space-y-3">
                {mous.map((mou, index) => (
                  <li 
                    key={index} 
                    className="pl-6 relative text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-700 before:rounded-full"
                  >
                    {mou}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CoepActivitiesPage;