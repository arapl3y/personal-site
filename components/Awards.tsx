import { Award } from "@/types/award";
import { motion } from "framer-motion";
import TableList from "./TableList";

const Awards = ({ awards }: { awards: Award[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="text-off-black dark:text-off-white my-12 md:my-24"
    >
      <h1 className="mb-8 text-4xl sm:text-5xl font-bold uppercase">Awards</h1>

      <TableList items={awards} />
    </motion.section>
  );
};

export default Awards;
