import { profile } from "./profile.js";
import { useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import clickSound from "../public/assets/click.mp3";
import "./Profile.css";

function About() {
  const { education, skills } = profile;
  return (
    <>
      <p className="about-bio">{profile.bio}</p>

      <article className="card">
        <div className="card-top">
          <h3 className="card-heading">{education.school}</h3>
          <span className="card-date">{education.date}</span>
        </div>
        <div className="card-subheading">{education.degree}</div>
        <ul className="card-points">
          {education.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </article>

      <article className="card">
        <h3 className="card-heading">Skills</h3>
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <div className="card-subheading">{group}</div>
            <ul className="chips">
              {items.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </>
  );
}

const TABS = [
  { id: "about", label: "About", render: () => <About /> },
  {
    id: "experience",
    label: "Experience",
    render: () => profile.workExperience.map((e) => <ExperienceCard key={e.org} experience={e} />),
  },
  {
    id: "projects",
    label: "Projects",
    render: () => profile.projects.map((p) => <ProjectCard key={p.name} project={p} />),
  },
  {
    id: "leadership",
    label: "Leadership",
    render: () =>
      profile.leadershipExperience.map((e) => <ExperienceCard key={e.org} experience={e} />),
  },
];

function Profile() {
  const [tabId, setTabId] = useState(TABS[0].id);
  const nodeRef = useRef(null);

  const tab = TABS.find((t) => t.id === tabId);

  function selectTab(id) {
    if (id === tabId) return;
    const click = new Audio(clickSound);
    click.volume = 0.2;
    click.play().catch(() => {});
    setTabId(id);
  }

  return (
    <section className="profile">
      <nav className="tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === tabId}
            className={`tab ${t.id === tabId ? "active" : ""}`}
            onClick={() => selectTab(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      <div className="window">
        <div className="window-bar">
          <span className="window-title">{tab.label.toLowerCase()}.txt</span>
          <span className="window-buttons" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="window-body">
          <SwitchTransition mode="out-in">
            <CSSTransition key={tabId} nodeRef={nodeRef} timeout={200} classNames="fade">
              <div ref={nodeRef} className="cards" role="tabpanel">
                {tab.render()}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  );
}

export default Profile;
