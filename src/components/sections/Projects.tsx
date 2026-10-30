'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBuilding, FaUser } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'additional'>('professional');

  const companyProjects = [
    {
      title: 'Healthcare Audit Management System',
      description: 'Health Audit Management System designed to enhance the quality of audited reports for medical equipment and manage notifications for doctors/authors.',
      technologies: ['AngularJS'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Quality Audit Management', 'Notification System'],
    },
    {
      title: 'Virtual CRM and Circle CRM',
      description: 'CRM platforms for managing customer interactions, transactions, orders, communications, and analytics, with interactive dashboards and responsive workflows.',
      technologies: ['Angular', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Customer Tracking', 'Sales Management', 'Interactive Dashboards'],
    },
    {
      title: 'AnteThink',
      description: 'AI-powered event decision-support platform that turns event context into interactive D3.js decision trees and action plans, with Stripe subscription billing.',
      technologies: ['React', 'Node.js', 'D3.js', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['AI-driven Decision Making', 'Stripe Payment Integration', 'Interactive Decision Trees'],
    },
  ];

  const additionalProjects = [
    // {
    //   title: 'Quiz Application',
    //   description: 'A dynamic test app built with Angular and TypeScript, featuring D3.js visualizations, real-time leaderboards, and a Laravel backend for secure authentication.',
    //   technologies: ['Angular', 'TypeScript', 'D3.js'],
    //   liveUrl: 'https://recruitment-test.jyotitechnosoft.com',
    //   githubUrl: '#',
    //   features: ['Real-time Leaderboards', 'Multimedia Support', 'Dynamic Question Generation'],
    // },
    {
      title: 'Praksis',
      description: 'AI-powered assessment platform where educators and students create, manage, and attempt practice tests, with AI-aided question paper generation.',
      technologies: ['React'],
      liveUrl: 'https://edugenius-n679.onrender.com',
      githubUrl: '#',
      features: ['Educator and student workflows', 'Practice test management', 'AI-aided question generation'],
    },
    {
      title: 'BloomWell',
      description: 'Digital health platform for weight management, wellness treatments, personalized care, and physician consultations.',
      technologies: ['React', 'Next.js', 'Neon PostgreSQL'],
      liveUrl: 'https://bloom-well-nu.vercel.app',
      githubUrl: '#',
      features: ['Weight management', 'Personalized wellness care', 'Physician consultations'],
    },
    {
      title: 'OrthoAI',
      description: 'Clinical intelligence platform that automates dental diagnostic reporting for clinicians and supports insurance claim validation across the UAE and GCC.',
      technologies: ['React', 'Next.js', 'Node.js'],
      liveUrl: 'https://www.orthoai.co',
      githubUrl: '#',
      features: ['Automated dental diagnostic reporting', 'Clinical intelligence', 'Insurance claim validation'],
    },
    {
      title: 'Aelos',
      description: "Responsive website for a health-focused cafe, aligned with the brand's visual identity and designed for an easy browsing experience.",
      technologies: ['React', 'Vite', 'Node.js'],
      liveUrl: 'https://www.aelosuae.com',
      githubUrl: '#',
      features: ['Responsive website', 'Brand-aligned visual design', 'Easy browsing experience'],
    },
    // {
    //   title: 'Book Universe',
    //   description: 'A platform to explore, save, and share book details, including category, author, publication date, and links to content.',
    //   technologies: ['React', 'Next.js', 'Tailwind CSS'],
    //   liveUrl: 'https://books-universe.vercel.app',
    //   githubUrl: '#',
    //   features: ['Book Categorization', 'Save to List', 'Content Sharing'],
    // },
    // {
    //   title: 'QuickMart',
    //   description: 'Modern e-commerce platform developed with WordPress and WooCommerce, offering a responsive shopping experience optimized for mobile.',
    //   technologies: ['WordPress', 'WooCommerce'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   features: ['Responsive Design', 'Shopping Cart', 'Mega Menu'],
    // },
    // {
    //   title: 'FreshMart',
    //   description: 'Cross-platform grocery store app developed with Flutter for an optimized and responsive shopping experience.',
    //   technologies: ['Flutter'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   features: ['Cross-platform Support', 'Grocery Management', 'Responsive UI'],
    // },
  ];

  const currentProjects = activeTab === 'professional' ? companyProjects : additionalProjects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my work showcasing both professional and personal development
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'professional'
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <FaBuilding className="w-4 h-4" />
              <span>Professional Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'additional'
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <FaUser className="w-4 h-4" />
              <span>Additional Projects</span>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {(project.liveUrl !== '#' || project.githubUrl !== '#') && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live website`}
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        View live project
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                      >
                        <FaGithub className="w-4 h-4" />
                        View source code
                      </a>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/charmichauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <FaGithub className="w-5 h-5" />
            <span>View More Projects</span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
