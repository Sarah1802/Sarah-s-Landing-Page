function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3 className="card-heading">{project.name}</h3>
      <div className="card-subheading card-tech">{project.tech}</div>
      <p className="card-description">{project.description}</p>
      <ul className="card-points">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
