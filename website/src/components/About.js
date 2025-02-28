import React, { useState, useEffect } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="p-4 md:p-8 bg-dark-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Carousel Panel */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Profile ${index + 1}`}
                className="w-full aspect-square object-cover rounded-2xl shadow-lg flex-shrink-0"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-green' : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* About Nick Panel */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white font-playfair">
            About Nick
          </h2>
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

          <p className="text-base md:text-lg text-white">
            Hi, I’m Nick! I’m passionate about using technology to solve problems and help people. I specialize in Python, machine learning, and data visualization, with a focus on time series modeling. Outside of work, I code to advocate for affordable housing and accessible transportation in Saskatoon.
          </p>

          <br />

          <p className="text-base md:text-lg text-white">
            Professionally, I’ve worked in information security and web development, building secure data tools and achieving key certifications like ISO 27001. I’m always eager to learn new technologies and tackle complex challenges.
          </p>

          <br />

          <p className="text-base md:text-lg text-white">
            When I’m not working on projects you can find me training for triathlon, playing board games, enjoying third-wave coffee, or reading Tolkien.
          </p>
        </div>

        {/* Technical Skills Panel */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h4 className="text-3xl font-bold text-white font-playfair mb-4">
            Technical Skills
          </h4>
          <ul className="text-white space-y-2">
            <li>
              <span className="text-gold">Python:</span> Numpy, PyTorch, Pandas, Scikit-learn, MatPlotLib
            </li>
            <li>
              <span className="text-gold">Web:</span> Javascript, React, Node.js, TypeScript, NestJS, Tailwind
            </li>
            <li>
              <span className="text-gold">Other Languages:</span> Java, C, R, Scala
            </li>
            <li>
              <span className="text-gold">Database:</span> SQL, Prisma, Database Management
            </li>
            <li>
              <span className="text-gold">Cloud & DevOps:</span> AWS, GCP, Docker, Git, Linux
            </li>
            <li>
              <span className="text-gold">Cybersecurity:</span> ISO 27001, PCI DSS Compliance
            </li>
            <li>
              <span className="text-gold">Data Science:</span> GIS, Data Visualization, Machine Learning, Time Series Modeling
            </li>
          </ul>
        </div>

        {/* Experience Panel */}
        <div className="bg-light-gray bg-opacity-20 rounded-lg p-6">
          <h4 className="text-3xl font-bold text-white font-playfair mb-4">
            Experience
          </h4>
          <div className="text-white space-y-4">
            <div>
              <h5 className="text-lg text-gold font-semibold">Information Security Analyst</h5>
              <p className="text-white text-opacity-80 text-sm">Red Wireless • Sep 2024–Dec 2024</p>
              <p className="text-white mt-1">Led ISO 27001 certification and developed RESTful APIs for SMS services. Built machine learning models for sales forecasting. Assisted in administering and troubleshooting various systems.</p>
            </div>
            <div>
              <h5 className="text-lg text-gold font-semibold">Owner/Operator</h5>
              <p className="text-white text-opacity-80 text-sm">Nick Pollett Photo • Sep 2017–Present</p>
              <p className="text-white mt-1">Produced 300+ projects for corporate and private clients, specializing in photography and video editing.</p>
            </div>
            <div>
              <h5 className="text-lg text-gold font-semibold">Finance Manager</h5>
              <p className="text-white text-opacity-80 text-sm">Curbie • Aug 2021–Jan 2022</p>
              <p className="text-white mt-1">Managed financing approvals and sales documents as well as coordinatating multiple departments and processes.</p>
            </div>
            <div>
              <h5 className="text-lg text-gold font-semibold">CXC Manager</h5>
              <p className="text-white text-opacity-80 text-sm">FFUN Motor Group • Sep 2018–Aug 2021</p>
              <p className="text-white mt-1">Managed first point of contact with all customers and achieved over 90% conversion. Managed and trained the CXC department to help other staff achieve similar numbers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}