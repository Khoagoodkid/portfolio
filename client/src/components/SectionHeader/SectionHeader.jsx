import React from "react";
import "./SectionHeader.css";
import Reveal from "../Reveal/Reveal";

export const SectionHeader = ({ sectionNumber, title, subtitle, centered = false }) => {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <Reveal>
        <div className="header-content">
          <div className="title-wrapper">
            <span className="section-number">{sectionNumber}</span>
            <h2 className="section-title">
              <span className="title-text">{title}</span>
              <span className="title-accent-line"></span>
            </h2>
          </div>
          {subtitle && (
            <div className="section-subtitle">
              <p>{subtitle}</p>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
};

