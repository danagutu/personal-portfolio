import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Code, BarChart3 } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'design',
      title: 'Design Tools',
      icon: <Palette size={24} />,
      description: 'Proficient in industry-standard design tools and software',
      skills: [
        'Figma', 'Sketch', 'Adobe Creative Suite', 'InVision', 'Principle',
        'Framer', 'Protopie', 'Zeplin', 'Abstract', 'Notion'
      ]
    },
    {
      id: 'research',
      title: 'User Research',
      icon: <Users size={24} />,
      description: 'Comprehensive user research and testing methodologies',
      skills: [
        'User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics',
        'Persona Development', 'Journey Mapping', 'Card Sorting', 'Surveys'
      ]
    },
    {
      id: 'development',
      title: 'Technical Skills',
      icon: <Code size={24} />,
      description: 'Understanding of front-end development and technical constraints',
      skills: [
        'HTML/CSS', 'JavaScript', 'React', 'Design Systems', 'Responsive Design',
        'Accessibility (WCAG)', 'Performance Optimization', 'Git'
      ]
    },
    {
      id: 'strategy',
      title: 'Design Strategy',
      icon: <BarChart3 size={24} />,
      description: 'Strategic thinking and business alignment',
      skills: [
        'Design Thinking', 'Design Sprints', 'Information Architecture',
        'Content Strategy', 'Brand Strategy', 'Product Strategy'
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-color rounded-lg flex items-center justify-center mr-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-background-accent text-text-primary px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-color hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Professional Experience
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2023 - Present',
                  title: 'Senior Product Designer',
                  company: 'TechCorp',
                  description: 'Leading design initiatives for enterprise SaaS products, mentoring junior designers, and establishing design systems.'
                },
                {
                  year: '2021 - 2023',
                  title: 'Product Designer',
                  company: 'StartupXYZ',
                  description: 'Designed user experiences for mobile and web applications, conducted user research, and collaborated with engineering teams.'
                },
                {
                  year: '2019 - 2021',
                  title: 'UX Designer',
                  company: 'Design Agency',
                  description: 'Created user interfaces and experiences for various clients across different industries and platforms.'
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-6`}
                >
                  <div className={`md:w-1/3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="text-primary-color font-semibold text-lg">
                      {experience.year}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-text-primary mb-1">
                        {experience.title}
                      </h4>
                      <p className="text-primary-color font-medium mb-3">
                        {experience.company}
                      </p>
                      <p className="text-text-secondary leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;
