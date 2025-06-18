import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-blue-950 text-white px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">

        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <div className="flex items-center gap-1">
            <h1 className="text-lg font-bold">NEXTCONNECT</h1>
            <h1 className="text-lg font-bold text-blue-700">HUB</h1>
          </div>
          <p className="text-sm">
            Modern, efficient, and affordable web development services for businesses of all sizes.
          </p>
          <p className="text-xs">
            © 2025 KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="font-semibold">Quick Links</h1>
          <div className="flex flex-col gap-2 text-sm">
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/")}>Home</p>
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/services")}>Services</p>
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/testimonials")}>Testimonials</p>
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/aboutUs")}>About Us</p>
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/getInTouch")}>Contact Us</p>
            <p className="cursor-pointer hover:underline" onClick={() => navigate("/freelanceMarketPlace")}>Freelance Marketplace</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="font-semibold">Contact Us</h1>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={20} />
            <p>contactatsamarth@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone size={20} />
            <p>+91 7895833851</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={20} />
            <p>KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
