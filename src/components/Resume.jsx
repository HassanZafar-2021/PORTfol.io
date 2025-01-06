import { useSpring, animated } from "react-spring"; // Import react-spring hooks
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
} from "@mui/material"; // Import MUI components

function Resume() {
  // Animation for the resume section title (fade in with slight upward movement)
  const titleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 150, friction: 25 },
  });

  // Animation for technical skills list
  const skillsAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 300, // Delay the skills list animation slightly
    config: { tension: 150, friction: 25 },
  });

  return (
    <Box id="resume" className="resume" sx={{ padding: "40px 0" }}>
      {/* Apply animation to Resume title */}
      <animated.div style={titleAnimation}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Resume
        </Typography>
      </animated.div>

      {/* Downloadable Resume Link */}
      <Box
        className="download-resume"
        sx={{ textAlign: "center", marginBottom: 3 }}
      >
        <Typography variant="body1">
          Download my resume{" "}
          <Button
            variant="contained"
            color="primary"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Button>
        </Typography>
      </Box>

      {/* Apply animation to the skills list */}
      <animated.div style={skillsAnimation}>
        <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Technical Skills Proficiencies
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={<strong>Languages:</strong>}
                secondary="Java (Expert), Python (Expert), JavaScript (Proficient), SQL (Proficient), TypeScript, C (Beginner)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<strong>Tools/Software:</strong>}
                secondary="LangChain, Docker, Git, GitLab, Jira, AWS, GCP, Bash, Insomnia, RESTful APIs, React"
              />
            </ListItem>
          </List>
        </Paper>
      </animated.div>
    </Box>
  );
}

export default Resume;
