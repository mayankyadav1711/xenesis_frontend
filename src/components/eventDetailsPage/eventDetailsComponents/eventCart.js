import React from "react";

const EventCart = () => {
  return (
    <div class="w-full h-full relative z-50">
      <button
        onclick="ConfirmationModalToggle()"
        className="fixed bottom-5 right-5 group !outline-none z-50 px-10 py-3 border rounded-lg text-white text-lg add-to-cart-btn animate-bounce bg-green-500"
      >
        <i className="transition-all duration-200 bi bi-paypal group-hover:mr-1" />
        Pay
      </button>
    </div>
  );
};

export default EventCart;
