import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const roles = [
    {
      title: "Frontend Developer",
      description: "I specialize in building modern, responsive, and user-friendly web interfaces using React, Node.js, and Tailwind CSS. My focus is on creating seamless user experiences, optimizing performance, and ensuring accessibility.",
      color: "mint"
    },
    {
      title: "Database Developer",
      description: "I have experience designing, managing, and optimizing databases using MongoDB and MySQL. I ensure data integrity, implement efficient queries, and design scalable database architectures to support web applications.",
      color: "ocean"
    },
    {
      title: "Backend Developer",
      description: "I develop secure and high-performance backend systems using Node.js, Express.js. I build RESTful APIs, implement authentication, and integrate databases to create robust full-stack applications.",
      color: "mint"
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="About" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 right-0 w-64 h-64 bg-mint/10 rounded-l-full"
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-0 w-48 h-48 bg-ocean/10 rounded-r-full"
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
            <span className="text-mint font-bold text-lg">WHO I AM</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="relative">
              {/* Decorative Background Shape */}
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-br from-mint/20 to-ocean/20 rounded-[3rem] -z-10"
              />
              
              {/* Animated Border Glow */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #50D890, #4F98CA, transparent)",
                  filter: "blur(30px)",
                  zIndex: -1
                }}
              />
              
              {/* Image Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative bg-charcoal rounded-3xl p-8 shadow-xl border-4 border-mint/20 group-hover:border-mint transition-smooth overflow-hidden"
              >
                {/* Animated Border Glow INSIDE */}
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
                
                <img
                  className="relative z-10 w-full h-auto"
                  src={AboutImg}
                  alt="About illustration"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-mint text-charcoal px-8 py-6 rounded-2xl shadow-2xl"
              >
                <div className="text-4xl font-bold">2+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  x: 10,
                  boxShadow: "0 20px 60px rgba(80, 216, 144, 0.4)" 
                }}
                className={`group relative bg-charcoal rounded-2xl p-6 md:p-8 shadow-lg border-l-4 ${
                  role.color === 'mint' ? 'border-mint' : 'border-ocean'
                } transition-smooth cursor-pointer overflow-hidden`}
              >
                {/* Animated Border Glow */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background: role.color === 'mint' 
                      ? "conic-gradient(from 0deg, transparent, #50D890, transparent)"
                      : "conic-gradient(from 0deg, transparent, #4F98CA, transparent)",
                    filter: "blur(20px)"
                  }}
                />
                
                {/* Hover Background Effect */}
                <motion.div
                  className={`absolute inset-0 ${
                    role.color === 'mint' ? 'bg-mint' : 'bg-ocean'
                  } opacity-0 group-hover:opacity-10 transition-smooth`}
                />

                <div className="relative flex gap-4 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-14 h-14 ${
                      role.color === 'mint' ? 'bg-mint' : 'bg-ocean'
                    } rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <IoArrowForward size={24} className="text-charcoal" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                      role.color === 'mint' ? 'text-mint' : 'text-ocean'
                    }`}>
                      {role.title}
                    </h3>
                    <p className="text-base md:text-lg text-cream/80 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
