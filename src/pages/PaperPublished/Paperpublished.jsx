import React, { useState } from 'react';

const PapersPublished = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const categories = ['all', 'journals', 'conferences', 'books', 'book chapters', 'patents'];
  


  const publications = [
    // International Journals (26)
    {
      id: 1,
      title: "Performance analysis of biomimetic grasping by multifingered robotic gripper (MRG) for identification and sorting of object",
      authors: "Dr. S. S. Ohol, Kajale, S.R.",
      journal: "Journal of Computer Science",
      year: 2010,
      volume: "Special Issue",
      category: "journals",
      publisher: "Science Publications, NewYork, USA"
    },
    {
      id: 2,
      title: "Optimization of Fourfingered Hand using FEA Techniques",
      authors: "Dr. S. S. Ohol, Kajale, S.R., Karade, S.",
      journal: "The International Journal of Technology, Knowledge and Society",
      year: 2010,
      volume: "6",
      issue: "6",
      pages: "187-202",
      category: "journals",
      publisher: "Common Ground Publishing, University of Illinois, USA"
    },
    {
      id: 3,
      title: "Design and Development of Modular Humanoid Arm based on RC servo motor",
      authors: "Dr. S. S. Ohol, Kapse, S.S.",
      journal: "International Journal of Advanced Research in Engineering & Technology (IJARET)",
      year: 2013,
      volume: "4",
      issue: "7",
      pages: "156-160",
      category: "journals"
    },
    {
      id: 4,
      title: "Kinematic analysis to generate trajectory for six degree of freedom Humanoid Arm",
      authors: "Dr. S. S. Ohol, Kapse, S.S.",
      journal: "International Journal of Innovative Technology Research (IJITR)",
      year: 2014,
      volume: "2",
      issue: "1",
      pages: "722-725",
      category: "journals"
    },
    {
      id: 5,
      title: "Development of Autonomous Hydro Quad Rotor Vehicle",
      authors: "Dr. S. S. Ohol, Bhosale, S., Palve, L., Joshi, H.",
      journal: "International Journal of Mechanical and Production Engineering (IJMPE)",
      year: 2014,
      volume: "2",
      issue: "2",
      pages: "17-23",
      category: "journals",
      doi: "IJMPE-IRAJ-DOI-504",
      publisher: "Institute of Research and Journals (IRAJ)"
    },
    {
      id: 6,
      title: "Proposed methodology to allow bottom pour in a less than 400 kg ladle with steel thermal masses in Investment Shell Casting Process",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Anjikar, T.R.",
      journal: "International Journal of Scientific & Engineering Research (IJSER)",
      year: 2015,
      volume: "6",
      issue: "12",
      category: "journals",
      issn: "2229-5518"
    },
    {
      id: 7,
      title: "Stopper Rod Mechanism in a smaller ladle for bottom pour with low thermal masses in Investment Casting process",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Anjikar, T.R.",
      journal: "International Journal of Advances in Engineering Science and Technology (IJAEST)",
      year: 2015,
      category: "journals",
      issn: "2319-1120"
    },
    {
      id: 8,
      title: "Need of Automation in Investment casting Industry due to major defects caused by manual operations (Case Study)",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Anjikar, T.R.",
      journal: "International Journal for Scientific Research & Development (IJSRD)",
      year: 2015,
      volume: "3",
      issue: "9",
      category: "journals",
      issn: "2321-0613"
    },
    {
      id: 9,
      title: "Development of In-pipe Inspection Robot",
      authors: "Gargade, A.A., Dr. S. S. Ohol",
      journal: "IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE)",
      year: 2016,
      volume: "13",
      issue: "4 Ver. VII",
      pages: "64-72",
      category: "journals",
      issn: "2278-1684"
    },
    {
      id: 10,
      title: "Methodology for optimization of pouring variables using bottom pour for low masses of SS304 (<300 kg) in investment casting process (case study)",
      authors: "Dr. S. S. Ohol, Vanikar, N., Goldar, S.",
      journal: "International Journal of Cast Metals Research (IJCMR)",
      year: 2018,
      volume: "31",
      issue: "4",
      pages: "249-259",
      category: "journals",
      publisher: "UK"
    },
    {
      id: 11,
      title: "Human Assistive Lower Limb Exoskeleton",
      authors: "Dr. S. S. Ohol, Patwardhan, N.M., Pirjade, Y.M., Kotkar, A.U., Londhe, D.R., Shelke, T.P.",
      journal: "Asian Journal of Convergence in Technology (AJCT)",
      year: 2019,
      volume: "5",
      issue: "2",
      category: "journals",
      issn: "2350-1146"
    },
    {
      id: 12,
      title: "Inverse kinematic analysis of a fixture for fine alignment of central axis of top and bottom frame using simulation",
      authors: "Dr. S. S. Ohol, Aglawe, P.S.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012014",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012014",
      publisher: "IOP Publishing"
    },
    {
      id: 13,
      title: "Autonomous Snake Robot with Serpentine type Navigation",
      authors: "Dr. S. S. Ohol, Bangar, M., Ghodake, S., Nirgude, H.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012027",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012027",
      publisher: "IOP Publishing"
    },
    {
      id: 14,
      title: "Industrial robot performance analysis using low cost set-up",
      authors: "Dr. S. S. Ohol, Chachane, K.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012010",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012010",
      publisher: "IOP Publishing"
    },
    {
      id: 15,
      title: "Comparative Need Analysis of Industrial Robot Calibration Methodologies",
      authors: "Dr. S. S. Ohol, Chiwande, S.N.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012009",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012009",
      publisher: "IOP Publishing"
    },
    {
      id: 16,
      title: "Design and Development of In-pipe Inspection Robot for Various Pipe Sizes",
      authors: "Dr. S. S. Ohol, Aglawe, P.S.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012001",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012001",
      publisher: "IOP Publishing"
    },
    {
      id: 17,
      title: "Development of lower body exoskeleton, mathematical modeling and video analysis of its prototype for obtaining customized joint actuation",
      authors: "Dr. S. S. Ohol, Kalantri, K.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012013",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012013",
      publisher: "IOP Publishing"
    },
    {
      id: 18,
      title: "Semi-Autonomous Parking system for Automatic Transmission vehicles",
      authors: "Dr. S. S. Ohol, Kaware, S.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012051",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012051",
      publisher: "IOP Publishing"
    },
    {
      id: 19,
      title: "Design, development and analysis of human exoskeleton for enhancing human capabilities",
      authors: "Dr. S. S. Ohol, Vibhute, R., Yeole, S., Waghmare, S., Tonde, T.",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2021,
      volume: "1012",
      pages: "012015",
      category: "journals",
      doi: "10.1088/1757-899X/1012/1/012015",
      publisher: "IOP Publishing"
    },
    {
      id: 20,
      title: "Modelling and simulation of adaptive cruise control and overtake assist system",
      authors: "Dr. S. S. Ohol, Anand, S.",
      journal: "Materials Today: Proceedings",
      year: 2022,
      category: "journals",
      doi: "10.1016/j.matpr.2022.09.330"
    },
    {
      id: 21,
      title: "Investigation of PolyMethyl Methacrylate for Speedometer Application",
      authors: "Dr. S. S. Ohol, Anand, S., Basu, S.",
      journal: "International Research Journal of Engineering and Technology (IRJET)",
      year: 2022,
      category: "journals"
    },
    {
      id: 22,
      title: "Shape Optimization of an Asymmetric Airfoil for Low Wind Speed Region having Adjoint Based Optimization Technique",
      authors: "Dr. S. S. Ohol, Shinde, P., Tripathi, V.K.",
      journal: "Journal of Applied Fluid Mechanics",
      year: 2023,
      volume: "16",
      issue: "2",
      pages: "299-310",
      category: "journals",
      doi: "10.47176/jafm.16.02.1426"
    },
    {
      id: 23,
      title: "Design and Simulation of a Service Robot for Covid-19 Isolation Wards with Autonomous Navigation",
      authors: "Dr. S. S. Ohol, Duseja, L., Deshmukh, Y., Karmuse, S.",
      journal: "International Journal of Engineering Sciences",
      year: 2021,
      volume: "14",
      issue: "3",
      pages: "90-97",
      category: "journals"
    },
    {
      id: 24,
      title: "Feasibility Analysis and Experimental Study of Dynamic Object Tracking Control System",
      authors: "Dr. S. S. Ohol, Tawade, C., Tekam, K., Bhagat, S.",
      journal: "Gradiva Review Journal",
      year: 2023,
      volume: "9",
      issue: "5",
      pages: "1502-1508",
      category: "journals"
    },
    {
      id: 25,
      title: "Design and Development of Swerve Drive",
      authors: "Dr. S. S. Ohol, Tawade, C., Pabalkar, R., Bhagat, S.",
      journal: "Gradiva Review Journal",
      year: 2023,
      volume: "9",
      issue: "6",
      pages: "258-262",
      category: "journals"
    },
  
    // National Journals (3)
    {
      id: 26,
      title: "Comparative Quality & Performance Analysis of Machine Tap",
      authors: "Dr. S. S. Ohol, Ahuja, B.B.",
      journal: "Journal of Institution of Engineers (India), Production Engineering Division",
      year: 2000,
      volume: "81",
      pages: "23-28",
      category: "journals",
      publisher: "Institution of Engineers (India)"
    },
    {
      id: 27,
      title: "Automated pick and place system using Dexterous Multifinger Robotic Gripper (MRG)",
      authors: "Dr. S. S. Ohol, Patil, S.K., Kajale, S.R., Patil, C.Y.",
      journal: "Journal of Instrumentation Society of India",
      year: 2010,
      volume: "40",
      issue: "2",
      pages: "87-91",
      category: "journals",
      publisher: "Bangalore"
    },
    {
      id: 28,
      title: "Kinematic Synthesis and Experimental Validation of Legged Wheel Hybrid Robot (LWR)",
      authors: "Dr. S. S. Ohol, Bagde, D.A.",
      journal: "Journal of Basic and Applied Engineering Research",
      year: 2014,
      volume: "1",
      issue: "4",
      pages: "33-37",
      category: "journals"
    },
  
    // International Conferences (54)
    {
      id: 29,
      title: "Sensitivity Analysis of Soft Piezoelectric Electroactive Material for Developing a Tactile Sensor",
      authors: "Dr. S. S. Ohol, Kajale, S.R., Deo, S.M., Mahajan, S.K., Ahuja, B.B.",
      journal: "International Conference on Advances in Machine Design and Industrial Automation (ICAMDIA 07)",
      year: 2007,
      category: "conferences",
      publisher: "College of Engineering, Pune"
    },
    {
      id: 30,
      title: "Simulation of Multifinger robotic gripper for dynamic analysis of Dexterous grasping",
      authors: "Dr. S. S. Ohol, Kajale, S.R.",
      journal: "World Congress on Engineering and Computer Sciences (WCECS 08)",
      year: 2008,
      category: "conferences",
      publisher: "International Association of Engineers, University of California, Berkley, San Francisco, USA"
    },
    {
      id: 31,
      title: "Effective Dexterous Grasping with Biomimetic Approach for Design of Multifingered Robotic Gripper (MRG) and an analysis of system",
      authors: "Dr. S. S. Ohol, Kajale, S.R.",
      journal: "International Conference ICMEE 2009",
      year: 2009,
      category: "conferences",
      publisher: "IACSIT"
    },
    {
      id: 32,
      title: "Automated pick and place system using Dexterous Multifinger Robotic Gripper (MRG)",
      authors: "Dr. S. S. Ohol, Patil, S.K., Kajale, S.R., Patil, C.Y.",
      journal: "International Conference on Instrumentation (ICI 09)",
      year: 2010,
      category: "conferences",
      publisher: "Cummins College of Engg. for Women, Pune"
    },
    {
      id: 33,
      title: "Performance analysis of biomimetic grasping by multifingered robotic gripper (MRG) for identification and sorting of object",
      authors: "Dr. S. S. Ohol, Kajale, S.R.",
      journal: "International Symposium on Robotics and Intelligent Sensors (IRIS 2010)",
      year: 2010,
      category: "conferences",
      publisher: "Nagoya University, Japan"
    },
    {
      id: 34,
      title: "Biomimetic Approach for Design of Multifingered Robotic Gripper (MRG) & Its Analysis for Effective Dexterous Grasping",
      authors: "Dr. S. S. Ohol, Kajale, S.R.",
      journal: "International Conference on Machine Learning and Computing (IPCSIT-2011)",
      year: 2011,
      volume: "3",
      pages: "213-221",
      category: "conferences",
      publisher: "IACSIT Press, Singapore"
    },
    {
      id: 35,
      title: "Stable Grasping by Multifinger Robotic Gripper",
      authors: "Dr. S. S. Ohol, Kajale, S.R., Ahuja, B.B.",
      journal: "International Conference on Precision, Meso, and Nano Engineering (COPEN-7 2011)",
      year: 2011,
      category: "conferences",
      publisher: "College of Engineering, Pune"
    },
    {
      id: 36,
      title: "Development of Autonomous Hydro Quad Rotor Vehicle",
      authors: "Dr. S. S. Ohol, Bhosale, S., Palve, L., Joshi, H.",
      journal: "Annual International Conference of Institute of Research",
      year: 2014,
      category: "conferences",
      publisher: "IRAJ, Bhubaneswar, India",
      doi: "IJMPE-IRAJ-DOI-504"
    },
    {
      id: 37,
      title: "Design Modelling and experimental validation of multifingered Robotic Gripper",
      authors: "Dr. S. S. Ohol, Pawar, A., Patil, T., Pawar, A., Jadhav, S.",
      journal: "International Conference on Mechanical and Production Engineering",
      year: 2014,
      category: "conferences",
      publisher: "IRAJ, Bhubaneswar, India"
    },
    {
      id: 38,
      title: "Performance Improvisation of SCORBOT-ER 4u Robot Arm by Simulation",
      authors: "Dr. S. S. Ohol, Patil, P.",
      journal: "International Conference on Robotics, Mechanics and Mechatronics (ICRMM 2014)",
      year: 2014,
      category: "conferences",
      publisher: "Bali, Indonesia",
      volume: "2",
      issue: "1"
    },
    {
      id: 39,
      title: "Design and development of dynamically stable bipedal walking system",
      authors: "Dr. S. S. Ohol, Masurkar, K., Kamble, H., Joshi, V.",
      journal: "IEEE International Conference on Advances in Engineering & Technology Research (ICAETR 2014)",
      year: 2014,
      category: "conferences",
      issn: "2347-9337"
    },
    {
      id: 40,
      title: "Kinematic Synthesis and Experimental Validation of Legged Wheel Hybrid Robot (LWR)",
      authors: "Dr. S. S. Ohol, Bagde, D.A.",
      journal: "5th International Conference on Innovative Trends in Mechanical, Material, Manufacturing, Automobile, Aeronautical Engineering and Applied Physics (ITMAEAP 2014)",
      year: 2014,
      category: "conferences",
      publisher: "Krishi Sanskriti, Jawaharlal Nehru University, New Delhi"
    },
    {
      id: 41,
      title: "Improvisations in Investment Casting Process using Economical Automation",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Anjikar, R.",
      journal: "International Conference on Emerging Trends in Engineering and Technology (ICETET 2015)",
      year: 2015,
      pages: "39-42",
      category: "conferences",
      publisher: "Pune"
    },
    {
      id: 42,
      title: "Stopper Rod Mechanism in a smaller ladle for bottom pour with low thermal masses in Investment Casting process",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Anjikar, R.",
      journal: "International Conference on Advances in Engineering Science and Management (ICAESM 2015)",
      year: 2015,
      pages: "179-183",
      category: "conferences",
      publisher: "Delhi"
    },
    {
      id: 43,
      title: "Investment Casting Bottom Pour Ladle Development Trials",
      authors: "Dr. S. S. Ohol, Vanikar, N.P., Voigt, R.C., Anjikar, T.R.",
      journal: "International Conference of Investment Casting Institute (ICIAI 2016)",
      year: 2016,
      category: "conferences",
      publisher: "Columbus, Ohio, USA"
    },
    {
      id: 44,
      title: "Development of Actively Steerable In-pipe Inspection Robot for Various Sizes",
      authors: "Dr. S. S. Ohol, Gargade, A.",
      journal: "International Conference on Advances in Robotics (AIR 2017)",
      year: 2017,
      category: "conferences",
      publisher: "IIT Delhi, India"
    },
    {
      id: 45,
      title: "Pneumatic Artificial Muscle Powered Exoskeleton",
      authors: "Dr. S. S. Ohol, Darekar, B., Naik, P., Unde, J.",
      journal: "International Conference on Advances in Robotics (AIR 2019)",
      year: 2019,
      category: "conferences",
      publisher: "IIT Madras, India"
    },
    {
      id: 46,
      title: "Design and Fabrication of a Low-cost Human Body Lower Limb Exoskeleton",
      authors: "Dr. S. S. Ohol, Pirjade, Y.M., Londhe, D.R., Kotkar, A.U., Shelke, T.P.",
      journal: "International Conference on Mechatronics and Robotics Engineering (ICMRE 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Barcelona, Spain"
    },
    {
      id: 47,
      title: "Deformity correction methods for fracture bone alignment an overview",
      authors: "Dr. S. S. Ohol, Aglawe, P.",
      journal: "International Conference on Mechanical Engg for Sustainable Development (ICMESD-2020)",
      year: 2020,
      category: "conferences",
      publisher: "AISSMS COE, Pune"
    },
    {
      id: 48,
      title: "Inverse Kinematic Analysis Of A Fixture For Automatic Bone Alignment Using Sim Mechanics Of Matlab",
      authors: "Dr. S. S. Ohol, Aglawe, P.S.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 49,
      title: "Comparative Need Analysis Of Industrial Robot Calibration Methodologies",
      authors: "Dr. S. S. Ohol, Chiwande, S.N.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 50,
      title: "Design And Development Of In-Pipe Inspection Robot For Various Pipe Sizes",
      authors: "Dr. S. S. Ohol, Gargade, A.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 51,
      title: "Semi-Autonomous Parking System For Automatic Transmission Vehicles",
      authors: "Dr. S. S. Ohol, Kaware, S.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 52,
      title: "Industrial Robot Performance Analysis Using Low Cost Set-Up",
      authors: "Dr. S. S. Ohol, Chachane, K.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 53,
      title: "Design And Validation Of A Matlab Simulation To Obtain Customized gait Cycle For Exoskeleton",
      authors: "Dr. S. S. Ohol, Kalantri, K.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 54,
      title: "Design, Development And Analysis of Human Exoskeleton For Enhancing Human Capabilities",
      authors: "Dr. S. S. Ohol, Vibhute, R., Yeole, S., Waghmare, S., Tonde, T.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 55,
      title: "Autonomous Snake Robot With Serpentine Type Navigation",
      authors: "Dr. S. S. Ohol, Bangar, M., Ghodake, S., Nirgude, H.",
      journal: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
      year: 2020,
      category: "conferences",
      publisher: "Vellore Institute of Technology, Chennai"
    },
    {
      id: 56,
      title: "Production Design Analysis for Airfoil Shape Optimization",
      authors: "Dr. S. S. Ohol, Shinde, P., Tripathi, V.K.",
      journal: "International Conference on Recent Advances in Renewable Energy Sources (RARES 2021)",
      year: 2021,
      category: "conferences"
    },
    {
      id: 57,
      title: "The Performance Parameter Analysis and Calibration Methodology for the Industrial Robot",
      authors: "Dr. S. S. Ohol, Shinde, R.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 58,
      title: "Development of Low-cost Adaptive Cruise Control System for Automatic Transmission vehicle for Low-speed Operations",
      authors: "Dr. S. S. Ohol, Sonawane, A.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 59,
      title: "Two Legs Balancing with Appropriate Gait Cycle and Its Simulation for Combined Motion Analysis",
      authors: "Dr. S. S. Ohol, Bharad, S.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 60,
      title: "In-pipe Inspection Robot for Varying Pipe Sizes",
      authors: "Dr. S. S. Ohol, Gargade, A.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 61,
      title: "Impact on industrial robot calibration due to techno-commercial aspects in conventional industrial robot calibration methods",
      authors: "Dr. S. S. Ohol, Chiwande, S.N.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 62,
      title: "Autonomous RFID Controlled Assisting Robot for Isolation Wards",
      authors: "Dr. S. S. Ohol, Duseja, L., Deshmukh, Y., Kamuse, S.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 63,
      title: "Design & Development of a Multi-finger Prosthetic Robotic hand",
      authors: "Dr. S. S. Ohol, Arasan, A., Chaudhari, S., Wanere, P., Pabalkar, R., Pathrabe, C.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 64,
      title: "ROS based Compact Mobile Robot for Area Mapping, Autonomous Navigation and Path Planning",
      authors: "Dr. S. S. Ohol, Gaikwad, A., Kulkarni, M., Agnihotri, A., Purohit, S.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 65,
      title: "Design, development, analytical study and performance analysis of a prototype of ornithopter",
      authors: "Dr. S. S. Ohol, Chakradeo, V., Jadhav, R., Deshmukh, K., Mitkari, M.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 66,
      title: "Finite Element Analysis of a Novel Robotic Gripper: Grabo",
      authors: "Dr. S. S. Ohol, Bhelsaikarl, A.H., Chothe, P., Atpadkar, V., Roy, D.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 67,
      title: "Qualitative flexural modulus analysis for establishing appropriateness of pig femur bone for biomedical experimentation about automatic alignment of fractured femur bone of human using controlled angular/linear incremental motion",
      authors: "Dr. S. S. Ohol, Aglawe, P.S.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 68,
      title: "A low latency self-balancing algorithm for real-time quadrupedal robots, suitable for navigating unstable, rapidly deforming environments",
      authors: "Dr. S. S. Ohol, Singal, M.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 69,
      title: "Study of aerodynamic behavior of a symmetrical airfoil in a low wind speed region",
      authors: "Dr. S. S. Ohol, Shinde, P.",
      journal: "6th International Conference on Intelligent Technologies (ICIT - 2021)",
      year: 2021,
      category: "conferences",
      publisher: "Singapore"
    },
    {
      id: 70,
      title: "Modelling and Simulation of Adaptive Cruise Control and Overtake Assist System",
      authors: "Dr. S. S. Ohol, Anand, S.",
      journal: "International Conference & Exposition on Advances in Mechanical Engineering (ICAME 2022)",
      year: 2022,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 71,
      title: "Central Axis Alignment of Parallel Robot using Structural Analysis and Motion Analysis for 6 DOF Set-up",
      authors: "Dr. S. S. Ohol, Pashawar, S.",
      journal: "3rd International Conference on Sustainable Energy Solutions for a Better Tomorrow (SESBT 2022)",
      year: 2022,
      category: "conferences",
      publisher: "VIT Chennai, India"
    },
    {
      id: 72,
      title: "Design of Smart Vertical Lift for Disabled Person",
      authors: "Dr. S. S. Ohol, Bhalerao, M.",
      journal: "2nd Indian International Conference on Industrial Engineering and Operations Management (IEOM)",
      year: 2022,
      category: "conferences",
      publisher: "Warangal, Telangana, India"
    },
    {
      id: 73,
      title: "Ground Traversability Estimation for Quadruped Robot with Modified DWA Algorithm",
      authors: "Dr. S. S. Ohol, Dhande, D.",
      journal: "Second International Conference on Signal and Information Processing-2022",
      year: 2022,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 74,
      title: "AI based route planning and Optimization for effective collection of A-frames from customer",
      authors: "Dr. S. S. Ohol, Hussain, S., More, V.",
      journal: "Third International Conference on Intelligent Robotics, Mechatronics, and Automation System (IRMAS 2023)",
      year: 2023,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 75,
      title: "Thermal Analysis and Development of single cell using PCM at different 'C' rates",
      authors: "Dr. S. S. Ohol, Balkhande, A.",
      journal: "Third International Conference on Intelligent Robotics, Mechatronics, and Automation System (IRMAS 2023)",
      year: 2023,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 76,
      title: "The Experimental Study and Viability Analysis of Vision based Flying Object Tracking System",
      authors: "Dr. S. S. Ohol, Kulkarni, A.",
      journal: "Third International Conference on Intelligent Robotics, Mechatronics, and Automation System (IRMAS 2023)",
      year: 2023,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 77,
      title: "Modeling, Kinematic Analysis, Gait and Trajectory Generation for Quadruped Robot",
      authors: "Dr. S. S. Ohol, Dighe, A.",
      journal: "International Conference on Mechanical Engineering: Research Evolution and Challenges",
      year: 2023,
      category: "conferences",
      publisher: "College of Engineering Pune"
    },
    {
      id: 78,
      title: "Modelling, Kinematic Analysis, Gait & Trajectory Generation for Quadraped Robot",
      authors: "Dr. S. S. Ohol, Dighe, A.",
      journal: "1st International Conference on Mechanical Engineering: Researches and Evolutionary Challenges",
      year: 2023,
      category: "conferences",
      publisher: "NIT Warangal"
    },
    {
      id: 79,
      title: "Parallel Robotic System for Automated Fracture Reduction and Alignment in Femoral Shaft Fracture Treatment",
      authors: "Dr. S. S. Ohol, Agrawal, S., Dahe, M., Gurram, M., Aglawe, P.",
      journal: "9th International Conference on Intelligent Technologies (ICIT-2024)",
      year: 2024,
      category: "conferences",
      publisher: "Asian Society for Research in Engineering Sciences (ASRES), Manila"
    },
    {
      id: 80,
      title: "Turret Mechanism Performance Confirmation Using FEA & Simulation for Efficient Dynamic Tracking",
      authors: "Dr. S. S. Ohol, Kumavat, P.",
      journal: "9th International Conference on Intelligent Technologies (ICIT-2024)",
      year: 2024,
      category: "conferences",
      publisher: "Asian Society for Research in Engineering Sciences (ASRES), Manila"
    },
    {
      id: 81,
      title: "Forward Kinematics for the state estimation of quadraped robot",
      authors: "Dr. S. S. Ohol, Mahajan, S.",
      journal: "9th International Conference on Intelligent Technologies (ICIT-2024)",
      year: 2024,
      category: "conferences",
      publisher: "Asian Society for Research in Engineering Sciences (ASRES), Manila"
    },
    {
      id: 82,
      title: "Dynamic Modeling of 14 DOF Humanoid Dual Arm",
      authors: "Dr. S. S. Ohol, Torane, N.",
      journal: "9th International Conference on Intelligent Technologies (ICIT-2024)",
      year: 2024,
      category: "conferences",
      publisher: "Asian Society for Research in Engineering Sciences (ASRES), Manila"
    },
    {
      id: 83,
      title: "Improvisation in Human Robot Interaction for real time operation using Speech for Collaborative Robot",
      authors: "Dr. S. S. Ohol, Jawale, P.",
      journal: "9th International Conference on Intelligent Technologies (ICIT-2024)",
      year: 2024,
      category: "conferences",
      publisher: "Asian Society for Research in Engineering Sciences (ASRES), Manila"
    },
  
    // National Conferences (5)
    {
      id: 84,
      title: "Improvements in the Grasping Modality of Gripper",
      authors: "Dr. S. S. Ohol, Ahuja, B.B., Kajale, S.R.",
      journal: "National Conference on Advances in Manufacturing Technology in the Era of Globalization (AMTEG 05)",
      year: 2005,
      category: "conferences",
      publisher: "P.I.E.T., Pune"
    },
    {
      id: 85,
      title: "Major defects in Investment Casting Industry Due to Manual Operations",
      authors: "Dr. S. S. Ohol, Vanikar, N., Anjikar, R.",
      journal: "National Conference on Innovations in Mechanical Engineering (ICME 2015)",
      year: 2015,
      category: "conferences",
      publisher: "MIT Academy of Engineering, Alandi Pune"
    },
    {
      id: 86,
      title: "Functional and Life Assessment of Mechanism Employed in Corner Shot Weapon System by Automatic Dry Functioning Test",
      authors: "Dr. S. S. Ohol",
      journal: "2nd National Conference on Advances in Armament Technology (NCAAT 2018)",
      year: 2018,
      category: "conferences",
      publisher: "ARDE, DRDO Lab, Pune"
    },
    {
      id: 87,
      title: "Development of Robotic Arm Manipulator mounted on Self Balancing Two Wheeled Mobile Robot",
      authors: "Dr. S. S. Ohol, Junare, P., Mahajan, S., Taukari, P., Nallawar, A.",
      journal: "ARMS 2021, 12th National Conference & Exhibition on Aerospace & Defence Related Mechanisms",
      year: 2021,
      category: "conferences",
      publisher: "INSARM, ARDE, Pune"
    },
    {
      id: 88,
      title: "Design and Performance Analysis of Robotic Jellyfish for Underwater Surveillance Manufactured as a Soft Robot",
      authors: "Dr. S. S. Ohol, Pachghare, R., Deshmukh, M.",
      journal: "ARMS 2021, 12th National Conference & Exhibition on Aerospace & Defence Related Mechanisms",
      year: 2021,
      category: "conferences",
      publisher: "INSARM, ARDE, Pune"
    },
  
    // Books (2)
    {
      id: 89,
      title: "Engineering Graphics",
      authors: "Dr. S. S. Ohol, Shah, M.B., Rana, B.C.",
      journal: "Book",
      year: 1997,
      category: "books",
      publisher: "Technova Publications, Pune",
      edition: "1st"
    },
    {
      id: 90,
      title: "Engineering Materials and Components",
      authors: "Dr. S. S. Ohol, Patgawkar, S.G., Kaduskar, R.G.",
      journal: "Book",
      year: 1997,
      category: "books",
      publisher: "Technova Publications, Pune",
      edition: "1st"
    },
  
    // Book Chapters (1)
    {
      id: 91,
      title: "Research Methodology for Augmenting a Gait Cycle of Lower-Body Exoskeleton, by Using a Data of Mathematical Modeling and Motion Study of a Specific User While Obtaining a Customized Gait for Joint Actuation of Exoskeleton",
      authors: "Dr. S. S. Ohol, Kalantri, K.D., Pirjade, Y.M., Kotkar, A.U., Patwardhan, N.M., Londhe, D.R., Shelke, T.P.",
      journal: "Handbook of Smart Materials, Technologies, and Devices",
      year: 2022,
      category: "book chapters",
      publisher: "Springer",
      chapter: "165-1"
    },
  
    // Patents (4)
    {
      id: 92,
      title: "AN ARRANGEMENT TO MAINTAIN STABILITY OF A BODY MOUNTED ON A ROCKER-BOGIE MECHANISM",
      authors: "Dr. S. S. Ohol",
      journal: "Indian Patent",
      year: 2021,
      patentNumber: "362205",
      applicationNumber: "2212/MUM/2014",
      filingDate: "07-07-2014",
      awardDate: "19-03-2021",
      category: "patents",
      status: "Awarded"
    },
    {
      id: 93,
      title: "NON-CONVENTIONAL CALIBRATION SYSTEM FOR INDUSTRIAL ROBOTS",
      authors: "Dr. S. S. Ohol",
      journal: "Indian Patent",
      year: 2024,
      patentNumber: "511178",
      applicationNumber: "202121012080",
      filingDate: "22-03-2021",
      awardDate: "15-02-2024",
      category: "patents",
      status: "Awarded"
    },
    {
      id: 94,
      title: "AN AUTONOMOUS IN-PIPE INSPECTION ROBOTIC SYSTEM",
      authors: "Dr. S. S. Ohol",
      journal: "Indian Patent",
      year: 2021,
      applicationNumber: "202121031359",
      filingDate: "13-07-2021",
      category: "patents",
      status: "Filed"
    },
    {
      id: 95,
      title: "AN AUTOMATIC BONE ALIGNMENT SYSTEM",
      authors: "Dr. S. S. Ohol",
      journal: "Indian Patent",
      year: 2021,
      applicationNumber: "202121047545",
      filingDate: "19-10-2021",
      category: "patents",
      status: "Filed"
    }
  ];
  
  const toggleAbstract = (id) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = filterCategory === 'all' || pub.category === filterCategory;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.year.toString().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const renderPublicationDetails = (pub) => {
    switch (pub.category) {
      case 'journals':
      case 'conferences':
        return (
          <>
            {pub.volume && <span className="bg-purple-900 text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded">Vol. {pub.volume}{pub.issue && `, Issue ${pub.issue}`}</span>}
            {pub.pages && <span className="bg-amber-900 text-amber-200 text-xs font-medium px-2.5 py-0.5 rounded">Pages: {pub.pages}</span>}
            {pub.doi && (
              <div className="mt-2">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  {pub.doi}
                </a>
              </div>
            )}
          </>
        );
      case 'books':
        return (
          <span className="bg-indigo-900 text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded">{pub.edition} Edition</span>
        );
      case 'book chapters':
        return (
          <span className="bg-teal-900 text-teal-200 text-xs font-medium px-2.5 py-0.5 rounded">Chapter {pub.chapter}</span>
        );
      case 'patents':
        return (
          <>
            {pub.patentNumber && <span className="bg-red-900 text-red-200 text-xs font-medium px-2.5 py-0.5 rounded">Patent No. {pub.patentNumber}</span>}
            <span className="bg-yellow-900 text-yellow-200 text-xs font-medium px-2.5 py-0.5 rounded">Application No. {pub.applicationNumber}</span>
            <span className="bg-green-900 text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">{pub.status}</span>
          </>
        );
      default:
        return null;
    }
  };

  // Count publications by category
  const counts = {
    journals: publications.filter(pub => pub.category === 'journals').length,
    conferences: publications.filter(pub => pub.category === 'conferences').length,
    books: publications.filter(pub => pub.category === 'books').length,
    'book chapters': publications.filter(pub => pub.category === 'book chapters').length,
    patents: publications.filter(pub => pub.category === 'patents').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100">
      <div className="bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-bold mb-3 text-center text-white">Research Publications</h1>
          <p className="text-xl opacity-80 text-center max-w-3xl mx-auto text-blue-200">
            Scholarly contributions in robotics, automation, and mechanical engineering
          </p>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">{counts.journals}</div>
              <div className="text-sm text-gray-400">Journals</div>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400 mb-1">{counts.conferences}</div>
              <div className="text-sm text-gray-400">Conferences</div>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">{counts.books}</div>
              <div className="text-sm text-gray-400">Books</div>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">{counts['book chapters']}</div>
              <div className="text-sm text-gray-400">Book Chapters</div>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-red-400 mb-1">{counts.patents}</div>
              <div className="text-sm text-gray-400">Patents</div>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-700">
          <div className="md:flex items-center">
            <div className="relative flex-grow p-4">
              <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by title, author, journal, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
              />
            </div>
            
            <div className="flex p-4 bg-gray-900 overflow-x-auto md:w-auto" style={{scrollbarWidth: 'none'}}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 mx-1 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    filterCategory === category 
                      ? 'bg-blue-700 text-white shadow-md' 
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-6 text-gray-400 font-medium">
          {filteredPublications.length} {filteredPublications.length === 1 ? 'result' : 'results'} found
        </div>
        
        {/* Publications Grid */}
        {filteredPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map(pub => (
              <div key={pub.id} className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-white/10 hover:shadow-xl border-t-4 border-gray-700 border border-gray-700 flex flex-col h-full">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded mb-3">
                      {pub.category.charAt(0).toUpperCase() + pub.category.slice(1)}
                    </div>
                    {/* Removed the line-clamp-2 class to show full title */}
                    <h2 className="text-lg font-bold text-white mb-2">{pub.title}</h2>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-1">{pub.authors}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-900 text-blue-200 text-xs font-medium px-2 py-1 rounded">{pub.journal}</span>
                      <span className="bg-green-900 text-green-200 text-xs font-medium px-2 py-1 rounded">{pub.year}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {renderPublicationDetails(pub)}
                    </div>
                  </div>
                  
                  {pub.abstract && (
                    <button 
                      onClick={() => toggleAbstract(pub.id)}
                      className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      {expandedAbstracts[pub.id] ? 'Hide Abstract' : 'View Abstract'}
                    </button>
                  )}
                  
                  {expandedAbstracts[pub.id] && pub.abstract && (
                    <div className="mt-3 p-3 bg-gray-700 rounded-md text-sm text-gray-300">
                      {pub.abstract}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-800 bg-opacity-70 rounded-lg shadow-md border border-gray-700">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-white mb-2">No publications found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search query or selecting a different category filter
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PapersPublished;



