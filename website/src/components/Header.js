import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFilePdf } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-green text-white py-4 md:py-8">
      <div className="text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold">Nick Pollett</h1>
        <p className="font-montserrat text-sm md:text-l mt-1 font-light tracking-widest">
          Software Developer · Saskatoon, SK
        </p>
      </div>
      <div className="w-3/4 max-w-xs md:w-80 h-px bg-white mx-auto mt-2 md:mt-4"></div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center space-x-8 lg:space-x-16 pt-4 md:pt-6">
        <a
          href="https://www.linkedin.com/in/nicholas-pollett-2a7692234/"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/nickpollett/portfolio"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="mailto:nicholaspollett@hotmail.com"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/nickpollett"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <div className="relative group">
        <a
          href="/resume.pdf"
          className="hover:opacity-75 transition-opacity duration-200"
          download="Resume.pdf"
          aria-label="Resume"
        >
          <FaFilePdf className="w-6 h-6" />
        </a>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Resumé
        </div>
      </div>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className="flex md:hidden flex-wrap justify-center gap-4 px-4 pt-4">
        <a
          href="https://www.linkedin.com/in/nicholas-pollett-2a7692234/"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/nickpollett/portfolio"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="mailto:nicholaspollett@hotmail.com"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/nickpollett"
          className="hover:opacity-75 transition-opacity duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="/resume.pdf"
          className="hover:opacity-75 transition-opacity duration-200"
          download="Resume.pdf"
          aria-label="Resume"
        >
          <FaFilePdf className="w-6 h-6" />
        </a>
      </nav>
    </header>
  );
}