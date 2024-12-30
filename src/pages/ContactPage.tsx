import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure EmailJS is initialized
    emailjs.init("5b2Gfq85-iEG15IRO"); // Replace with your EmailJS user ID

    // Prepare the data for sending the email
    const templateParams = {
      from_name: formData.name,   // Sender's name (from the form input)
      from_email: formData.email, // Sender's email (from the form input)
      to_name: "HCK Apps Support", // Replace with recipient's name or dynamic value
      message: formData.message,  // The message (from the form input)
    };

    emailjs
      .send(
        "service_svgpxsm", // Replace with your EmailJS service ID
        "template_6ruwdyw", // Replace with your EmailJS template ID
        templateParams
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    
      <div className="w-full py-16 text-white px-4 " style={{ minHeight: "calc(100vh - 96px)" }}>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Section - Text */}
          <div className="lg:col-span-2 flex flex-col justify-center items-start text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
              Get in Touch with Us
            </h1>
            <p className="text-lg mb-4">
              If you have any questions, concerns, or simply want to say hello, feel free to reach out to us
              through the form below. We're always here to assist you with any queries you may have, whether it's 
              about our services, your account, or something else entirely. Don't hesitate to get in touch, as we 
              value every message we receive and aim to respond as quickly as possible.
            </p>
            <p className="text-lg mt-4">
              Our team is dedicated to providing you with the best support, and we want to ensure your experience
              with us is nothing short of excellent. Whether you need technical assistance, have a question about 
              our products, or simply want to share your thoughts, we're eager to hear from you and assist in any 
              way we can. Reach out now, and let's connect!
            </p>
          </div>
          
          {/* Right Section - Form */}
          <div className="my-4 flex flex-col justify-center items-center lg:col-span-1 px-6 py-8 bg-white rounded-md shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                className="p-3 mb-4 rounded-md text-black"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                className="p-3 mb-4 rounded-md text-black"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                className="p-3 mb-4 rounded-md text-black"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-black font-bold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
