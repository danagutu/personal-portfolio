import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "FinTech Mobile App",
      description: "Redesigned the mobile banking experience for a leading fintech company, improving user engagement by 40% and reducing support tickets by 60%.",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Figma", "Prototyping", "User Research", "iOS/Android"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Created a seamless shopping experience that increased conversion rates by 35% and improved mobile usability scores.",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Sketch", "InVision", "A/B Testing", "Analytics"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Designed an intuitive dashboard for healthcare professionals to manage patient data and improve workflow efficiency.",
      category: "Dashboard Design",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Figma", "Design Systems", "Accessibility", "Healthcare UX"],
      link: "#",
      featured: true
    }
  ];

  const allProjects = projects;

  return (
    <section id="projects" className="section bg-background-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing user-centered design solutions
          </p>
        </motion.div>



        {/* Other Projects Grid */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-5">
                  <span className="text-sm font-medium text-primary-color bg-primary-color/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  <h4 className="text-lg font-semibold text-text-primary mt-3 mb-2 group-hover:text-primary-color transition-colors duration-200">
                    {project.title}
                  </h4>
                  
                  <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-primary-color text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span className="mr-1">View Project</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
