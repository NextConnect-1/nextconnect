import React from 'react'
import Navbar from './shared/Navbar'
import { CheckCircle, Clock, MessageSquare, Lightbulb, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './shared/Footer';


const AboutUs = () => {
  const navigate = useNavigate()
   const teamMembers = [
    {
      name: "Rahul Khatri",
      role: "Co-Founder & Lead Developer",
      description: "Rahul brings over 8 years of experience in web development with expertise in MERN stack technologies.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Ankit Dalakoti",
      role: "Co-Founder & UI/UX Designer",
      description: "Ankit is a creative designer with a passion for creating intuitive and engaging user experiences.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      description: "Priya specializes in React and Node.js development with a focus on performance optimization.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Vikram Singh",
      role: "Backend Developer",
      description: "Vikram is an expert in database design, API development, and server-side architecture.",
      image: "/api/placeholder/300/300"
    }
  ];

  const philosophyItems = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We believe in delivering excellence, ensuring every project meets the highest standards of design and functionality."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect our clients' time and ensure projects are completed on time without sacrificing quality."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We maintain open and clear communication throughout the project lifecycle, keeping clients informed at every step."
    }
  ];
  return (
    <div className='w-full h-full'>
      <div className='w-full'>
<Navbar/>

      </div>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Learn more about NEXTCONNECTHUB and the team behind our success.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
            <p className="text-base md:text-lg">
              NEXTCONNECTHUB is the web development arm of KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED, founded in 2020 
              with a mission to provide high-quality, affordable web development services to businesses of all sizes.
            </p>
            <p className="text-base md:text-lg">
              What started as a partnership between two tech enthusiasts has grown into a dedicated team of developers, designers, and 
              digital strategists committed to helping businesses succeed online.
            </p>
            <p className="text-base md:text-lg">
              Our journey began when founders Rahul Khatri and Ankit Dalakoti recognized a gap in the market for web development 
              services that were both technically excellent and affordably priced. They combined their expertise in development and 
              design to create solutions that help businesses establish a strong online presence without breaking the bank.
            </p>
            <p className="text-base md:text-lg">
              Today, NEXTCONNECTHUB has successfully delivered over 100 projects across various industries, from e-commerce and 
              education to healthcare and finance. Our commitment to quality, transparency, and client satisfaction remains at the core of 
              everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {philosophyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="text-base md:text-lg">
              At NEXTCONNECTHUB, we believe that technology should be accessible to businesses of all sizes. Our work is guided by a 
              commitment to creating websites and applications that are not only visually appealing but also functional, user-friendly, and 
              optimized for performance.
            </p>
            <br />
            <p className="text-base md:text-lg">
              We take a collaborative approach, working closely with clients to understand their unique needs and deliver 
              solutions that exceed expectations. Our success is measured by the success of our clients, and we're dedicated to helping 
              them achieve their online goals.
            </p>
          </div>
        </div>
      </div>

      {/* Our Work Culture Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Work Culture
          </h2>
          <p className="text-center text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            We foster a culture of innovation, collaboration, and continuous learning. Our team is passionate about 
            staying at the forefront of web development technologies and best practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Innovation Hub</h3>
              </div>
              <p className="opacity-90 leading-relaxed">
                We encourage creative thinking and experimentation, allowing our team to explore new 
                technologies and approaches to solve complex problems.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
              </div>
              <p className="opacity-90 leading-relaxed">
                We invest in our team's growth through regular 
                training, workshops, and knowledge-sharing 
                sessions to stay updated with the latest industry 
                trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help bring your 
            vision to life.
          </p>
          <button onClick={() => navigate("/getInTouch")} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
            Get in Touch
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

export default AboutUs