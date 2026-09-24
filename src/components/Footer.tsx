import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 sm:px-8 lg:flex-row">
        <p className="text-center text-xs font-medium text-gray-500 lg:text-left">
          © 2026 Todo App. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-3"
          >
            <a
              href="#about"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              About
            </a>

            <a
              href="#documentation"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              Documentation
            </a>

            <a
              href="#github"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              GitHub
            </a>

            <a
              href="#privacy"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              Terms
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="#github"
              aria-label="GitHub"
              className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-gray-500 transition-colors duration-200 hover:text-blue-600"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-gray-500 transition-colors duration-200 hover:text-sky-500"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
