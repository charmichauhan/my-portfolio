'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'charmichauhan9503@gmail.com',
      href: 'mailto:charmichauhan9503@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 7567546624',
      href: 'tel:+917567546624',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Surat, India',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
            Have a project in mind?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Let&apos;s <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Let&apos;s start a conversation.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-10 text-white shadow-xl shadow-blue-900/10 lg:col-span-2 flex flex-col justify-between min-h-72"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-24 border-white/10" />
            <div className="absolute -bottom-20 -right-4 h-48 w-48 rounded-full bg-purple-400/20 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium ring-1 ring-inset ring-white/20">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Open to opportunities
              </span>
              <h3 className="mt-8 text-3xl font-bold leading-tight">
                Let&apos;s make something meaningful.
              </h3>
              <p className="mt-4 leading-relaxed text-blue-50">
                Whether you have a project in mind or just want to explore an idea,
                I&apos;d love to hear from you.
              </p>
            </div>
            <p className="relative mt-8 text-sm font-medium text-blue-100">
              Choose the best way to reach me
            </p>
          </motion.div>

          <div className="space-y-4 lg:col-span-3">
            {contactInfo.map((info, index) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/20 transition-transform duration-200 group-hover:scale-105">
                    <info.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </span>
                    <span className="mt-1 block break-all text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
                      {info.value}
                    </span>
                  </span>
                  {info.href && (
                    <FaArrowRight
                      className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  )}
                </>
              );
              const className =
                'group flex min-h-24 items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700 sm:gap-5 sm:p-6';

              return info.href ? (
                <motion.a
                  key={info.label}
                  href={info.href}
                  aria-label={`${info.label}: ${info.value}`}
                  className={className}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={info.label}
                  className={className}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
