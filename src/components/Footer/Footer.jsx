import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Amitosh</h2>
      <div className="footer-icons">
        <a
          href="https://github.com/Amitosh15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="linkedin.com/in/amitosh-kashyap-91662b203"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      &copy; 2025 MyPortfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
