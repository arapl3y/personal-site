import MotionImage from "./MotionImage";
import MotionLink from "./MotionLink";
import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import { Project } from "@/types/project";
import { urlFor } from "@/sanity/client";

const ProjectSection = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 md:even:flex-row-reverse">
      <MotionLink
        scroll={false}
        href={`/projects/${project.slug}`}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        viewport={{ once: true }}
        className={`relative block aspect-square w-full overflow-hidden rounded-2xl md:aspect-auto md:min-h-[30rem] 2xl:min-h-[34rem] md:w-[55%]`}
        whileHover="hover"
      >
        <MotionImage
          priority={index === 0}
          src={urlFor(project.image).url()}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
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
      </MotionLink>

      <div className="text-off-black dark:text-off-white my-4 flex flex-1 flex-col gap-4 md:my-8">
        <ul className="text-off-black flex gap-2 uppercase">
          {project.sectors.map((sector, index) => (
            <li key={index}>
              <Chip>{sector}</Chip>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl uppercase">{project.client}</h2>
        <h1 className="text-3xl font-bold uppercase italic">{project.name}</h1>

        <p>{project.description}</p>

        <MotionLink
          scroll={false}
          whileHover={{
            rotate: -6,
          }}
          href={`/projects/${project.slug}`}
          className="bg-off-black text-off-white dark:bg-off-white dark:text-off-black self-start rounded text-5xl p-2 uppercase"
        >
          ⭢
        </MotionLink>

        {project.awards?.length > 0 && (
          <Image
            src="/gda-winner.svg"
            width={0}
            height={0}
            alt="GDA Winner"
            className="mt-4 h-auto w-[6rem] md:mt-auto dark:invert"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
