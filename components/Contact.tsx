import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="text-off-black dark:text-off-white my-12 md:my-24"
    >
      <h1 className="text-4xl sm:text-5xl font-bold uppercase mb-8 italic">
        Contact
      </h1>
      <p>Don&apos;t hesitate to get in touch.</p>

      <div className="my-6">
        <SocialLinks />
      </div>
    </motion.section>
  );
};

export default Contact;
