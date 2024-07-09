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
        src={photo.urls?.small || photo.thumbImg}
        onClick={clickHandler}
      />
    </div>
  );
}

ImageCard.propTypes = {
  photo: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ImageCard;
