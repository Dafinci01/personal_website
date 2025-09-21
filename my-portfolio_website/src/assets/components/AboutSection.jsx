import React from "react";
import { Code, Palette, Rocket, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable and scalable code using modern best practices."
    },
    {
      icon: Palette,
      title: "Design & UI",
      description: "I care about design details, creating sleek and user-friendly interfaces."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized apps for speed, efficiency, and smooth user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great team player who values clear communication and teamwork."
    }
  ];

  const technologies = [
    "React", "JavaScript", "TypeScript", "TailwindCSS",
    "Node.js", "Git", "REST APIs", "SQL", "C#"
  ];

  return (
    <section id="about" className="py-20 px-6  text-gray-900 bg-hero-start">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-12">
          Passionate about building sleek and scalable applications with React, JavaScript, 
          and modern web technologies.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full border hover:bg-blue-50 hover:border-blue-300 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
