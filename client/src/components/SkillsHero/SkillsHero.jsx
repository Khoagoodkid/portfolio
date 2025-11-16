import React from "react";
import "./SkillsHero.css";
import { MonitorIcon } from "@mui/icons-material/Monitor";
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const FeatureCard = ({ title, description, icon, barColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    className="feature-card"
    style={{ "--bar-color": barColor }}
  >
    {icon}
    <div className="top-bar" />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </motion.div>
);

export const SkillsHero = () => {
  const skillsItems = [
    {
      name: "Frontend Developer",
      icon: <CodeIcon className="icon" />,
      description:
        "I'm a frontend developer with experience in building responsive and optimized sites",
      barColor: "#c71c60",
    },
    {
      name: "Backend Developer",
      icon: <SecurityIcon className="icon" />,
      description:
        "I have experience developing fast, optimised, and secured back-end systems and APIs",
      barColor: "#edda2d",
    },
    {
      name: "Game Developer",
      icon: <SmartToyIcon className="icon" />,
      description:
        "I have experience in building games and have created design systems as well",
      barColor: "#0bd3b4",
    },
  ];

  return (
    <section className="skills-hero">
      <img
        src={
          "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-c320-51f7-a850-63e1f9270c29/raw?se=2025-04-07T02%3A19%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=2e3d9449-bc27-5401-adb7-27aaad674cac&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-06T12%3A04%3A19Z&ske=2025-04-07T12%3A04%3A19Z&sks=b&skv=2024-08-04&sig=s07K%2B0wQFGsRCmd5q/akCHQmKTotomb054L14UPUkS0%3D"
        }
        alt="hero"
        className="hero-image"
      />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            My Skills
            <br />
            and Services
          </h1>
          <p className="hero-subtitle">
            I&apos;m passionate about Web Development and Machine Learning,
            especially how they solve real-world problems. I also enjoy Game
            Development for its blend of creativity and technical challenge.
          </p>
          <a href="#learn-more" className="hero-cta">
            Learn more
          </a>
        </div>

        <div className="features-grid">
          {skillsItems.map((skill, index) => (
            <FeatureCard
              key={index}
              title={skill.name}
              description={skill.description}
              icon={skill.icon}
              barColor={skill.barColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
