import { useState } from "react";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 150, friction: 25 },
  });

  const inputAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-30px)" },
    config: { tension: 120, friction: 22 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else {
      newErrors[name] = "";
    }

    if (name === "email" && !validateEmail(value)) {
      newErrors.email = "Valid email is required (e.g., name@example.com)";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      newErrors.email = "Valid email is required (e.g., name@example.com)";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fill in all required fields and provide a valid email.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Ensure the environment variables are correctly loaded
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_USER_ID
      ) {
        throw new Error(
          "Missing EmailJS credentials in environment variables."
        );
      }

      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSuccessMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box id="contact" sx={{ padding: "40px 0", backgroundColor: "#f5f5f5" }}>
      <animated.h2 style={{ ...formAnimation, color: "black" }} align="center">
        Contact Me
      </animated.h2>
      <animated.form onSubmit={handleSubmit} style={formAnimation}>
        {/* Name Field */}
        <animated.div style={inputAnimation}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            variant="outlined"
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
        </animated.div>

        {/* Email Field */}
        <animated.div style={inputAnimation}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </animated.div>

        {/* Message Field */}
        <animated.div style={inputAnimation}>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
        </animated.div>

        {/* Submit Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>

        {/* Success or Error Message */}
        {successMessage && (
          <Typography
            variant="body2"
            color={successMessage.includes("successfully") ? "green" : "red"}
            align="center"
            sx={{ marginTop: 2 }}
          >
            {successMessage}
          </Typography>
        )}
      </animated.form>
    </Box>
  );
}

export default Contact;
