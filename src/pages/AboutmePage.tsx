import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaStackOverflow,
  FaGooglePlay,
} from "react-icons/fa";

function AboutMe() {
  return (
    
      <div
        className="w-full bg-black text-white px-8 py-16 flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 96px)" }}
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#00df9a] mb-4">About Me</h1>
            <p className="text-lg mb-4">
              Hi, I’m <span className="font-bold text-[#00df9a]">Hasancan Çakıcıoğlu</span>, a software developer with a strong
              focus on mobile app development using <span className="font-bold text-[#00df9a]">Flutter</span>. I've been working
              with Flutter for about three years, building high-performance,
              user-friendly applications for iOS and Android. My passion for
              technology extends to Artificial Intelligence, an area I’ve been
              exploring for the past two years. I’ve worked on projects
              involving <span className="font-bold text-[#00df9a]">AI</span> and machine learning, and I’m eager to dive deeper
              into this field. While Flutter is my main expertise, I’ve also
              gained experience in backend development, particularly with
              <span className="font-bold text-[#00df9a]"> Nodejs</span>, which has helped me build full-stack applications. This
              experience allows me to create complete solutions that integrate
              both front-end and back-end components.
            </p>
            <p className="text-lg mb-6">
            I am currently in my final year at <span className="font-bold text-[#00df9a]">Beykoz University</span>, studying Computer Science. As I prepare for my career, I aim to continue learning and applying my skills in mobile development, AI, and backend technologies, and I look forward to contributing to exciting projects in the future.
            </p>
            {/* Download CV Button */}
            <div className="flex items-center">
              
              {/* Social Icons */}
              <div className="flex ml-4 space-x-4">
                <a
                  href="https://linkedin.com/in/hasancan-çakıcıoğlu-a8560a255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} className="hover:text-[#00df9a]" />
                </a>
                <a
                  href="https://github.com/HasancanCakicioglu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare size={28} className="hover:text-[#00df9a]" />
                </a>
                <a
                  href="https://medium.com/@hckecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMedium size={28} className="hover:text-[#00df9a]" />
                </a>
                <a
                  href="https://stackoverflow.com/users/17810039/hasancan-%c3%87ak%c4%b1c%c4%b1o%c4%9flu?tab=profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaStackOverflow size={28} className="hover:text-[#00df9a]" />
                </a>
                <a
                  href="https://play.google.com/store/apps/developer?id=HCK+Apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay size={28} className="hover:text-[#00df9a]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src="/p2.jpeg"
              alt="About Me"
              className="rounded-full shadow-lg w-72 h-72 object-cover"
            />
          </div>
        </div>
      </div>
    
  );
}

export default AboutMe;
