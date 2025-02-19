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
      images: ['/images/ds3.jpg', '/images/ds4.jpg'],
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

  const ProjectCard = ({ project, isLast }) => (
    <div className={`p-6 ${!isLast ? 'border-b border-orange mx-6' : ''} flex flex-col lg:flex-row gap-6`}> 
      {/* Left section with text */}
      <div className="lg:w-2/3">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-playfair text-gold text-2xl font-semibold">{project.title}</h3>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green hover:underline">
            GitHub ↗
          </a>
        </div>
        <p className="font-montserrat p-3 bg-dark-gray bg-opacity-30 rounded-lg leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="bg-green bg-opacity-20 text-green px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Right section with images */}
      <div className="lg:w-1/3 flex justify-end items-start gap-2">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`Project showcase ${index + 1}`} className="w-44 h-44 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-dark-gray text-white p-6">
      <section className="mb-12 bg-light-gray bg-opacity-10 rounded-lg">
        <h2 className="font-playfair bg-green text-3xl font-bold w-full py-3 px-6 rounded-t-lg">
          Data Science and Visualization
        </h2>
        {dataScienceProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isLast={index === dataScienceProjects.length - 1} />
        ))}
      </section>
      <section className="bg-light-gray bg-opacity-10 rounded-lg">
        <h2 className="font-playfair bg-green text-3xl font-bold w-full py-3 px-6 rounded-t-lg">
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
