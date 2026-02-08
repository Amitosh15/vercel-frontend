import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Amitosh</div>

      {/* Hamburger button */}
      <button
        className="navbar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? (
          <FiX size={28} color="#fff" />
        ) : (
          <FiMenu size={28} color="#fff" />
        )}
      </button>

      <ul className={`navbar-links${isOpen ? " open" : ""}`}>
        <Link to={"/about"} onClick={closeMenu}>
          <li>About</li>
        </Link>
        <Link to={"/education"} onClick={closeMenu}>
          <li>Education</li>
        </Link>
        <Link to={"/skills"} onClick={closeMenu}>
          <li>Skills</li>
        </Link>
        <Link to={"/projects"} onClick={closeMenu}>
          <li>Projects</li>
        </Link>
        <Link to={"/contact"} onClick={closeMenu}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
