// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">
              University Institute of Technology, RGPV, Shivpuri<br />
              Shivpuri, Madhya Pradesh, India
            </p>
            <p className="mt-2 text-gray-400">
              Email: uitrgpvshivpuri@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Departments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Faculty</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Help Desk</h3>
            <p className="mt-2 text-gray-400">For any queries, please email us.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} UIT RGPV Shivpuri. All rights reserved.</p>
          <p className="text-gray-400 mt-2 sm:mt-0">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
