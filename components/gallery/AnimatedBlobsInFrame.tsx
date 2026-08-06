import styles from "./GalleryAnimations.module.css";

export function AnimatedBlobsInFrame() {
  return (
    <div
      className={styles.blobStage}
      role="img"
      aria-label="A phone frame containing softly animated pink, violet, and blue light"
    >
      <div className={styles.phoneFrame} aria-hidden="true">
        <div className={styles.phoneScreen}>
          <div className={styles.blobField}>
            <div className={`${styles.blob} ${styles.blobOne}`} />
            <div className={`${styles.blob} ${styles.blobTwo}`} />
            <div className={`${styles.blob} ${styles.blobThree}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
