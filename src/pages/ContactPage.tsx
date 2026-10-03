import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FiMail, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Contact = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });
  const [isSending, setIsSending] = useState(false);

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
    setIsSending(true);
    setStatus({ type: "", text: "" });

    emailjs.init("5b2Gfq85-iEG15IRO");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: t("contact.hck_apps_support", "HCK Apps Support"),
      message: formData.message,
    };

    emailjs
      .send(
        "service_25i2o9h",
        "template_6ruwdyw",
        templateParams
      )
      .then(
        () => {
          setIsSending(false);
          setStatus({
            type: "success",
            text: t("contact.message_sends_successfully", "Mesajınız başarıyla gönderildi."),
          });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setIsSending(false);
          setStatus({
            type: "error",
            text: t("contact.message_sends_failed", "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin."),
          });
        }
      );
  };

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-black text-white px-4 sm:px-6 lg:px-8 py-12 flex items-center">
      <div className="max-w-[1100px] mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Sol Bölüm - Metin & İletişim E-postası */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t("contact.get_in_touch_with_us")}
          </h1>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>{t("contact.p1")}</p>
          </div>

          <div className="pt-2">
            <a
              href="mailto:hckapplications@gmail.com"
              className="inline-flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#0c1018] border border-gray-800 hover:border-[#00df9a] text-gray-300 hover:text-white transition-all text-sm group"
            >
              <FiMail className="text-[#00df9a] group-hover:scale-110 transition-transform" size={17} />
              <span className="font-mono text-xs sm:text-sm">hckapplications@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Sağ Bölüm - Sade Koyu Form */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-[#0c1018] border border-gray-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {t("contact.your_name")}
                </label>
                <input
                  className="w-full bg-black border border-gray-800 focus:border-[#00df9a] text-white placeholder-gray-600 rounded-xl p-3 text-sm outline-none transition-all"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.your_name")}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {t("contact.your_email")}
                </label>
                <input
                  className="w-full bg-black border border-gray-800 focus:border-[#00df9a] text-white placeholder-gray-600 rounded-xl p-3 text-sm outline-none transition-all"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.your_email")}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {t("contact.your_message")}
                </label>
                <textarea
                  className="w-full bg-black border border-gray-800 focus:border-[#00df9a] text-white placeholder-gray-600 rounded-xl p-3 text-sm outline-none transition-all resize-none"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.your_message")}
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#00df9a] hover:bg-[#00c87b] disabled:opacity-50 text-black font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer text-sm shadow-md"
              >
                <FiSend size={15} />
                <span>{isSending ? "Gönderiliyor..." : t("contact.send_message")}</span>
              </button>

              {status.type === "success" && (
                <div className="flex items-center space-x-2 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm">
                  <FiCheckCircle size={16} className="flex-shrink-0 text-emerald-400" />
                  <span>{status.text}</span>
                </div>
              )}

              {status.type === "error" && (
                <div className="flex items-center space-x-2 p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs sm:text-sm">
                  <FiAlertCircle size={16} className="flex-shrink-0 text-rose-400" />
                  <span>{status.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
