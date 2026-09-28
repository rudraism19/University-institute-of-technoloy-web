import React from 'react';

interface FooterProps {
  onSectionChange?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const handleNav = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold tracking-tight text-white mb-2">
              University Institute of Technology, Shivpuri
            </h3>
            <p className="text-sm text-gray-300">
              A Constituent Institute of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV Bhopal)
              <br />
              Government of Madhya Pradesh
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Jhansi Road, Shivpuri, Madhya Pradesh - 473551
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Email: <a href="mailto:uitrgpvshivpuri@gmail.com" className="text-gray-300 hover:text-white underline">uitrgpvshivpuri@gmail.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNav(e, 'home')} className="text-gray-400 hover:text-white transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#academic" onClick={(e) => handleNav(e, 'academic')} className="text-gray-400 hover:text-white transition-colors">
                  Academic & Admissions
                </a>
              </li>
              <li>
                <a href="#department" onClick={(e) => handleNav(e, 'department')} className="text-gray-400 hover:text-white transition-colors">
                  Departments & Labs
                </a>
              </li>
              <li>
                <a href="#faculty" onClick={(e) => handleNav(e, 'faculty')} className="text-gray-400 hover:text-white transition-colors">
                  Faculty Directory
                </a>
              </li>
              <li>
                <a href="#placement" onClick={(e) => handleNav(e, 'placement')} className="text-gray-400 hover:text-white transition-colors">
                  Training & Placement
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNav(e, 'gallery')} className="text-gray-400 hover:text-white transition-colors">
                  Campus Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-3">Admissions & Portals</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://dte.mponline.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  MP DTE Counselling ↗
                </a>
              </li>
              <li>
                <a href="https://rgpv.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  RGPV Official Portal ↗
                </a>
              </li>
              <li>
                <a href="https://scholarshipportal.mp.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  MP Scholarship Portal ↗
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => handleNav(e, 'events')} className="hover:text-white transition-colors">
                  Campus Events & Fests
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} UIT RGPV Shivpuri. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
