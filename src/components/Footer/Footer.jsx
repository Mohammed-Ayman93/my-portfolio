import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.logoInfo}>
            <a href="#home" className={styles.logoContainer}>
              <img src={logoImg} alt="MA Logo" className={styles.logoImage} />
              <span className={styles.logoText}>M.Ayman</span>
            </a>
            <p>Junior MERN Developer ready for work.</p>
          </div>
          
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Mohammed Ayman Mokhtar. All rights reserved.
          </div>
        </div>
      </div>
      
      <button 
        className={`${styles.scrollTop} ${showScrollTop ? styles.show : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
