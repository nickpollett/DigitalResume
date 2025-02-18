import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-2xl font-playfair font-medium ${
        isActive ? 'bg-white text-accent' : 'bg-white/10 text-light-gray'
      } transition-all duration-300 hover:bg-white/20 rounded-lg px-6 py-2 no-underline`
    }
  >
    {children}
  </NavLink>
);

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center space-y-4 py-1 md:hidden">
          <div className="w-full flex items-center justify-between pl-4">
            <NavLink to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
              <img
                src={'images/logoresize.png'}
                alt="NPP Logo"
                className="h-40 w-auto object-cover object-center"
              />
            </NavLink>
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8 text-light-gray"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="flex flex-col items-center space-y-3 w-full pb-4">
              <NavLinkStyled to="/personal">Personal</NavLinkStyled>
              <NavLinkStyled to="/commercial">Commercial</NavLinkStyled>
              <NavLinkStyled to="/about">About</NavLinkStyled>
              <NavLinkStyled to="/contact">Contact</NavLinkStyled>
            </div>
          )}
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-end justify-between h-40 py-4">
          <div className="flex space-x-12 pl-8">
            <NavLinkStyled to="/personal">Personal</NavLinkStyled>
            <NavLinkStyled to="/commercial">Commercial</NavLinkStyled>
          </div>
          <NavLink to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
            <img
              src={'/images/logoresize.png'}
              alt="NPP Logo"
              className="h-36 w-auto object-cover object-center"
            />
          </NavLink>
          <div className="flex space-x-12 pr-8">
            <NavLinkStyled to="/about">About</NavLinkStyled>
            <NavLinkStyled to="/contact">Contact</NavLinkStyled>
          </div>
        </div>
      </div>
    </nav>
  );
}