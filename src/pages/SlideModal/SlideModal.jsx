import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./SlideModal.css"
import { slides } from "../../works";
import { useLocation, useNavigate } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io'
const SlideModal = () => {
  const location = useLocation()
  const [project,setProject] = useState(slides.find((s) => s.path == location.state.path))
  const navigate = useNavigate()
  useEffect(() => {
    console.log(project)
  },[])
 
  return (
    <div className="modal-body">
      <IoMdArrowRoundBack style={{position:'absolute', left:20, top:30,fontSize:'3em',cursor:'pointer'}}
        onClick={() => navigate('/work')}
      />
      <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": "5rem" }}>

        <h1 style={{"fontFamily" : "poppin-bold","display": "block", "paddingTop": "0.25rem", "paddingBottom": "0.25rem", "paddingLeft": "1rem", "paddingRight": "1rem", "marginTop": "0.5rem", "borderRadius": "9999px", "fontWeight": 500, "textAlign": "center", "color": "#ffffff", "backgroundColor": "#0bd3b4" }}>
          {project?.title}
        </h1>
      </div>
      <SwapColumnFeatures project={project}/>
      <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "12rem"}}/>
        
      
    </div>
  );
};

const SwapColumnFeatures = ({project}) => {
  const [featureInView, setFeatureInView] = useState(project?.images[0]);

  return (
    <section style={{ "position": "relative", "maxWidth": "80rem"}}>

      <SlidingFeatureDisplay featureInView={featureInView} />
      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="height-offset" />

      {project?.images.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        
        justifyContent:
          featureInView?.contentPosition === "l" ? "flex-end" : "flex-start",
      
      }}
      className="sliding-feature"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        style={{ "padding": "2rem", "borderRadius": "0.75rem", "width": "50%", "height": "fit-content" }}
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div >
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="content-body"
      style={{
        
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",

       
      }}
    >
      <div className="content-card">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span style={{ "fontFamily" : "poppin","paddingTop": "0.375rem", "paddingBottom": "0.375rem", "paddingLeft": "0.5rem", "paddingRight": "0.5rem", "borderRadius": "9999px", "fontSize": "0.75rem", "lineHeight": "1rem", "fontWeight": 500, "color": "#ffffff", "backgroundColor": "#0bd3b4" }}>
            {featureInView.callout}
          </span>
          <p style={{ "fontFamily" : "poppin-bold","marginTop": "0.75rem", "marginBottom": "0.75rem", "fontSize": "3rem", "lineHeight": 1, "fontWeight": 700 }}>{featureInView.title}</p>
          <p className="text-6xl">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="feature"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
      
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div style={{ "position": "relative", "borderRadius": "0.75rem", "width": "100%", "height": "24rem", "boxShadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",background:'#0f172a' }}>
      <div style={{ "display": "flex", "padding": "0.75rem", "paddingLeft":'1rem', "gap": "0.375rem", "borderTopLeftRadius": "0.75rem", "borderTopRightRadius": "0.75rem", "max-width": "100%", background:'#242936' }}>
        <div style={{ "borderRadius": "9999px", "width": "0.75rem", "height": "0.75rem", "backgroundColor": "#EF4444" }} />
        <div style={{ "borderRadius": "9999px", "width": "0.75rem", "height": "0.75rem", "backgroundColor": "#F59E0B" }} />
        <div style={{ "borderRadius": "9999px", "width": "0.75rem", "height": "0.75rem", "backgroundColor": "#10B981" }} />
      </div>
      <div style={{ "padding": "0.5rem" }}>
     
        <img src={featureInView.url} style={{height:"20rem",width:'100%'}}/>
        
        {/* <p style={{ "fontFamily": "Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "fontSize": "0.875rem", "lineHeight": "1.25rem" }}>
          <span style={{ "fontSize": "3.75rem", "lineHeight": 1, "color": "#6EE7B7" }}>~</span> Show a part of your product
          that explains what{" "}
          <span style={{ "display": "inline-block", "paddingLeft": "0.25rem", "paddingRight": "0.25rem", "borderRadius": "0.25rem", "fontWeight": 600, "backgroundColor": "#4F46E5" }}>
            "{featureInView.title}"
          </span>{" "}
          means.
        </p> */}
      </div>

      <span style={{ "position": "absolute", "fontSize": "8rem", "lineHeight": 1, "left": "50%", "top": "50%" }}>
        {/* <featureInView.Icon /> */}
      </span>
    </div>
  );
};

export default SlideModal;

// const features = [
//   {
//     id: 1,
//     callout: "Get noticed",
//     title: "It's simple",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
//     contentPosition: "r",
//     Icon: FiEye,
//   },
//   {
//     id: 2,
//     callout: "Find people",
//     title: "They're all here",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
//     contentPosition: "l",
//     Icon: FiSearch,
//   },
//   {
//     id: 3,
//     callout: "Have fun",
//     title: "Let's party",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
//     contentPosition: "r",
//     Icon: FiPlay,
//   },
//   {
//     id: 4,
//     callout: "Get paid",
//     title: "Cha-ching!",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
//     contentPosition: "l",
//     Icon: FiDollarSign,
//   },
// ];