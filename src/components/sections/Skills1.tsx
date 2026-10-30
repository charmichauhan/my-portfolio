'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Vite', 'Angular', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'API Development', 'Stripe', 'Razorpay'],
  },
  {
    title: 'Database Management',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Cloud Deployment',
    skills: ['Firebase', 'Vercel', 'Netlify', 'Git'],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Development <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I use to build and deploy web applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {category.title}
            </h3>
            <ul className="space-y-3 text-center">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-300">
        Also explored: Flutter and WordPress
      </p>
    </div>
  </section>
);

export default Skills;
