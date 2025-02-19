export default function About() {
  return (
    <div className="p-4 md:p-8 bg-dark-gray">
      {/* Top Section: Photo and Bio */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Single Photo - 50% width on desktop */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/img1.jpg"
            alt="Profile"
            className="w-full aspect-square object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Bio Section - 50% width on desktop */}
        <div className="w-full md:w-1/2 bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white font-playfair">
            About Nick
          </h2>

          {/* Education Section */}
          <div className="mb-6">
            <ul className="text-white space-y-2">
              <li>
                <span className="font-semibold text-gold">BSc Computer Science</span> — University of Saskatchewan, 2024
              </li>
              <li>
                <span className="font-semibold text-gold">BA Biblical Studies</span> — Briercrest College, 2018
              </li>
            </ul>
          </div>

          <div className="w-full h-0.5 bg-orange mt-2 mb-6 rounded-full" />

          {/* Bio Text */}
          <p className="text-base md:text-lg text-white font-montserrat">
            Hi, I’m Nick! I’m passionate about using technology to solve problems and help people. I specialize in Python, machine learning, and data visualization, with a focus on time series modeling. Outside of work, I advocate for affordable housing and accessible transportation in Saskatoon.
          </p>

          <br />

          <p className="text-base md:text-lg text-white font-montserrat">
            Professionally, I’ve worked in information security and web development, building secure data tools and achieving key certifications like ISO 27001. I’m always eager to learn new technologies and tackle complex challenges.
          </p>

          <br />

          <p className="text-base md:text-lg text-white font-montserrat">
            When I’m not coding, I’m training for a triathlon, playing board games, or enjoying third-wave coffee. I’m also a huge Tolkien fan!
          </p>
        </div>
      </div>

      {/* Bottom Section: Skills and Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Technical Skills */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white font-playfair mb-4">
            Technical Skills
          </h3>
          <ul className="text-white space-y-2 pl-4">
            <li>
              <span className="text-green">Python:</span> Numpy, PyTorch, Pandas, Scikit-learn, MatPlotLib
            </li>
            <li>
              <span className="text-green">JavaScript:</span> React, Node.js, TypeScript, NestJS, Tailwind
            </li>
            <li>
              <span className="text-green">Other Languages:</span> Java, C, R, Scala
            </li>
            <li>
              <span className="text-green">SQL:</span> MySQL, Prisma, Database Management
            </li>
            <li>
              <span className="text-green">Cloud & DevOps:</span> AWS, GCP, Docker, Git, Linux
            </li>
            <li>
              <span className="text-green">Cybersecurity:</span> ISO 27001, PCI DSS Compliance
            </li>
            <li>
              <span className="text-green">Data Science:</span> GIS, Data Visualization, Machine Learning, Time Series Modeling
            </li>
          </ul>
        </div>

        {/* Professional Skills */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white font-playfair mb-4">
            Professional Skills
          </h3>
          <ul className="text-white space-y-2 pl-4">
            <li><span className="text-green">RESTful API Development</span></li>
            <li><span className="text-green">Testing & Debugging</span></li>
            <li><span className="text-green">Data Structures & Algorithms</span></li>
            <li><span className="text-green">Team Collaboration</span></li>
            <li><span className="text-green">Time Management</span></li>
            <li><span className="text-green">Attention to Detail</span></li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white font-playfair mb-4">
            Experience
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg text-gold font-semibold">Information Security Analyst</h4>
              <p className="text-white text-opacity-80 text-sm">Red Wireless • Sep 2024–Dec 2024</p>
              <p className="text-white mt-1">Led ISO 27001 certification and developed RESTful APIs for SMS services. Built machine learning models for sales forecasting.</p>
            </div>
            <div>
              <h4 className="text-lg text-gold font-semibold">Owner/Operator</h4>
              <p className="text-white text-opacity-80 text-sm">Nick Pollett Photo • Sep 2017–Present</p>
              <p className="text-white mt-1">Produced 300+ projects for corporate and private clients, specializing in photography and video editing.</p>
            </div>
            <div>
              <h4 className="text-lg text-gold font-semibold">Finance Manager</h4>
              <p className="text-white text-opacity-80 text-sm">Curbie • Aug 2021–Jan 2022</p>
              <p className="text-white mt-1">Managed financing approvals and warranties, contributing to record-breaking sales.</p>
            </div>
            <div>
              <h4 className="text-lg text-gold font-semibold">CXC Manager</h4>
              <p className="text-white text-opacity-80 text-sm">FFUN Motor Group • Sep 2018–Aug 2021</p>
              <p className="text-white mt-1">Achieved over 80% lead conversion and trained staff to exceed performance goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}