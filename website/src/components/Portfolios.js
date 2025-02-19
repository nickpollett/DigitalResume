import React from 'react';

const Portfolios = () => {
  const dataScienceProjects = [
    {
      id: 1,
      title: 'Revenue vs Expense per Acre Analysis',
      githubLink: 'https://github.com/yourusername/project1',
      description: 'Projects that have an impact are my favourite. This collection of python scripts processes data from the city of Saskatoon to calculate the revenue and expense per acre of every parcel in the city. The resulting visualization shows which areas are more financially productive and solvent, and has been show all around the city admin, and hopefully can make a change in how we do public accounting.',
      technologies: ['Python', 'Pandas', 'Numpy', 'GIS', 'Data Visualization', 'Kepler.GL', 'RESTful APIs'],
      images: ['/images/ds1.jpg', '/images/ds2.jpg'],
    },
    {
      id: 2,
      title: 'Random Forest Regression Call Volume Model',
      githubLink: 'https://github.com/nickpollett/portfolio/blob/main/rfr_call_volume_model.py',
      description: 'A machine learning model for predicting customer churn based on historical data patterns. This model applies random forest regression techniques to forecast call volumes, helping businesses optimize staffing and resources.',
      technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas', 'NumPy'],
      images: [],
    },
    {
      id: 3,
      title: 'High Injury Network Identification',
      githubLink: 'https://github.com/yourusername/project3',
      description: 'Largely an excerize in using Regex to parse data, this processes a collection of reports from Saskatoon Police to determine where the most collisions occur on the road, the resulting roads that together result in 50% of collisions are mapped and visualized. Inspired by research by Dr Wes Marshall.',
      technologies: ['Python', 'Regex', 'GIS', 'Data Visualization', 'Kepler.gl'],
      images: ['/images/ds3.jpg'],
    },
  ];

  const webDevelopmentProjects = [
    {
      id: 4,
      title: 'Nick Pollett Photo',
      githubLink: 'https://github.com/nickpollett/portfolio/tree/main/NPP',
      description: 'Nick Pollet Photo, my photo/ video website made using a full production workflow including issues/ branches/ hosting on AWS. Available to view at nickpollettphoto.ca.',
      technologies: ['Javascript', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'AWS'],
      images: ['/images/wd2.jpg', '/images/wd3.jpg'],
    },
    {
      id: 5,
      title: 'Saskatoon Collision Cost Calculator',
      githubLink: 'https://github.com/nickpollett/portfolio/tree/main/calculator-website',
      description: 'A mix of data analysis and web dev, it takes research from the 2018 CRISP report on the cost of collisions and puts it into a website where you can select an area on a map and see how much that area costs every year due to vehicle collisions. Available at saskatooncollisioncalculator.ca',
      technologies: ['Javascript', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'AWS'],
      images: ['/images/wd1.jpg'],
    },
  ];

  // Function to render project images in a fixed right side area
  const renderProjectImages = (images) => {
    // Create an array of two elements to ensure consistent spacing
    const imageSlots = Array(2).fill(null);
    
    // Fill available slots with actual images
    images.forEach((image, index) => {
      if (index < 2) imageSlots[index] = image;
    });
    
    return (
      <div className="grid grid-cols-2 gap-4 h-full">
        {imageSlots.map((image, index) => (
          image ? (
            <img
              key={index}
              src={image}
              alt={`Project showcase ${index + 1}`}
              className="w-full h-44 object-cover rounded-lg"
            />
          ) : (
            <div 
              key={index} 
              className="w-full h-44 bg-light-gray bg-opacity-10 rounded-lg flex items-center justify-center"
            >
              {index === 0 && images.length === 0 && (
                <svg className="w-10 h-10 text-green opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              )}
            </div>
          )
        ))}
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="mb-8 bg-light-gray bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h3 className="font-playfair text-gold text-2xl font-semibold mb-4">
          {project.title}
        </h3>
        
        {/* This container creates the side-by-side layout with proper width distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left content area (spans 8/12 of the grid on desktop) */}
          <div className="lg:col-span-8">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-3 text-white hover:text-green hover:underline transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.07.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 01.1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.43.1 2.69.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.57.69.48A10 10 0 0010 0z" clipRule="evenodd"></path>
                </svg>
                GitHub Repository
              </span>
            </a>
            
            <p className="font-montserrat p-3 bg-dark-gray bg-opacity-30 rounded-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-4">
              <h4 className="font-playfair text-green text-lg font-medium mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-green bg-opacity-20 text-green px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right images area (spans 4/12 of the grid on desktop) */}
          <div className="lg:col-span-4">
            {renderProjectImages(project.images)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-dark-gray text-white p-6">
      {/* Data Science and Visualization Section */}
      <section className="mb-12">
        <h2 className="font-playfair bg-green text-3xl font-bold w-full py-3 px-6 rounded-t-lg mb-6">
          Data Science and Visualization
        </h2>
        <div className="grid gap-6">
          {dataScienceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Web Development Section */}
      <section>
        <h2 className="font-playfair bg-green text-3xl font-bold w-full py-3 px-6 rounded-t-lg mb-6">
          Web Development
        </h2>
        <div className="grid gap-6">
          {webDevelopmentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolios;