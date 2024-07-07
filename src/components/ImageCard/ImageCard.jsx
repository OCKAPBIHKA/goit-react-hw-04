import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

function ImageCard({ photo, modal, onOpen }) {
  function clickHandler() {
    if (!modal) {
      onOpen(photo);
    }
  }

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={modal ? photo.fullImg : photo.thumbImg}
        alt={photo.alt}
        onClick={clickHandler}
      />
    </div>
  );
}

ImageCard.propTypes = {
  photo: PropTypes.object,
  modal: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default ImageCard;
