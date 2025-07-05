import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setStatus("Sending...");
  };

  return (
    <section className="contact-container" id="contact">
      <h2>CONTACT</h2>
      <p>
        I'd love to hear from you! Fill out the form below and I'll get back to
        you soon.
      </p>
      <form
        action="https://formspree.io/f/mqaboavp"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
