import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");
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
      to_name: t("contact.hck_apps_support"), // Replace with recipient's name or dynamic value
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
          setStatus(t('contact.message_sends_successfully'));
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus(t('contact.message_sends_failed'));
        }
      );
  };

  return (
    
      <div className="w-full py-16 text-white px-4 " style={{ minHeight: "calc(100vh - 96px)" }}>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Section - Text */}
          <div className="lg:col-span-2 flex flex-col justify-center items-start text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
              {t("contact.get_in_touch_with_us")}
            </h1>
            <p className="text-lg mb-4">
              {t("contact.p1")}
            </p>
            <p className="text-lg mt-4">
              {t("contact.p2")}
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
                placeholder={t("contact.your_name")}
                required
              />
              <input
                className="p-3 mb-4 rounded-md text-black"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.your_email")}
                required
              />
              <textarea
                className="p-3 mb-4 rounded-md text-black"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.your_message")}
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
              >
                {t("contact.send_message")}
              </button>
              {status && <p className="mt-4 text-center text-black font-bold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
