import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'User-Centered',
      description: 'Every design decision starts with understanding user needs and behaviors.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Empathetic',
      description: 'I believe in creating experiences that truly connect with people on an emotional level.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Innovative',
      description: 'Pushing boundaries while maintaining usability and accessibility standards.'
    }
  ];

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
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A passionate product designer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-color rounded-lg flex items-center justify-center mr-4">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">Who I Am</h3>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                I'm a Product Designer with a background in software development — which means I understand both sides of the handoff. With 1.5+ years of experience in startups and corporate teams, I design iOS experiences that are not only intuitive for users but also seamless for developers to bring to life.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                My roots in economics fuel my optimization mindset: I look for every opportunity to reduce friction, align product goals, and streamline the journey. By blending behavioral psychology with Apple's Liquid Glass design language, Human Interface Guidelines, and intelligent features, I craft mobile experiences that feel effortless — the kind that just click.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-8">
              My Design Philosophy
            </h3>
            
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-color/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <div className="text-primary-color">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
