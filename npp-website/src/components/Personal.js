import React from 'react';

export default function Personal() {
 const weddingPhotos = [
   { id: 'img-1', src: '/images/img1.jpg', alt: 'Wedding photo 1' },
   { id: 'img-2', src: '/images/img2.jpg', alt: 'Wedding photo 2' },
   { id: 'img-15', src: '/images/img15.jpg', alt: 'Wedding photo 3' },
   { id: 'img-13', src: '/images/img13.jpg', alt: 'Wedding photo 4' },
   { id: 'img-14', src: '/images/img14.jpg', alt: 'Wedding photo 5' },
   { id: 'img-6', src: '/images/img6.jpg', alt: 'Wedding photo 6' },
   { id: 'img-7', src: '/images/img7.jpg', alt: 'Wedding photo 7' },
   { id: 'img-8', src: '/images/img8.jpg', alt: 'Wedding photo 8' },
   { id: 'img-9', src: '/images/img9.jpg', alt: 'Wedding photo 9' },
   { id: 'img-10', src: '/images/img10.jpg', alt: 'Wedding photo 10' },
   { id: 'img-11', src: '/images/img11.jpg', alt: 'Wedding photo 11' },
   { id: 'img-12', src: '/images/img12.jpg', alt: 'Wedding photo 12' },
 ];

 const familyPhotos = [
   { id: 'img-16', src: '/images/img16.jpg', alt: 'Family photo 2' },
   { id: 'img-5', src: '/images/img5.jpg', alt: 'Family photo 1' },
   { id: 'img-18', src: '/images/img18.jpg', alt: 'Family photo 3' },
   { id: 'img-19', src: '/images/img19.jpg', alt: 'Family photo 4' },
 ];

 const PricingList = ({ items }) => (
   <ul className="mt-4 space-y-2 text-left text-white">
     {items.map((item, index) => (
       <li key={index} className="flex items-start">
         <span className="mr-2">•</span>
         {item}
       </li>
     ))}
   </ul>
 );

  return (
    <div className="py-8 px-4 mx-auto">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="bg-neutral-900 bg-opacity-50 rounded-lg p-8">
              <h2 className="text-5xl font-bold mb-4 text-center font-playfair text-white">
                Wedding Photography & Videography
              </h2>
              <div className="w-40 h-1 bg-accent mx-auto mt-2 mb-6 rounded-full" />
              <p className="text-lg font-montserrat text-white">
                Weddings are the core of why I love this job! Capturing the big day either with photo or video have their unique joys which I look forward to every time.
              </p>
              <p className="text-lg font-montserrat text-white mt-4">
                I try to keep the process as simple as possible. One flat price and you have me for the whole day- as long as you need for whatever you need. If there is something more custom you are looking for, feel free to ask!
              </p>

              <div className="bg-neutral-800 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-white">Wedding Pricing</h3>
                <PricingList items={[
                  "Full Day of Coverage - Photo or Video: $1,800",
                  "Travel over 2.5hrs - Request Quote"
                ]} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-3">
              {weddingPhotos.map((photo) => (
                <div key={photo.id} className="relative group overflow-hidden rounded-lg h-40">
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
      <section>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="bg-neutral-900 bg-opacity-50 rounded-lg p-8">
              <h2 className="text-5xl font-bold mb-4 text-center font-playfair text-white">
                Smaller Shoots
              </h2>
              <div className="w-40 h-1 bg-accent mx-auto mt-2 mb-6 rounded-full" />
              <p className="text-lg font-montserrat text-white">
                Family photos, Engagement photos, newborn, and more and more! I've been incredibly lucky to capture so many kinds of memories. This is a catch all for anything that can fit into a 1 hour session.
              </p>

              <div className="bg-neutral-800 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-white">Session Pricing</h3>
                <PricingList items={["1-Hour Session - $250"]} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {familyPhotos.slice(0, 4).map((photo) => (
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