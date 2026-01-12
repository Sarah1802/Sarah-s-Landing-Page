import { profile } from "./profile.js";
import { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import clickSound from "./assets/click.mp3";
import closeSound from "./assets/close.mp3";
import openSound from "./assets/open.mp3";
import "./Profile.css";

function Profile() {
  const [tab, setTab] = useState(0);
  const nodeRef = useRef(null);
  const clickAudio = new Audio(clickSound);
  clickAudio.volume = 0.2;
  const closeAudio = new Audio(closeSound);
  closeAudio.volume = 0.15;
  const openAudio = new Audio(openSound);
  openAudio.volume = 0.2;
  const [clickSoundEffect, setClickSound] = useState(openAudio);

  const experienceCards = profile.workExperience.map((exp) => {
    return <ExperienceCard experience={exp} experienceType={"work"} />;
  });

  const leadershipExperienceCards = profile.leadershipExperience.map((exp) => {
    return <ExperienceCard experience={exp} experienceType={"leadership"} />;
  });

  const projectCards = profile.projects.map((project) => {
    return <ProjectCard project={project} />;
  });

  function handleOpenExperience() {
    clickSoundEffect.play();
    setClickSound(clickAudio);
    setTab(1);
  }

  function handleOpenLeadershipExperience() {
    clickSoundEffect.play();
    setClickSound(clickAudio);
    setTab(2);
  }

  function handleOpenProjects() {
    clickSoundEffect.play();
    setClickSound(clickAudio);
    setTab(3);
  }

  function handleClose() {
    setClickSound(openAudio);
    setTab(0);
    closeAudio.play();
  }

  return (
    <div className="profile-container">
      <div className="title">Hello, I'm Sarah</div>

      <div className="about-me">{profile.bio}</div>

      <div className="navbar-container">
        <button
          className={`navbar-item ${tab === 1 ? "open" : ""}`}
          onClick={handleOpenExperience}>
          Experience
        </button>
        <button
          className={`navbar-item ${tab === 2 ? "open" : ""}`}
          onClick={handleOpenLeadershipExperience}>
          Leadership Experience
        </button>
        <button
          className={`navbar-item ${tab === 3 ? "open" : ""}`}
          onClick={handleOpenProjects}>
          Projects
        </button>
      </div>

      <div className={`main-content-container ${tab > 0 ? "open" : ""}`}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={tab}
            nodeRef={nodeRef}
            timeout={300}
            classNames="fade">
            <div ref={nodeRef} className="cards-container">
              {tab === 1 && (
                <>
                  <button
                    className="close-button"
                    onClick={() => handleClose()}>
                    close
                  </button>
                  {experienceCards}
                </>
              )}

              {tab === 2 && (
                <>
                  <button
                    className="close-button"
                    onClick={() => handleClose()}>
                    close
                  </button>
                  {leadershipExperienceCards}
                </>
              )}

              {tab === 3 && (
                <>
                  <button
                    className="close-button"
                    onClick={() => handleClose()}>
                    close
                  </button>
                  {projectCards}
                </>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default Profile;
