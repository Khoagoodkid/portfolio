import { useState, useEffect } from "react";
import "./Skills.css";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

import MonitorIcon from "@mui/icons-material/Monitor";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TopBar from "../../components/TopBar/TopBar";
import ExpCard from "../../components/ExpCard/ExpCard";
import Reveal from "../../components/Reveal/Reveal";
import { motion } from "framer-motion";
import { SkillsHero } from "../../components/SkillsHero/SkillsHero";
import { TechniquesSection } from "../../components/TechniquesSection/TechniquesSection";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

const skillsCategories = {
  languages: {
    name: "Languages",
    skills: ["Javascript", "Python", "PHP", "C++", "C#", "Typescript"]
  },
  frameworks: {
    name: "Frameworks & Libraries",
    skills: ["ReactJS", "NextJS", "Nodejs", "Laravel", "FastAPI", "NestJS", "GraphQL", "Tailwindcss", "REST API"]
  },
  deployment: {
    name: "Deployment & DevOps",
    skills: ["Docker", "CI/CD", "GitHub Actions", "AWS S3", "AWS EC2"]
  },
  databases: {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
  }
};

const exp = [
  {
    company: "University of Manitoba",
    role: "Incoming Research Assistant",
    description: [
      "Working on a project investigating a problem named Cops and Robbers",
      "Research on a variation of graph-based problems, e.g. How many cops are needed to catch a robber in a graph?",
      "Discuss and figure out the optimal algorithm for the problem",
    ],
    props: ["Graph Theory", "Distributed Algorithms", "Research"],
    start_at: "5/2025",
    end_at: "8/2025",
    location: "Winnipeg, Canada",
  },
  {
    company: "NPH Digital",
    role: "Front End Web Developer Intern",
    description: [
      // 'Developed a front-end web application with NextJS',
      // 'Implemented responsive headers for both desktop and mobile platforms with multiple features.',
      // 'Developed responsive Nodes and Tokens pages, ensuring seamless user experience across devices.'
    ],
    props: ["Nextjs", "Typescript", "Git", "Github", "Tailwind Css", "Figma"],
    start_at: "2/2025",
    end_at: "Present",
    location: "Winnipeg, Canada",
  },
  {
    company: "Myria",
    role: "Software Engineer",
    description: [
      "Developed a front-end web application with NextJS",
      "Implemented responsive headers for both desktop and mobile platforms with multiple features.",
      "Developed responsive Nodes and Tokens pages, ensuring seamless user experience across devices.",
    ],
    props: ["Nextjs", "Typescript", "Git", "Github", "Tailwind Css", "Figma"],
    start_at: "12/2023",
    end_at: "1/2024",
    location: "Winnipeg, Canada",
  },
  {
    company: "Kayapay.ai",
    role: "Software Engineer",
    description: [
      "Engaged in a 3-month contract to develop a full-stack web application using with FastAPI serving a REST API with NextJS as the frontend as well as integrating with AI",
      "Assisted in receiving data from AI and automatically sending messages to user via a bot",
      "Building tables and graphs for tracking prices",
      "Implemented converting AI’s data to costly usable data",
    ],
    props: [
      "React",
      "Typescript",
      "Python",
      "Postgresql",
      "Fast API",
      "Git",
      "Github",
      "RESTful API",
    ],
    start_at: "9/2023",
    end_at: "11/2023",
    location: "Winnipeg, Canada",
  },
];

function Skills() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, [3000]);
  }, []);

  const skillsItems = [
    {
      name: "Frontend Developer",
      img: <MonitorIcon />,
      description:
        "I'm a frontend developer with experience in building responsive and optimized sites",
    },
    {
      name: "Backend Developer",
      img: <MonitorIcon />,
      description:
        "I have experience developing fast and optimised back-end systems and APIs",
    },
    {
      name: "UI Designer",
      img: <MonitorIcon />,
      description:
        "I have designed multiple landing pages and have created design systems as well",
    },
  ];

  return (
    <div className="skillsBody">
      <NavBar />

      <div className="skillsContainer">
        {/* <img src="https://img.freepik.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-67242.jpg?t=st=1743963724~exp=1743967324~hmac=7999126c183525e0383c193a6fe645f829b6ae9e294ef9078665183fec506aaf&w=740"
                className='aboutBackground'
                /> */}
        <Loading />
        <TopBar />
        {isShown && (
          <>
            <SkillsHero/>
            <TechniquesSection skillsCategories={skillsCategories} />
            <div className="exp-container">
              <SectionHeader 
                sectionNumber="03"
                title="Experience"
                centered={true}
              />

              <div className="exp-cards">
                {exp.map((e, index) => {
                  return (
                    <>
                      <ExpCard
                        key={index}
                        company={e.company}
                        role={e.role}
                        start_at={e.start_at}
                        end_at={e.end_at}
                        props={e.props}
                        description={e.description}
                        location={e.location}
                      />
                    </>
                  );
                })}
              </div>
              <h2 style={{ marginTop: '2em', opacity: 0.6, fontSize: '1.2rem' }}>Updating...</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Skills;
