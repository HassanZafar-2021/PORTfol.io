import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-copy">
        © {new Date().getFullYear()} <strong>Raja Hassan Zafar</strong> — Built with React & Vite
      </span>

      <div className="footer-links">
        <a href="https://www.linkedin.com/in/hassanz-/" target="_blank" rel="noreferrer">
          <LinkedInIcon style={{ fontSize: "1rem" }} />
          LinkedIn
        </a>
        <a href="https://github.com/HassanZafar-2021" target="_blank" rel="noreferrer">
          <GitHubIcon style={{ fontSize: "1rem" }} />
          GitHub
        </a>
        <a href="https://stackoverflow.com/users/21277190/hassan-zafar" target="_blank" rel="noreferrer">
          SO
        </a>
      </div>
    </footer>
  );
}

export default Footer;