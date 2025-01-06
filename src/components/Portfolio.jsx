import { Box, Typography } from "@mui/material"; // Material UI components
import { useSpring, animated } from "react-spring"; // react-spring for animations
import { ProjectProvider } from "./ProjectProvider";

// Importing images
import geminiImg from "../assets/gemini.png";
import vocalVisionImg from "../assets/ai.png";
import gameSeekImg from "../assets/gameSeek.png";
import portfolioImg from "../assets/reactLogo.png";
import githubLogo from "../assets/githubLogo.png";
import autoImg from "../assets/auto.jpg";
import weatherImg from "../assets/weather.png";

// Projects data
const projects = [
  {
    title: "AskGemini",
    imgSrc: geminiImg,
    link: "https://github.com/HassanZafar-2021/AskGemini",
  },
  {
    title: "Vocal Vision",
    imgSrc: vocalVisionImg,
    link: "https://github.com/HassanZafar-2021/Vocal-Vision",
  },
  {
    title: "GameSeek",
    imgSrc: gameSeekImg,
    link: "https://github.com/HassanZafar-2021/GameSeek",
  },
  {
    title: "Portfolio",
    imgSrc: portfolioImg,
    link: "https://github.com/HassanZafar-2021/PORTfol.io",
  },
  {
    title: "Auto-Assembler",
    imgSrc: autoImg,
    link: "https://github.com/HassanZafar-2021/Auto-Assembler",
  },
  {
    title: "Server-Forecast",
    imgSrc: weatherImg,
    link: "https://github.com/HassanZafar-2021/Server-Forecast",
  },
];

function Portfolio() {
  // Animation for project cards
  const projectCardAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 150, friction: 25 },
  });

  return (
    <ProjectProvider>
      <Box
        id="projects"
        sx={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "40px",
            color: "black", // Updated color to black
          }}
          className="section-title"
        >
          Projects
        </Typography>

        {/* Grid layout for the projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <animated.div
              className="project-card"
              key={index}
              style={projectCardAnimation} // Apply animation to each project card
            >
              <div className="image-container">
                <img
                  src={project.imgSrc}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image"
                />
                <div className="image-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubLogo} // Replace with the actual GitHub logo path
                      alt="GitHub"
                      className="github-logo"
                    />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </animated.div>
          ))}
        </div>
      </Box>
    </ProjectProvider>
  );
}

export default Portfolio;
