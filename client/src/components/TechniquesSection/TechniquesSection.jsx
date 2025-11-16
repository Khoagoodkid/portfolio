import React from "react";
import "./TechniquesSection.css";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiPython, 
  SiPhp, 
  SiCplusplus,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiNodedotjs,
  SiLaravel,
  SiFirebase,
  SiTypescript,
  SiFastapi,
  SiCsharp,
  SiGraphql,
  SiNestjs,
  SiDocker,
  SiGithubactions,
  SiRedis,
  SiAmazonaws,
  SiAmazons3,
  SiAmazonec2
} from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const getSkillIcon = (name) => {
  const iconMap = {
    "ReactJS": <SiReact />,
    "NextJS": <SiNextdotjs />,
    "Javascript": <SiJavascript />,
    "Python": <SiPython />,
    "PHP": <SiPhp />,
    "C++": <SiCplusplus />,
    "MongoDB": <SiMongodb />,
    "Tailwindcss": <SiTailwindcss />,
    "PostgreSQL": <SiPostgresql />,
    "Nodejs": <SiNodedotjs />,
    "Laravel": <SiLaravel />,
    "Firebase": <SiFirebase />,
    "Typescript": <SiTypescript />,
    "FastAPI": <SiFastapi />,
    "C#": <SiCsharp />,
    "GraphQL": <SiGraphql />,
    "NestJS": <SiNestjs />,
    "CI/CD": <VscTools />,
    "GitHub Actions": <SiGithubactions />,
    "Docker": <SiDocker />,
    "REST API": <TbApi />,
    "Redis": <SiRedis />,
    "AWS S3": <SiAmazons3 />,
    "AWS EC2": <SiAmazonec2 />,
  };
  return iconMap[name] || <VscTools />;
};

const SkillItem = ({ name, index }) => {
  const icon = getSkillIcon(name);
  
  return (
    <motion.div
      className="technique-skill-item"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay: index * 0.05, ease: "easeOut" } 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="skill-item-content">
        <div className="skill-icon">
          {icon}
        </div>
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-hover-effect"></div>
    </motion.div>
  );
};

const SkillCategory = ({ categoryName, skills, categoryIndex }) => {
  return (
    <motion.div 
      className="skill-category"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: categoryIndex * 0.2 } 
      }}
      viewport={{ once: true }}
    >
      <div className="category-header">
        <h3 className="category-title">{categoryName}</h3>
        <div className="category-line"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skillName, index) => (
          <SkillItem 
            key={index}
            name={skillName}
            index={categoryIndex * 10 + index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const TechniquesSection = ({ skillsCategories }) => {
  const categories = Object.values(skillsCategories);
  
  return (
    <section className="techniques-section">
      <div className="techniques-container">
        <SectionHeader 
          sectionNumber="02"
          title="Techniques"
          subtitle="A comprehensive toolkit of modern technologies and frameworks"
          centered={true}
        />

        <div className="techniques-visual">
          <div className="categories-container">
            {categories.map((category, index) => (
              <SkillCategory
                key={index}
                categoryName={category.name}
                skills={category.skills}
                categoryIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

