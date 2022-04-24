import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer__main">
      <p className="footer__text">&copy; {year} Carlos Valencia</p>

      <div className="footer__contact">
        <IconButton
          aria-label="delete"
          size="large"
          href="https://www.linkedin.com/in/carlos-valencia-valenzuela-534b0419a/"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="delete"
          size="large"
          href="https://github.com/carlosValencia01"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="delete"
          size="large"
          href="mailto:jocavalenciava@ittepic.edu.mx?Subject=Contact%20from%20web%20page"
        >
          <MailOutlineIcon fontSize="inherit" />
        </IconButton>
      </div>
    </footer>
  );
};
