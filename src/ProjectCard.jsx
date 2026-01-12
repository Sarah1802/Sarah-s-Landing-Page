function ProjectCard({ project }) {
  const bulletPoints = project.points.map((point) => {
    return <li key={point.id}>{point.description}</li>;
  });

  return (
    <div>
      <div className="project-name card-heading">{project.name}</div>
      <div className="project-description card-subheading">
        {project.description}
      </div>
      <div className="project-points card-content">
        <ul>{bulletPoints}</ul>
      </div>
    </div>
  );
}

export default ProjectCard;
