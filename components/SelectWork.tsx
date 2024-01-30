import { Project } from "@/types/project";
import MotionLink from "@/components/MotionLink";
import Image from "next/image";

const SelectWork = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-32">
      <h1 className="text-6xl font-bold uppercase italic">
        Select work <sup>{projects.length}</sup>
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        {projects.map((project, index) => (
          <MotionLink
            href={`/projects/${project.slug}`}
            key={project._id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            viewport={{ once: true }}
            // whileHover={{
            //   backgroundSize: "110%",
            //   transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
            // }}
            className={`relative aspect-square ${index % 3 === 0 ? "md:col-span-2 md:aspect-[18/9]" : ""}`}
          >
            <Image
              src={project.image}
              fill
              alt=""
              className="rounded-2xl"
              style={{ objectFit: "cover" }}
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/50"></div>

            <div className="flex w-full justify-between">
              <div className="absolute bottom-5 left-5 ">
                <h1 className="text-4xl font-bold uppercase italic text-white">
                  {project.name}
                </h1>

                <ul className="mt-2 flex gap-2 uppercase text-black">
                  {project.sectors.map((sector, index) => (
                    <li
                      key={index}
                      className="rounded-full border bg-white px-4 py-1"
                    >
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>

              <h1 className="absolute bottom-5 right-5 font-mono text-4xl font-bold uppercase italic text-white">
                {project.year}
              </h1>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  );
};

export default SelectWork;
