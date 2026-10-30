'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/charmichauhan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/chauhancharmi', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 dark:text-gray-300">
              Full-stack developer specializing in MEAN/MERN stack technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={social.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-600 text-center text-gray-400 dark:text-gray-500"
        >
          <p>&copy; {currentYear} Charmi Chauhan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
