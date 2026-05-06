import { useSpring, animated } from "react-spring";
import geminiImg from "../assets/gemini.png";
import vocalVisionImg from "../assets/ai.png";
import gameSeekImg from "../assets/gameSeek.png";
import portfolioImg from "../assets/reactLogo.png";
import githubLogo from "../assets/githubLogo.png";
import ternarytree from "../assets/ternarytree.png";
import weatherImg from "../assets/weather.png";

const projects = [
  {
    title: "AskGemini",
    description: "AI-powered Chrome extension that lets users query Google Gemini directly from their browser tab.",
    imgSrc: geminiImg,
    link: "https://github.com/HassanZafar-2021/AskGemini",
    tags: ["AI", "Chrome Extension", "JavaScript"],
  },
  {
    title: "Vocal Vision",
    description: "Full-stack app where users upload audio files and AI characters summarize the content using LLMs.",
    imgSrc: vocalVisionImg,
    link: "https://github.com/HassanZafar-2021/Vocal-Vision",
    tags: ["AI", "Full Stack", "React"],
  },
  {
    title: "GameSeek",
    description: "Game API library lookup featuring current and new-release game discovery for gamers.",
    imgSrc: gameSeekImg,
    link: "https://github.com/HassanZafar-2021/GameSeek",
    tags: ["React", "REST API", "JavaScript"],
  },
  {
    title: "PORTfol.io",
    description: "Personal portfolio website built with React and Vite — the one you're looking at right now.",
    imgSrc: portfolioImg,
    link: "https://github.com/HassanZafar-2021/PORTfol.io",
    tags: ["React", "Vite", "MUI"],
  },
  {
    title: "TernaryTreeDirectory",
    description: "Command-line file explorer simulator built on a ternary tree data structure in Python.",
    imgSrc: ternarytree,
    link: "https://github.com/HassanZafar-2021/TernaryTreeDirectory",
    tags: ["Data Structures", "Python", "CLI"],
  },
  {
    title: "SkyScript",
    description: "Weather forecast app powered by the OpenWeatherMap API with a clean, readable interface.",
    imgSrc: weatherImg,
    link: "https://github.com/HassanZafar-2021/SkyScript",
    tags: ["JavaScript", "REST API", "CSS"],
  },
];

function Portfolio() {
  const fadeUp = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(24px)" },
    config: { tension: 140, friction: 26 },
  });

  return (
    <div className="section-wrapper">
      <animated.span style={fadeUp} className="section-eyebrow">Work</animated.span>
      <animated.h2 style={fadeUp} className="section-title">Projects</animated.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            className="project-card"
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img
                src={project.imgSrc}
                alt={`Screenshot of ${project.title}`}
                className="project-image"
              />
              <div className="image-overlay">
                <img src={githubLogo} alt="View on GitHub" className="github-logo" />
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-footer">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;