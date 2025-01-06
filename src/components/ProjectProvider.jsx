import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = [
          {
            id: 1,
            name: "AskGemini",
            description: "Interactive AI custom Chrome extension tool.",
            image: "/assets/gemini.png",
            link: "https://github.com/HassanZafar-2021/AskGemini",
          },
          {
            id: 2,
            name: "Vocal Vision",
            description:
              "A full-stack app where users upload audio files, and AI characters summarize the content.",
            image: "/assets/ai.png",
            link: "https://github.com/HassanZafar-2021/Vocal-Vision",
          },
          {
            id: 3,
            name: "GameSeek",
            description:
              "Game API library lookup on a front-end website of current and new release games.",
            image: "/assets/gameSeek.png",
            link: "https://github.com/HassanZafar-2021/GameSeek",
          },
          {
            id: 4,
            name: "PORTfol.io",
            description: "Personal portfolio website built with React.",
            image: "/assets/reactLogo.png",
            link: "https://github.com/HassanZafar-2021/PORTfol.io",
          },
          {
            id: 5,
            name: "Auto-Assembler",
            description: "TypeScript project that assembles a car.",
            image: "../assets/auto.jpg",
            link: "https://github.com/HassanZafar-2021/PORTfol.io",
          },
          {
            id: 6,
            name: "Server-Forecast",
            description: "Weather forecast app using OpenWeatherMap API.",
            image: "/assets/weather.png",
            link: "https://github.com/HassanZafar-2021/Server-Forecast",
          },
        ];

        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load projects.");
        setLoading(false);
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects(); // Call the fetch function on mount
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
};

// PropTypes for validation
ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectProvider;
