import "./Education.css";

const educationData = [
  {
    title: "Bachelor of Computer Application",
    subtitle: "Kota University",
    year: "2020 - 2024",
    description:
      "Graduated with honors, focusing on web development, networking, and databse",
    certificateUrl:
      "https://drive.google.com/file/d/1R_8yUVAtCC-cLvrvwACHE7_6IhxipiAq/view?usp=drive_link",
    animation: "card1",
  },
  {
    title: "Higher Secondary",
    subtitle: "M.J. Childrens Senior Secondary School",
    year: "2019 - 2020",
    description: "Completed 12th grade with a focus on arts subject.",
    certificateUrl:
      "https://drive.google.com/file/d/1_7h6DBRt79pUGf1SwkbGycpbPsVvezVb/view?usp=drive_link",
    animation: "card2",
  },
];

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h2>EDUCATION</h2>
      <div className="education-cards">
        {educationData.map((item, idx) => (
          <div className={`education-card card ${item.animation}`} key={idx}>
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
                <button className="certificate-btn">View</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
