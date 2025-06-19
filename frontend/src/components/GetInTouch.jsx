import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import {
  Mail,
  Phone,
  Building,
  Clock,
  ChevronDown,
  Loader2,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import Footer from "./shared/Footer";

const GetInTouch = () => {
  const backendUri = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

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

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the typical timeline for completing a website?",
      answer:
        "The timeline varies depending on the project scope and complexity. A basic website typically takes 2-4 weeks, while more complex projects may take 6-8 weeks or longer. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, all our packages include 3 months of free maintenance. After this period, we offer monthly maintenance packages to ensure your website remains secure, up-to-date, and performing optimally.",
    },
    {
      question: "Can you help with website hosting?",
      answer:
        "While we don't include hosting in our packages, we can recommend reliable hosting providers and help you set up your hosting environment. We're experienced with various hosting platforms and can guide you to the best option for your needs.",
    },
    {
      question: "Do you offer e-commerce website development?",
      answer:
        "Yes, we develop custom e-commerce solutions using the MERN stack with secure payment gateway integration. Whether you need a simple online store or a complex marketplace, we can create a solution tailored to your business.",
    },
    {
      question: "What happens if I need changes after the website is launched?",
      answer:
        "During the 3-month free maintenance period, we handle minor changes and updates at no additional cost. For more significant changes or enhancements, we'll provide a quote based on the scope of work required.",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Have questions or ready to start your project? Reach out to us
              today.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:contactatsmart@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      contactatsamarth@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="tel:+917898533851"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +917898533851
                    </a>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Company
                    </h3>
                    <p className="text-gray-600">
                      KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Response Time
                    </h3>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Working Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-800">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Send Us a Message
              </h2>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
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

        {/* FAQ Section */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        expandedFAQ === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to create a website that helps your business
              thrive.
            </p>
            <a
              href="https://wa.me/9027226881?text=Hi%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Us on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
<Footer/>
      </div>
    </div>
  );
};

export default GetInTouch;
