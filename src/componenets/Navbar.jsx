import logo from "../assets/RH_Logo3.jpg";
import { FaLinkedin, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
              <img className="mx-2 w-24 h-24 rounded-full" src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#technologies" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#blogs" className="hover:text-purple-400 transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            <a href="#MeetSchedule" className="hover:text-purple-400 transition-colors">MeetSchedule</a>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
            {/* Theme Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-800 dark:bg-neutral-700 text-yellow-400 dark:text-blue-300"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* Social Media Links */}
            <a href="https://www.linkedin.com/in/raghda-hamdan-7a63b2236/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaLinkedin />
            </a>
            
            <a href="https://x.com/rr03_r?t=3VHHL6kTe2fDB-CBGEBTuA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/raghda_hn/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar