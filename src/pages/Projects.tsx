const projects = [
  {
    title: "Project 1",
    description: "A cool project I worked on...",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  // More projects...
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
