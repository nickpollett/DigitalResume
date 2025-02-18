import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const importImages = () => {
 const images = [];
 for (let i = 1; i <= 19; i++) {
   images.push(`/images/img${i}.jpg`);
 }
 return images;
};

const NavigationButton = ({ direction, onClick, children, className }) => (
 <button
   onClick={onClick}
   className={`absolute top-1/2 -translate-y-1/2 transition-colors duration-200
              bg-black/25 hover:bg-black/50 cursor-pointer z-10 w-10 h-10
              flex items-center justify-center text-white/75 hover:text-white
              rounded-full ${className}`}
   aria-label={`${direction} slide`}
 >
   {children}
 </button>
);

const PhotoCarousel = () => {
 const sliderRef = useRef(null);
 const images = importImages();
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
       }
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 2,
       }
     }
   ],
   dotsClass: "slick-dots !bottom-[-2rem]"
 };
 return (
   <div className="relative w-full max-w-7xl mx-auto mt-8 pb-10">
     <div className="relative">
       <Slider ref={sliderRef} {...settings}>
         {images.map((image, index) => (
           <div key={index} className="px-2">
             <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
               <img
                 src={image}
                 alt={`Slide ${index + 1}`}
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
             </div>
           </div>
         ))}
       </Slider>
       <NavigationButton
         direction="previous"
         onClick={() => sliderRef.current?.slickPrev()}
         className="left-2"
       >
         <ChevronLeft size={24} />
       </NavigationButton>
       <NavigationButton
         direction="next"
         onClick={() => sliderRef.current?.slickNext()}
         className="right-2"
       >
         <ChevronRight size={24} />
       </NavigationButton>
     </div>
   </div>
 );
};
export default PhotoCarousel;