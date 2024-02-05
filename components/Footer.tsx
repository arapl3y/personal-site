import { motion } from "framer-motion";
import { anim } from "@/utils/animation";
import { useBoundStore } from "@/store";
import { footerVariants } from "@/utils/animation";

const Footer = () => {
  const footerControls = useBoundStore((state) => state.footerControls);

  return (
    <motion.footer
      {...anim(footerVariants)}
      animate={footerControls}
      className="container flex flex-col mt-auto"
    >
      <div className="ml-auto py-4">© ALEX RAPLEY 2024</div>
    </motion.footer>
  );
};

export default Footer;
