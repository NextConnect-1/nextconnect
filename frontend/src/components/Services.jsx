import React from 'react'
import Navbar from './shared/Navbar'
import { Code, Wifi, Globe, Palette, CreditCard, MessageCircle, Clock, Database, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './shared/Footer';


const Services = () => {
  const navigate = useNavigate()
   const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "MERN Stack Development",
      description: "We build modern web applications using MongoDB, Express, React, and Node.js. Our MERN stack solutions are scalable, performant, and tailored to your specific business needs."
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "WebSocket Support",
      description: "Enable real-time communication in your web applications with our WebSocket integration services. Perfect for chat applications, live notifications, and collaborative tools."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "WordPress Development",
      description: "Need a WordPress solution? We create custom WordPress websites with unique designs, extended functionality, and optimized performance for businesses of all sizes."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Design",
      description: "Our professional design services create intuitive, engaging interfaces that provide exceptional user experiences. We focus on both aesthetics and usability to ensure your website stands out."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Payment Gateway Integration",
      description: "Seamlessly integrate payment processing into your website with Razorpay or Stripe. Our secure implementation ensures smooth transactions for your customers."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "AI Chatbot Integration",
      description: "Enhance your website with intelligent AI chatbots for improved customer engagement, support, and lead generation. Our chatbot solutions can be customized to match your brand voice."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Free Maintenance",
      description: "All our packages include 3 months of free maintenance to ensure your website runs smoothly after launch. We'll handle updates, bug fixes, and minor changes during this period."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Database Support",
      description: "Our solutions include database support up to 512MB, perfect for most small to medium-sized business websites. We ensure your data is structured efficiently and securely."
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Custom Solutions",
      description: "Have unique requirements? We offer custom web development solutions tailored to your specific needs. Contact us to discuss your project and get a personalized quote."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      pages: "Up to 10 pages",
      price: "₹12,000",
      features: [
        "MERN Stack Development",
        "Responsive Design",
        "3 Months Free Maintenance",
        "Database Support (512MB)"
      ]
    },
    {
      name: "Standard",
      pages: "Up to 30 pages",
      price: "₹36,000",
      features: [
        "All Basic features",
        "UI/UX Design",
        "Payment Gateway Integration",
        "AI Chatbot Integration"
      ]
    },
    {
      name: "Premium",
      pages: "Up to 50 pages",
      price: "₹60,000",
      features: [
        "All Standard features",
        "WebSocket Support",
        "Advanced Customization",
        "Priority Support"
      ]
    },
    {
      name: "Custom",
      pages: "As needed",
      price: "Custom Quote",
      features: [
        "Tailored to your specific requirements. Contact us for a personalized quote."
      ]
    }
  ];
  return (
    <div className='w-full h-full'>
      <div className='w-full'>
<Navbar/>
      </div>
      <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We offer comprehensive web development solutions to help your business thrive online.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Pricing Structure
            </h2>
            <p className="text-lg text-gray-600">
              We offer transparent pricing based on your project size and requirements.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#146fb9] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Package</th>
                  <th className="px-6 py-4 text-left font-semibold">Pages</th>
                  <th className="px-6 py-4 text-left font-semibold">Price (₹)</th>
                  <th className="px-6 py-4 text-left font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{plan.name}</td>
                    <td className="px-6 py-4 text-gray-600">{plan.pages}</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">{plan.price}</td>
                    <td className="px-6 py-4">
                      <ul className="space-y-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 text-sm">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Note: Domain and hosting charges are not included in any package.</p>
            <p>Prices may vary slightly based on specific project requirements.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a personalized quote.
          </p>
          <button onClick={() => navigate("/getInTouch")} className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
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

export default Services