import "./Contacts.css";

const Contacts = () => {
  return (
    <div id="Contacts" className="contacts-container">
      <h2 className="contacts-title">📞 Contact Me</h2>
      <p className="contacts-description">
        Feel free to reach out! Whether it's for a project, collaboration, or just a chat, I'm always open to connecting.
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Your City, Country</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contacts;
