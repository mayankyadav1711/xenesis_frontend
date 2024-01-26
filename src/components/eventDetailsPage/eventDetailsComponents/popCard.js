import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const PopCard = ({ closeModal }) => {
  return (
    <Modal
      isOpen={true} // Change this to control the modal visibility
      onRequestClose={closeModal}
      contentLabel="Confirmation Modal"
      overlayClassName="fixed inset-0 bg-slate-900/60 transition-opacity duration-300 flex items-center justify-center"
      className="relative max-w-md rounded-lg bg-white pt-10 pb-4 text-center transition-all duration-300 dark:bg-navy-700 center"
      style={{ overlay: { zIndex: 100 } }}
    >
      <div className="">
        <div className="avatar h-20 w-20 mx-auto">
          <img
            className="rounded-full"
            src="/static/avatars/{{profilePic}}.png"
            alt="avatar"
          />
        </div>
        <div className="mt-4 px-14 sm:px-4">
          <h3 className="text-lg font-normal text-black">
            Are you sure you want to register?
          </h3>
        </div>
        <div className="my-4 h-px bg-slate-200 dark:bg-navy-500" />
        <div className="space-x-3">
          <button
            onClick={closeModal}
            className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="btn min-w-[7rem] rounded-full bg-green-500 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PopCard;
