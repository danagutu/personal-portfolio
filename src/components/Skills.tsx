import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Code } from 'lucide-react';

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
        'Figma', 'Photoshop', 'Miro', 'Notion'
      ]
    },
    {
      id: 'research',
      title: 'User Research',
      icon: <Users size={24} />,
      description: 'Comprehensive user research and testing methodologies',
      skills: [
        'User Interviews', 'Usability Testing', 'A/B Testing',
        'Persona Development', 'Journey Mapping'
      ]
    },
    {
      id: 'development',
      title: 'Technical Skills',
      icon: <Code size={24} />,
      description: 'Understanding of front-end development and technical constraints',
      skills: [
        'HTML/CSS', 'JavaScript', 'React', 'React Native', 'TypeScript',
        'Design Systems', 'Responsive Design', 'Git', 'AWS', 'Vercel', 
        'Firebase', 'Supabase'
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <div className="w-20 h-16 bg-primary-color rounded-lg flex items-center justify-center mr-4 px-4">
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
                  year: 'Nov 2024 - Present',
                  title: 'Full-Stack Engineer / Product Designer',
                  company: 'Fidelis AI',
                  companyUrl: 'https://www.fidelisai.tech/',
                  description: [
                    'Designed high-fidelity mockups in Figma, incorporating accessibility best practices and defining user types and journeys for autonomous vehicle simulation platform.',
                    'Conducted usability testing with 5 engineers using think-aloud protocol to identify navigation and UI improvements.',
                    'Collaborated with developers for seamless design implementation, building a React (TypeScript) interface with real-time pixel streaming from Unreal Engine.',
                    'Integrated AWS services (DynamoDB, API Gateway, Amplify, S3, Cognito) for backend and deployment.',
                    'Supported CEO in defining product personas, user stories, and analytics dashboard structure.'
                  ]
                },
                {
                  year: 'Nov 2023 - Mar 2025',
                  title: 'Digital Project Manager',
                  company: 'Morrow Digital',
                  companyUrl: 'https://www.themorrow.digital/',
                  description: [
                    'Redesigned user flows and UI screens across healthcare, sustainability, and e-commerce apps, reducing task friction and clicks per action.',
                    'Performed ongoing usability testing and A/B testing for apps like the Refill App (City to Sea), leading to a successful increase in sign-ups for the Refill & Return scheme by reframing the payment/subscription model.',
                    'Delivered design specifications and guidelines to developers, collaborating in real time for high design fidelity.',
                    'Built React-based mobile app features and used Supabase for database management.',
                    'Streamlined onboarding for healthcare app through redesigned sign-up flow, improving user clarity and conversion.'
                  ]
                },
                {
                  year: 'Jun - Aug 2024',
                  title: 'Software Engineering Intern',
                  company: 'NatWest Bank',
                  companyUrl: 'https://www.natwestgroup.com/',
                  description: [
                    'Designed and developed a green investing mobile banking feature, winning Best Mobile Application in internal competition.',
                    'Created internal Developer Stacks to streamline onboarding for engineers company-wide, and built APIs for data retrieval and app packaging in Python.'
                  ]
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
                         {experience.companyUrl ? (
                           <a 
                             href={experience.companyUrl} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="underline hover:underline transition-colors duration-200"
                           >
                             {experience.company}
                           </a>
                         ) : (
                           experience.company
                         )}
                       </p>
                       {Array.isArray(experience.description) ? (
                         <ul className="text-text-secondary leading-relaxed space-y-2">
                           {experience.description.map((item, itemIndex) => (
                             <li key={itemIndex} className="flex items-start">
                               <span className="text-primary-color mr-2 mt-1">•</span>
                               <span>{item}</span>
                             </li>
                           ))}
                         </ul>
                       ) : (
                         <p className="text-text-secondary leading-relaxed">
                           {experience.description}
                         </p>
                       )}
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
