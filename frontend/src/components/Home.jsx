import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import {
  Code,
  Palette,
  Bot,
  Monitor,
  Database,
  CreditCard,
  Check,
  Star,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Footer from "./shared/Footer";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: "MERN Stack Websites",
      description:
        "Modern, responsive websites built with MongoDB, Express, React, and Node.js.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces designed with your users in mind.",
    },
    {
      icon: Bot,
      title: "AI Chatbot Integration",
      description:
        "Enhance user experience with intelligent chatbots for your website.",
    },
    {
      icon: Monitor,
      title: "WordPress Development",
      description:
        "Custom WordPress websites and themes tailored to your specific requirements.",
    },
    {
      icon: Database,
      title: "Database Support",
      description: "Up to 512MB database support with optimized performance.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Seamless Razorpay/Stripe integration for your e-commerce needs.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Package",
      price: "₹12,000",
      popular: false,
      features: [
        "Up to 10 pages",
        "Responsive Design",
        "3 months free maintenance",
        "Database up to 512MB",
        "Basic AI setup",
      ],
    },
    {
      name: "Standard Package",
      price: "₹36,000",
      popular: true,
      features: [
        "Up to 30 pages",
        "Responsive Design",
        "3 months free maintenance",
        "Database up to 512MB",
        "Payment gateway integration",
        "Advanced SEO setup",
      ],
    },
    {
      name: "Premium Package",
      price: "₹60,000",
      popular: false,
      features: [
        "Up to 50 pages",
        "Responsive Design",
        "3 months free maintenance",
        "Database up to 512MB",
        "Payment gateway integration",
        "AI Chatbot integration",
        "Comprehensive SEO setup",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "E-commerce Business Owner",
      text: "NEXTCONNECTHUB delivered our e-commerce website on time and within budget. The team was professional and responsive throughout the project.",
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      text: "The UI/UX design service provided by NEXTCONNECTHUB transformed our website. Our user engagement has increased significantly since the redesign.",
      avatar: "PS",
    },
  ];

  const backendUri = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log("Form submitted:", formData);
      // Handle form submission logic here
      const body = {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
      };
      const res = await axios.post(
        `${backendUri}/api/v1/user/createUser`,
        body,
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Caught error:", error);

      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Modern Web Solutions for Your Business
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
                  NEXTCONNECTHUB delivers efficient, affordable, and
                  cutting-edge web development services tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/services")}
                    className="bg-white cursor-pointer text-[#146fb9] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => navigate("/getInTouch")}
                    className="border-2 cursor-pointer border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
              <div className="relative ">
                <div className="rounded-lg">
                  <img
                    className="rounded-lg object-fill"
                    src="../../public/images/pexels-picjumbo-com-55570-196644.jpg"
                  />
                </div>
                {/* <div className="bg-white/10 backdrop-blur rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-blue-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of web development services to
                help your business thrive in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Choose the package that suits your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 relative ${
                    plan.popular
                      ? "ring-2 ring-blue-500 transform scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#146fb9] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a target="blank" href="https://calendly.com/nextconnecthub/nextconnecthub">
 <button
                    
                    className={`w-full cursor-pointer py-4 px-6 rounded-lg font-bold transition-colors duration-200 ${
                      plan.popular
                        ? "bg-[#146fb9] text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                  </a>

                 
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. See what our clients have to
                say about our work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Have a project in mind? Fill out the form below, and we'll get
                back to you soon.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </div>
                    <input
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </div>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="mern">MERN Stack Website</option>
                        <option value="wordpress">WordPress Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="ai-chatbot">
                          AI Chatbot Integration
                        </option>
                        <option value="database">Database Support</option>
                        <option value="payment">Payment Integration</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </div>
                  <textarea
                    rows={6}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
                  ></textarea>
                </div>
                {loading ? (
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    <Loader2 className="animate-spin mr-2 h-2 w-2" />
                    Please Wait
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="w-full cursor-pointer bg-[#146fb9] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
<Footer/>
      </div>
    </div>
  );
};

export default Home;
