import React from 'react'
import Navbar from './shared/Navbar'
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './shared/Footer';


const Testimonials = () => {
  const navigate = useNavigate()
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration and inventory management.",
      image: "/api/placeholder/400/300",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Modern corporate website with custom CMS and blog functionality.",
      image: "/api/placeholder/400/300",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      description: "Property listing website with advanced search and filtering options.",
      image: "/api/placeholder/400/300",
      category: "Real Estate"
    },
    {
      id: 4,
      title: "Education Platform",
      description: "Online learning management system with video courses and assessments.",
      image: "/api/placeholder/400/300",
      category: "Education"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Restaurant website with online reservation system and menu management.",
      image: "/api/placeholder/400/300",
      category: "Restaurant"
    },
    {
      id: 6,
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling functionality.",
      image: "/api/placeholder/400/300",
      category: "Healthcare"
    },
    {
      id: 7,
      title: "Travel Agency Website",
      description: "Travel booking website with tour packages and customer reviews.",
      image: "/api/placeholder/400/300",
      category: "Travel"
    },
    {
      id: 8,
      title: "Fitness Application",
      description: "Workout tracking app with personalized fitness plans and progress monitoring.",
      image: "/api/placeholder/400/300",
      category: "Fitness"
    },
    {
      id: 9,
      title: "Event Management System",
      description: "Event planning and management platform with ticket sales functionality.",
      image: "/api/placeholder/400/300",
      category: "Events"
    },
    {
      id: 10,
      title: "Portfolio Website",
      description: "Professional portfolio website for a photography business with gallery features.",
      image: "/api/placeholder/400/300",
      category: "Portfolio"
    },
    {
      id: 11,
      title: "Blog Platform",
      description: "Content management system for bloggers with social media integration.",
      image: "/api/placeholder/400/300",
      category: "Blog"
    },
    {
      id: 12,
      title: "Job Portal",
      description: "Job listing and application management system for recruiters and job seekers.",
      image: "/api/placeholder/400/300",
      category: "Job Portal"
    },
    {
      id: 13,
      title: "Social Network",
      description: "Community platform with user profiles, messaging, and content sharing.",
      image: "/api/placeholder/400/300",
      category: "Social"
    },
    {
      id: 14,
      title: "News Website",
      description: "News aggregation and publishing platform with categories and search functionality.",
      image: "/api/placeholder/400/300",
      category: "News"
    },
    {
      id: 15,
      title: "Marketplace Platform",
      description: "Multi-vendor marketplace with product listings and secure transactions.",
      image: "/api/placeholder/400/300",
      category: "Marketplace"
    }
  ];
  return (
    <div className='w-full h-full'>
      <div className='w-full'>
        <Navbar/>
      </div>

      <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped our clients achieve their goals.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center gap-1">
                  View Demo
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and see how we can help you achieve your online goals.
          </p>
          <button onClick={() => navigate("/getInTouch")} className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
<div className='w-full'>
<Footer/>
</div>
    </div>
  )
}

export default Testimonials