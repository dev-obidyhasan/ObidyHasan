import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
      <div className="relative duration-300 transform rounded-md cursor-pointer hover:-translate-y-3">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <figure>
          <Image
            src=""
            className="w-full h-[500px] object-cover object-top rounded-md"
            alt="project image"
          />
        </figure>

        <div className="w-full h-full absolute top-0 bg-gradient-to-t from-dart01 via-[#000000b0] to-[#ffffff00] flex items-end">
          <div className="w-full p-5">
            <h1 className="text-lg font-semibold font-fira min-h-14">
              Project name
            </h1>
            <p className="mt-2 text-sm line-clamp-2 text-dart03">
              project description
            </p>
            <div className="w-full mt-5 btn btn-outline text-light01 font-fira">
              View Project Details
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
