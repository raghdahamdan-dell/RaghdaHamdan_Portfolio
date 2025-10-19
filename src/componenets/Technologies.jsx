import {RiReactjsLine} from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { SiMysql } from "react-icons/si"; 
import profilepic from "../assets/Screenshot 2025-10-16 125832.png"
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";

import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { SKILLS } from "../constants";


const iconsVariants = (duration) => ({
    initial:{y:-10},
    animate:{y:[10,-10],transition:{duration:duration,ease:"linear",repeat:Infinity,repeatType:"reverse"}}
})

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24 pt-16 -mt-16">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>

        {/* Technology Icons */}
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4 mb-16">
           
            <motion.div
             variants={iconsVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconsVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl" style={{ color: "#CC2927" }} />
            </motion.div>
            <motion.div
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl" style={{ color: "#F24E1E" }}/>
            </motion.div>
        
            <motion.div
            variants={iconsVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJsSquare className="text-7xl" style={{ color: "#F7DF1E" }}/>
            </motion.div>
            <motion.div
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoTypescript className="text-7xl " style={{ color: "#3178C6" }}/>
            </motion.div>
             <motion.div
  variants={iconsVariants(2)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4"
>
  <img
    src={profilepic}
    alt="Microsoft Office"
    className="w-20 h-20 object-contain" // adjust size to match icon
  />
</motion.div>

        </motion.div>

        {/* Skill Bars */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skill Proficiency
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-4xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar
                skill={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Technologies