import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css';
import { useReveal } from '../../hooks/useReveal';
import avatarImg from '../../assets/developer_avatar.png';

const Hero = () => {
  const revealRef = useReveal();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      
      <div className={`container ${styles.heroContainer} reveal`} ref={revealRef}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Available for Full-Time Roles
          </div>
          
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Mohammed Ayman Mokhtar</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            Full-Stack Developer (MERN Stack)
          </h2>
          
          <p className={styles.tagline}>
            Turning ideas into responsive full-stack products.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/cv.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={18} />
            </a>
          </div>
          
          <div className={styles.socials}>
            <a href="https://github.com/Mohammed-Ayman93" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohammd-ayman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:m7md.ayman1993@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imageBlob}></div>
          <img 
            src={avatarImg} 
            alt="Mohammed Ayman - Developer Illustration" 
            className={styles.avatar}
          />
          
          <div className={styles.floatingCard1}>
            <span>React</span>
          </div>
          <div className={styles.floatingCard2}>
            <span>Node.js</span>
          </div>

          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.dot} ${styles.dotRed}`}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`}></span>
              <span className={styles.terminalTitle}>bash</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;_</span>
                <span className={styles.terminalCommand}>npm run dev</span>
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.success}>ready</span> in 45ms
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className={styles.scrollDown} aria-label="Scroll Down">
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
