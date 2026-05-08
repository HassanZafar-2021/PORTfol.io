import { useSpring, animated } from "react-spring";

const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL",],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Flask", "LangChain", "Node.js", "Express"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "AWS", "Jira", "Bash", "Insomnia"],
  },
  {
    category: "Concepts",
    items: ["RESTful APIs", "Data Structures", "Algorithms", "OOP", "Agile", "CI/CD"],
  },
];

function Resume() {
  const fadeUp = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(24px)" },
    config: { tension: 140, friction: 26 },
  });

  const fadeUpDelay = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(24px)" },
    config: { tension: 140, friction: 26 },
    delay: 200,
  });

  return (
    <div className="section-wrapper">
      <animated.span style={fadeUp} className="section-eyebrow">Qualifications</animated.span>
      <animated.h2 style={fadeUp} className="section-title">Resume</animated.h2>

      {/* Download box */}
      <animated.div style={fadeUp} className="resume-download-box">
        <div>
          <span className="resume-download-label">Full Résumé</span>
          <p className="resume-download-text">Raja Hassan Zafar — Software Engineer</p>
        </div>
        <a
          className="download-btn"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </animated.div>

      {/* Skills */}
      <animated.div style={fadeUpDelay} className="skills-card">
        <p className="skills-card-title">Technical Skills</p>

        {SKILLS.map(({ category, items }) => (
          <div className="skill-row" key={category}>
            <p className="skill-category">{category}</p>
            <div className="skill-pills">
              {items.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </animated.div>
    </div>
  );
}

export default Resume;