import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Bars as BarsLoader } from "react-loader-spinner";
import ReactModal from "react-modal";

import { fetchPhotos } from "./api/unsplash-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

ReactModal.setAppElement("#root");

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState({ isOpen: false, photo: null });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function updateQuery(string) {
    setPage(1);
    setQuery(string);
  }

  useEffect(() => {
    if (query) {
      makeRequest(query, page);
    }
  }, [query, page]);

  function makeRequest(query, page) {
    setLoading(true);
    setError(false);

    fetchPhotos(query, page)
      .then((data) => {
        if (data.length === 0) {
          return toast.error("No results for your query!", {
            duration: 3500,
            position: "top-right",
          });
        }

        if (page > 1) {
          setPhotos((prevPhotos) => [...prevPhotos, ...data]);
        } else {
          setPhotos(data);
        }
      })
      .catch((e) => {
        setError(true);
        toast.error(e.message, {
          duration: 3000,
          position: "top-right",
        });
      })
      .finally(() => setLoading(false));
  }

  function openImage(photo) {
    setShowModal({ isOpen: true, photo });
  }

  function closeImage() {
    setShowModal({ isOpen: false, photo: null });
  }

  return (
    <>
      <SearchBar onSubmit={updateQuery} />
      {error && <ErrorMessage />}
      {photos.length > 0 && !error && (
        <ImageGallery photos={photos} onOpen={openImage} />
      )}
      <BarsLoader
        visible={loading}
        height="130"
        width="130"
        color="#6872d0"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="load-wrapper"
      />
      {photos.length > 0 && !error && (
        <LoadMoreBtn
          onLoadMore={() => setPage((prevPage) => prevPage + 1)}
          onLoading={loading}
        />
      )}
      <Toaster />
      <ImageModal showModal={showModal} closeModal={closeImage} />
    </>
  );
}

export default App;
