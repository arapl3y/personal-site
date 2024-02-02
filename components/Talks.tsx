import { Talk } from "@/types/talk";
import { motion } from "framer-motion";
import TableList from "./TableList";

const Talks = ({ talks }: { talks: Talk[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="text-off-black dark:text-off-white my-24"
    >
      <h1 className="mb-8 text-4xl font-bold uppercase italic">Talks</h1>

      <TableList items={talks} />
    </motion.section>
  );
};

export default Talks;
