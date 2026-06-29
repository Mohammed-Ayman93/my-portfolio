import { Briefcase, Calendar } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Full-Stack MERN Intern',
    company: 'Information Technology Institute (ITI) – MCIT',
    period: 'Jan 2026 – Jun 2026',
    description: [
      'Build MERN applications using MongoDB, Express.js, React.js, and Node.js',
      'Develop RESTful APIs, authentication features, and responsive user interfaces',
      'Served as team leader for the track, coordinating tasks and supporting team collaboration'
    ]
  },
  {
    role: 'Software Fundamentals Track Intern',
    company: 'Information Technology Institute (ITI) – MCIT',
    period: 'Jul 2025 – Oct 2025',
    description: [
      'Completed intensive training in programming, problem-solving, and software engineering fundamentals'
    ]
  },
  {
    role: 'Owner and Manager',
    company: 'ASTEKA Store',
    period: 'Oct 2020 – Dec 2022',
    description: [
      'Managed business operations, sales, customer service, and inventory'
    ]
  },
  {
    role: 'Owner and Manager',
    company: 'AMWAG Store',
    period: 'Jan 2017 – Dec 2019',
    description: [
      'Led operations, supplier coordination, stock monitoring, and sales'
    ]
  }
];

const Experience = () => {
  const revealRef = useReveal();

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className={`reveal ${styles.timeline}`} ref={revealRef}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              
              <div className={`${styles.timelineContent} glass-panel`}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.period}>
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <h4 className={styles.company}>{exp.company}</h4>
                
                <ul className={styles.descriptionList}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
