import React from "react";
import "../design/profile.css";
import "../design/intership.css";
import "../design/seminar-elem.css";
import aboutme from "../design/aboutme.png"

function RightPanel({ activeTab }) {
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
  <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-orange-900 via-gray-900 to-black"></div>

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
        <div className="carousel relative w-full h-72 md:h-[28rem]">
          {/* Slide 1 */}
          <div className="slide absolute inset-0">
            <img
              src="https://media.istockphoto.com/id/2208637349/photo/smiling-latin-hispanic-female-marketing-manager-professional-it-specialist-working-browsing.jpg?s=1024x1024&w=is&k=20&c=-hP5kg6oX6xjU8CT2P-41qYZCnThTNHlkR8PITs62WI="
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
              src="https://source.unsplash.com/1600x900/?coding,office"
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
              src="https://source.unsplash.com/1600x900/?developer,teamwork"
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
          <ul className="skills-elem">
            <li>Microsoft Office Suite: Proficient in MS Word, MS Excel, and MS PowerPoint</li>
            <li>Communication & Interpersonal Skills: Strong verbal and written communication; effective team collaboration</li>
            <li>Leadership: Demonstrated leadership abilities with a strong sense of responsibility</li>
            <li>Web Development: Experienced in HTML, React, CSS, and JavaScript for web page design</li>
            <li>Video Editing: Skilled in multimedia video editing</li>
            <li>Networking: Knowledgeable in network installation and setup</li>
            <li>Graphic Design: Proficient in Canva and Adobe Photoshop</li>
            <li>Chatbot Development: Experience creating chatbots using ManyChat</li>
            <li>Automation Tools: Familiar with Make (formerly Integromat)</li>
            <li>Data Visualization: Proficient in Google Data Studio</li>
            <li>Database Management: Knowledge of PostgreSQL</li>
            <li>UI/UX Design: Skilled in using Figma for user interface and experience design</li>
            <li>Motion Design: Experience with Jitter for animated UI and motion graphics</li>  
          </ul>
        );
      case "Experience/Internship":
  return (
    <div className="experience-elem">
      <h2>On-the-Job Training (OJT)</h2>
      <p className="nameschool-elem">Laguna State Polytechnic University – San Pablo Campus</p>
      <p className="date">September 2019 – December 2019</p>

      <ul className="experience-list">
        <li>Tracked alumni graduates through social media platforms</li>
        <li>Designed and edited the alumni magazine cover and seminar event materials</li>
        <li>Assisted with network installation in the ICTS and Alumni offices</li>
        <li>Created multimedia video presentations for LSPU events</li>
        <li>Sorted and organized documents for the Alumni Office</li>
      </ul>
      <div className="boundary-elem">
      <h2 >FDS Asya Philippines Inc. </h2>
      <p className="nameschool-elem">Position : Developer I </p>
      <p className="date">February 16 2021 - March 17, 2022</p>

      <ul className="experience-list">
        <li>Developed a new UI design for the Whitelist Webtool using HTML, CSS, and JavaScript</li>
        <li>Published Chablast in the chatbot system</li>
        <li>Integrated multiple modules using Integromat for dynamic webpage interaction</li>
        <li>Gathered data for chatbot performance reports</li>
        <li>Created interactive reports using Google Data Studio linked to the database</li>
        <li>Enhanced features of the Loan Whitelist Webtool for improved functionality</li>
      </ul>
      </div>
      <div className="boundary-elem">
      <h2 >Accenture, Inc.</h2>
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
       <div className="boundary-elem">
      <h2 >QCREDIT CORP.</h2>
      <p className="nameschool-elem">Position : Graphic Designer and Marketing Officer</p>
      <p className="date">March 6, 2024 - Present</p>

      <ul className="experience-list">
        <li>Designed promotional flyers for the company’s campaigns and events</li>
        <li>Created poster ads for Facebook, TikTok, and YouTube using Canva</li>
        <li>Edited video content for the "Kwentong QCredit" segment, highlighting customer stories and experiences</li>
        <li>Created social media graphics using Figma and Adobe Photoshop for various platforms</li>
        <li>Edited marketing videos using Wondershare Filmora for digital advertising campaigns</li>
        <li>Designed web page layouts and promotional materials aligned with the company’s branding guidelines</li>
        <li>Collaborated with the marketing team to develop creative concepts for advertising campaigns</li>
        <li>Collaborated with the marketing team to deliver impactful and customer-focused content for QCredit’s online platforms</li>
      </ul>
      </div>
    </div>
  );

    case "Seminar / Training":
  return (
    <div className="seminar-training grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Seminar Card */}
      <div className="relative group bg-purple-600 rounded-xl shadow-lg p-4 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-fadeIn">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/468354624_10160154374326916_4129752839153893319_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHNSq2sNRoBoQMcyr9ZNefzu6D2A_yjYwK7oPYD_KNjAg8slmg4qXMTmUTR6vWf3avchQakDEd5K1vSceDyKcCK&_nc_ohc=ydZYY2LoytUQ7kNvwE4jSWK&_nc_oc=AdmqrP_U-Q6RMVS4eR16fN0p7j3_RMuNup64oENJ7JPLoYXeXGFm8Zk4slO8Us_d6uA&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=t7ZTC_oWMuVG9MxlXbvzDg&oh=00_AfYyRVFJwBQPzro864S3bryc2lf5viDElCVsr2YWYQ0lFg&oe=68D05B13"
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
            src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/468814639_10160247607576916_8008543941704791339_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFSR2jrc3P3JRrAqEMet-5wKO2H6n-3QTMo7Yfqf7dBM7uHSG51O4F_KXPR1kLXHnjjYGlILpJGZbmbWb6QYo1H&_nc_ohc=8sK-PHvLbBkQ7kNvwGJmM6V&_nc_oc=AdlMGfci3SSbTlcsqfIHcdXq3GUvfXtE5NvMnDK9SCkYFz6geOkZZYmjjE-U1Hjejfs&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=USoJe9HgtiXnluKU-vRNlw&oh=00_AfbrFFy5A2BHHkEHqk6fCIsJ4HfOCKVxV1s4SwX_TddmQQ&oe=68D0452A"
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
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/DICT-Logo-Final-2-300x153.png"
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
            src="https://images.openai.com/thumbnails/url/wq6hjXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4M8cw29iwoLciwLPFKDPd1LzdMK8nLswxPDK1ITEzxdHMrDgqzqPQu9vYxSqlKsqgo9cy0TEpxMQtSKwYA3IApsA"
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
            src="https://picsum.photos/400/200?random=3"
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
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/400/200?random=3"
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
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/400/200?random=3"
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
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/400/200?random=3"
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
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/400/200?random=3"
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


    </div>
  );


        
        
        
      case "Project":
        return <p>Capstone Project: Inventory Management System.</p>;
      default:
        return <p>Select a tab to view content.</p>;
    }
  };

  return (
    <main className="flex-1 ">
      <div className="contact-education">
<h1 className="name-elem text-3xl md:text-5xl font-bold">
  Ron Arnold B. Replan
</h1>


        <p className="position-elem">IT Professional</p>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">{activeTab}</h2>
          <div className="text-gray-300">{renderContent()}</div>
        </div>
      </div>
    </main>
  );
}

export default RightPanel;
