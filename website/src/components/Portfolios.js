import React from 'react';

const Portfolios = () => {
  const dataScienceProjects = [
    {
      id: 1,
      title: 'Revenue vs Expense per Acre Analysis',
      githubLink: 'https://github.com/yourusername/project1',
      description: "Impactful projects are my passion. This Python-based project processes data from the city of Saskatoon to calculate revenue and expense per acre for every parcel in the city. The resulting visualizations highlight financially productive and solvent areas, providing actionable insights for city administrators. This work has been shared across city departments and has the potential to influence public accounting practices.",
      technologies: ['Python', 'Pandas', 'Numpy', 'GIS', 'Data Visualization', 'Kepler.GL', 'RESTful APIs'],
      images: ['/images/ds1.jpg', '/images/ds2.jpg'],
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
      images: ['/images/ds3.jpg', '/images/ds4.jpg'],
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
      images: ['/images/wd2.jpg', '/images/wd3.jpg'],
    },
    {
      id: 5,
      title: 'Saskatoon Collision Cost Calculator',
      githubLink: 'https://github.com/nickpollett/portfolio/tree/main/calculator-website',
      websiteLink: 'https://saskatooncollisioncalculator.ca',
      description: 'This project combines data analysis and web development to visualize the cost of vehicle collisions in Saskatoon. Based on the 2018 CRISP report out of the Alberta Capita Regiom and using Saskatoon Police Crash Data, users can select an area on a map to see its annual cost to the city in collisions.',
      technologies: ['Javascript', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'AWS'],
      images: ['/images/wd1.jpg'],
    },
  ];

  const ProjectCard = ({ project, isLast }) => (
    <div className={`p-4 md:p-6 ${!isLast ? 'relative' : ''} flex flex-col gap-4 md:gap-6`}> 
      {/* Custom Orange Border (if not last) */}
      {!isLast && (
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-5/6 md:w-11/12 h-px bg-orange" />
      )}
  
      {/* Project Title and Links - Mobile Friendly */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 md:mb-4">
        <h3 className="font-playfair text-gold text-xl md:text-2xl font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green hover:underline text-sm md:text-base">
            GitHub ↗
          </a>
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green hover:underline text-sm md:text-base">
              Website ↗
            </a>
          )}
        </div>
      </div>
      
      {/* Responsive Layout for Description and Images */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Left section with text */}
        <div className="lg:w-2/3">
          <p className="font-montserrat p-3 bg-dark-gray bg-opacity-30 rounded-lg leading-relaxed text-white text-sm md:text-base">
            {project.description}
          </p>
          <div className="mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="bg-green bg-opacity-20 text-green px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
    
        {/* Right section with images - adjust for mobile */}
        {project.images.length > 0 && (
          <div className="flex justify-center lg:justify-end items-center lg:items-start gap-2 lg:w-1/3">
            {project.images.slice(0, 2).map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Project showcase ${index + 1}`} 
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-lg" 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-dark-gray text-white p-3 md:p-6">
      <section className="mb-6 md:mb-12 bg-light-gray bg-opacity-10 rounded-lg">
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
    </div>
  );
};

export default Portfolios;