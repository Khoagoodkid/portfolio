/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./ProjectCard.css"
// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export const ProjectCard = ({ project }) => {
    const navigate = useNavigate()
    const wordLimit = window.innerWidth <= 390 ? 50 : 150;
    const { title, path, subtitle, frameworks, description, bg, github, demo } = project
    return (
        <motion.div
            style={{ display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 100 }}

            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
        >
            <div

                className={`project-card`}
            >
                <motion.img className='thumbnail' src={bg} whileHover={{ scale: 1.05, rotate: "1deg" }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <h2 style={{ fontFamily: 'poppin-bold', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '.2em', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', gap: '.2em' }}>
                        <h3 style={{ fontFamily: 'poppin-bold', textAlign: 'left' }}>{title}</h3>
                        <div className="project-line" />
                        <div style={{ fontFamily: 'poppin-bold', display: 'flex', alignItems: 'start', gap: '.2em' }}>
                            <GitHubIcon className="github-icon" onClick={() => github && window.open(github)} />
                            <LanguageIcon className="demo-icon" onClick={() => demo && window.open(demo)} />
                        </div>
                    </div>
                    <span style={{ fontSize: '.7em', fontFamily: 'poppin' }}> {subtitle} </span>
                </h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', }}>
                    {frameworks.map((f, index) => {
                        return (
                            <span key={f} style={{ color: '#0aff9d', fontFamily: 'poppin', }}>{f}{index < frameworks.length - 1 &&
                                <span style={{ marginLeft: '5px', marginRight: '5px', fontFamily: 'poppin' }}>-</span>}</span>
                        )
                    })}
                </div>
                <p style={{ textAlign: 'left' }}>{description.slice(0, wordLimit)}...
                    <span
                        style={{ color: '#0aff9d', fontFamily: 'poppin', cursor: 'pointer' }}
                        onClick={() => {
                            navigate(`/work/project/${path}`, {
                                state: {
                                    path: path
                                }
                            })
                        }}>  Explore more &gt;</span></p>
            </div>
        </motion.div>
    );
};
