import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div
      id="experience"
      className="border-b border-neutral-800 pb-16 pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl font-bold text-white mb-10"
      >
        Experience
      </motion.h1>

      {/* Desktop Timeline View */}
      <div className="hidden md:block">
        <Timeline experiences={EXPERIENCES} />
      </div>

      {/* Mobile & Tablet View */}
      <div className="md:hidden space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-800 bg-neutral-900 dark:bg-dark-accent p-4 sm:p-5 shadow-md"
          >
            {/* Year */}
            <p className="text-xs sm:text-sm text-purple-400 font-medium mb-1">
              {experience.year}
            </p>

            {/* Role & Company */}
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              {experience.role}
              <span className="block text-sm text-purple-300 font-normal">
                {experience.company}
              </span>
            </h3>

            {/* Description */}
            <div className="text-sm text-neutral-400 dark:text-gray-300 mb-3 leading-relaxed whitespace-pre-line">
              {experience.description}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-neutral-800 dark:bg-dark-primary text-purple-400 text-xs font-medium px-2 py-1 rounded"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
