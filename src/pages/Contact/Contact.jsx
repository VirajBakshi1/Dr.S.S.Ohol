import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Form submission would happen here in a real application
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      color: "bg-blue-700",
      textColor: "text-blue-400",
      details: ["+91 020-25507060", "+91 020-25507271"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      color: "bg-purple-700",
      textColor: "text-purple-400",
      details: ["sso.mech@coep.ac.in", "shantipalso@gmail.com"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      color: "bg-green-700",
      textColor: "text-green-400",
      details: [
        "College of Engineering Pune (COEP)",
        "Wellesley Road, Shivajinagar",
        "Pune, Maharashtra - 411005"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lab Hours",
      color: "bg-amber-700",
      textColor: "text-amber-400",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100">
      {/* Header */}
      <div className="bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <h1 className="text-5xl font-bold mb-3 text-center text-white">Contact me</h1>
          <p className="text-xl opacity-80 text-center max-w-3xl mx-auto text-gray-300">
            Get in touch with the Robotics & AI research team at COEP Technological University
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`${info.color} p-3 rounded-lg`}>
                  {info.icon}
                </div>
                <h3 className={`ml-4 text-xl font-bold ${info.textColor}`}>{info.title}</h3>
              </div>
              <div className="ml-14 space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

  

      
      </div>
    </div>
  );
};

export default ContactPage;