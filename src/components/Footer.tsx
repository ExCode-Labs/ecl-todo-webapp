import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-6 sm:px-8 lg:flex-row lg:gap-8">
        <p className="text-center text-sm font-medium text-gray-400 lg:text-left">
          © 2026 Todo App. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <div
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-gray-500">
              About
            </a>

            <a
              href="#documentation"
              className="text-sm font-medium text-gray-400 hover:text-gray-500"
            >
              Documentation
            </a>

            <a href="#privacy" className="text-sm font-medium text-gray-400 hover:text-gray-500">
              Privacy
            </a>

            <a href="#terms" className="text-sm font-medium text-gray-400 hover:text-gray-500">
              Terms
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#github"
              aria-label="GitHub"
              className="text-gray-500 hover:scale-110 hover:text-gray-900"
            >
              <FaGithub size={24} className="text-gray-500" />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-gray-500 hover:scale-110 hover:text-gray-900"
            >
              <FaLinkedin size={24} className="text-gray-500" />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-gray-500 hover:scale-110 hover:text-gray-900"
            >
              <FaTwitter size={24} className="text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
