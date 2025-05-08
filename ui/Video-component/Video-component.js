import React, { useRef, useState } from "react";
import styles from "./Video-component.module.css";

export default function VideoComponent() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Go back 10 seconds
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Go forward 10 seconds
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        src="/assets/neck-exercise.mp4"
        controls={false}
        width="100%"
        height="100%"
      />
      <div className={styles.overlay}>
        <button
          onClick={handleBackward}
          className={styles.controlBtn}
          aria-label="Backward"
        >
          <img src="/icons/backward.svg" alt="Backward" />
        </button>
        <button
          onClick={handlePlayPause}
          className={styles.controlBtn}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <img
            src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </button>
        <button
          onClick={handleForward}
          className={styles.controlBtn}
          aria-label="Forward"
        >
          <img src="/icons/forward.svg" alt="Forward" />
        </button>
      </div>
    </div>
  );
}
