import { useState } from "react";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const fadeUp = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(24px)" },
    config: { tension: 140, friction: 26 },
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    if (!value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      newErrors[name] = "";
    }
    if (name === "email" && value && !validateEmail(value)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
                                   newErrors.email   = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setSuccessMessage("ok");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSuccessMessage("err");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-wrapper">
      <animated.span style={fadeUp} className="section-eyebrow">Get In Touch</animated.span>
      <animated.h2 style={fadeUp} className="section-title">Contact Me</animated.h2>

      <div className="contact-grid">
        {/* Left — intro + social links */}
        <animated.div style={fadeUp}>
          <p className="contact-intro">
            I'm actively looking for entry-level Software Engineer opportunities.
            Whether you have a role in mind, want to collaborate, or just want to say hi
            — my inbox is open.
          </p>

          <a className="contact-link-row" href="mailto:hassanz.dev@gmail.com">
            <span className="contact-link-icon">✉</span>
            hassaanzafar3@gmail.com
          </a>
          <a className="contact-link-row" href="https://www.linkedin.com/in/hassanz-/" target="_blank" rel="noreferrer">
            <span className="contact-link-icon">in</span>
            linkedin.com/in/hassanz-
          </a>
          <a className="contact-link-row" href="https://github.com/HassanZafar-2021" target="_blank" rel="noreferrer">
            <span className="contact-link-icon">⌥</span>
            github.com/HassanZafar-2021
          </a>
          <a className="contact-link-row" href="https://stackoverflow.com/users/21277190/hassan-zafar" target="_blank" rel="noreferrer">
            <span className="contact-link-icon">◈</span>
            StackOverflow Profile
          </a>
        </animated.div>

        {/* Right — contact form */}
        <animated.form style={fadeUp} className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              className={`form-input${errors.name ? " error" : ""}`}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              className={`form-input${errors.email ? " error" : ""}`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@example.com"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className={`form-textarea${errors.message ? " error" : ""}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's on your mind?"
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>

          {successMessage && (
            <div className={`form-success ${successMessage}`}>
              {successMessage === "ok"
                ? "Message sent! I'll get back to you soon."
                : "Something went wrong. Please try again or email me directly."}
            </div>
          )}
        </animated.form>
      </div>
    </div>
  );
}

export default Contact;