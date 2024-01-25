import React from "react";

const EventCart = () => {
  return (
    <div class="w-full h-full relative z-50">
      <button class="fixed bottom-5 right-5 group !outline-none z-50 px-10 py-3 border rounded-lg bg-[#221144] text-white text-lg add-to-cart-btn animate-bounce">
        <span class="flex items-center gap-1">
          Add Event to
          <i class="bi bi-cart2 mx-1 group-hover:drop-shadow-2xl group-hover:text-2xl transition-all duration-300"></i>
        </span>
      </button>
    </div>
  );
};

export default EventCart;
