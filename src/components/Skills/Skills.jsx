import { useReveal } from '../../hooks/useReveal';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'HTML5', 'CSS', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Responsive Design', 'UI/UX Principles']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'GraphQL', 'Unit Tests']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL']
  },
  {
    title: 'Programming',
    skills: ['C', 'C++', 'OOP', 'Problem Solving', 'Debugging', 'Software Development', 'Web Development']
  },
  {
    title: 'Tools & CMS',
    skills: ['Git', 'GitHub', 'WordPress']
  }
];

const Skills = () => {
  const revealRef = useReveal();

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className={`reveal ${styles.skillsGrid}`} ref={revealRef}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.skillCategory} glass-panel`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillBadges}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
