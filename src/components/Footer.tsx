import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 sm:px-6 md:flex-row md:gap-6 lg:px-8">
        <div className="shrink-0 text-center md:text-left">
          <p className="text-xs font-medium text-gray-450">© 2026 Todo App. All rights reserved.</p>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            <li>
              <a href="#" className="text-xs font-medium text-gray-450 transition-colors">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-xs font-medium text-gray-450 transition-colors">
                Documentation
              </a>
            </li>

            <li>
              <a href="#" className="text-xs font-medium text-gray-450 transition-colors">
                GitHub
              </a>
            </li>

            <li>
              <a href="#" className="text-xs font-medium text-gray-450 transition-colors">
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className="text-xs font-medium text-gray-450 transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </nav>

        <div className="shrink-0">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex items-center justify-center text-gray-450 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-gray-450 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center text-gray-450 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
