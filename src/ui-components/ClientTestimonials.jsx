import React from 'react';
import styles from './styles/ClientTestimonials.module.css'; // Import the CSS module

const ClientTestimonials = ({ width = '100%', height = 'auto' }) => {
  const testimonials = [
    {
      id: 1,
      videoId: 'rXrelg7t5l8',
      videoUrl: 'https://youtu.be/rXrelg7t5l8'
    },
    {
      id: 2,
      videoId: 'j9J_pxs-xcc',
      videoUrl: 'https://youtu.be/j9J_pxs-xcc'
    },
    {
      id: 3,
      videoId: 'FdJ0NmJuciM',
      videoUrl: 'https://youtu.be/FdJ0NmJuciM'
    },
  ];

  return (
    <section className={styles.clientTestimonialsSection} style={{ width, height }}>
      <div className={styles.header}>
        <h2>Hear What Our Bay Area Clients Have to Say</h2>
        <p>“The 3 words I use to describe Bay Builders & Remodeling are 'creative, quality, professionalism'”</p>
      </div>
      <div className={styles.videoGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.videoContainer}>
            <div className={styles.thumbnailOverlay}>
              <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                  alt={`Testimonial ${testimonial.id}`}
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>▶</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
