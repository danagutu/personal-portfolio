import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FidelisAICaseStudy: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={goBack}
              className="flex items-center text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </button>
            <button
              onClick={scrollToTop}
              className="text-primary-color hover:text-secondary-color transition-colors duration-200"
            >
              Scroll to Top
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background-primary to-background-secondary py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary-color bg-primary-color/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              SaaS B2B Platform
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Fidelis AI
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Designed and built 0→1 an autonomous vehicle simulations platform for an AI-powered startup, 
              achieving the goal of securing investor funding.
            </p>

                        {/* Project Stats */}
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Timeline</h3>
                  <p className="text-text-secondary">4 months</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Team Size</h3>
                  <p className="text-text-secondary">1 designer, 4 engineers</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Outcome</h3>
                  <p className="text-text-secondary">Secured funding</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Role</h3>
                  <p className="text-text-secondary">Product Designer / Full Stack Engineer</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Design Tools</h3>
                  <p className="text-text-secondary">Figma, Miro, Prototyping, User Research, Design Systems</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Development Tools</h3>
                  <p className="text-text-secondary">React, TypeScript, AWS, Unreal Engine</p>
                </div>
              </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/projects/covers/cover-image-fidelis-ai.png"
                alt="Fidelis AI Platform"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8">Project Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">The Challenge</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Fidelis AI, an early-stage startup, needed a way to showcase its proprietary AI driving system 
                    and synthetic data capabilities to potential investors and early adopters. While the AI model 
                    and simulation technology existed, there was no platform for engineers or data scientists 
                    to access it, run scenarios, and analyze results.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white rounded-xl shadow-sm overflow-hidden">
                      <thead>
                        <tr className="bg-primary-color/10">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-text-primary">Actor</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-text-primary">When the Problem Appears</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-text-primary">What They Want to Do</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-text-primary">What They Want to Achieve</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-text-primary font-medium">Engineers / Data Scientists</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">When exploring autonomous driving AI solutions</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">Access Fidelis AI's synthetic data and driving system, run simulations, and review outputs</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">Understand how Fidelis AI's system behaves in real-world driving scenarios</td>
                        </tr>
                        <tr className="bg-background-secondary">
                          <td className="border border-gray-300 px-4 py-3 text-text-primary font-medium">CEO</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">When pitching to investors or onboarding partners</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">Demonstrate the AI system's capabilities through a smooth, professional platform</td>
                          <td className="border border-gray-300 px-4 py-3 text-text-secondary">Prove market readiness, attract funding, and establish product credibility</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">The Solution</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    I designed and delivered a B2B SaaS platform that makes Fidelis AI's driving system 
                    and synthetic data accessible through an intuitive interface. The platform combines 
                    project and simulation management, real-time AI-driven simulations, and collaboration 
                    features — tailored both for technical users and for investor demonstrations.
                  </p>
                  <div className="text-text-secondary leading-relaxed">
                    <p className="font-semibold text-text-primary mb-3">Key contributions:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Designed high-fidelity Figma mockups, following accessibility best practices and mapping user journeys.</li>
                      <li>Conducted usability testing with 5 engineers using think-aloud protocol, improving navigation and clarity.</li>
                      <li>Collaborated with developers to implement a React (TypeScript) frontend with real-time pixel streaming from Unreal Engine.</li>
                      <li>Integrated AWS services (DynamoDB, API Gateway, Amplify, S3, Cognito) for scalable backend and deployment.</li>
                      <li>Helped define personas, user stories, and analytics dashboards aligned with both user and investor needs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Design Process</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-primary-color/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-color font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Discovery & Definition</h3>
                  <p className="text-text-secondary text-sm">
                    Identify core goals. Define personas. Map the end-to-end user journey.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-primary-color/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-color font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Design & Validation</h3>
                  <p className="text-text-secondary text-sm">
                    Design Figma mockups. Run usability tests. Iterate on filtering, navigation, and layout.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-primary-color/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-color font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Implementation & Collaboration</h3>
                  <p className="text-text-secondary text-sm">
                    Build with the developers. Integrate real-time Unreal Engine. Design scalable AWS infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-16 text-center">Key Features</h2>
              
              {/* Project & Simulation Management */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Project & Simulation Management</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  1. Create and view projects, and search efficiently:
                </p>
                <div className="space-y-6">
                  <img src="/images/projects/detail/fidelis-ai-platform/image1.png" alt="Project Management Interface" className="rounded-lg shadow-xl w-full" />
                                      <div className="grid md:grid-cols-2 gap-6">
                      <img src="/images/projects/detail/fidelis-ai-platform/new-project-button.png" alt="New Project Button" className="rounded-lg shadow-xl w-full h-64 object-contain" />
                      <img src="/images/projects/detail/fidelis-ai-platform/search-feature.png" alt="Search Feature" className="rounded-lg shadow-xl w-full h-64 object-contain" />
                    </div>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    2. Create and view simulations in a project:
                  </p>
                  <img src="/images/projects/detail/fidelis-ai-platform/image2.png" alt="Simulation Management" className="rounded-lg shadow-xl w-full" />
                  <div className="flex justify-center mt-6">
                    <img src="/images/projects/detail/fidelis-ai-platform/new-simulation-button.png" alt="New Simulation Button" className="rounded-lg shadow-xl max-w-[300px] w-full" />
                  </div>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    3. Star your favorites:
                  </p>
                  <div className="flex justify-center mt-6">
                    <img src="/images/projects/detail/fidelis-ai-platform/star-button.png" alt="Star Button" className="rounded-lg shadow-xl max-w-[150px] w-full" />
                  </div>
                </div>
              </div>

              {/* Real-Time Simulation Playback */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Real-Time Simulation Playback</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  1. Stream AI-driven scenarios directly from Unreal Engine.
                </p>
                <div className="space-y-6">
                  <img src="/images/projects/detail/fidelis-ai-platform/image3.png" alt="Real-time Simulation" className="rounded-lg shadow-xl w-full" />
                  <p className="text-text-secondary leading-relaxed mt-4">
                    2. Conduct a frame-by-frame analysis and bulk downloads.
                  </p>
                  <img src="/images/projects/detail/fidelis-ai-platform/frame-analysis.png" alt="Frame Analysis" className="rounded-lg shadow-xl w-full max-w-2xl mx-auto" />
                </div>
              </div>

              {/* Collaboration & Communication */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Collaboration & Communication</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Add teammates to projects, run simulations together, and communicate through built-in chat.
                </p>
                <div className="flex justify-center gap-2">
                  <img src="/images/projects/detail/fidelis-ai-platform/add-teammate-and-view-messages.png" alt="Add Teammate and View Messages" className="rounded-lg shadow-xl max-w-[150px] object-contain" />
                  <img src="/images/projects/detail/fidelis-ai-platform/chats-and-notification.png" alt="Chats and Notifications" className="rounded-lg shadow-xl max-w-[150px] object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8">Results & Impact</h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-color mb-2">Investor-Ready Product</div>
                    <p className="text-text-secondary">The CEO successfully secured further funding.</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-color mb-2">Positive User Feedback</div>
                    <p className="text-text-secondary">The 5 early engineer testers expressed eagerness for launch.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Reflection & Improvements</h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-text-secondary leading-relaxed mb-6">
                  If I had more time, I would have focused on:
                </p>
                <ul className="text-text-secondary leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li><strong>UI/UX Refinement:</strong> More extensive A/B testing and iterative studies to polish workflows.</li>
                  <li><strong>Scalability Testing:</strong> Stress-test the platform with larger datasets and more users.</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  This project showed me the value of designing not just a product interface, but a business-critical experience 
                  simultaneously enabling early testers to explore the technology and proving the vision to investors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Ready to work together? Let's create something amazing.
            </p>
            <button
              onClick={() => {
                navigate('/');
                // Wait for navigation to complete, then scroll to contact section
                setTimeout(() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-primary-color hover:bg-secondary-color text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FidelisAICaseStudy;
