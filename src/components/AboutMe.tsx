
import myPhoto from "../assets/myphoto.jpg"; // Adjust path if needed
import "./AboutMe.css"; // Import the CSS file

const AboutMe = () => {
  return (
    <div id="AboutMe" className="about-container">
 <div className="about-container">
      <div className="image-wrapper">
        <img src={myPhoto} alt="My Photo" className="profile-img" />
      </div>

      <div className="about-text">
        <h1>Hi! My Name is</h1>
        <h2>Ralph Christian Andoni</h2>
        <p>I'm a Web Developer</p><br /><br />
        <section className="home-intro">
          <h4>
            I'm a passionate web developer specializing in modern frontend and backend technologies.  
            <br />
            I love building responsive and interactive applications.
          </h4>
        <br /><br /><br />
        <div className="more-about-me">
            <h2>⭐ More About Me</h2>

            <p>🔍 <b>Problem Solver:</b> I enjoy tackling complex coding challenges and optimizing performance. 
            I love debugging and ensuring that applications run smoothly without any issues. Problem-solving is something I thrive on.</p>

            <p>🎮 <b>Gamer at Heart:</b> When I’m not coding, you’ll find me gaming online. 
            I enjoy both competitive and casual games, as they help me relax and improve my critical thinking. 
            Some of my favorite genres include strategy, RPGs, and FPS.</p>

            <p>🏋️‍♂️ <b>Fitness Enthusiast:</b> I stay active at the gym and believe in balancing work and health. 
            Regular exercise helps me maintain focus and energy levels, which is crucial for long coding sessions. 
            I also enjoy outdoor activities like jogging and hiking.</p>

            <p>🚀 <b>Always Learning:</b> I love exploring new technologies and improving my skills. 
            Whether it’s mastering a new programming language, learning about the latest web development trends, 
            or diving into AI and machine learning, I am always eager to grow as a developer.</p>
            
        </div>

        </section>
      </div>
    </div>

    </div>
   
  );
};

export default AboutMe;
