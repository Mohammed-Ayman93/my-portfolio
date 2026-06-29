import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useReveal } from '../../hooks/useReveal';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'OstaFinder',
    description: 'The final MERN full-stack internship project. Features a user front-end, backend REST APIs, and an admin dashboard. Built with team collaboration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Admin Dashboard'],
    github: 'https://github.com/Mohammed-Ayman93',
    demo: '#',
    featured: true,
  },
  {
    title: 'E-Commerce',
    description: 'An Angular e-commerce project featuring a responsive UI, product browsing, and shopping cart features.',
    tags: ['Angular', 'TypeScript', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Mohammed-Ayman93',
    demo: '#',
    featured: false,
  },
  {
    title: 'Blog Post App',
    description: 'A full-stack blog post application with a React.js front-end and a separate back-end repository.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Mohammed-Ayman93',
    demo: '#',
    featured: false,
  },
  {
    title: 'To-Do-List',
    description: 'An Angular task management application built with CRUD operations, MockAPI integration, and Angular Reactive Forms.',
    tags: ['Angular', 'TypeScript', 'MockAPI', 'Reactive Forms'],
    github: 'https://github.com/Mohammed-Ayman93',
    demo: '#',
    featured: false,
  }
];

const Projects = () => {
  const revealRef = useReveal();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className={`reveal ${styles.projectGrid}`} ref={revealRef}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} glass-panel ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
