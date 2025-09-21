import React from "react";
import "./ui/hero.css";
import { Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="pt-32 px-6 md:px-24 text-center md:text-left bg-hero-gradient from-hero-start via-hero-middle to-hero-end">
      {/* Small intro line */}
      <h2 className="text-gray-500 uppercase tracking-wide text-sm mb-4">
        Welcome <span className="wave-emoji">👋</span>
      </h2>

      {/* Main headline with typing effect (no loop, type once) */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-snug">
        Hi I’m <span className="text-black">David</span>,{" "}
        <ReactTyped
          strings={[
            "a Software Engineer, Pharmacologist and AI Bioinformatics Enthusiast"
          ]}
          typeSpeed={50}
          showCursor={true}
          cursorChar="|"
        />
      </h1>

      {/* Supporting text */}
      <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 mb-6">
        Building modern, scalable, and user-friendly applications that make an
        impact.
      </p>

      {/* Buttons / Links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          View My Work
        </button>
        <button className="border px-6 py-3 rounded-md">Get In Touch</button>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <a
          href="mailto:daVinci@programmer.net"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <Mail className="h-5 w-5" />
          <span>Dafinci@programmer.net</span>
        </a>

        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
