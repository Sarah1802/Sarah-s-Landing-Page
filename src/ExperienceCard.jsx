function ExperienceCard({ experience }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3 className="card-heading">{experience.org}</h3>
        <span className="card-date">{experience.date}</span>
      </div>
      <div className="card-subheading">
        {experience.role}
        {experience.tech && <span className="card-tech"> · {experience.tech}</span>}
      </div>
      <ul className="card-points">
        {experience.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
