import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './styles/YouTubePlayerWithThumbnail.module.css'; // Import the CSS module

const YouTubePlayerWithThumbnail = ({ videoId, width = "100%" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const thumbnailUrl = 'https://baybuilders.com/wp-content/uploads/2022/12/file2.webp';

  return (
    <div style={{ width, margin: "0 auto" }}> {/* Ensure the component is centered */}
      <div className={styles.videoContainer}>
        {!isPlaying && (
          <div className={styles.thumbnailOverlay} onClick={handlePlay}>
            <img src={thumbnailUrl} alt="Video thumbnail" className={styles.thumbnail} />
            <div className={styles.playButton}>▶</div>
          </div>
        )}
        {isPlaying && <YouTube videoId={videoId} opts={opts} className={styles.youtubePlayer} />}
      </div>
    </div>
  );
};

export default YouTubePlayerWithThumbnail;
