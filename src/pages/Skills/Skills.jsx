import { useState, useEffect } from "react";
import "./Skills.css";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TopBar from "../../components/TopBar/TopBar";
import ExpCard from "../../components/ExpCard/ExpCard";
import Reveal from "../../components/Reveal/Reveal";
const skills = [
  {
    name: "Frontend",
    percent: 90,
    color: "#58ed55",
    boxShadow: "rgba(88, 237, 85,0.5)",
  },
  {
    name: "Backend",
    percent: 75,
    color: "#f73650",
    boxShadow: "rgba(247, 54, 80,0.5)",
  },
  {
    name: "Javascript",
    percent: 90,
    color: "#ffee03",
    boxShadow: "rgba(255, 238, 3,0.5)",
  },
  {
    name: "Python",
    percent: 60,
    color: "#5656f5",
    boxShadow: "rgba(86, 86, 245,0.5)",
  },
  {
    name: "PHP",
    percent: 50,
    color: "#ffa14f",
    boxShadow: "rgba(255, 161, 79,0.5)",
  },
  {
    name: "C++",
    percent: 95,
    color: "#781aa1",
    boxShadow: "rgba(120, 26, 161,0.5)",
  },
  {
    name: "C#",
    percent: 60,
    color: "#f218bc",
    boxShadow: "rgba(242, 24, 188,0.5)",
  },
];
const services = [
  {
    name: "User Experience / User Interface",
    img: <MonitorIcon />,
  },
  {
    name: "Game Development",
    img: <SportsEsportsIcon />,
  },
  {
    name: "AI Engineering",
    img: <SmartToyIcon />,
  },
];
const exp = [
  {
    company: 'Myria',
    role: 'Software Engineer',
    description: 'I work as a front-end developer. Building web UI',
    props: ['Nextjs', 'Typescript', 'Git', 'Github'],
    start_at: '12/2023',
    end_at: '1/2024',
    location: 'Winnipeg, Canada'
  },
  {
    company: 'Kayapay.ai',
    role: 'Software Engineer',
    description: 'I work as a full-stack developer. Constructing web UI and processing data through frontend and backend. Training and building basic AI Model.',
    props: ['React', 'Typescript', 'Python', 'Postgresql', 'Fast API', 'Git', 'Github', 'AI'],
    start_at: '9/2023',
    end_at: '11/2023',
    location: 'Winnipeg, Canada'
  },
]
function Skills() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, [3000]);

  }, []);

  return (
    <div className="skillsBody">
      <NavBar />

      <div className="skillsContainer">
        <Loading />
        <TopBar />
        {isShown && (
          <>
            <div className="display">
              <div className="text">
                <Reveal>
                  <h1
                    style={{
                      color: "#0bd3b4",
                      fontFamily: "Gloria Hallelujah, cursive",
                    }}
                  >
                    What do my skills include ?
                  </h1>

                </Reveal>
                <Reveal>

                  <p>
                    {" "}
                    I have always been interested in high-tech services and how
                    they technically benefit human life. I attempted building
                    simple websites at first and found it to be incredibly
                    challenging, but I am glad to announce that I am an
                    experienced web developer now.
                  </p>
                </Reveal>
                <Reveal>

                  <p>
                    Initially, I spent around two years learning about front-end
                    technologies like HTML, CSS, and Javascript before beginning
                    to learn about back-end systems like MongoDB, Postgresql, and
                    Express, FastAPI to become a full-stack developer.
                  </p>
                </Reveal>

                <div className="services">

                  <Reveal>
                    <h2 style={{ color: "#0bd3b4", fontFamily: 'poppin' }}>Other services</h2>
                  </Reveal>


                  {services.map((service, i) => {
                    return (

                      <div className="serviceCard" key={i}>


                        <Reveal>

                          {service.img}
                        </Reveal>
                        <Reveal>
                          <span>{service.name}</span>

                        </Reveal>

                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
            <div className="framework-container">
              <div className="title">

                <Reveal>
                  <h2>Progress </h2>
                </Reveal>

                <h2 style={{ color: "#0bd3b4" }}>.</h2>

                <div className="line"></div>
              </div>
              <div className="cube">
                {skills.map((s, index) => {
                  return (
                    // <div style={{ width: '100%', height: '8em' }} key={index}>

                    <ProgressBar skill={s}  key = {index}/>
                    // </div>
                  );
                })}
              </div>
            </div>
            <div className="exp-container">


              <div className="title">
                <h2 style={{ color: "#0bd3b4" }}>.</h2>
                <Reveal>
                  <h2>Experience </h2>

                </Reveal>
                <div className="line"></div>

              </div>

              <div className="exp-cards">
                {exp.map((e, index) => {
                  return (
                    <>
                    <ExpCard
                      key = {index}
                      company={e.company}
                      role={e.role}
                      start_at={e.start_at}
                      end_at={e.end_at}
                      props={e.props}
                      description={e.description}
                      location={e.location}
                    />
                    
                    </>


                  )
                })}
              </div>
              <h2>Updating...</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Skills;
