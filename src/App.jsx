import React, { useState } from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import ContactEducation from "./components/ContactEducation";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="line" style={{ left: "20%" }}></div>
        <div className="line" style={{ left: "40%", animationDelay: "2s" }}></div>
        <div className="line" style={{ left: "60%", animationDelay: "4s" }}></div>
        <div className="line" style={{ left: "80%", animationDelay: "6s" }}></div>

        <div className="square" style={{ left: "15%" }}></div>
        <div className="square" style={{ left: "35%", animationDelay: "3s" }}></div>
        <div className="square" style={{ left: "55%", animationDelay: "5s" }}></div>
        <div className="square" style={{ left: "75%", animationDelay: "7s" }}></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Profile section (always visible) */}
          <div className="w-full lg:w-[350px] flex flex-col items-center gap-6">
            <LeftPanel />
            {/* Contact shows here only for desktop */}
            <div className="hidden lg:block w-full">
              <ContactEducation />
            </div>
          </div>

          {/* Right side content */}
          <div className="flex-1 flex flex-col items-center">
            <RightPanel activeTab={activeTab} />

            {/* Contact below content on mobile */}
            <div className="w-full mt-8 block lg:hidden">
              <ContactEducation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
