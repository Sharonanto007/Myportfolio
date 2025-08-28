import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaChartBar, FaRobot, FaGlobe, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Wireless Power Transmission",
      description: "Advanced wireless power transmission system using electromagnetic fields for efficient energy transfer without physical connections. Implemented using Arduino and RF circuits.",
      icon: FaMicrochip,
      technologies: ["Arduino", "RF Circuits", "Electronics", "Power Systems"],
      features: [
        "Efficient wireless energy transfer",
        "Safe distance power transmission",
        "Adjustable power levels",
        "Real-time monitoring system"
      ],
      github: "https://github.com/sharon-anto/wireless-power",
      demo: "#",
      image: "/images/wireless-power.png"
    },
    {
      id: 2,
      title: "LED PIR Sensor System",
      description: "Smart LED control system using PIR sensors for automatic lighting based on motion detection. Energy-efficient solution for smart home automation.",
      icon: FaRobot,
      technologies: ["PIR Sensor", "LED Control", "Arduino", "IoT"],
      features: [
        "Motion-based LED control",
        "Energy saving automation",
        "Adjustable sensitivity",
        "Smart home integration"
      ],
      github: "https://github.com/sharon-anto/led-pir-sensor",
      demo: "#",
      image: "/images/led-pir.png"
    },
    {
      id: 3,
      title: "Professional Portfolio Website",
      description: "Modern, responsive portfolio website showcasing professional achievements and technical skills with elegant design and smooth animations.",
      icon: FaGlobe,
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Modern responsive design",
        "Smooth animations",
        "Professional showcase",
        "Cross-browser compatibility"
      ],
      github: "https://github.com/sharon-anto/portfolio",
      demo: "https://sharon-anto-portfolio.vercel.app",
      image: "/images/portfolio.png"
    },
    {
      id: 4,
      title: "Digital Marketing Analytics",
      description: "Comprehensive analytics dashboard for tracking digital marketing campaigns, social media engagement, and ROI optimization with real-time data visualization.",
      icon: FaChartBar,
      technologies: ["Analytics", "Data Visualization", "Marketing", "Dashboard"],
      features: [
        "Real-time analytics",
        "Campaign tracking",
        "ROI optimization",
        "Social media insights"
      ],
      github: "#",
      demo: "#",
      image: "/images/analytics.png"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Academic and personal projects showcasing my skills</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  {React.createElement(project.icon)}
                </div>
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a
                      href={project.demo}
                      className="project-link"
                      title="View Project"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="project-link"
                      title="GitHub"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          background: linear-gradient(135deg, var(--secondary-black), var(--primary-black));
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          background: linear-gradient(145deg, var(--accent-black), var(--secondary-black));
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-fast);
          position: relative;
        }

        .project-card:hover {
          box-shadow: var(--shadow-heavy);
          border-color: var(--accent-gold);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(45deg, var(--dark-gray), var(--accent-black));
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: var(--accent-gold);
          transition: var(--transition-fast);
          background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(244, 208, 63, 0.1));
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          color: var(--primary-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: var(--transition-fast);
          text-decoration: none;
        }

        .project-link:hover {
          box-shadow: var(--shadow-glow);
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          color: var(--accent-gold);
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .project-description {
          color: var(--light-gray);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .project-features {
          margin-bottom: 1.5rem;
        }

        .project-features h4 {
          color: var(--accent-blue);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .project-features ul {
          list-style: none;
          padding: 0;
        }

        .project-features li {
          color: var(--light-gray);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          position: relative;
          padding-left: 1rem;
        }

        .project-features li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-gold);
          font-weight: bold;
        }

        .project-tech {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold);
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .tech-tag:hover {
          background: var(--accent-gold);
          color: var(--primary-black);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-image {
            height: 180px;
          }

          .project-placeholder {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }

          .project-image {
            height: 160px;
          }

          .project-links {
            gap: 0.5rem;
          }

          .project-link {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
