import { Box, Typography, Link, IconButton } from "@mui/material"; // Material UI components
import { useSpring, animated } from "react-spring"; // react-spring for animations
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SvgIcon } from "@mui/material"; // Importing SvgIcon for custom StackOverflowIcon

// Custom StackOverflow Icon
const StackOverflowIcon = () => (
  <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M7.307 16.84h11.389v1.535H7.307zM5.623 13.932L16.98 7.122l.836 1.452-11.34 6.793zM16.355 10.484l.878 1.452-10.782 6.6-1.091-.961zM8.712 8.116l8.98 5.333-.897 1.457-8.997-5.325z" />
  </SvgIcon>
);

function Footer() {
  // Animation for the footer content
  const footerAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" }, // Start with hidden, slide up
    config: { tension: 120, friction: 25 },
  });

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <animated.div style={footerAnimation}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <Link
            href="https://github.com/HassanZafar-2021"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Raja Hassan Zafar
          </Link>
        </Typography>

        <Box>
          <Link
            href="https://www.linkedin.com/in/hassanz-/"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#fff",
              textDecoration: "none",
              mx: 1, // Horizontal margin between links
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
          </Link>
          |
          <Link
            href="https://stackoverflow.com/users/21277190/hassan-zafar"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#fff",
              textDecoration: "none",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <StackOverflowIcon sx={{ mr: 1 }} /> StackOverflow
          </Link>
          |
          <Link
            href="https://github.com/HassanZafar-2021"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#fff",
              textDecoration: "none",
              mx: 1,
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> GitHub
          </Link>
        </Box>
      </animated.div>
    </Box>
  );
}

export default Footer;
