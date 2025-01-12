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
import {motion} from "framer-motion"
const skills =[
  {name: "ReactJS", x: "-28vw", y: "-5vw"},
  {name: "NextJS", x: "-10vw", y: "-8vw"},
  {name: "Javascript", x: "20vw", y: "6vw"},
  {name: "Python", x: "0vw", y: "12vw"},
  {name: "PHP", x: "-20vw", y: "-15vw"},
  {name: "C++", x: "15vw", y: "-12vw"},
  {name: "MongoDB", x: "25vw", y: "-5vw"},
  {name: "Tailwindcss", x: "-22vw", y: "4vw"},
  {name: "PostgreSQL", x: "18vw", y: "18vw"},
  {name: "Nodejs", x: "20vw", y: "-21.65vw"},
  {name: "Laravel", x: "-10vw", y: "-21.65vw"},
  {name: "Firebase", x: "-5.73vw", y: "23.78vw"},
  {name: "Typescript", x: "0vw", y: "-15vw"},
  {name: "FastAPI", x: "-25vw", y: "18vw"},
  {name: "C#", x: "30vw", y: "13vw"}
]
;
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
    description: [
      'Developed a front-end web application with NextJS',
      'Implemented responsive headers for both desktop and mobile platforms with multiple features.',
      'Developed responsive Nodes and Tokens pages, ensuring seamless user experience across devices.'
    ],
    props: ['Nextjs', 'Typescript', 'Git', 'Github', 'Tailwind Css', 'Figma'],
    start_at: '12/2023',
    end_at: '1/2024',
    location: 'Winnipeg, Canada'
  },
  {
    company: 'Kayapay.ai',
    role: 'Software Engineer',
    description: [
      'Engaged in a 3-month contract to develop a full-stack web application using with FastAPI serving a REST API with NextJS as the frontend as well as integrating with AI',
      'Assisted in receiving data from AI and automatically sending messages to user via a bot',
      'Building tables and graphs for tracking prices',
      'Implemented converting AI’s data to costly usable data'

    ],
    props: ['React', 'Typescript', 'Python', 'Postgresql', 'Fast API', 'Git', 'Github', 'RESTful API'],
    start_at: '9/2023',
    end_at: '11/2023',
    location: 'Winnipeg, Canada'
  },
]

const SkillItem = ({name,x,y}) => {
  return (
    <motion.div 
    className="skill-item"
    // whileHover={{background:'#0bd3b4', color:'#111'}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y, transition:{duration:1.5,delay:.5}}}
    viewport={{ once: true }}
    exit
    // transition={{duration:1.5,delay:.5}}
    exitHover ={{x:0,y:0, background:'#111'}}
    >
      <span>{name}</span>
    </motion.div>
  )
}

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
                  <h2>Techniques </h2>
                </Reveal>

                <h2 style={{ color: "#0bd3b4" }}>.</h2>

                <div className="line"></div>
              </div>
              <div className="cube">
                <div className="cube-center">
                  <span>WEB</span>
                </div>
                {skills.map((s, index) => {
                  return (
                    <SkillItem name={s.name} x={s.x} y = {s.y} key={index}/>
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
