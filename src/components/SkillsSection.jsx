import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaCode, FaChartLine, FaSatelliteDish, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SkillsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const skillCategories = [
    {
      id: 'electronics',
      title: 'Electronics & Hardware',
      icon: FaMicrochip,
      color: '#ff6b35',
      skills: [
        { name: 'Circuit Design', percentage: 85 },
        { name: 'PCB Design', percentage: 80 },
        { name: 'Signal Processing', percentage: 90 },
        { name: 'Embedded Systems', percentage: 75 }
      ]
    },
    {
      id: 'programming',
      title: 'Programming & Software',
      icon: FaCode,
      color: '#4ecdc4',
      skills: [
        { name: 'C/C++ Programming', percentage: 88 },
        { name: 'MATLAB/Simulink', percentage: 85 },
        { name: 'Python', percentage: 80 },
        { name: 'Web Development', percentage: 75 }
      ]
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: FaChartLine,
      color: '#45b7d1',
      skills: [
        { name: 'Social Media Marketing', percentage: 92 },
        { name: 'Content Strategy', percentage: 88 },
        { name: 'SEO Optimization', percentage: 85 },
        { name: 'Affiliate Marketing', percentage: 83 }
      ]
    },
    {
      id: 'communication',
      title: 'Communication & Tools',
      icon: FaSatelliteDish,
      color: '#f7931e',
      skills: [
        { name: 'RF Communication', percentage: 82 },
        { name: 'Network Protocols', percentage: 78 },
        { name: 'IoT Systems', percentage: 80 },
        { name: 'Project Management', percentage: 90 }
      ]
    }
  ];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, skillCategories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Skills</h2>
          <p className="section-subtitle">Electronics Engineering & Digital Marketing Expertise</p>
        </motion.div>
        
        <motion.div 
          className="electronics-carousel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Circuit Board Background */}
          <div className="circuit-board-bg">
            <div className="circuit-lines"></div>
            <div className="electronic-components">
              <motion.div 
                className="component resistor"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="component capacitor"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.div 
                className="component transistor"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.div 
                className="component ic-chip"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-track">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="skill-slide active"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`skill-category-card ${skillCategories[currentSlide].id}`}>
                    <div className="category-icon">
                      {React.createElement(skillCategories[currentSlide].icon)}
                      <div className="electric-pulse"></div>
                    </div>
                    <h3>{skillCategories[currentSlide].title}</h3>
                    <div className="skills-grid-carousel">
                      {skillCategories[currentSlide].skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="skill-item-carousel"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <span className="skill-name">{skill.name}</span>
                          <div className="skill-meter">
                            <motion.div 
                              className="meter-fill"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                            >
                              <div className="electric-flow"></div>
                            </motion.div>
                            <span className="percentage">{skill.percentage}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Controls */}
            <div className="carousel-controls">
              <motion.button 
                className="carousel-btn prev-btn"
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              
              <div className="carousel-indicators">
                {skillCategories.map((_, index) => (
                  <motion.span
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
              
              <motion.button 
                className="carousel-btn next-btn"
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          background: var(--primary-black);
        }

        .electronics-carousel {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          background: linear-gradient(145deg, var(--secondary-black), var(--accent-black));
          border-radius: 20px;
          border: 2px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
        }

        .circuit-board-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          z-index: 1;
        }

        .circuit-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(180deg, var(--accent-gold) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: circuitFlow 10s linear infinite;
        }

        @keyframes circuitFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .electronic-components {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .component {
          position: absolute;
          background: var(--accent-gold);
        }

        .resistor {
          width: 30px;
          height: 8px;
          top: 20%;
          left: 10%;
          border-radius: 4px;
        }

        .capacitor {
          width: 12px;
          height: 20px;
          top: 70%;
          right: 15%;
          border-radius: 2px;
        }

        .transistor {
          width: 15px;
          height: 15px;
          top: 80%;
          left: 30%;
          border-radius: 50%;
        }

        .ic-chip {
          width: 25px;
          height: 25px;
          top: 30%;
          right: 25%;
          border-radius: 3px;
        }

        .carousel-container {
          position: relative;
          z-index: 2;
        }

        .carousel-track {
          position: relative;
          height: 450px;
          overflow: hidden;
        }

        .skill-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-category-card {
          background: linear-gradient(145deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.8));
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          width: 100%;
          max-width: 800px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .category-icon {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .category-icon svg {
          font-size: 3rem;
          color: var(--accent-gold);
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
        }

        .electric-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border: 2px solid var(--accent-gold);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .skill-category-card h3 {
          text-align: center;
          color: var(--accent-gold);
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .skills-grid-carousel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .skill-item-carousel {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-name {
          color: var(--white);
          font-weight: 500;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .skill-meter {
          position: relative;
          height: 10px;
          background: var(--dark-gray);
          border-radius: 5px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-gold), #f4d03f);
          border-radius: 5px;
          position: relative;
          overflow: hidden;
        }

        .electric-flow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: flowAnimation 2s ease-in-out infinite;
        }

        @keyframes flowAnimation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .percentage {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary-black);
          font-weight: 600;
          font-size: 0.8rem;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .carousel-btn {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          color: var(--primary-black);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .carousel-btn:hover {
          box-shadow: var(--shadow-glow);
        }

        .carousel-indicators {
          display: flex;
          gap: 0.5rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--dark-gray);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .indicator.active {
          background: var(--accent-gold);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .electronics-carousel {
            padding: 1rem;
            margin: 0 1rem;
          }

          .carousel-track {
            height: 400px;
          }

          .skill-category-card {
            padding: 1.5rem;
          }

          .skills-grid-carousel {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .carousel-controls {
            gap: 1rem;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .electronics-carousel {
            margin: 0 0.5rem;
          }

          .carousel-track {
            height: 350px;
          }

          .skill-category-card h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
