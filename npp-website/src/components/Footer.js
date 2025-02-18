import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-accent">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/nickpollett/"
              className="text-white hover:opacity-80 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/nickpollettphoto"
              className="text-white hover:opacity-80 transition-opacity duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
          
          {/* Contact Information */}
          <p className="font-montserrat text-sm text-white">
            Contact: nickpollettphoto@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;