import React from 'react'
import Navbar from './shared/Navbar'
import { Users, Code, CheckCircle, Globe, Smartphone, Palette, ShoppingCart, BarChart3, FileText, Search, Lock, HeadphonesIcon, Star } from 'lucide-react';
import Footer from './shared/Footer';



const FreelancerMarketPlace = () => {
  const services = [
    { name: 'Web Development', icon: Globe },
    { name: 'Mobile App Development', icon: Smartphone },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'WordPress Development', icon: Globe },
    { name: 'E-commerce Solutions', icon: ShoppingCart },
    { name: 'Digital Marketing', icon: BarChart3 },
    { name: 'Content Creation', icon: FileText },
    { name: 'SEO Optimization', icon: Search }
  ];

  const features = [
    {
      icon: Users,
      title: 'Vetted Professionals',
      description: 'Our freelancers undergo rigorous screening and are thoroughly vetted to ensure they meet our high standards of quality and professionalism.'
    },
    {
      icon: Code,
      title: 'Specialized Skills',
      description: 'Find experts in niche technologies, frameworks, or design styles to match your exact project requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'All projects and freelancers work delivered through our platform with a satisfaction guarantee.'
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Access Expert Freelancers',
      description: 'Connect with our vetted developers, designers, and digital marketing specialists.'
    },
    {
      icon: BarChart3,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or surprise costs.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'All work is reviewed to ensure it meets our high standards.'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Protected payment system ensures you only pay for completed work.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Get help and guidance throughout your project journey.'
    },
    {
      icon: Star,
      title: 'Specialized Skills',
      description: 'Find experts in niche technologies and specialized fields.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Create an Account',
      description: 'Sign up on AnyoneCanConnect and complete your profile with your project requirements.'
    },
    {
      number: 2,
      title: 'Browse Freelancers',
      description: 'Explore profiles of skilled professionals and find the perfect match for your project.'
    },
    {
      number: 3,
      title: 'Discuss Your Project',
      description: 'Connect with freelancers to discuss your requirements, timeline, and budget.'
    },
    {
      number: 4,
      title: 'Hire & Collaborate',
      description: 'Hire your chosen freelancer and work together to bring your project to life.'
    }
  ];
  return (
    <div className='w-full h-full'>
      <div className='w-full'>
<Navbar/>
      </div>

      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#146fb9] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            AnyoneCanConnect Freelance Marketplace
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Connect with skilled freelancers from our network for your specific project needs.
          </p>
          <button className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore the Marketplace
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              About AnyoneCanConnect
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              AnyoneCanConnect is our sister platform that connects businesses with skilled freelancers from our network. 
              Whether you need a specific component for your website or a complete digital marketing strategy, you'll find 
              the right talent on our marketplace.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Services Available on the Marketplace
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From web development to digital marketing, find experts in various fields to help with your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center border">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {service.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Marketplace
            </h2>
            <p className="text-lg text-gray-600">
              AnyoneCanConnect offers numerous advantages for businesses looking to hire freelance talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with AnyoneCanConnect is simple and straightforward.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#146fb9] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Freelancer?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join AnyoneCanConnect today and connect with skilled professionals ready to help with your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Browse Freelancers
            </button>
          </div>
        </div>
      </section>
    </div>
    <div className='w-full'>
<Footer/>
    </div>
    </div>
  )
}

export default FreelancerMarketPlace