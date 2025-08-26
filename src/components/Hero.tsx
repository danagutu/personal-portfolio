import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-primary to-background-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-color rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-color rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            Product Design,
            <span className="block text-primary-color">User Research</span>
            <span className="block">& iOS Magic</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Rooted in user research and built with Liquid Glass, the Human Interface Guidelines, and Apple's intelligent features, I design iOS apps that are elegant, intuitive, and unforgettable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={scrollToAbout}
              className="bg-primary-color text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-color transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-color text-primary-color px-8 py-4 rounded-lg font-semibold hover:bg-primary-color hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            <a
              href="mailto:danagutu2002@gmail.com"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/danagutu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/danagutu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="text-text-light hover:text-primary-color transition-colors duration-200 animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
