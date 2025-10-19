import {HERO_CONTENT} from "../constants"
import profilepic from "../assets/RaghdaHamdanPhoto.jpeg"
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{delay:delay,duration:0.5}}
})

const Hero = () => {
  return (
    
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="pb-16 text-5xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl">Raghda Hamdan</motion.h1 >
                    <motion.span
                      variants={container(0.5)}
                      initial="hidden"
                      animate="visible"
                      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                      bg-clip-text text-4xl tracking-tight text-transparent">
                        Business Development Manager solution
                      </motion.span>
                        <motion.p
                          variants={container(1)}
                          initial="hidden"
                          animate="visible"
                          className="my-2 max-w-xl py-6 font-light tracking-tighter">
                          {HERO_CONTENT}
                      </motion.p>

                      <motion.div
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="mt-6"
                      >
                        
                      </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                className="rounded-2xl"
                width={400}
                height={400}
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{delay:1.2,duration:1}}
                src={profilepic}
                alt="ProfilePic" />
              </div>
            </div>
        </div>
    </div>
  )
};

export default Hero
