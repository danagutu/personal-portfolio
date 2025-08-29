import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/images/profile/profile-picture.jpg" 
                    alt="Dana Gutu - Product Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                I'm a Junior Product Designer with a background in software development — which means I understand both sides of the handoff. With 1.5+ years of experience in startups and corporate teams, I design experiences that are not only intuitive for users but also seamless for developers to bring to life.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                Grounded in economics, I bring an optimization mindset to product design, always seeking to reduce friction, align goals, and streamline the journey. By blending behavioral psychology with Apple's Human Interface Guidelines, Google's Material Design, and emerging patterns in intelligent interfaces, I create the kind of digital experiences that just click.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
