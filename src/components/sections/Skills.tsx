'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGlobe, FaServer } from 'react-icons/fa';

const Skills = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: (
        <>
          Build with <strong>React</strong>, <strong>Angular</strong>, <strong>Next.js</strong>,{' '}
          <strong>Vite</strong> and <strong>JavaScript</strong>; also explored <strong>Flutter</strong>{' '}
          and <strong>WordPress</strong>
        </>
      ),
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: (
        <>
          Develop with <strong>Node.js</strong>, <strong>Express</strong> and <strong>RESTful APIs</strong>,
          including analytics and <strong>Microsoft Dynamics 365</strong> integrations
        </>
      ),
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: (
        <>
          Skilled in <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>,{' '}
          <strong>Firebase</strong>, <strong>Neon</strong>, <strong>Supabase</strong> and database
          optimization
        </>
      ),
    },
    {
      icon: FaGlobe,
      title: 'Cloud Deployment',
      description: (
        <>
          Deploy with <strong>Vercel</strong>, <strong>Netlify</strong> and <strong>Render</strong>, and
          use <strong>Git</strong> for version control
        </>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <strong>MERN Stack</strong> and <strong>MEAN Stack</strong> Developer with a Passion for Innovation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a software developer specializing in <strong>MEAN</strong> and <strong>MERN</strong>{' '}
              stack technologies. With a foundation in frontend and backend development, I build web
              applications that are functional, responsive and visually appealing.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I work with <strong>React</strong>, <strong>Angular</strong>, <strong>Next.js</strong> and{' '}
              <strong>Vite</strong> on the frontend, and <strong>Node.js</strong> and{' '}
              <strong>Express</strong> on the backend. My experience also includes <strong>SQL</strong>{' '}
              and <strong>NoSQL</strong> databases, payment integrations with <strong>Stripe</strong>{' '}
              and <strong>Razorpay</strong>, email integrations with <strong>SendGrid</strong> and{' '}
              <strong>Mailgun</strong>, analytics and <strong>Microsoft Dynamics 365</strong>{' '}
              integrations, and deploying applications on modern cloud platforms. I have also
              explored <strong>Flutter</strong> and <strong>WordPress</strong>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I value clean, maintainable code and staying up-to-date with industry trends and best
              practices. My goal is to deliver high-quality solutions that support real business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{highlight.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
