import { useSpring, animated } from "react-spring";
import me from "../assets/me.png";


function About() {
  const fadeUp = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(28px)" },
    config: { tension: 140, friction: 26 },
  });

  const fadeLeft = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-28px)" },
    config: { tension: 140, friction: 26 },
    delay: 120,
  });

  return (
    <div className="section-wrapper">
      <animated.span style={fadeUp} className="section-eyebrow">Introduction</animated.span>
      <animated.h1 style={fadeUp} className="section-title">About Me</animated.h1>

      <div className="about-grid">
        <animated.div style={fadeLeft} className="about-photo-col">
          <img
            className="my-pic"
            src={me}
            alt="Hassan Zafar"
            width="200"
            height="200"
          />
        </animated.div>

        <animated.div style={fadeUp}>
          <p className="about-bio">
            I'm a Post-Baccalaureate Computer Science student at Oregon State University
            and a graduate of the UCI Full-Stack Coding Bootcamp. With hands-on software
            engineering projects and six years of customer service experience, I've built
            a strong foundation in problem-solving and full-stack development.
          </p>
          <p className="about-bio">
            Based in New York — I'm passionate about building intuitive, user-focused
            applications and sharpening my skills through LeetCode and real-world projects.
            Currently seeking an entry-level Software Engineer role where I can contribute,
            learn, and grow within a collaborative team.
          </p>
        </animated.div>
      </div>
    </div>
  );
}

export default About;