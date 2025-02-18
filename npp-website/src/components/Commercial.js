import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Commercial() {
  const commercialPhotos = [
    { id: 'img-1', src: '/images/commercial1.jpg', alt: 'Commercial photo 1' },
    { id: 'img-2', src: '/images/commercial2.jpg', alt: 'Commercial photo 2' },
    { id: 'img-3', src: '/images/commercial3.jpg', alt: 'Commercial photo 3' },
    { id: 'img-4', src: '/images/commercial4.jpg', alt: 'Commercial photo 4' },
    { id: 'img-5', src: '/images/commercial5.jpg', alt: 'Commercial photo 5' },
    { id: 'img-6', src: '/images/commercial6.jpg', alt: 'Commercial photo 6' },
  ];
  return (
    <div className="py-8 px-4 mx-auto text-white">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="bg-neutral-900 bg-opacity-50 rounded-lg p-8">
              <h2 className="text-5xl font-bold mb-4 text-center font-playfair text-white">
                Commercial Photography & Videography
              </h2>
              <div className="w-40 h-1 bg-accent mx-auto mt-2 mb-6 rounded-full" />
              <p className="text-lg font-montserrat text-white">
                Every project is so unique from ads I've shot that have aired during the Stanley Cup Playoffs, to simple social media videos, charity fundraiser coverage, corporate headshots, architecture, and so much more.
              </p>
              <p className="text-lg font-montserrat text-white">
                As a very broad rule of thumb, most projects come in at $250/ projected hour of shooting, but plenty of projects that doesn't really fit for. Feel free to reach out and tell me what you want created so I can get you a quote!
              </p>
              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="block w-full bg-accent text-white font-montserrat font-medium text-lg px-8 py-3 rounded-lg hover:bg-accent/80 transition-all duration-300 text-center"
                >
                  Get in Touch
                </NavLink>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-6">
              <video controls className="w-full rounded-lg" autoPlay loop muted playsInline>
                <source src="/images/commercialHighlights.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {commercialPhotos.map((photo) => (
                <div key={photo.id} className="relative group overflow-hidden rounded-lg h-48">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover z-20 relative"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}