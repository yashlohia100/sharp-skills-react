import styles from "./VideoBox.module.css";

function VideoBox() {
  return (
    <div className={styles.videoBox}>
      <h1>video box</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=_C_MJ2ydxb9_EUGZ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBox;
