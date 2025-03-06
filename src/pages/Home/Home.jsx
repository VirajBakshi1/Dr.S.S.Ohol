// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../../components/Herosection';
import ExperienceSection from '../../components/Experience';
import EducationSection from '../../components/Education';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div id="home">
      <HeroSection />
      </div>  
      <div id="experience">
        <ExperienceSection />
      </div>
      
      <div id="education">
        <EducationSection />
      </div>
    </div>
  );
};

export default Home;