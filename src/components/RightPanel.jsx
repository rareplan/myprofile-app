import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import {AnimatePresence } from "framer-motion";
import "../design/profile.css";
import "../design/intership.css";
import "../design/seminar-elem.css";
import "../design/responsive.css";
import exp1 from "../design/exp/exp1.png"
import exp2 from "../design/exp/exp2.png"
import exp3 from "../design/exp/exp3.png"
import exp4 from "../design/exp/exp4.png"
import aboutme from "../design/aboutme.png"
import y4it1 from "../design/image/y4it1.png"
import y4it2 from "../design/image/y4it2.png"
import dict1 from "../design/image/dict1.png"
import eduk from "../design/image/eduk.png"
import dict2 from "../design/image/dict2.png"
import simpli1 from "../design/image/simpli1.png"
import simpli2 from "../design/image/simpli2.png"
import simpli3 from "../design/image/simpli3.png"
import simpli4 from "../design/image/simpli4.png"
import pdf from "../design/image/pdf.png"
import poster1 from "../design/qcreditposter/poster1.png"
import poster2 from "../design/qcreditposter/poster2.png"
import poster3 from "../design/qcreditposter/poster3.png"
import poster4 from "../design/qcreditposter/poster4.png"
import poster5 from "../design/qcreditposter/poster5.png"
import poster6 from "../design/qcreditposter/poster6.png"
import flyer1 from "../design/flyers/flyer1.png"
import flyer2 from "../design/flyers/flyer2.png"
import flyer3 from "../design/flyers/flyer3.png"
import flyer4 from "../design/flyers/flyer4.png"
import flyer5 from "../design/flyers/flyer5.png"
import pic1 from "../design/pic1.jpg"
import pic2 from "../design/pic2.jpg"
import pic3 from "../design/pic3.jpg"
import page1 from "../design/compro/page1.png"
import page2 from "../design/compro/page2.png"
import page3 from "../design/compro/page3.png"
import page4 from "../design/compro/page4.png"
import page5 from "../design/compro/page5.png"
import page6 from "../design/compro/page6.png"
import ui1 from "../design/uiux/ui1.png"
import ui2 from "../design/uiux/ui2.png"
import socmed1 from "../design/socmed/socmed1.png"
import socmed2 from "../design/socmed/socmed2.png"
import socmed3 from "../design/socmed/socmed3.png"
import socmed4 from "../design/socmed/socmed4.png"
import socmed5 from "../design/socmed/socmed5.png"
import socmed6 from "../design/socmed/socmed6.png"



function RightPanel({ activeTab }) {
/* ================= FUCNTION SLIDE UI/UX DESIGNER ================= */
function SimpleCarousel({ images }) {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir) => {
    setCurrent([
      (current + dir + images.length) % images.length,
      dir,
    ]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-xl bg-black">
     <div className="relative aspect-video">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 90, damping: 28 },
            }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* LEFT */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-4 py-2 rounded-full"
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-4 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* ================= FUCNTION SLIDE TIKTOK ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
   useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const renderContent = () => {
    switch (activeTab) {

  case "About Me":
  return (
    <div className="aboutme-section space-y-6">
      {/* Text Section */}
      <p className="aboutme-elem text-justify">
        I am a diligent and dedicated Information Technology practitioner with a high level of interest in perpetual learning and expertise building in numerous fields of IT. My interests lie in programming, web development, UI/UX design, and other core fields in the field of IT. I look forward to using technology to solve problems, enhance systems, and make users' experiences better.

Although I continue to develop in experience, I am highly driven to work on projects that make processes easier and add value to users. I find that I am able to assist both users and teams by being patient, meticulous, and friendly—skills which are essential in any IT position.

Through my experience, I have learned hands-on skills in system maintenance, troubleshooting, and network support as well as ventured into front-end development, user interface design, and other fundamental areas in technology. I like to confront problems and solve them stepwise and have an open mind towards new ideas, tools, and technologies on the horizon.

I appreciate collaboration and open communication, knowing that technology is strongest when humans collaborate.
  </p>

<div className="relative flex flex-col md:flex-row items-center gap-8 mt-10 p-10 rounded-2xl shadow-2xl overflow-hidden">
  {/* Animated background */}
  <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#FF6500] via-[#1E3E62] to-[#0B192C]"></div>


  {/* Content wrapper para hindi madala ng background */}
  <div className="relative flex flex-col md:flex-row items-center gap-8 w-full">
    {/* Image */}
    <div className="w-full md:w-1/2 opacity-0 animate-slideZoomLeft">
      <img
        src={aboutme}
        alt="About Me"
        className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 opacity-0 animate-slideZoomRight text-white">
      <h3 className="text-3xl font-extrabold mb-4">
        As I go on to develop as a professional in the IT sector,
      </h3>
      <p className="leading-relaxed text-lg">
        my aspiration is to make valuable contributions to every team I join—enabling organizations to run more smoothly, more efficiently, and with a clear emphasis on user requirements.
      </p>
    </div>
  </div>
</div>
      {/* Carousel Section */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
       <div className="carousel relative w-full h-56 sm:h-64 md:h-80 lg:h-[28rem]">
          {/* Slide 1 */}
          <div className="slide absolute inset-0">
            <img
              src={pic1}
              alt="Tech Passion"
              className="w-full h-full object-cover"
            />
            <div className="overlay">
              <h3>Passionate IT Professional</h3>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide absolute inset-0">
            <img
              src={pic2}
              alt="Continuous Learning"
              className="w-full h-full object-cover"
            />
            <div className="overlay">
              <h3>Always Learning & Improving</h3>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide absolute inset-0">
            <img
              src={pic3}
              alt="Team Player"
              className="w-full h-full object-cover"
            />
            <div className="overlay">
              <h3>Problem Solver & Team Player</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 case "Skills":
  return (
    <div className="skills-container emoji-style">
      {[
        { icon: "🖥️", text: "Microsoft Office Suite: Proficient in MS Word, MS Excel, and MS PowerPoint" },
        { icon: "🗣️", text: "Communication & Interpersonal Skills: Strong verbal and written communication; effective team collaboration" },
        { icon: "👑", text: "Leadership: Demonstrated leadership abilities with a strong sense of responsibility" },
        { icon: "💻", text: "Web Development: Experienced in HTML, CSS, and JavaScript for web page design" },
        { icon: "🎬", text: "Video Editing: Skilled in multimedia video editing" },
        { icon: "🛰️", text: "Networking: Knowledgeable in network installation and setup" },
        { icon: "🎨", text: "Graphic Design: Proficient in Canva and Adobe Photoshop" },
        { icon: "🤖", text: "Chatbot Development: Experience creating chatbots using ManyChat" },
        { icon: "⚙️", text: "Automation Tools: Familiar with Make (formerly Integromat)" },
        { icon: "📊", text: "Data Visualization: Proficient in Google Data Studio" },
        { icon: "💾", text: "Database Management: Knowledge of PostgreSQL" },
        { icon: "🧩", text: "UI/UX Design: Skilled in using Figma for user interface and experience design" },
        { icon: "🎞️", text: "Motion Design: Experience with Jitter for animated UI and motion graphics" },
      ].map((skill, index) => (
        <div className="skill-card-emoji" key={index}>
          <div className="emoji-wrapper">
            <span className="emoji">{skill.icon}</span>
            <p className="skill-text">{skill.text}</p>
          </div>
        </div>
      ))}
    </div>
  );

  case "Experience":
  return (
    <div className="experience-elem space-y-16">
      {/* OJT Experience */}
      <div className="experience-card">
        <div className="experience-img left animate-slideInLeft">
          <img
            src={exp1}
            alt="LSPU"
          />
        </div>
        <div className="experience-content right animate-slideInRight">
          <h2>On-the-Job Training (OJT)</h2>
          <p className="nameschool-elem">
            Laguna State Polytechnic University – San Pablo Campus
          </p>
          <p className="date">September 2019 – December 2019</p>
          <ul className="experience-list">
            <li>Tracked alumni graduates through social media platforms</li>
            <li>Designed and edited the alumni magazine cover and seminar event materials</li>
            <li>Assisted with network installation in the ICTS and Alumni offices</li>
            <li>Created multimedia video presentation for LSPU events</li>
            <li>Sorted and organized documents for the Alumni Office</li>
          </ul>
        </div>
      </div>

      {/* FDS Asya */}
      <div className="experience-card reverse">
        <div className="experience-img right animate-slideInRight">
          <img
            src={exp2}
            alt="FDS Asya"
          />
        </div>
        <div className="experience-content left animate-slideInLeft">
          <h2>FDS Asya Philippines Inc.</h2>
          <p className="nameschool-elem">Position : Developer I</p>
          <p className="date">February 16 2021 - March 17, 2022</p>
          <ul className="experience-list">
            <li>Developed a new UI design for the Whitelist Webtool using HTML, CSS, and JavaScript</li>
            <li>Published Chablast in the chatbot system</li>
            <li>Integrated multiple modules using Integromat for dynamic webpage interaction</li>
            <li>Gathered data for chatbot performance reports</li>
            <li>Created interactive reports using Google Data Studio linked to the database</li>
            <li>Enhanced features of the Loan Whitelist Webtool for improved functionality</li>
            <li>Manage, maintain, and create database scripts using PostgreSQL</li>
          </ul>
        </div>
      </div>


    {/* Accenture */}
      <div className="experience-card">
        <div className="experience-img left animate-slideInLeft">
          <img
            src={exp3}
            alt="Accenture"
          />
        </div>
        <div className="experience-content right animate-slideInRight">
          <h2>Accenture, Inc.</h2>
          <p className="nameschool-elem">Position : Data Analysis</p>
          <p className="date">August 25, 2022 - September 25, 2023</p>
          <ul className="experience-list">
            <li>Processed and managed transactional data efficiently</li>
            <li>Conducted data analysis and exploration to identify patterns and insights</li>
            <li>Researched and retrieved data to support process flow optimization</li>
            <li>Released processed data within the emulator environment</li>
            <li>Resolved issues related to data prompts through problem-solving and debugging</li>
            <li>Collaborated with team members to ensure data accuracy and integrity</li>
          </ul>
        </div>
      </div>

      {/* QCREDIT */}
      <div className="experience-card reverse">
        <div className="experience-img right animate-slideInRight">
          <img
            src={exp4}
            alt="MVL"
          />
        </div>
        <div className="experience-content left animate-slideInLeft">
          <h2>QCREDIT CORP.</h2>
          <p className="nameschool-elem">Position : Graphic Designer and Marketing Officer</p>
          <p className="date">March 6, 2024 - Present</p>
          <ul className="experience-list">
            <li>Designed promotional flyers for the company’s campaigns and events</li>
            <li>Created poster ads for Facebook, TikTok, and YouTube using Canva</li>
            <li>Edited video content for the "Kwentong QCredit" segment</li>
            <li>Created social media graphics using Figma and Adobe Photoshop</li>
            <li>Edited marketing videos using Wondershare Filmora</li>
            <li>Designed web page layouts and promotional materials aligned with branding</li>
            <li>Collaborated with the marketing team to develop creative concepts</li>
            <li>Delivered impactful and customer-focused content for QCredit’s online platforms</li>
          </ul>
        </div>
      </div>
    </div>
  );


    case "Seminar / Training":
  return (
    <div className="seminar-training grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
      
      {/* Seminar Card */}
      <div className="relative group bg-purple-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-fadeIn">
       
          <a
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20"
    ></a>
       
       
       
       
        <div className="overflow-hidden rounded-lg">
          <img
            src={y4it1}
            alt="Seminar 1"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
            
          />
        </div>
        <h3 className="text-white font-bold text-lg">11thPhilippineYouth Congress on Information Technology (Y4iT) </h3>
        <p className="text-gray-200 text-sm">
          SMX Convention Center Pasay City - September 19, 2013
        </p>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 blur-2xl -z-10"></div>
      </div>

      {/* Another Card */}
      <div className="relative group bg-yellow-500 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl animate-fadeIn">
        <div className="overflow-hidden rounded-lg">
          <img
            src={y4it2}
            alt="Seminar 2"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-black font-bold text-lg">Y4IT Seminar Big Data:“ Concepts and Application”</h3>
        <p className="text-gray-800 text-sm">
          SM San Pablo City, Laguna - November 8, 2016
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 blur-2xl -z-10"></div>
      </div>

      {/* Another Card */}
      <div className="relative group bg-pink-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
        <div className="overflow-hidden rounded-lg">
          <img
            src={dict1}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">(DICT)“Cyber Security Caravan” </h3>
        <p className="text-gray-200 text-sm">
          LSPU SPCC Campus - September 22, 2017
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>
       {/* Another Card */}
      <div className="relative group bg-blue-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
        <div className="overflow-hidden rounded-lg">
          <img
            src={eduk}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">(ICCS) “7thEdukCircle International Convention on Engineering and Computer Technology”</h3>
        <p className="text-gray-200 text-sm">
          UP Diliman Campus - October 12, 2019
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>
        {/* Another Card */}
      <div className="relative group bg-orange-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
        <div className="overflow-hidden rounded-lg">
          <img
            src={dict2}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">DICT–NICP–IBPAP “Career Opportunities in the IT- BPM Sector</h3>
        <p className="text-gray-200 text-sm">
          August 26, 2020
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>

       {/* Another Card */}
      <div className="relative group bg-gray-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
           <a
      href="https://drive.google.com/file/d/1WoF7q_4RVAvP9LpG7mERC7NJ1nB4gaJu/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20">

      </a>
        
        <div className="overflow-hidden rounded-lg">
          <img
            src={simpli1}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">UI/UX Beginners</h3>
        <p className="text-gray-200 text-sm">
          Simplilearn SkillUp —   July 18, 2025 Certificate Code: 8644682
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>

       {/* Another Card */}
      <div className="relative group bg-purple-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
    <a
      href="https://drive.google.com/file/d/1aSPwIvoOCkjQOotGm_vuzWT79xYNLFVO/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20">
      </a>
        
        <div className="overflow-hidden rounded-lg">
          <img
            src={simpli2}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">Introduction to Graphic Design; Basics of UI/UX</h3>
        <p className="text-gray-200 text-sm">
          Simplilearn SkillUp — July 28, 2025 Certificate Code: 8696819
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>

       {/* Another Card */}
      <div className="relative group bg-yellow-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
             <a
      href="https://drive.google.com/file/d/1x9m_Tzdwu6VArEIimwVCDFcbDOihuxRM/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20">

      </a>
        
        
        <div className="overflow-hidden rounded-lg">
          <img
            src={simpli3}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">Full Stack Developer Course</h3>
        <p className="text-gray-200 text-sm">
         Simplilearn SkillUp — August 5, 2025 Certificate Code: 8738010
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>
      

       {/* Another Card */}

       
      <div className="relative group bg-sky-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
       
          <a
      href="https://drive.google.com/file/d/1kIOF2BozBajPt5Wt2nHbq6BV_lV41Zrg/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20"
    ></a>
       
        <div className="overflow-hidden rounded-lg">
          <img
            src={simpli4}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">Introduction to the Basics of Azure Services</h3>
        <p className="text-gray-200 text-sm">
          Simplilearn SkillUp (in collaboration with Microsoft)
          Certificate of Completion – August 30, 2025 Certificate ID: 8881780
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>

        {/* Another Card */}
      <div className="relative group bg-sky-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-fadeIn">
          <a
      href="https://drive.google.com/file/d/1scLTAF7wuE91f2s6nXIQoq5hc_oJ_5om/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Seminar: 11th Philippine Youth Congress on Information Technology"
      className="absolute inset-0 z-20"
    ></a>
        
        <div className="overflow-hidden rounded-lg">
          <img
            src={pdf}
            alt="Seminar 3"
            className="rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-bold text-lg">Philippine Design Fest 2025 – Day 2 Participant</h3>
        <p className="text-gray-200 text-sm">
          Engaged with industry professionals and design community -
          Philippine Trade Training Center, Pasay City November 15, 2025
        </p>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 blur-2xl -z-10"></div>
      </div>


    </div>
  );
      
 case "My Project Design":
  return (
    <div className="space-y-16">

      {/* ================= UI/UX DESIGNER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          UI/UX DESIGN - MOBILE APPLICATION
        </h3>

        <SimpleCarousel images={[ui1, ui2]} />
      </motion.div>

       <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          UI/UX DESIGN - WEBTOOL SYSTMEN
        </h3>

        <SimpleCarousel images={[socmed1, socmed2, socmed3, socmed4, socmed5, socmed6]} />
      </motion.div>

      {/* ================= MARKETING FLYERS ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          QCREDIT CORP. - FLYERS 
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {[flyer1, flyer2, flyer3, flyer4, flyer5].map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-xl bg-black/20 backdrop-blur aspect-[3/4]"
            >
              <img
                src={img}
                alt={`Marketing Flyer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= MARKETING POSTER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          QCREDIT CORP. - POSTER Ads
        </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {[poster1, poster2, poster3, poster4, poster5, poster6].map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.08 }}
              className="rounded-xl overflow-hidden shadow-xl bg-black/20 backdrop-blur"
            >
              <img
                src={img}
                alt={`Marketing Poster ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= COMPANY PROFILE ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          QCREDIT CORP. - COMPANY PROFILE
        </h3>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {[page1, page2, page3, page4, page5, page6].map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-xl bg-black/20 backdrop-blur aspect-[3/4]"
            >
              <img
                src={img}
                alt={`Company Profile ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= REELS VIDEO ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          QCREDIT CORP. - REELS VIDEO Ads
        </h3>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {[
            "7575014374629182736",
            "7539838429954149639",
            "7573599489894747393",
            "7446227058130177287",
            "7556510810621742343",
            "7602504920121494804",
          ].map((id, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-black"
            >
              <iframe
                src={`https://www.tiktok.com/player/v1/${id}?controls=1`}
                className="w-full h-full"
                allow="fullscreen; encrypted-media"
                title={`QCredit TikTok Reel ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );



      default:
        return <p>Select a tab to view content.</p>;
    }
  };

  return (
  <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 overflow-x-hidden">
  <div className="background max-w-7xl  mx-auto min-h-[50vh] md:min-h-[80vh] lg:min-h-screen bg-neutral-900/60 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl backdrop-blur-md relative z-10">
    <h1 className="name-elem text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center md:text-left"> Ron Arnold B. Replan </h1>
     <p className="position-elem text-gray-400 text-center md:text-left mb-6"> IT Professional </p>
     <div className="mt-6 text-left">
      <h2 className="font-semibold text-lg mb-2 text-white">{activeTab}</h2>
      <div className="text-gray-300">{renderContent()}</div>
    </div>
  </div>
</main>

  );
}

export default RightPanel;
