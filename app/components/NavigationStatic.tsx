export default function NavigationStatic() {
  return (
    <nav className="dark:bg-zinc-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FTP
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <a
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-blue-500 transition-colors"
              >
                Home
              </a>

              <a
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                About
              </a>

              {/* Services Dropdown - Static version */}
              <div className="relative inline-flex items-center">
                <button
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Services
                  <svg
                    className="ml-1 h-4 w-4 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 z-50 hidden">
                  <div className="py-1">
                    <a
                      href="/services/web-development"
                      className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <div className="font-semibold">Web Development</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Build modern websites</div>
                    </a>
                    <a
                      href="/services/mobile-apps"
                      className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <div className="font-semibold">Mobile Apps</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">iOS & Android solutions</div>
                    </a>
                    <a
                      href="/services/consulting"
                      className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <div className="font-semibold">Consulting</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Expert guidance</div>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/portfolio"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Portfolio
              </a>

              <a
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
