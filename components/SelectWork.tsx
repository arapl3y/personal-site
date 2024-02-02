import { Project } from "@/types/project";
import ProjectSection from "./ProjectSection";

const SelectWork = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-24">
      <h1 className="text-off-black dark:text-off-white mb-8 text-4xl font-bold uppercase italic">
        Select work
      </h1>

      <div className="flex flex-col gap-y-16 md:gap-x-8 md:gap-y-32">
        {projects.map((project, index) => (
          <ProjectSection project={project} index={index} key={project._id} />
        ))}
      </div>
    </section>
  );
};

export default SelectWork;
