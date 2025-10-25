import React from "react";

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    "About Me",
    "Skills",
    "Experience",
    "Seminar / Training",
    "Project",
    "Personal Data",
  ];

  return (
    <header
      className="
        flex flex-wrap justify-center md:justify-start 
        gap-2 md:gap-3 mb-6
        overflow-x-auto no-scrollbar
        bg-neutral-900/70 backdrop-blur-md 
        px-3 py-2 rounded-2xl
        shadow-lg shadow-black/30
      "
    >
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item)}
          className={`
            whitespace-nowrap
            px-4 md:px-5 py-2 md:py-2.5
            rounded-xl font-semibold text-sm md:text-base
            transition-all duration-300 ease-in-out
            ${
              activeTab === item
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/30 scale-105"
                : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white hover:shadow-sm"
            }
          `}
        >
          {item}
        </button>
      ))}
    </header>
  );
}

export default Header;
