import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Sharon Anto
              </motion.h3>
              <p>B.Tech ECE Student & Digital Marketing Enthusiast</p>
              <p>Building bridges between technology and innovation</p>
            </div>
            
            <div className="footer-social">
              <motion.a
                href="https://github.com/sharon-anto"
                className="footer-social-link"
                title="GitHub"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sharon-anto"
                className="footer-social-link"
                title="LinkedIn"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:sharon.anto@email.com"
                className="footer-social-link"
                title="Email"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>&copy; {currentYear} Sharon Anto. All rights reserved.</p>
            <p className="footer-love">
              Built with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ color: '#ff6b6b', display: 'inline-block' }}
              >
                <FaHeart />
              </motion.span> for technology and innovation
            </p>
          </motion.div>
        </div>
        
        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          title="Back to Top"
        >
          ↑
        </motion.button>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--primary-black), #000000);
          padding: 3rem 0 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          position: relative;
        }

        .footer-content {
          text-align: center;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand h3 {
          color: var(--accent-gold);
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-brand p {
          color: var(--medium-gray);
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .footer-social-link {
          width: 45px;
          height: 45px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          color: var(--primary-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: var(--transition-fast);
          text-decoration: none;
        }

        .footer-social-link:hover {
          box-shadow: var(--shadow-glow);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .footer-bottom p {
          color: var(--medium-gray);
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }

        .footer-love {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .back-to-top {
          position: absolute;
          top: -25px;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          color: var(--primary-black);
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-medium);
        }

        .back-to-top:hover {
          box-shadow: var(--shadow-glow);
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-brand h3 {
            font-size: 1.6rem;
          }

          .back-to-top {
            right: 1rem;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1.5rem;
          }

          .footer-brand h3 {
            font-size: 1.4rem;
          }

          .footer-social-link {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .back-to-top {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }

          .footer-love {
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
