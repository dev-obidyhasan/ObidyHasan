import { ShineBorder } from "@/components/ui/shine-border";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Link href={`/projects/${project?.id}`}>
      <div className="relative duration-300 transform rounded-md cursor-pointer hover:-translate-y-3">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <figure>
          <Image
            src={project?.images[0] || ""}
            className="w-full h-[500px] object-cover object-top rounded-md"
            alt="project image"
            width={400}
            height={300}
          />
        </figure>

        <div className="w-full h-full absolute top-0 bg-gradient-to-t from-[#000000e3] via-[#000000b0] to-[#ffffff00] flex items-end">
          <div className="w-full p-5">
            <h1 className="text-lg font-semibold font-fira min-h-14">
              {project?.title}
            </h1>
            <p className="mt-2 text-sm line-clamp-2 text-dart03 text-muted-foreground">
              {project?.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
