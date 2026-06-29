import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Contact.module.css';

const Contact = () => {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("https://formsubmit.co/ajax/m7md.ayman1993@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();
      
      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success status message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: err.message || 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={`reveal ${styles.contactContainer}`} ref={revealRef}>
          <div className={`${styles.contactInfo} glass-panel`}>
            <h3>Let's talk about everything!</h3>
            <p className={styles.contactDesc}>
              Feel free to reach out for full-time opportunities. I'm currently looking for a Junior MERN Stack Developer role.
            </p>
            
            <div className={styles.infoItems}>
              <a href="mailto:m7md.ayman1993@gmail.com" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <span>m7md.ayman1993@gmail.com</span>
              </a>
              
              <a href="tel:01069920297" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <span>01069920297</span>
              </a>
              
              <a href="https://wa.me/201069920297" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MessageCircle size={20} />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <form className={`${styles.contactForm} glass-panel`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="Hello Mohammed..." 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status.submitting}
              style={{ opacity: status.submitting ? 0.7 : 1, cursor: status.submitting ? 'not-allowed' : 'pointer' }}
            >
              {status.submitting ? (
                <>
                  Sending... <Loader2 className={styles.spinner} size={18} />
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {status.success && (
              <div className={`${styles.statusMessage} ${styles.successMessage}`}>
                <CheckCircle size={18} />
                <span>Message sent successfully!</span>
              </div>
            )}

            {status.error && (
              <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
