"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/ui/ui-videocomponent-lowerback/video-component-lowerback.css";

export default function VideoComponent() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const handleVideoEnd = () => {
    router.push("./step-four");
  };

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
      videoRef.current.currentTime -= 10;
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        src="@/assets/lowerback.mov"
        controls={false}
        width="408"
        height="704"
        onEnded={handleVideoEnd}
      />
      <div className={styles.overlay}>
        <img
          src="/assets/background-of-playbutton.svg"
          alt=""
          className={styles.overlayBg}
          aria-hidden="true"
          draggable="false"
        />

        <div className={styles.buttonRow}>
          <div className={styles.leftBtn}>
            <button
              onClick={handleBackward}
              className={styles.controlBtn}
              aria-label="Backward"
            >
              <img src="../icons/backward.svg" alt="Backward" />
            </button>
          </div>
          <div className={styles.centerBtn}>
            <button
              onClick={handlePlayPause}
              className={`${styles.controlBtn} ${styles.playBtn}`}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <img
                src={isPlaying ? "../icons/pause.svg" : "../icons/play.svg"}
                alt={isPlaying ? "Pause" : "Play"}
              />
            </button>
          </div>
          <div className={styles.rightBtn}>
            <button
              onClick={handleForward}
              className={styles.controlBtn}
              aria-label="Forward"
            >
              <img src="../icons/forward.svg" alt="Forward" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
