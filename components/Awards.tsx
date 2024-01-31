import { motion } from "framer-motion";

const Awards = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="text-off-black dark:text-off-white my-24"
    >
      <h1 className="text-4xl font-bold uppercase italic">Awards</h1>

      <div className="divide-off-black dark:divide-off-white mt-8 grid grid-cols-1 divide-y text-sm">
        <div className="py-4">
          <p>Good Design Award 2022</p>
        </div>
        <div className="py-4">
          <p>Good Design Award 2022</p>
        </div>
        <div className="py-4">
          <p>Good Design Award 2022</p>
        </div>
        <div className="py-4">
          <p>GovHack winner 2019</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
