import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItem = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];
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

      {/* Navbar menu */}
      <ul className={`navbar-links${isOpen ? " open" : ""}`}>
        {menuItem.map((item) => (
          <li
            key={item.id}
            className={`nav-list ${
              activeSection === item.id ? "text-[#38bdf8]" : ""
            }`}
          >
            <button
              className="nav-btn"
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
