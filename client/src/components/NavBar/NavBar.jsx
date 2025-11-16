import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import { PageContext } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage(location.pathname.substring(1));
  }, [location]);

  const navs = [
    {
      name: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      name: "About",
      icon: <PersonIcon />,
      path: "/about",
    },
    {
      name: "Skills",
      icon: <SettingsIcon />,
      path: "/skills",
    },
    {
      name: "Work",
      icon: <DashboardIcon />,
      path: "/work",
    },
    {
      name: "Contact",
      icon: <EmailIcon />,
      path: "/contact",
    },
  ];
  return (
    <>
      <MenuIcon
        className="menuIcon"
        sx={{ fontSize: "3em", cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />
      <div className={isOpen ? "navBarBody active" : "navBarBody"}>
        <div className="topMenu">
          <span>K</span>
          <span style={{ color: "#0bd3b4" }}>.</span>
        </div>
        <nav className="navigators">
          <CloseIcon
            className="closeIcon"
            onClick={() => setIsOpen(false)}
            sx={{
              fontSize: "3em",
              display: isOpen ? "block" : "none",
              cursor: "pointer",
            }}
          />
          {navs.map((nav, index) => {
            const isActive = location.pathname === nav.path;
            return (
              <Link
                key={index}
                className={isActive ? "navigator selected" : "navigator"}
                //  onClick={() => setPage('home')}
                to={nav.path}
              >
                {nav.icon}
                {isActive && (
                  <motion.div
                    layoutId="indicator1"
                    initial={{ y: -10, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{ backgroundColor: "#0bd3b4", position: "absolute", right: 0, top: 0, height: "100%", width: "3px" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
