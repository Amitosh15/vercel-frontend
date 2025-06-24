import "./Projects.css";
import wp from "../../assets/wp-site.png";
import eCommerce from "../../assets/e-commerce.png";

const projectData = [
  {
    image: eCommerce,
    title: "E-commerce App",
    description:
      "A full-stack MERN e-commerce application with user authentication and payment integration.",
    link: "#",
    languages: [
      "HTML",
      "CSS",
      "Bootstrap",
      "React",
      "Node",
      "Express",
      "MongoDb",
    ],
  },
  {
    image: wp,
    title: "Clothing Website",
    description:
      "Developed and launched a WordPress e-commerce website for clothing sales, managing all aspects from design to product listing.",
    link: "https://awaarafashion.com/",
    languages: ["Wordpress", "Elementor", "Plugins"],
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website built with React to showcase my projects and skills.",
  //   link: "#",
  //   languages: ["React", "Node", "Css"],
  // },
];

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-cards">
        {projectData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt="Err" className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="project-btn">View Project</button>
            </a>
            <div className="project-language">
              {project.languages.map((lang, i) => (
                <span className="project-lang" key={i}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
