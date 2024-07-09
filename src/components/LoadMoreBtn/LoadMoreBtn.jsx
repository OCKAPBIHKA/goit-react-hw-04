import PropTypes from "prop-types";
import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onLoadMore, onLoading }) {
  const handleClick = (event) => {
    if (onLoading) return;
    onLoadMore(event);
  };

  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
