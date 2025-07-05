import "./About.css";
import profileImg from "../../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section className="about-container" id="about">
        <div className="about-content">
          <div className="main-text">
            <span> Hi, I am </span>
            <span>Amitosh</span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
              className="type-animation"
            />
            <p>
              I am a full-stack developer skilled in both front-end and back-end
              development. I specialize in the MERN stack.
            </p>
            <div className="button" download>
              <a href="/Amitosh-Resume.pdf">
                <button type="button">DOWNLOAD CV</button>
              </a>
            </div>
          </div>
          <img src={profileImg} className="about-image" alt="image not found" />
        </div>
      </section>
    </>
  );
};

export default Home;
