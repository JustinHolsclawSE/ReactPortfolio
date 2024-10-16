import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    business: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_9qlr632", "template_wz5p2qv", e.target, {
        publicKey: "3upJF7XreZmZSLaho",
      })
      .then(
        (result) => {
          alert(
            "Message sent! Thanks for sending me an email I'll get back to you as soon as possible."
          );
        },
        (error) => {
          alert("Failed to send message, try again.");
        }
      );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl text-white font-bold underline underline-offset-4">
        Contact Me
      </h1>
      <p className="container mx-auto text-white text-center">
        If you'd like to contact me about employment or questions regarding my
        qualifications please drop me a line.
      </p>
      <br/>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <div className="w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
              for="grid-first-name">
              Business
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="business"
              placeholder="Business"
              value={form.business}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
              for="grid-first-name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
              for="grid-last-name">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
              for="grid-password">
              Message
            </label>
            <textarea
              className="appearance-none block w-full h-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-lg text-white border p-2 rounded-lg hover:bg-blue-200 hover:text-black mt-6 mb-6"
            type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
