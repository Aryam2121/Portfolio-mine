import React from "react";
import Particle from "./Particle";

const SocialLink = ({ href, iconClass, ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
    <i className={`${iconClass} text-white`}></i>
  </a>
);

export default function Home() {
  return (
    <>
      <Particle />
      <div className="home flex flex-col items-center justify-center gap-4 h-screen">
        <p className="name font-medium text-white text-8xl">
          Aryaman<span className="text-sky-500"> Gupta</span>
        </p>
        <p className="title text-white text-2xl">
          Software Developer & Data Engineer
        </p>
        <div className="socials text-white text-3xl flex gap-6 mt-2">
          <SocialLink
            href="mailto:aryamangupta2121@gmail.com"
            iconClass="fa-solid fa-envelope"
            ariaLabel="Email Aryaman Gupta"
          />
          <SocialLink
            href=""
            iconClass="fa-solid fa-file-lines"
            ariaLabel="Resume"
          />
          <SocialLink
            href="https://www.linkedin.com/in/aryaman-gupta-b077b2257/"
            iconClass="fa-brands fa-linkedin"
            ariaLabel="LinkedIn Profile"
          />
          <SocialLink
            href="https://github.com/Aryam2121"
            iconClass="fa-brands fa-github"
            ariaLabel="GitHub Profile"
          />
          <SocialLink
            href="https://twitter.com/AryamanGupta21"
            iconClass="fa-brands fa-twitter"
            ariaLabel="Twitter Profile"
          />
          <SocialLink
            href="https://medium.com/@aryamanguptabilari"
            iconClass="fa-brands fa-medium"
            ariaLabel="Medium Profile"
          />
        </div>
      </div>
    </>
  );
}
