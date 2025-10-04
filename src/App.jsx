import React, { useState } from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import "./index.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col p-6 relative overflow-hidden">
      {/* Background animation (layered sa likod) */}
      <div className="animated-bg">
        {/* Few lines */}
        <div className="line" style={{ left: "20%" }}></div>
        <div className="line" style={{ left: "40%", animationDelay: "2s" }}></div>
        <div className="line" style={{ left: "60%", animationDelay: "4s" }}></div>
        <div className="line" style={{ left: "80%", animationDelay: "6s" }}></div>

        {/* Few squares */}
        <div className="square" style={{ left: "15%" }}></div>
        <div className="square" style={{ left: "35%", animationDelay: "3s" }}></div>
        <div className="square" style={{ left: "55%", animationDelay: "5s" }}></div>
        <div className="square" style={{ left: "75%", animationDelay: "7s" }}></div>
      </div>

      {/* Foreground content (lagi sa ibabaw) */}
      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-1 gap-6">
          <LeftPanel />
          <RightPanel activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default App;
