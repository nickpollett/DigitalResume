export default function Portfolios() {
    return (
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/profile.jpg"
            alt="Nick"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-neutral-900 bg-opacity-50 rounded-lg p-6 md:p-8">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 text-white font-playfair">About Nick</h2>
            <div className="w-40 h-1 bg-accent mt-2 mb-6 rounded-full" />
            <p className="text-base md:text-lg text-white font-montserrat mb-4">
              Hi! I'm Nick. Originally from Newfoundland, but happy to have been able to call Saskatchewan home for the last decade.
            </p>
            <p className="text-base md:text-lg text-white font-montserrat">
              I started shooting as a hobby, and am incredibly grateful it's turned into a full time business over the years. I've been working as a photographer since 2016, started shooting commercial video in 2020, and have had the privilege of being full time shooting since 2022.
            </p>
          </div>
        </div>
      </div>
    );
   }