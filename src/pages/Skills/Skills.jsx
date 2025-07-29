import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress, SiPostman } from "react-icons/si";

const skillsList = [
  { icon: <FaHtml5 color="#e44d26" />, name: "HTML5" },
  { icon: <FaCss3Alt color="#1572b6" />, name: "CSS3" },
  { icon: <FaJs color="#f7df1e" />, name: "JavaScript" },
  { icon: <FaReact color="#61dafb" />, name: "React" },
  { icon: <FaNodeJs color="#3c873a" />, name: "Node.js" },
  { icon: <SiExpress color="#fff" />, name: "Express" },
  { icon: <SiMongodb color="#47a248" />, name: "MongoDB" },
  { icon: <SiRedux color="#764abc" />, name: "Redux" },
  { icon: <FaBootstrap color="#7952b3" />, name: "Bootstrap" },
  { icon: <SiPostman color="#ff6c37" />, name: "Postman" },
  { icon: <FaFigma color="#a259ff" />, name: "Figma" },
  { icon: <FaGitAlt color="#f34f29" />, name: "Git" },
];

const Skills = () => {
  return (
    <>
      <section className="skills-container" id="skills">
        <div className="heading">
          <h2>SKILLS</h2>
          <p>
            Here are some of the technologies and tools I have experience with,
            ranging from front-end development to back-end, databases, version
            control.
          </p>
          <div className="skills-card">
            {skillsList.map((skill, idx) => (
              <div className="skill-icon" key={idx}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
