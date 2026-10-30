'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [profileImage, setProfileImage] = useState('/profile-photo.png');
  const fullText = 'MEAN/MERN Stack Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <Image
                src={profileImage}
                alt="Profile"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                onError={() => setProfileImage('https://picsum.photos/seed/profile/200/200.jpg')}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Charmi Chauhan
              </span>
            </h1>
            {/* <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Portfolio Collection</p>
            </div> */}
            <div className="h-8">
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                {text}
                {index < fullText.length && <span className="animate-pulse">|</span>}
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Senior Software Developer with 8+ years of experience designing and building
            scalable web applications. I specialize in full-stack development with the
            MEAN and MERN stacks, creating responsive interfaces and reliable backend
            services with Node.js, Angular, and React. My experience also includes RESTful
            API development, SQL and NoSQL databases, and deploying applications to the cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 cursor-pointer"
            >
              Get In Touch
            </button>
            {/* <a
              href="/resume.pdf"
              download
              className="px-8 py-3 flex items-center space-x-2 border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white dark:hover:text-gray-900 transition-all duration-200 cursor-pointer"
            >
              <FaDownload className="w-4 h-4" />
              <span>Resume</span>
            </a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/charmichauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/chauhancharmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <FaArrowDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
