import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projectImages = {
  medicare: '/assets/medicare.png',
  portfolio: '/assets/portfolio.png',
    
};

const projectsList = [
  {
    image: projectImages.medicare,
    name: "SheScreen",
    description: "Developed a diagnostic system to enhance medical accuracy and streamline patient-doctor workflows. Built admin, doctor, and patient dashboards using Next.js. Patients submit symptoms, receive AI-predicted diagnoses, and give feedback.",
    github: "https://github.com/kristinenyaga/mediapp_frontend",
    category: "HealthTech",
    bannerColor: "bg-[#3BA1AF]",
    techStack: ["Next.js", "TailwindCSS", "FastAPI", "MySQL"],
    size: "medium"
  },
    {
    image: projectImages.portfolio,
    name: "My Portfolio",
    description: "Developed my portfolio to showcase my skills and projects effectively. To enhance user interaction and visual appeal, I incorporated Framer Motion for seamless animations.",
    github: "https://github.com/kristinenyaga/kris-s-portfolio",
    livelink: "https://kristine-nyaga.vercel.app",
    category: "Portfolio",
    bannerColor: "bg-purple-500",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
    size: "medium"
  },
  
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 md:row-span-2 h-80 md:h-96';
      case 'medium':
        return 'col-span-1 md:col-span-1 md:row-span-2 h-80 md:h-[32rem]';
      case 'small':
        return 'col-span-1 md:col-span-1 md:row-span-1 h-64';
      default:
        return 'col-span-1 md:col-span-1 md:row-span-1 h-64';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded overflow-hidden font-sans cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl ${getSizeClasses(project.size)} bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Banner Section */}
      <div className={`absolute top-0 left-0 right-0 h-32 md:h-40 ${project.bannerColor} flex items-center justify-between px-4 md:px-6 z-20`}>
        <div className="w-full">
          <h3 className="text-lg md:text-[22px] pl-1 font-medium text-black mt-2 md:mt-3">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-1 mt-2 md:mt-4">
            {project.techStack.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="text-xs font-medium bg-[#f4e8d5] bg-opacity-15 px-2 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm text-black border border-opacity-20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 mt-32 md:mt-40"
        style={{ 
          backgroundImage: `url(${project.image})`,
          transform: isHovered ? 'scale(1.10)' : 'scale(1.05)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
        isHovered ? 'opacity-40' : 'opacity-10'
      }`} />
      
      {/* Content Section */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white" style={{ paddingTop: '140px' }}>
        <div></div>

        {/* Description - appears on hover */}
        <div className={`transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } mb-4`}>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed bg-black bg-opacity-30 p-3 md:p-4 rounded-lg backdrop-blur-sm">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-80 transform translate-y-2'
        }`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 md:px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105 text-xs md:text-sm font-medium"
          >
            <Github size={14} className="md:w-4 md:h-4" />
            <span>Code</span>
          </a>
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 md:px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105 text-xs md:text-sm font-medium"
            >
              <ExternalLink size={14} className="md:w-4 md:h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ top: '80px' }}>
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation for the entire section
    if (containerRef.current) {
      containerRef.current.style.opacity = '0';
      containerRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        containerRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        containerRef.current.style.opacity = '1';
        containerRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-black text-white min-h-screen" id="projects">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-xl md:text-2xl text-white mb-2 md:mb-4">portfolio</h1>
        <p className="text-3xl md:text-5xl font-bold">
          My recent w
          <span className="bg-white inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 text-black rounded-full text-2xl md:text-4xl ml-1 mr-1">
            o
          </span>
          rk
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projectsList.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Centered View All Projects Button */}
      <div className="flex justify-center mt-8 md:mt-10">
        <button className="px-6 md:px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;