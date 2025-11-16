import React from "react";
import "./SkillsHero.css";
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
      <div className="hero-content">
        <div className="hero-title-section">
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
          <div className="hero-visual-background">
            <motion.div 
              className="floating-orb"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="orb-glow"></div>
            </motion.div>
            <div className="floating-icons">
              {[
                { Icon: CodeIcon, delay: 0, x: 0, y: -180 },
                { Icon: TerminalIcon, delay: 0.5, x: 180, y: 0 },
                { Icon: StorageIcon, delay: 1, x: 0, y: 180 },
                { Icon: PsychologyIcon, delay: 1.5, x: -180, y: 0 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="floating-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                    scale: [0.9, 1.1, 0.9],
                    x: item.x,
                    y: item.y,
                    rotate: [0, 360]
                  }}
                  transition={{
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      delay: item.delay
                    },
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "linear"
                    },
                    x: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: item.delay
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: item.delay
                    },
                    default: {
                      duration: 0.8,
                      delay: item.delay
                    }
                  }}
                >
                  <item.Icon style={{ fontSize: '3.5rem', color: '#0bd3b4' }} />
                </motion.div>
              ))}
            </div>
          </div>
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
