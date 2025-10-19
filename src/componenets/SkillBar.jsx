import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-800 rounded-full h-2.5 dark:bg-neutral-700">
        <motion.div 
          className="h-2.5 rounded-full" 
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
