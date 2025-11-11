import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";

const ProjectCard = ({ title, main, projectImg, demoLink, index, inProgress }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -12,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-charcoal rounded-3xl overflow-hidden shadow-2xl border-2 border-mint/20 hover:border-mint transition-smooth"
    >
      {/* Gradient Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-mint via-ocean to-mint" />

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video bg-charcoal/50">
        {projectImg ? (
          <>
            <motion.img
              className="w-full h-full object-cover"
              src={projectImg}
              alt={title}
              loading="lazy"
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"
            />

            {/* Hover Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5
              }}
              className="absolute top-4 right-4 w-12 h-12 bg-mint rounded-full flex items-center justify-center shadow-lg"
            >
              <HiArrowTopRightOnSquare size={24} className="text-charcoal" />
            </motion.div>
          </>
        ) : (
          // Construction Icon for projects without images
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-mint/20 to-ocean/20">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaTools size={80} className="text-mint mb-4" />
            </motion.div>
            <span className="text-mint font-bold text-xl">Under Development</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-mint mb-4 group-hover:text-ocean transition-smooth"
          animate={{
            x: isHovered ? 5 : 0
          }}
        >
          {title}
        </motion.h3>
        
        <p className="text-base md:text-lg text-cream/80 leading-relaxed mb-6 line-clamp-3">
          {main}
        </p>

        {/* Demo Button */}
        {demoLink && (
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-mint text-charcoal font-bold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-ocean"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View Demo</span>
            <HiArrowTopRightOnSquare size={20} className="relative z-10" />
          </motion.a>
        )}
      </div>

      {/* Corner Accent */}
      <motion.div
        animate={{
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : 45
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 w-20 h-20 bg-mint/20 rounded-bl-full"
      />
    </motion.div>
  );
};

export default ProjectCard;
