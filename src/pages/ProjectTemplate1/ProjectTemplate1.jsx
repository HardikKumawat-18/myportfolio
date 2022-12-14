import "./projecttemplate.scss";
import {
  ConnectNow,
  FeedbackCard,
  Carousel,
  CarouselItem,
  HorizontalDrag,
  PrototypeCarousel,
  Modal,
  PrototypeDesktopCarousel,
  Loading,
  MagnifyImage,
} from "../../components";
import { useParams } from "react-router-dom";
import { projects } from "../../data";
import { useEffect, useState } from "react";

export const ProjectTemplate1 = () => {
  const [loading, setLoading] = useState(true);
  const { projectName } = useParams();
  const { uiUx } = projects;
  const { [projectName]: projectData } = uiUx;
  const [modalBool, setModalBool] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    let interval = setInterval(() => {
      setLoading(false);
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    projectData && (
      <div className={`project-info ${loading ? `pre-load` : ``}`}>
        <div className="max-w-container">
          <section id="intro" className="intro">
            <div className="flex-container">
              <div className="left">
                <img
                  className="logo"
                  src={
                    projectData.projectLogoImg
                      ? `/images/${projectData.projectLogoImg}`
                      : projectData.projectLogoURL
                  }
                  alt="logo"
                />
                <h1 className="title">{projectData.projectTitle}</h1>
                <h2 className="sub-title">{projectData.subTitle}</h2>
              </div>
              <img
                className="mock-img"
                src={
                  projectData.mockImg
                    ? `/images/${projectData.mockImg}`
                    : projectData.mockURL
                }
                alt="Docup Mock"
              />
            </div>
          </section>

          <section id="over-view" className="over-view">
            <div className="flex-container">
              {projectData.projectOverview.map((item, index) => {
                return (
                  <div key={index} className="content-box">
                    <div className="sub-title">{item.title}</div>
                    <div className="desc">
                      {item.desc
                        ? item.desc
                        : item.roles.map((role, index) => {
                            return (
                              <p key={index} className="desc">
                                {role}
                                <br />
                                <br />
                              </p>
                            );
                          })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="design-process" className="design-process">
            <h2 className="sub-title">My Design Process</h2>
            <Carousel>
              {projectData.designProcess.map((item, index) => {
                let { pictureImg } = item;
                return (
                  <CarouselItem key={index}>
                    <img
                      className="carousel-img"
                      src={`/images/${pictureImg}`}
                      alt=""
                    />
                  </CarouselItem>
                );
              })}
            </Carousel>

            {projectData.userResearch && (
              <>
                <h2 className="sub-title">User Research</h2>
                <p className="desc">{projectData.userResearch}</p>
              </>
            )}
            <div className="research-img-container">
              {projectData.userResearchImages &&
                projectData.userResearchImages.map((image, index) => {
                  return (
                    <div className="img-container" key={index}>
                      <img
                        className="user-research-img"
                        src={`/images/${image}`}
                        onClick={() => {
                          setModalBool(true);
                          setImgSrc(`/images/${image}`);
                        }}
                        alt="user-reasearch-img"
                      />
                    </div>
                  );
                })}
            </div>

            {projectData.problemIdentification && (
              <>
                <h2 className="sub-title">Problem Identification</h2>
                <div className="flex-container">
                  {projectData.problemIdentification.map((problem, index) => {
                    return (
                      <div className="problem" key={index}>
                        <div className="img-container">
                          <img
                            src={`/images/${
                              problem.problemImg || problem.problemURL
                            }`}
                            alt=""
                          />
                        </div>
                        <p className="desc">{problem.problemDesc}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {projectData.userJourney && (
              <>
                <h2 className="sub-title">User Journey</h2>
                {projectData.userJourney && (
                  <MagnifyImage images={projectData.userJourney} />
                )}
              </>
            )}
          </section>

          <section id="prototyping" className="prototyping">
            <h2 className="sub-title">Prototyping</h2>
            {projectData.wireframes && (
              <>
                <h2 className="sub-title">Wireframes</h2>
                <HorizontalDrag
                  slides={projectData.wireframes}
                  modalBool={setModalBool}
                  imgSrc={setImgSrc}
                />
              </>
            )}
            {projectData.highFidelityPrototype && (
              <>
                <h2 className="sub-title">High Fidelity Prototype</h2>
                <PrototypeCarousel slides={projectData.highFidelityPrototype} />
              </>
            )}
            {projectData.highFidelityDesktopPrototype && (
              <>
                <h2 className="sub-title">High Fidelity Prototype(Desktop)</h2>
                <PrototypeDesktopCarousel
                  slides={projectData.highFidelityDesktopPrototype}
                />
              </>
            )}

            {projectData.prototypeFeedback && (
              <>
                <h2 className="sub-title">Prototype Feedback</h2>
                <div className="feedback-container">
                  {projectData.prototypeFeedback.map((feedback, index) => {
                    return (
                      <FeedbackCard
                        userName={feedback.userName}
                        imgSrc={feedback.userProfile}
                        feedback={feedback.feedback}
                        index={index}
                        key={index}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </section>

          <ConnectNow />
        </div>
        {modalBool && <Modal imgSrc={imgSrc} modalBool={setModalBool} />}
        {loading && <Loading />}
      </div>
    )
  );
};
