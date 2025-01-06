import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material"; // Material UI components
import { useSpring, animated } from "react-spring"; // react-spring for animations

function Navigation() {
  // Animation for links
  const linkAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-10px)" }, // Start from top
    config: { tension: 120, friction: 22 },
  });

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#333", // Dark background for navigation
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <animated.div style={linkAnimation}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="About Me"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "#ddd",
                margin: "0 15px",
                transition: "all 0.3s ease",
              })}
            >
              About Me
            </NavLink>
          </animated.div>
        </li>
        <li>
          <animated.div style={linkAnimation}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Portfolio"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "#ddd",
                margin: "0 15px",
                transition: "all 0.3s ease",
              })}
            >
              Portfolio
            </NavLink>
          </animated.div>
        </li>
        <li>
          <animated.div style={linkAnimation}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Contact"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "#ddd",
                margin: "0 15px",
                transition: "all 0.3s ease",
              })}
            >
              Contact
            </NavLink>
          </animated.div>
        </li>
        <li>
          <animated.div style={linkAnimation}>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label="Resume"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "#ddd",
                margin: "0 15px",
                transition: "all 0.3s ease",
              })}
            >
              Resume
            </NavLink>
          </animated.div>
        </li>
      </ul>
    </Box>
  );
}

export default Navigation;
