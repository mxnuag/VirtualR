import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { resourcesLinks, platformLinks, communityLinks } from '../constants';

const Footer = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 border-t border-neutral-700 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mt-24 relative">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-semibold mb-6 text-white cursor-pointer hover:scale-105 transition-transform duration-300">Resources</h3>
            <ul className="space-y-4">
              {resourcesLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="transition-transform transform hover:scale-105"
                >
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-6 text-white cursor-pointer hover:scale-105 transition-transform duration-300">Platform</h3>
            <ul className="space-y-4">
              {platformLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="transition-transform transform hover:scale-105"
                >
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-6 text-white cursor-pointer hover:scale-105 transition-transform duration-300">Community</h3>
            <ul className="space-y-4">
              {communityLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="transition-transform transform hover:scale-105"
                >
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <motion.a
            href="https://twitter.com"
            className="text-neutral-300 hover:text-blue-500 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </motion.a>
          <motion.a
            href="https://facebook.com"
            className="text-neutral-300 hover:text-blue-700 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="text-neutral-300 hover:text-blue-600 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </motion.a>
          <motion.a
            href="https://github.com"
            className="text-neutral-300 hover:text-gray-400 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            className="text-neutral-300 hover:text-pink-600 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </motion.a>
          <motion.a
            href="https://youtube.com"
            className="text-neutral-300 hover:text-red-600 transform transition-transform duration-300 hover:scale-110"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </motion.a>
        </div>
        <div className="mt-12 text-center text-neutral-300 text-sm">
          <p>&copy; {new Date().getFullYear()} VirtualR. All rights reserved.</p>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transform transition-transform duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
