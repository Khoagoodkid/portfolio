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
import { axiosInstance } from "../../api/axiosInstance";

const parseMonthYear = (value) => {
  if (!value || typeof value !== "string") return 0;
  const [monthRaw, yearRaw] = value.split("/");
  const month = Number(monthRaw);
  const year = Number(yearRaw);

  if (!Number.isFinite(month) || !Number.isFinite(year)) return 0;
  return year * 100 + month;
};

const isPresentDate = (value) =>
  typeof value === "string" && value.trim().toLowerCase() === "present";

const sortExperiencesByTime = (items) =>
  [...items].sort((a, b) => {
    const aIsPresent = isPresentDate(a.end_date);
    const bIsPresent = isPresentDate(b.end_date);

    if (aIsPresent && bIsPresent) {
      const aStart = parseMonthYear(a.start_date);
      const bStart = parseMonthYear(b.start_date);
      return bStart - aStart;
    }

    if (aIsPresent) return -1;
    if (bIsPresent) return 1;

    const aEnd = a.is_active ? Number.MAX_SAFE_INTEGER : parseMonthYear(a.end_date);
    const bEnd = b.is_active ? Number.MAX_SAFE_INTEGER : parseMonthYear(b.end_date);
    if (bEnd !== aEnd) return bEnd - aEnd;

    const aStart = parseMonthYear(a.start_date);
    const bStart = parseMonthYear(b.start_date);
    return bStart - aStart;
  });

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

function Skills() {
  const [isShown, setIsShown] = useState(false);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, [3000]);
  }, []);

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const { data } = await axiosInstance.get("/experiences");
        setExperiences(
          Array.isArray(data) ? sortExperiencesByTime(data) : []
        );
      } catch (error) {
        console.error("Failed to fetch experiences", error);
        setExperiences([]);
      }
    };

    getExperiences();
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
                {experiences.map((e) => {
                  const descriptionItems =
                    typeof e.description === "string"
                      ? e.description
                          .split(/\r?\n+/)
                          .map((item) => item.trim())
                          .filter(Boolean)
                      : [];

                  return (
                    <ExpCard
                      key={e.id}
                      company={e.company}
                      role={e.title}
                      start_at={e.start_date}
                      end_at={e.end_date || (e.is_active ? "Present" : "")}
                      props={Array.isArray(e.tags) ? e.tags : []}
                      description={descriptionItems}
                      location={e.location}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Skills;
