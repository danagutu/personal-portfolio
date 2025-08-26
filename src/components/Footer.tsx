import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:danagutu2002@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/danagutu',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/danagutu',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/danagutu',
      color: 'hover:text-blue-400'
    },

    {
      name: 'Portfolio',
      icon: <Globe size={20} />,
      href: 'https://danagutu.com',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-bold mb-4">
                Dana Gutu
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creating meaningful digital experiences through thoughtful design and user-centered solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-8 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Dana Gutu. All rights reserved.
              </p>
              <p className="text-gray-300 text-sm mt-2 md:mt-0">
                Designed & Built with ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
