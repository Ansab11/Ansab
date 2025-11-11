import React from "react";
import { motion } from "framer-motion";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const Experience = () => {
  const skills = [
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  ];

  const experience = {
    company: "LevelX",
    role: "Software Development Intern",
    period: "Sept 2023 - Present",
    logo: FaGoogle,
    responsibilities: [
      "Participated in several full-stack projects as software developer",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="Experience" className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-mint rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-ocean rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-mint rounded-full" />
            <span className="text-mint font-bold text-lg">MY JOURNEY</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream">
            Experience
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-mint mb-8">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    whileHover={{ 
                      y: -12,
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 20px 60px rgba(80, 216, 144, 0.4)",
                      transition: { duration: 0.3 }
                    }}
                    className="group relative bg-cream/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg border border-mint/20 hover:border-mint hover:bg-mint/10 transition-smooth cursor-pointer overflow-hidden"
                  >
                    {/* Animated Border Glow */}
                    <motion.div
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, #50D890, transparent)",
                        filter: "blur(20px)"
                      }}
                    />
                    
                    <Icon 
                      size={50} 
                      className="relative z-10 group-hover:scale-110 transition-smooth"
                      style={{ color: skill.color }}
                    />
                    <span className="relative z-10 text-cream/80 text-sm font-semibold group-hover:text-mint transition-smooth">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-ocean mb-8">
              Work Experience
            </h3>

            {/* Experience Card */}
            <motion.div
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 60px rgba(80, 216, 144, 0.3)"
              }}
              className="relative bg-gradient-to-br from-mint/10 to-ocean/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-mint/30 overflow-hidden group"
            >
              {/* Animated Border Glow */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #50D890, transparent)",
                  filter: "blur(20px)"
                }}
              />

              <div className="relative flex gap-6 items-start">
                {/* Company Logo */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-16 h-16 bg-mint rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <FaGoogle size={32} className="text-charcoal" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-cream mb-2">
                    {experience.role}
                  </h4>
                  <p className="text-xl md:text-2xl text-mint font-bold mb-2">
                    {experience.company}
                  </p>
                  <p className="text-sm md:text-base text-ocean font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
                    {experience.period}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {experience.responsibilities.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg text-cream/90 flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-mint rounded-full mt-2" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
