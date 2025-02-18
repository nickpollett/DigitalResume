export default function About() {
  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section: 4 Square Photos */}
      <div className="w-full md:w-2/5 grid grid-cols-2 gap-4">
        <img
          src="/images/photo1.jpg"
          alt="Photo 1"
          className="w-full aspect-square object-cover rounded-3xl shadow-lg"
        />
        <img
          src="/images/photo2.jpg"
          alt="Photo 2"
          className="w-full aspect-square object-cover rounded-3xl shadow-lg"
        />
        <img
          src="/images/photo3.jpg"
          alt="Photo 3"
          className="w-full aspect-square object-cover rounded-3xl shadow-lg"
        />
        <img
          src="/images/photo4.jpg"
          alt="Photo 4"
          className="w-full aspect-square object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Right Section: Bio, Hard Skills, Soft Skills */}
      <div className="w-full md:w-3/5">
        <div className="bg-neutral-900 bg-opacity-50 rounded-lg p-6 md:p-8">
          {/* Top: Bio */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 text-white font-playfair">
              About Nick
            </h2>
            <div className="w-40 h-1 bg-accent mt-2 mb-6 rounded-full" />
            <p className="text-base md:text-lg text-white font-montserrat">
              Brief bio goes here. This section can include a short introduction about Nick, his background, and what he’s passionate about. Keep it concise and engaging.
            </p>
          </div>

          {/* Bottom: Hard Skills and Soft Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white font-playfair mb-4">
                Hard Skills
              </h3>
              <ul className="text-base md:text-lg text-white font-montserrat list-disc list-inside">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white font-playfair mb-4">
                Soft Skills
              </h3>
              <ul className="text-base md:text-lg text-white font-montserrat list-disc list-inside">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}