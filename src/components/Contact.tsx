import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'danagutu2002 [at] gmail [dot] com',
      link: 'mailto:danagutu2002@gmail.com'
    }
  ];

  return (
    <section id="contact" className="section bg-background-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-2xl"
          >


            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-primary-color/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-color transition-colors duration-200">
                    <div className="text-primary-color group-hover:text-white transition-colors duration-200">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {info.title}
                    </h4>
                    <p className="text-text-secondary">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
