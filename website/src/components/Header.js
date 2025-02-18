export default function Header() {

  return (
    <header className="bg-green text-white py-12">
      <div className="text-center">
        <h1 className="font-playfair text-8xl font-bold">Nick Pollett</h1>
        <p className="font-montserrat text-3xl mt-2 font-light tracking-widest">Software Developer</p>
      </div>

      <div className="w-96 h-px bg-white mx-auto mt-6"></div>

      <nav className="flex justify-center space-x-20 pt-12">
        <a
          href="https://www.linkedin.com/in/nicholas-pollett-2a7692234/"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nickpollett/portfolio"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          GitHub
        </a>
        <a
          href="mailto:nicholaspollett@hotmail.com"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          Email
        </a>
        <a
          href="https://instagram.com/nickpollett"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          Instagram
        </a>
        <a
          href="/resume.pdf"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}