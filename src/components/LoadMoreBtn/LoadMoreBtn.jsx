import PropTypes from "prop-types";

import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onLoading, setPage }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => setPage((prevPage) => prevPage + 1)}
      disabled={onLoading}
    >
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
  onLoading: PropTypes.bool,
  setPage: PropTypes.func,
};

export default LoadMoreBtn;
