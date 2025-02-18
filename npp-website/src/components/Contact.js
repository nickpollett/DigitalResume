import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="bg-neutral-900 bg-opacity-50 rounded-lg w-full md:w-1/2 p-6 md:p-8">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 text-white font-playfair">How To Contact</h2>
        <div className="w-40 h-1 bg-accent mx-auto mt-2 mb-6 rounded-full" />
        <p className="text-base md:text-lg text-white font-montserrat mb-8">
          The best way to reach me is shooting me a message on Social Media! I also have a dedicated email as well if that is your preference.
        </p>
        <div className="space-y-4">
          <a
            href="https://www.instagram.com/nickpollett/"
            className="flex items-center justify-center gap-3 bg-accent text-white font-montserrat px-6 py-3 rounded-lg hover:bg-accent/80 transition-all duration-300 w-full"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
            <span>Reach me on Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/nickpollettphoto"
            className="flex items-center justify-center gap-3 bg-accent text-white font-montserrat px-6 py-3 rounded-lg hover:bg-accent/80 transition-all duration-300 w-full"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
            <span>Connect on Facebook</span>
          </a>
          <a
            href="mailto:nickpollettphoto@gmail.com"
            className="flex items-center justify-center gap-3 bg-accent text-white font-montserrat px-6 py-3 rounded-lg hover:bg-accent/80 transition-all duration-300 w-full"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
            <span>nickpollettphoto@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={'/images/profile2.jpg'}
          alt="Nick"
          className="w-full rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
}