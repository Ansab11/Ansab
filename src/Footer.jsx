import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: MdOutlineEmail,
      label: "Ansabvk122@gmail.com",
      href: "mailto:Ansabvk122@gmail.com",
      color: "mint"
    },
    {
      icon: CiLinkedin,
      label: "linkedin.com/Ansabvk",
      href: "https://linkedin.com/in/Ansabvk",
      color: "ocean"
    },
    {
      icon: FaGithub,
      label: "github.com/Ansab11",
      href: "https://github.com/Ansab11",
      color: "mint"
    }
  ];

  return (
    <footer id="Footer" className="relative bg-charcoal text-cream py-20 md:py-32 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-96 h-96 bg-mint/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-ocean/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-mint/10 rounded-full blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-mint rounded-full" />
              <span className="text-mint font-bold text-lg">LET'S CONNECT</span>
            </div>

            <motion.h2
              whileHover={{ scale: 1.02, x: 10 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint leading-tight"
            >
              +91 7592077443
            </motion.h2>
            
            <p className="text-xl md:text-2xl text-cream/80">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-mint to-ocean rounded-full"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-ocean mb-8">
              Find Me Online
            </h3>

            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center gap-4 p-4 bg-cream/5 backdrop-blur-sm rounded-2xl border-2 border-mint/20 hover:border-mint hover:bg-mint/10 transition-smooth"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 ${
                      link.color === 'mint' ? 'bg-mint' : 'bg-ocean'
                    } rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={28} className="text-charcoal" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <span className="text-lg text-cream group-hover:text-mint transition-smooth font-medium">
                      {link.label}
                    </span>
                  </div>

                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-mint opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    →
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-mint to-transparent mb-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-2 border-mint rounded-lg flex items-center justify-center"
            >
              <span className="text-mint font-bold text-xl">A</span>
            </motion.div>
            <div>
              <p className="text-cream/90 font-semibold">
                © {new Date().getFullYear()} Ansab V.K
              </p>
              <p className="text-cream/60 text-sm">
                All rights reserved
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-cream/60">
            <span className="text-sm">Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-mint"
            >
              ❤
            </motion.span>
            <span className="text-sm">using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
