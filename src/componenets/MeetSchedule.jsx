import { motion } from "framer-motion";
import meetingpic from "../assets/google_meet.png"
const MeetSchedule = () => {
  return (
    <div id="MeetSchedule" className="border-b border-neutral-900 pb-4 pt-16 -mt-16">
        <h1 className="my-20 text-center text-4xl">Book An Appointment
          <span className="text-neutral-500"> With Me!</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <img className="rounded-2xl"  src={meetingpic} alt="meeting pic" />
              </div>
            </motion.div>



                <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 100 }}
  transition={{ duration: 0.5 }}
  className="w-full lg:w-1/2 flex items-center justify-center"
>
  <div className="flex flex-col items-center text-center gap-6 p-4">
    <p className="text-lg text-neutral-300">Let's connect and discuss your ideas. I'm excited to meet you!</p>
    <a
      href="https://calendar.app.google/GrG1onpSduFMdJCS6"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
    >
      Schedule a Google Meet
    </a>
  </div>
</motion.div>
        </div>
    </div>
  )
}

export default MeetSchedule
