import React from "react";
import { IoClose } from "react-icons/io5";

const SearchPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "search-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="search-overlay"
      className="fixed inset-0 z-50 bg-[#000000a8] flex items-end justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full sm:max-w-xl md:max-w-2xl mx-4 sm:mx-6 rounded-t-2xl shadow-lg relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#a70d65]"
        >
          <IoClose size={28} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Search Your Query
        </h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full border border-gray-300 px-4 py-2 rounded text-black focus:outline-none focus:ring-1 focus:ring-[#a70d65]"
          />
          <button className="bg-[#a70d65] text-white hover:bg-black px-6 py-2 rounded w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
