import React from "react";
import { MdOutlineContactPage, MdAttachEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SlSocialBehance } from "react-icons/sl";
import "../design/contact.css";

const ContactEducation = () => {
  return (
    <div className="contact-education">
      <h1 className="section-title">Contact</h1>

      {/* Contact Info */}
      <div className="contact-item">
        <MdOutlineContactPage className="contact-icon" />
        <span>09756825216</span>
      </div>

      <div className="contact-item">
        <MdAttachEmail className="contact-icon" />
        <span>rareplan1@gmail.com</span>
      </div>

      <div className="contact-item">
        <IoLogoLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/ron-arnold-replan-17b1b71a0"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/in/ron-arnold-replan-17b1b71a0
        </a>
      </div>

      <div className="contact-item">
        <FaSquareGithub className="contact-icon" />
        <a
          href="https://github.com/rareplan"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/rareplan
        </a>
      </div>

      <div className="contact-item">
        <SlSocialBehance className="contact-icon" />
        <a
          href="https://www.behance.net/familyreplan"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.behance.net/familyreplan
        </a>
      </div>

      <hr className="divider" />
      <h2 className="section-title">Education</h2>

      <div className="education-list">
        <div>
          <h3>Yukos Elementary School</h3>
          <p className="elem">Yukos, Nagcarlan Laguna (2008 - 2009)</p>
        </div>
        <hr className="divider-elem" />
        <div>
          <h3>Plaridel National High School</h3>
          <p className="elem">Banago, Nagcarlan Laguna (2012 - 2013)</p>
        </div>
        <hr className="divider-elem" />
        <div>
          <h3>Laguna State Polytechnic University</h3>
          <p className="elem">
            Bachelor of Science in Information Technology - San Pablo City (2019 - 2020)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactEducation;
