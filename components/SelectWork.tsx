import { Project } from "@/types/project";
import ProjectSection from "./ProjectSection";

const SelectWork = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-12 md:my-24">
      <h1 className="text-off-black dark:text-off-white mb-8 text-4xl sm:text-5xl font-bold uppercase italic">
        Select work
      </h1>

      <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-24">
        {projects.map((project, index) => (
          <ProjectSection project={project} index={index} key={project._id} />
        ))}
      </div>
    </section>
  );
};

export default SelectWork;
