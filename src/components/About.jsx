import { useSpring, animated } from "react-spring"; // Import react-spring hooks
import { Box, Typography, Paper } from "@mui/material"; // Import MUI components
import me from "../assets/developer.jpg"; // Your image

function About() {
  // Animation for image and text
  const imageAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" }, // Start from opacity 0 and move image up
    config: { tension: 150, friction: 25 }, // Custom configuration for smooth animation
  });

  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" }, // Start from opacity 0 and move text up
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
          style={imageAnimation} // Apply animation to the image
          width="200" // Image width, adjust as needed
          height="200" // Image height, adjust as needed
          sx={{ borderRadius: "50%", marginBottom: 2 }} // Round image
        />

        {/* Header text with animation */}
        <animated.div style={textAnimation}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ color: "#1a1a1a" }} // Darker text color (near black)
          >
            I am a full stack engineer with over 3 years of experience. I am
            from Commack, NY, and 23 years old. I am looking for any entry-level
            software engineer/computer programmer job. Feel free to look at my
            resume and contact!
          </Typography>
        </animated.div>
      </Paper>
    </Box>
  );
}

export default About;
