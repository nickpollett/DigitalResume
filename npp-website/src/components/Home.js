import PhotoCarousel from './PhotoCarousel.js';

export default function Home() {
  return (
    <div className="p-4 md:p-8 bg-dark-gray">
      {/* Video Banner */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full relative rounded-lg overflow-hidden shadow-lg">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={'images/Banner.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/50 to-transparent pointer-events-none" />
        </div>
      </div>
      {/* Text Section */}
      <div className="mt-8 text-center">
        <div className="bg-neutral-900 rounded-lg p-8">
          <div className="inline-block bg-neutral-900 px-4 py-3 rounded-lg">
          <h1 className="font-playfair text-light-gray font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl break-words">
            Personal and Commercial Photography and Videography
          </h1>
          </div>
          <div className="inline-block bg-neutral-900 px-4 py-2 rounded-lg mt-4">
            <h2 className="font-playfair text-light-gray font-normal text-lg sm:text-xl md:text-2xl break-words">
              Based in beautiful Saskatoon, SK
            </h2>
            <div className="w-40 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>
        </div>
        <div className="mt-12">
          <PhotoCarousel />
        </div>
      </div>
    </div>
  );
}