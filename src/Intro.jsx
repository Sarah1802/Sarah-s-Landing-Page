import { profile } from "./profile.js";
import Typewriter from "./Typewriter.jsx";
import coffeeCat from "../public/assets/coffeecat.png";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <h1 className="intro-title">
        Hello, I'm <span className="intro-name">{profile.name}</span>
      </h1>

      <Typewriter lines={profile.typingLines} />

      {/* Placeholder until the 3D model is ready */}
      <div className="intro-model">
        <img src={coffeeCat} alt="Low-poly cat with headphones holding a coffee" />
        <div className="intro-model-shadow" />
      </div>

      <nav className="intro-links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        ))}
      </nav>
    </section>
  );
}

export default Intro;
