import React from "react";

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    "About Me",
    "Skills",
    "Experience",
    "Seminar / Training",
    "My Project Design",
  ];

  return (
    <header
      className="
      mx-auto
    w-[90%] md:w-[80%] lg:w-[54%]
        flex justify-center
        mb-6
        bg-neutral-900/70 backdrop-blur-md
        px-3 py-2 rounded-2xl
        shadow-lg shadow-black/30
      "
    >
      <div
        className="
          flex flex-wrap justify-center
          gap-2 md:gap-3
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
      </div>
    </header>
  );
}

export default Header;
