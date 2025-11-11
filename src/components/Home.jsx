import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../assets/WhatsApp_Image_2024-10-26_at_17.55.36_f3d628a2-removebg-preview (1).png";

const Home = () => {
  const text = "I'm Ansab, a Full Stack Web Developer";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <div id="Home" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20">
      {/* Animated Geometric Background Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 md:right-32 w-96 h-96 md:w-[600px] md:h-[600px] bg-mint/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 md:left-32 w-72 h-96 md:w-96 md:h-[500px] bg-ocean/20 rounded-[40%] blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-mint/10 rounded-full blur-2xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {/* Decorative Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-mint rounded-full"
            />

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight flex flex-wrap gap-3"
              variants={container}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordAnimation}
                  className={index === 2 || index === 6 ? "text-mint" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl md:text-2xl text-cream/80 max-w-xl leading-relaxed"
            >
              Building modern, interactive websites and apps to empower users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ansabvk122@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-mint text-charcoal font-bold rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Talk</span>
                <motion.div
                  className="absolute inset-0 bg-ocean"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#Projects"
                className="px-8 py-4 border-2 border-mint text-mint font-bold rounded-2xl hover:bg-mint hover:text-charcoal transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image with Creative Frame */}
          <motion.div 
            className="flex justify-center md:justify-end group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #50D890, #4F98CA, #50D890)",
                  padding: "4px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              
              {/* Animated Glow Effect */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 opacity-50 group-hover:opacity-100 transition-smooth"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #50D890, #4F98CA, transparent)",
                  filter: "blur(40px)",
                  zIndex: -1
                }}
              />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/30 to-ocean/30 rounded-full blur-2xl" />
                <img
                  className="relative w-full h-full rounded-full object-cover border-4 border-charcoal shadow-2xl"
                  src={avatarImg}
                  alt="Ansab VK"
                />
              </div>

              {/* Floating Accent Dots */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-mint rounded-full opacity-50 blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-ocean rounded-full opacity-50 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
