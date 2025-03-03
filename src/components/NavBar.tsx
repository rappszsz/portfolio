
import "./NavBar.css"; // Ensure you have this file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1>My Portfolio</h1>
            </div>
            <ul>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contacts">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
