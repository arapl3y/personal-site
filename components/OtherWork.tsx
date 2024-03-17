import { Project } from "@/types/project";
import { motion } from "framer-motion";
import TableList from "./TableList";

const OtherWork = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      viewport={{ once: true }}
      className="text-off-black dark:text-off-white my-12 md:my-24"
    >
      <h1 className="mb-8 text-4xl sm:text-5xl font-bold uppercase italic">
        Other work
      </h1>

      <TableList items={projects} />
    </motion.div>
  );
};

export default OtherWork;
