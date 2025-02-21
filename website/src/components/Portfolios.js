import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Portfolios = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dataScienceProjects = [
    {
      id: 1,
      title: 'Revenue vs Expense per Acre Analysis',
      githubLink: 'https://github.com/yourusername/project1',
      description: "Impactful projects are my passion. This Python-based project processes data from the city of Saskatoon to calculate revenue and expense per acre for every parcel in the city. The resulting visualizations highlight financially productive and solvent areas, providing actionable insights for city administrators. This work has been shared across city departments and has the potential to influence public accounting practices.",
      technologies: ['Python', 'Pandas', 'Numpy', 'GIS', 'Data Visualization', 'Kepler.GL', 'RESTful APIs'],
      images: [
        {
          src: '/images/ds1.jpg',
          caption: 'Tax Revenue vs Expenses per acre, 3D Model'
        }, 
        {
          src: '/images/ds2.jpg',
          caption: 'Tax Revenue vs Expenses per acre, 2D Model'
        }
      ],
    },
    {
      id: 2,
      title: 'Random Forest Regression Call Volume Model',
      githubLink: 'https://github.com/nickpollett/portfolio/blob/main/rfr_call_volume_model.py',
      description: 'A machine learning model for predicting call and sales volumes. This specifically is the RFR variant, althought I also trained a SARIMAX model written in Python and an fbProphet model written in R to compare the various models efficacy.',
      technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas', 'NumPy'],
      images: [],
    },
    {
      id: 3,
      title: 'High Injury Network Identification',
      githubLink: 'https://github.com/yourusername/project3',
      description: "This project leverages Regex to parse and analyze Saskatoon Police collision reports, identifying high-risk road segments that account for 50% of all collisions. The results are mapped and visualized, providing actionable insights for improving road safety. Inspired by the research of Dr. Wes Marshall.",
      technologies: ['Python', 'Regex', 'GIS', 'Data Visualization', 'Kepler.gl'],
      images: [
        {
          src: '/images/ds3.jpg',
          caption: 'Output data from calculating collisions per roadway from police data'
        },
        {
          src: '/images/ds4.jpg',
          caption: 'Mapping the 0.5% of roads where 50% of Saskatoon collisions occur'
        }
      ],
    },
  ];
  
  const webDevelopmentProjects = [
    {
      id: 4,
      title: 'Nick Pollett Photo',
      githubLink: 'https://github.com/nickpollett/portfolio/tree/main/NPP',
      websiteLink: 'https://nickpollettphoto.ca',
      description: 'Nick Pollett Photo is my personal photography and videography portfolio website, built using a full production workflow with issue tracking, branching, and AWS hosting.',
      technologies: ['Javascript', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'AWS'],
      images: [
        {
          src: '/images/wd2.jpg',
          caption: 'Photography portfolio homepage'
        },
        {
          src: '/images/wd3.jpg',
          caption: 'Photo gallery implementation'
        }
      ],
    },
    {
      id: 5,
      title: 'Saskatoon Collision Cost Calculator',
      githubLink: 'https://github.com/nickpollett/portfolio/tree/main/calculator-website',
      websiteLink: 'https://saskatooncollisioncalculator.ca',
      description: 'This project combines data analysis and web development to visualize the cost of vehicle collisions in Saskatoon. Based on the 2018 CRISP report out of the Alberta Capita Regiom and using Saskatoon Police Crash Data, users can select an area on a map to see its annual cost to the city in collisions.',
      technologies: ['Javascript', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'AWS'],
      images: [
        {
          src: '/images/wd1.jpg',
          caption: 'Interactive collision cost calculator using CRISP and Saskatoon Police data'
        }
      ],
    },
  ];

  const openLightbox = (images, index) => {
    setIsLoading(true);
    setPhotoIndex(index);
    setCurrentProjectImages(images);
    setIsOpen(true);

    const img = new Image();
    img.src = typeof images[index] === 'object' ? images[index].src : images[index];
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.error("Failed to load image");
      setIsLoading(false);
    };
  };

  const ProjectCard = ({ project, isLast }) => (
    <div className={`p-4 md:p-6 ${!isLast ? 'relative' : ''} flex flex-col h-auto md:h-72`}>
      {!isLast && (
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-5/6 md:w-11/12 h-px bg-orange" />
      )}
      <div className="mb-4 w-full md:w-2/3">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
          <h3 className="font-playfair text-gold text-xl md:text-2xl font-semibold">{project.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm md:text-base">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green hover:underline">
              GitHub ↗
            </a>
            {project.websiteLink && (
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green hover:underline">
                Website ↗
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 flex-grow h-full">
        <div className="w-full lg:w-2/3 flex flex-col h-full">
          <p className="font-montserrat bg-dark-gray bg-opacity-30 rounded-lg leading-relaxed text-white text-sm md:text-base flex-1">
            {project.description}
          </p>
          <div className="pt-4">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-green bg-opacity-20 text-green px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {project.images.length > 0 && (
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-stretch gap-2 h-full">
            {project.images.slice(0, 2).map((image, index) => (
              <div 
                key={index}
                className="w-1/2 md:w-36 lg:w-44 flex-shrink-0 rounded-lg overflow-hidden h-full flex"
              >
                <img
                  src={typeof image === 'object' ? image.src : image}
                  alt={`Project showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => openLightbox(project.images, index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
  

  return (
    <div className="bg-dark-gray text-white p-3 md:p-6">
      <section className="mb-6 md:mb-10 bg-light-gray bg-opacity-10 rounded-lg">
        <h2 className="font-playfair bg-green text-2xl md:text-3xl font-bold w-full py-2 md:py-3 px-4 md:px-6 rounded-t-lg text-white">
          Data Science and Visualization
        </h2>
        {dataScienceProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isLast={index === dataScienceProjects.length - 1} />
        ))}
      </section>
      <section className="bg-light-gray bg-opacity-10 rounded-lg">
        <h2 className="font-playfair bg-green text-2xl md:text-3xl font-bold w-full py-2 md:py-3 px-4 md:px-6 rounded-t-lg text-white">
          Web Development
        </h2>
        {webDevelopmentProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isLast={index === webDevelopmentProjects.length - 1} />
        ))}
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={typeof currentProjectImages[photoIndex] === 'object' 
            ? currentProjectImages[photoIndex].src 
            : currentProjectImages[photoIndex]}
          nextSrc={currentProjectImages.length > 1 
            ? (typeof currentProjectImages[(photoIndex + 1) % currentProjectImages.length] === 'object'
              ? currentProjectImages[(photoIndex + 1) % currentProjectImages.length].src
              : currentProjectImages[(photoIndex + 1) % currentProjectImages.length])
            : undefined}
          prevSrc={currentProjectImages.length > 1 
            ? (typeof currentProjectImages[(photoIndex + currentProjectImages.length - 1) % currentProjectImages.length] === 'object'
              ? currentProjectImages[(photoIndex + currentProjectImages.length - 1) % currentProjectImages.length].src
              : currentProjectImages[(photoIndex + currentProjectImages.length - 1) % currentProjectImages.length])
            : undefined}
          imageCaption={typeof currentProjectImages[photoIndex] === 'object' ? currentProjectImages[photoIndex].caption : ''}
          imageTitle={typeof currentProjectImages[photoIndex] === 'object' ? currentProjectImages[photoIndex].caption : ''}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentProjectImages.length - 1) % currentProjectImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentProjectImages.length)
          }
        />
      )}
    </div>
  );
};

export default Portfolios;