import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1Img from "../src/assets/Screenshot (22).png"; 
import project2Img from "../src/assets/Screenshot (26).png"; 
import project3Img from "../src/assets/Screenshot (25).png";
import echoCopymImg from "../src/assets/echo-copym.png";
import copymImg from "../src/assets/copym.png";

const Projects = () => {
  const projects = [
    {
      title: "Echo Copym V5",
      description: "Mobile app development project with modern UI/UX design and seamless user experience",
      image: echoCopymImg,
      demoLink: "https://echo-copym-v5.vercel.app/",
      type: "mobile"
    },
    {
      title: "FlexiFit",
      description: "Mobile fitness application for tracking workouts and health metrics",
      image: null,
      demoLink: null,
      type: "mobile",
      inProgress: true
    },
    {
      title: "Copym Blockchain",
      description: "Blockchain application with decentralized features and smart contract integration",
      image: copymImg,
      demoLink: null,
      type: "blockchain"
    },
    {
      title: "Al-Mango",
      description: "A robust and responsive website for Choosing And Ordering items from a large menu Using REACT components",
      image: project1Img,
      demoLink: "https://almango.netlify.app/"
    },
    {
      title: "Go Miles",
      description: "A website created for taking survey of clients and booking their preferred travel packages",
      image: project2Img,
      demoLink: "https://gomilesbooking.netlify.app/"
    },
    {
      title: "Pre-Plan",
      description: "A responsive Webpage for updating and displaying scheduled classes using react and node.js for server side rendering",
      image: project3Img,
      demoLink: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div id="Projects" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-72 h-72 bg-mint/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-ocean/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-mint rounded-full" />
            <span className="text-mint font-bold text-lg">MY WORK</span>
            <div className="w-12 h-1 bg-mint rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Explore some of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.description}
              projectImg={project.image}
              demoLink={project.demoLink}
              index={index}
              inProgress={project.inProgress}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-charcoal/70 mb-6">
            Want to see more? Let's discuss your project!
          </p>
          <motion.a
            href="#Footer"
            className="inline-block px-8 py-4 bg-mint text-charcoal font-bold rounded-2xl shadow-lg hover:shadow-xl transition-smooth"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
