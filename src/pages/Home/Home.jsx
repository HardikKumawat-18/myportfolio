import "./home.scss";
import { ConnectNow, InterestCard, ProjectCard } from "../../components";
import { interestsData, projectsData } from "../../data";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll(`.project-card`);
    const projectCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.4,
      }
    );

    projectCards.forEach((card) => {
      projectCardObserver.observe(card);
    });
  });

  return (
    <div className="home">
      <div className="max-w-container">
        <section id="intro" className="intro">
          <h6 className="red-text">HELLO THERE,</h6>
          <h1 className="title">I'm Hardik.</h1>
          <h6 className="vsmalltext">Visual Designer</h6>

          <p className="sub-title">
            A visual designer based in Mumbai, India with 
            experience in conceptualizing and crafting digital 
            products, helping businesses and non-profits expand 
            their capacity for impact. I'm passionate about 
            improving the lives of others through design and am 
            constantly looking to learn new things every day. 
          </p>

          <button className="std-btn red">More About Me!</button>

          <span className="tag-line">
            I Create better experience for{" "}
            <span className="slashed-out">Users</span>
            <span className="floating-text">People</span>
          </span>
        </section>

        <section id="chat-with-me" className="chat-with-me">
          <div className="overlay-title-container">
            <img
              className="bg-logo"
              src="./images/AboutBg.svg"
              alt="AboutLogo"
            />
            <span className="overlay-title">Chat with me about..</span>
          </div>

          <div className="interest-card-container">
            {interestsData.map((item, index) => {
              return <InterestCard cardData={item} key={index} />;
            })}
          </div>
        </section>

        <section id="my-projects" className="my-projects">
          <div className="overlay-title-container">
            <img
              className="bg-logo"
              src="./images/UI-UX-logo.svg"
              alt="AboutLogo"
            />
            <span className="overlay-title">My Projects</span>
          </div>

          <div className="project-card-container">
            {projectsData.map((item, index) => {
              return <ProjectCard cardData={item} key={index} />;
            })}
          </div>
        </section>

        <ConnectNow />
      </div>
    </div>
  );
};
