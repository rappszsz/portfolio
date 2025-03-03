import "./Projects.css"; // Import the CSS file

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my skills, projects, and contact information.",
  },
  {
    title: "Task Manager App",
    description: "A simple web app to create, track, and manage daily tasks efficiently.",
  },
  {
    title: "Weather App",
    description: "An application that fetches real-time weather updates using an API.",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h2 className="projects-title">📂 Projects</h2>
      <ul className="projects-list">
        {projectsData.map((project, index) => (
          <li key={index} className="project-item">
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
