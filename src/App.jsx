import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import PapersPublished from './pages/PaperPublished/Paperpublished';
import CoepActivitiesPage from './pages/Coep/CoepCarrer';
import ContactPage from './pages/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PapersPublished" element={<PapersPublished />} />
        <Route path="/CoepActivities" element={<CoepActivitiesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App