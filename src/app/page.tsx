"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

type ProjectType = "all" | "web" | "uiux";

interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType[];
  role: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
    prototype?: string;
  };
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    type: ["web"],
    role: "Full Stack Developer",
    technologies: ["React", "Node.js"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Finance App Redesign",
    description:
      "Redesigned a finance app focusing on improved user experience, accessibility, and modern design patterns.",
    type: ["uiux"],
    role: "UI/UX Designer",
    technologies: ["Figma", "UI/UX"],
    links: {
      caseStudy: "#",
      prototype: "#",
    },
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    type: ["web"],
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.type.includes(activeFilter)
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 md:pt-32 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">Jun</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Web Developer | UI/UX Designer
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              A passionate web developer with a focus on building seamless and
              user-friendly digital experiences. With a strong foundation in
              both front-end and back-end development, I specialize in creating
              responsive, performance-optimized websites that not only look
              great but function flawlessly.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Over the years, I've honed my skills in HTML, CSS, JavaScript,
              React.JS, Next.JS, Express.JS, Node.JS, Golang, MongoDB,
              PostgreSQL and I'm always excited to learn and adapt to the latest
              web technologies and trends. My goal is to craft websites that not
              only meet the needs of clients but also engage and delight their
              audiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Whether you're looking to develop a dynamic web application,
              improve an existing website, or start a brand new project, I'm
              here to help bring your vision to life with clean, efficient code
              and an eye for detail.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a look through my portfolio to see some of my work, and don't
              hesitate to reach out if you'd like to discuss your next project!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            My Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A collection of my work in web development and UI/UX design. Each
            project demonstrates my commitment to creating beautiful,
            functional, and user-centered digital experiences.
          </p>

          {/* Project Filter */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "web"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter("uiux")}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === "uiux"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              UI/UX Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="space-x-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
                        >
                          GitHub
                        </a>
                      )}
                      {project.links.caseStudy && (
                        <a
                          href={project.links.caseStudy}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                        >
                          Case Study
                        </a>
                      )}
                      {project.links.prototype && (
                        <a
                          href={project.links.prototype}
                          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
                        >
                          Prototype
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>Role: {project.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
