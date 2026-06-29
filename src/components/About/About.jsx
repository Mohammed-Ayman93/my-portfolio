import { MapPin, Code2, Server } from 'lucide-react';
import styles from './About.module.css';
import { useReveal } from '../../hooks/useReveal';

const About = () => {
  const revealRef = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={`${styles.aboutContainer} reveal`} ref={revealRef}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Code2 size={24} className={styles.icon} />
              </div>
              <h3>Passionate Developer</h3>
            </div>
            <p>
              I am a passionate Full-Stack MERN Developer with hands-on experience building scalable and responsive web applications using React, Node.js, Express, and MongoDB.
            </p>
          </div>
          
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Server size={24} className={styles.icon} />
              </div>
              <h3>ITI Graduate</h3>
            </div>
            <p>
              Completed a Full-Stack MERN internship at ITI (Information Technology Institute), working on real-world projects, REST APIs, authentication systems, and clean architecture.
            </p>
          </div>
          
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <MapPin size={24} className={styles.icon} />
              </div>
              <h3>Location & Relocation</h3>
            </div>
            <p>
              Currently based in Al Mansoura, Egypt. <br/>
              <strong>Ready and open to relocate</strong> for full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
