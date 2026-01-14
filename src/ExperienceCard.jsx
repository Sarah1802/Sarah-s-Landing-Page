function ExperienceCard({ experience, experienceType }) {
  const bulletPoints = experience.points.map((p) => {
    return <li key={p.id}>{p.description}</li>;
  });

  return (
    <div>
      <div className="position-date">
        <div className="position card-heading">{experience.role}</div>
        <div className="date card-subheading">{experience.date}</div>
      </div>
      <div className="company-club card-subheading">
        {experienceType == "work" ? experience.company : experience.club}
      </div>
      <div className="card-content">
        <ul>{bulletPoints}</ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
