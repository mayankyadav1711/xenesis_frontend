import React from "react";

const PopCard = () => {
  return (
    <div>
      <div
        id="ConfirmationModal"
        className="fixed inset-0 z-[100] flex flex-col opacity-0 h-0 py-0 items-center justify-center overflow-hidden px-4  sm:px-5"
      >
        <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300" />
        <div className="relative max-w-md rounded-lg bg-white pt-10 pb-4 text-center transition-all duration-300 dark:bg-navy-700">
          <div className="avatar h-20 w-20 mx-auto">
            <img
              className="rounded-full"
              src="/static/avatars/{{profilePic}}.png"
              alt="avatar"
            />
          </div>
          <div className="mt-4 px-14 sm:px-4">
            <h3 className="text-lg text-slate-800 dark:text-navy-50">
              Are you sure you want to register
            </h3>
          </div>
          <div className="my-4 mt-16 h-px bg-slate-200 dark:bg-navy-500" />
          <div className="space-x-3">
            <button
              onclick="ConfirmationModalToggle()"
              className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
            >
              Cancel
            </button>
            <button
              onclick="confirmPayment()"
              className="btn min-w-[7rem] rounded-full bg-green-500 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopCard;
