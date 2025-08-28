import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and explore opportunities together</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-card">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in connecting with fellow professionals, exploring collaboration opportunities, 
                and discussing innovative projects in technology and digital marketing.
              </p>
              
              <div className="contact-details">
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <span>Email</span>
                    <a href="mailto:sharon.anto@email.com">sharon.anto@email.com</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <span>Location</span>
                    <p>Vellore, Tamil Nadu, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="contact-text">
                    <span>Institution</span>
                    <p>Vellore Institute of Technology</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="social-links">
                <motion.a
                  href="https://github.com/sharon-anto"
                  className="social-link"
                  title="GitHub"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sharon-anto"
                  className="social-link"
                  title="LinkedIn"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:sharon.anto@email.com"
                  className="social-link"
                  title="Gmail"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </motion.button>
              
              {submitStatus && (
                <motion.div
                  className={`form-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--primary-black);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-card {
          background: linear-gradient(145deg, var(--secondary-black), var(--accent-black));
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(212, 175, 55, 0.1);
          height: 100%;
        }

        .contact-card h3 {
          color: var(--accent-gold);
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-card p {
          color: var(--light-gray);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          transition: var(--transition-fast);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, var(--accent-gold), #f4d03f);
          color: var(--primary-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .contact-text span {
          display: block;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .contact-text p,
        .contact-text a {
          color: var(--light-gray);
          margin: 0;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .contact-text a:hover {
          color: var(--accent-gold);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
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

        .social-link:hover {
          box-shadow: var(--shadow-glow);
        }

        .contact-form {
          background: linear-gradient(145deg, var(--secondary-black), var(--accent-black));
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--dark-gray);
          border: 2px solid transparent;
          border-radius: 10px;
          color: var(--white);
          font-family: var(--font-primary);
          transition: var(--transition-fast);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--medium-gray);
        }

        .contact-form .btn {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .contact-form .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-status {
          margin-top: 1rem;
          padding: 0.75rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }

        .form-status.success {
          background: rgba(76, 175, 80, 0.1);
          color: var(--success);
          border: 1px solid rgba(76, 175, 80, 0.3);
        }

        .form-status.error {
          background: rgba(244, 67, 54, 0.1);
          color: var(--danger);
          border: 1px solid rgba(244, 67, 54, 0.3);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-card,
          .contact-form {
            padding: 1.5rem;
          }

          .contact-card h3 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .contact-card,
          .contact-form {
            padding: 1rem;
          }

          .contact-item {
            gap: 0.75rem;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
