import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-16 pt-16 -mt-16">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">
        Experience
        </motion.h1>

        {/* Interactive Timeline */}
        <Timeline experiences={EXPERIENCES} />

        {/* Mobile view for small screens */}
        <div className="md:hidden mt-12">
            {EXPERIENCES.map((experience, index) => (
                <div className="mb-12 bg-neutral-900 dark:bg-dark-accent rounded-lg p-6 shadow-lg" key={index}>
                    <div className="mb-4">
                        <p className="text-purple-400 font-semibold">{experience.year}</p>
                    </div>
                    <div>
                        <h6 className="text-xl font-semibold mb-2">
                            {experience.role} -
                            <span className="text-sm text-purple-300 ml-1">
                                {experience.company}
                            </span>
                        </h6>
                        <div className="mb-4 text-neutral-400 dark:text-gray-300">
                        {experience.description
                            .trim()
                            .split('\n')
                            .map((line, index) => (
                            line.trim() ? (
                                <p key={index} className="mb-2">{line.trim()}</p>
                            ) : (
                                <br key={index} />
                            )
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((technology, techIndex) => (
                               <span className="rounded bg-neutral-800 dark:bg-dark-primary px-2 py-1 text-sm font-medium text-purple-400" key={techIndex}>{technology}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience