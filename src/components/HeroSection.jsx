import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaChartLine, FaGraduationCap, FaDownload, FaEye } from 'react-icons/fa';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = useMemo(() => [
    { text: 'Developer', icon: FaCode, color: '#00d4ff' },
    { text: 'Designer', icon: FaPalette, color: '#ff6b6b' },
    { text: 'Digital Marketer', icon: FaChartLine, color: '#4ecdc4' },
    { text: 'ECE Student', icon: FaGraduationCap, color: '#ffd700' }
  ], []);

  // Typewriter effect
  useEffect(() => {
    const currentRoleText = roles[currentRole].text;
    let timeout;

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        setIsTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div className="hero-greeting">
              <motion.span 
                className="greeting-text"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="name-highlight">Sharon Anto</span>
            </motion.h1>

            <div className="hero-role-container">
              <motion.span 
                className="role-prefix"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm a 
              </motion.span>
              
              <div className="role-display">
                <motion.span 
                  className="role-text"
                  style={{ color: roles[currentRole].color }}
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayText}
                  <motion.span 
                    className="cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.span>
                
                <motion.div 
                  className="role-icon"
                  key={`icon-${currentRole}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ color: roles[currentRole].color }}
                >
                  {React.createElement(roles[currentRole].icon)}
                </motion.div>
              </div>
            </div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Passionate about creating innovative solutions that bridge technology and business. 
              Specializing in electronics engineering, digital marketing strategies, and modern web development.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaEye />
                View My Work
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                className="btn btn-secondary"
                download="Sharon_Anto_Resume.pdf"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Stats */}
            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo and Visual Elements */}
          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            <div className="hero-image-container">
              {/* Animated Background Elements */}
              <motion.div 
                className="bg-element bg-element-1"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                className="bg-element bg-element-2"
                animate={{ 
                  rotate: -360,
                  y: [-10, 10, -10]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                className="bg-element bg-element-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Main Photo */}
              <motion.div 
                className="hero-photo"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
                }}
              >
                <img 
                  src="/photo.jpg" 
                  alt="Sharon Anto - Professional Portrait"
                  className="profile-image"
                />
                
                {/* Floating Role Icons */}
                <AnimatePresence>
                  {roles.map((role, index) => (
                    <motion.div
                      key={index}
                      className={`floating-icon floating-icon-${index + 1}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: currentRole === index ? 1 : 0.3,
                        scale: currentRole === index ? 1.2 : 1,
                        y: currentRole === index ? [-5, 5, -5] : 0
                      }}
                      transition={{ 
                        duration: 0.5,
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      style={{ color: role.color }}
                    >
                      {React.createElement(role.icon)}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="hero-decoration decoration-1"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                className="hero-decoration decoration-2"
                animate={{ 
                  rotate: [0, -360],
                  x: [-10, 10, -10]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection('education')}
          >
            ↓
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
