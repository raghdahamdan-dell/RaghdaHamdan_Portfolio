import { PROJECTS } from "../constants"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Project = () => {
  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Get all unique technologies from projects
  const allTechnologies = ["All", ...new Set(PROJECTS.flatMap(project => project.technologies))];

  // Filter projects based on selected technology
  const filterProjects = (technology) => {
    setActiveFilter(technology);

    if (technology === "All") {
      setFilteredProjects(PROJECTS);
    } else {
      const filtered = PROJECTS.filter(project =>
        project.technologies.includes(technology)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 pt-16 -mt-16">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => filterProjects(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tech
                  ? "bg-purple-600 text-white"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div>
            {filteredProjects.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                        <img
                        width={350}
                        height={350}
                        src={project.image}
                        alt={project.title}
                        className="mb-6 rounded"
                        />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {project.title}
                        </h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((technology, index) => (
                           <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" key={index}>{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project