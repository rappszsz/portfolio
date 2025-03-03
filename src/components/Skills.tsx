import "./Skills.css"; // Import the CSS file

const skillsData = [
  { name: "CSS", level: "80%", description: "Styling web pages with modern design techniques." },
  { name: "JavaScript", level: "85%", description: "Building interactive and dynamic web applications." },
  { name: "React", level: "75%", description: "Developing efficient and reusable UI components." },
  { name: "Node.js", level: "70%", description: "Creating backend services and APIs." },
];

const Skills = () => {
  return (
    <div id="Skills" className="skills-container">
      <h2 className="skills-title">🚀 Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
            <p className="skill-description">{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
