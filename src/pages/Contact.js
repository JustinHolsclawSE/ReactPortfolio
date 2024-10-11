import { useState } from "react";
// import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         alert("Message sent!");
  //       },
  //       (error) => {
  //         alert("Failed to send message, try again.");
  //       }
  //     );
  // };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <h1>We're working on it</h1>
    </>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     placeholder="Your Name"
    //     value={form.name}
    //     onChange={handleChange}
    //     required
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Your Email"
    //     value={form.email}
    //     onChange={handleChange}
    //     required
    //   />
    //   <textarea
    //     name="message"
    //     placeholder="Your Message"
    //     value={form.message}
    //     onChange={handleChange}
    //     required
    //   />
    //   <button type="submit">Send</button>
    // </form>
  );
}

export default Contact;
