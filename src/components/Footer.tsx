const Footer = () => {
  const footerLinks = [
    {
      label: 'About',
      href: '#',
    },
    {
      label: 'Documentation',
      href: '#',
    },
    {
      label: 'GitHub',
      href: '#',
    },
    {
      label: 'Privacy',
      href: '#',
    },
    {
      label: 'Terms',
      href: '#',
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 py-4">
        {/* Copyright */}
        <p className="text-xs font-medium text-gray-500">© 2026 Todo App. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          {/* Footer Navigation */}
          <nav className="flex items-center gap-7">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.5 8.5H3.25V21H6.5V8.5ZM4.875 3C3.839 3 3 3.839 3 4.875S3.839 6.75 4.875 6.75 6.75 5.911 6.75 4.875 5.911 3 4.875 3ZM21 13.844C21 10.08 18.988 8.25 16.293 8.25c-2.202 0-3.185 1.21-3.735 2.06V8.5H9.312V21h3.246v-6.19c0-1.633.31-3.214 2.333-3.214 1.994 0 2.018 1.866 2.018 3.32V21H21v-7.156Z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.683l7.73-8.835L1.255 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
