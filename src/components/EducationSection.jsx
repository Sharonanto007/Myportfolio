import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaSchool } from 'react-icons/fa';

const EducationSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      period: "Aug 2024 - May 2028",
      title: "Bachelor of Technology",
      subtitle: "Electronics & Communications Engineering",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu",
      description: "Pursuing comprehensive engineering education with focus on electronics, communications, and emerging technologies. Actively engaged in practical projects and research.",
      progress: 45,
      icon: FaGraduationCap,
      type: "current",
      skills: []
    },
    {
      id: 2,
      period: "2024 - Present",
      title: "Digital Marketing Certification",
      subtitle: "iDigitalPreneur Platform",
      institution: "Online Learning",
      location: "",
      description: "Building expertise in digital marketing strategies, social media marketing, affiliate marketing, and online business development through comprehensive online courses.",
      progress: 0,
      icon: FaLaptopCode,
      type: "ongoing",
      skills: ["Digital Marketing", "Social Media", "Affiliate Marketing"]
    },
    {
      id: 3,
      period: "2010 - 2024",
      title: "Academic Foundation",
      subtitle: "Secondary & Higher Secondary Education",
      institution: "Thanjavur, Tamil Nadu",
      location: "",
      description: "Strong academic foundation with focus on science and mathematics, developing analytical thinking and problem-solving skills that support current engineering studies.",
      progress: 0,
      icon: FaSchool,
      type: "completed",
      skills: []
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Educational Journey</h2>
          <p className="section-subtitle">My academic path and professional development</p>
        </motion.div>
        
        <div className="education-timeline">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${visibleItems.includes(index) ? 'active' : ''} ${item.type}`}
              data-index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`timeline-marker ${item.type}`}>
                <item.icon />
              </div>
              <div className="timeline-content">
                <motion.div 
                  className="timeline-card"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="timeline-date">{item.period}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p className="institution">{item.institution}</p>
                  {item.location && <p className="location">{item.location}</p>}
                  <p className="description">{item.description}</p>
                  
                  {item.progress > 0 && (
                    <div className="progress-container">
                      <div className="progress-bar">
                        <motion.div 
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="progress-text">Current Progress: {item.progress}%</span>
                    </div>
                  )}
                  
                  {item.skills.length > 0 && (
                    <div className="skills-achieved">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="skill-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education {
          background: linear-gradient(135deg, var(--secondary-black), var(--primary-black));
        }

        .education-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--accent-gold), #f4d03f);
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(50px);
          transition: var(--transition-slow);
        }

        .timeline-item.active {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-black);
          font-size: 1.5rem;
          box-shadow: var(--shadow-medium);
          z-index: 2;
        }

        .timeline-marker.current {
          animation: currentPulse 2s ease-in-out infinite;
          box-shadow: var(--shadow-glow);
        }

        @keyframes currentPulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.1); }
        }

        .timeline-content {
          width: 45%;
          position: relative;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
        }

        .timeline-card {
          background: linear-gradient(145deg, var(--accent-black), var(--secondary-black));
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .timeline-card:hover::before {
          left: 100%;
        }

        .timeline-card:hover {
          border-color: var(--accent-gold);
        }

        .timeline-date {
          display: inline-block;
          background: var(--accent-gold);
          color: var(--primary-black);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-card h3 {
          color: var(--accent-gold);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .timeline-card h4 {
          color: var(--accent-blue);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .institution {
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.25rem;
        }

        .location {
          color: var(--medium-gray);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .description {
          color: var(--light-gray);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .progress-container {
          margin-top: 1.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: var(--dark-gray);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-gold), #f4d03f);
          border-radius: 4px;
          transition: width 2s ease;
          animation: progressGlow 2s ease-in-out infinite;
        }

        @keyframes progressGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.6); }
        }

        .progress-text {
          font-size: 0.9rem;
          color: var(--medium-gray);
        }

        .skills-achieved {
          margin-top: 1rem;
        }

        .skill-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          margin: 0.2rem 0.3rem 0.2rem 0;
          border: 1px solid rgba(212, 175, 55, 0.3);
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .skill-badge:hover {
          background: var(--accent-gold);
          color: var(--primary-black);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }

          .timeline-marker {
            left: 30px;
            transform: none;
          }

          .timeline-content {
            width: calc(100% - 100px);
            margin-left: 100px !important;
          }
        }

        @media (max-width: 480px) {
          .timeline-card {
            padding: 1.5rem;
          }

          .timeline-marker {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
