import React, { useState } from "react";
import Modal from "react-modal";
import PopCard from "./popCard";

const EventCart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="fixed bottom-5 right-5 group !outline-none z-50 px-10 py-3 border rounded-lg text-white text-lg add-to-cart-btn animate-bounce bg-green-500"
      >
        <i className="transition-all duration-200 bi bi-paypal group-hover:mr-1" />
        Pay
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        overlayClassName="fixed inset-0 bg-slate-900/60 transition-opacity duration-300 flex items-center justify-center"
        className="relative max-w-md rounded-lg bg-white pt-10 pb-4 text-center transition-all duration-300 dark:bg-navy-700 center"
        style={{ overlay: { zIndex: 100 } }}
      >
        <PopCard closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default EventCart;
