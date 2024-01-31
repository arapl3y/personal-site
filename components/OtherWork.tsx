import { Project } from "@/types/project";
import { motion } from "framer-motion";

const OtherWork = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="text-off-black dark:text-off-white my-24"
    >
      <h1 className="text-4xl font-bold uppercase italic">Other work</h1>

      <div className="divide-off-black dark:divide-off-white mt-8 grid grid-cols-1 divide-y">
        {projects.map((project) => (
          <div
            className="flex items-start justify-between gap-8 py-4 md:items-center"
            key={project._id}
          >
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-sm underline  sm:w-1/4"
              >
                {project.name}
              </a>
            ) : (
              <span className="w-full text-sm sm:w-1/4">{project.name}</span>
            )}

            <span className="hidden flex-1 text-xs sm:block">
              {project.description}
            </span>
            <span className="text-sm">{project.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherWork;
