import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";

import "./ImageModal.css";

function ImageModal({ showModal, closeModal }) {
  return (
    <ReactModal
      isOpen={showModal.isOpen}
      contentLabel="Minimal Modal Example"
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      className={"modal"}
      overlayClassName={"overlay"}
      closeTimeoutMS={150}
    >
      <HiXMark
        title="Icon for close image"
        size={40}
        color="white"
        onClick={closeModal}
      />

      {showModal.photo && (
        <img
          src={showModal.photo.src}
          alt={showModal.photo.alt}
          className={`image ${showModal.modal && "modal-image"}`}
        />
      )}
    </ReactModal>
  );
}

ImageModal.propTypes = {
  showModal: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ImageModal;
