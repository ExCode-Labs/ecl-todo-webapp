import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">© 2026 Todo App. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-gray-700 hover:underline"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-gray-700 hover:underline"
              >
                Documentation
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-gray-700 hover:underline"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-gray-700 hover:underline"
              >
                Privacy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-gray-700 hover:underline"
              >
                Terms
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-400 transition-colors hover:text-gray-700"
              >
                <FaGithub size={22} />
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-gray-700"
              >
                <FaLinkedin size={22} />
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-gray-700"
              >
                <FaTwitter size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
