import React from 'react';
import styles from './styles/FeaturedProjects.module.css'; // Import the CSS module

import showcase1 from '../../public/imgs/showcase1.jpg';
import showcase2 from '../../public/imgs/showcase2.jpg';
import showcase3 from '../../public/imgs/showcase3.jpeg';
import showcase4 from '../../public/imgs/showcase4.jpg';
import showcase5 from '../../public/imgs/showcase5.jpg';
import showcase6 from '../../public/imgs/showcase6.jpg';
import showcase7 from '../../public/imgs/showcase7.jpeg';
import showcase8 from '../../public/imgs/showcase8.jpg';
import mainImage from '../../public/imgs/showcase1.jpg'; // Add this line for the main image

const FeaturedProjects = () => {
  const projects = [
    { id: 1, src: showcase1, alt: 'Project 1' },
    { id: 2, src: showcase2, alt: 'Project 2' },
    { id: 3, src: showcase3, alt: 'Project 3' },
    { id: 4, src: showcase4, alt: 'Project 4' },
    { id: 5, src: showcase5, alt: 'Project 5' },
    { id: 6, src: showcase6, alt: 'Project 6' },
    { id: 7, src: showcase7, alt: 'Project 7' },
    { id: 8, src: showcase8, alt: 'Project 8' },
  ];

  return (
    <section className={styles.featuredProjects}>
      <h2 className={styles.title}>FEATURED PROJECTS</h2>
      <p className={styles.subtitle}>We're pleased to share a few of our best homes.</p>
      <div className={styles.mainProject}>
        <div className={styles.projectInfo}>
          <h3>New Home Construction</h3>
          <h4>Modern Farmhouse</h4>
          <p>
            Our most recent new home build embodies the essence of a modern farmhouse, showcasing unique designs and incorporating energy-efficient features. This approach not only enhances the affordability of living but also enriches the overall living experience.
          </p>
          <button className={styles.quoteButton}>GET A QUOTE</button>
        </div>
        <img className={styles.mainImage} src={mainImage} alt="Modern Farmhouse" />
      </div>
      <div className={styles.gallery}>
        {projects.map(project => (
          <img key={project.id} src={project.src} alt={project.alt} className={styles.galleryImage} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
