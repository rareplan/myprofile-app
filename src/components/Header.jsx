import React from "react";

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    "About Me",
    "Skills",
    "Experience/Internship",
    "Seminar / Training",
    "Project",
    "Personal Data",
  ];

  return (
    <header className="flex flex-wrap gap-3 mb-6">
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item)}
          className={`px-4 py-2 rounded-lg transition ${
            activeTab === item
              ? "bg-blue-600 text-white"
              : "bg-neutral-800 hover:bg-neutral-700"
          }`}
        >
          {item}
        </button>
      ))}
    </header>
  );
}

export default Header;
