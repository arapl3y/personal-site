import { Project } from "@/types/project";
import { motion } from "framer-motion";

const OtherWork = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="my-24"
    >
      <h1 className="text-4xl font-bold uppercase italic">
        Other work <sup>{projects.length}</sup>
      </h1>

      <div className="mt-8 grid grid-cols-1 divide-y divide-black dark:divide-white">
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
                className="w-1/4 text-sm  underline"
              >
                {project.name}
              </a>
            ) : (
              <span className="w-1/4 text-sm">{project.name}</span>
            )}

            <span className="flex-1 text-xs">{project.description}</span>
            <span className="text-sm">{project.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherWork;
