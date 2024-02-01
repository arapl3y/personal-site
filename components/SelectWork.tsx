import { Project } from "@/types/project";
import MotionLink from "@/components/MotionLink";
import MotionImage from "./MotionImage";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SelectWork = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="my-24">
      <h1 className="text-off-black dark:text-off-white text-4xl font-bold uppercase italic">
        Select work
      </h1>

      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project) => (
          <div className="flex gap-8 even:flex-row-reverse" key={project._id}>
            <MotionLink
              href={`/projects/${project.slug}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
              viewport={{ once: true }}
              className={`relative block min-h-[30rem] w-[55%] overflow-hidden rounded-2xl`}
              whileHover="hover"
            >
              <MotionImage
                src={project.image}
                fill
                alt=""
                className=""
                style={{ objectFit: "cover" }}
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: {
                      duration: 0.6,
                      type: "tween",
                      ease: "easeOut",
                    },
                  },
                }}
              />

              {/* <div className="to-off-black/50 absolute inset-0 rounded-2xl bg-gradient-to-b from-black"></div> */}
              {/* </div> */}
            </MotionLink>

            <div className="text-off-black dark:text-off-white my-8 flex flex-1 flex-col gap-4">
              <ul className="text-off-black flex gap-2 uppercase">
                {project.sectors.map((sector, index) => (
                  <li
                    key={index}
                    className="bg-off-white rounded border px-4 py-1 text-sm"
                  >
                    {sector}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl uppercase">{project.client}</h2>
              <h1 className="text-3xl font-bold uppercase italic">
                {project.name}
              </h1>

              <p>{project.description}</p>

              <Link
                href={`/project/${project.slug}`}
                className="bg-off-black text-off-white dark:bg-off-white dark:text-off-black self-start rounded p-2 text-5xl font-bold uppercase"
              >
                ⭢
              </Link>

              {/* <p className="font-mono text-xl font-bold uppercase italic">
                {project.year}
              </p> */}

              {project.awards?.length > 0 && (
                <Image
                  src="/gda-winner.svg"
                  width={100}
                  height={100}
                  alt="GDA Winner"
                  className="mt-auto dark:invert"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectWork;
