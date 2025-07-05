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
  {
    title: "Website Design & Development",
    subtitle: "Top Career Computers",
    year: "2019",
    description:
      "Learned the fundamentals of web development including HTML, CSS, JavaScript, PHP, and Bootstrap.",
    certificateUrl:
      "https://drive.google.com/file/d/1FzTXfeXoK5JBD1N_MHmxcaXFcxPldo9u/view?usp=drive_link",
  },
  {
    title: "Full-Stack Web Development Certification",
    subtitle: "Udemy",
    year: "2024",
    description:
      "Completed a certification in full-stack web development from Udemy, covering modern technologies such as React, Node.js, Express, and MongoDB.",
    certificateUrl:
      "https://drive.google.com/file/d/13G1pzY5C3CPy5lT41CI5SrFeUhVRJfvT/view?usp=drive_link",
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
            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="certificate-btn">View Certificate</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
