import { Project } from "@/types/project";
import { motion } from "framer-motion";

const OtherWork = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="my-32"
    >
      <h1 className="text-6xl font-bold uppercase italic">
        Other work <sup>{projects.length}</sup>
      </h1>

      <div className="mt-12 grid grid-cols-1 divide-y divide-black text-lg dark:divide-white">
        {projects.map((project) => (
          <div
            className="flex items-start justify-between gap-8 py-4 text-sm md:items-center md:text-lg"
            key={project._id}
          >
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4 underline"
              >
                {project.name}
              </a>
            ) : (
              <span className="w-1/4">{project.name}</span>
            )}

            <span className="flex-1 text-sm md:text-base">
              {project.description}
            </span>
            <span className="1/4">{project.year}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherWork;
