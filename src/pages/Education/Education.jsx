import "./Education.css";

const educationData = [
  {
    title: "Bachelor of Computer Application",
    subtitle: "Kota University",
    year: "2020 - 2024",
    description:
      "Graduated with honors, focusing on web development, networking, and databse",
  },
  {
    title: "Higher Secondary",
    subtitle: "M.J. Childrens Senior Secondary School",
    year: "2019 - 2020",
    description: "Completed 12th grade with a focus on arts subject.",
  },
  // {
  //   title: "Secondary School",
  //   subtitle: "Saint Terresa Senior Secondary School",
  //   year: "2014 - 2015",
  //   description: "Completed 10th grade with distinction.",
  // },
  {
    title: "Website Design & Development",
    subtitle: "Top Career Computers",
    year: "2019",
    description: "Completed 10th grade with distinction.",
  },
];

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h2>EDUCATION</h2>
      <div className="education-cards">
        {educationData.map((item, idx) => (
          <div className="education-card" key={idx}>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <span className="education-year">{item.year}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
