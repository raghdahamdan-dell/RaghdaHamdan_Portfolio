import { motion } from 'framer-motion';

const Timeline = ({ experiences }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-800 dark:bg-dark-accent"></div>
      
      {experiences.map((experience, index) => (
        <div key={index} className="relative mb-16">
          {/* Timeline dot */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple-600 z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Content container */}
          <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Date */}
            <motion.div 
              className="w-5/12 px-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`p-4 rounded-lg bg-neutral-900 dark:bg-dark-accent shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <span className="text-purple-400 font-semibold">{experience.year}</span>
              </div>
            </motion.div>
            
            {/* Empty space for alignment */}
            <div className="w-2/12"></div>
            
            {/* Experience details */}
            <motion.div 
              className="w-5/12 px-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 rounded-lg bg-neutral-900 dark:bg-dark-accent shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  {experience.role} - <span className="text-sm text-purple-300">{experience.company}</span>
                </h3>
                <p className="text-neutral-400 dark:text-gray-300 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="rounded bg-neutral-800 dark:bg-dark-primary px-2 py-1 text-sm font-medium text-purple-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
