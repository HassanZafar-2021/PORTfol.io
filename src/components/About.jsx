import { useSpring, animated } from "react-spring";
import { Box, Typography, Paper } from "@mui/material";
import me from "../assets/developer.jpg";

function About() {
  const imageAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { tension: 150, friction: 25 },
  });

  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 150, friction: 25 },
  });

  return (
    <Box id="about" className="about" sx={{ padding: "40px 0" }}>
      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Image with animation */}
        <animated.img
          className="my-pic"
          src={me}
          alt="Hassan Zafar"
          style={imageAnimation}
          width="200"
          height="200"
          sx={{ borderRadius: "50%", marginBottom: 2 }}
        />

        {/* Header text with animation */}
        <animated.div style={textAnimation}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            sx={{ color: "#1a1a1a" }} // Darker text color (near black)
          >
            I am a Full Stack Engineer with over three years of experience in
            building scalable and user-friendly web applications. Based in
            Commack, NY, I specialize in both front-end and back-end
            development. I am seeking an entry-level Software Engineer or
            Computer Programmer role where I can contribute my skills and grow
            within a dynamic team. Feel free to check out my resume and reach
            out!
          </Typography>
        </animated.div>
      </Paper>
    </Box>
  );
}

export default About;
