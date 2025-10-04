"ure client";
import Link from "next/link";
import { useRef } from "react";

const ProjectCard = ({ project: any }) => {
  const projectModal = useRef(null);

  return (
    <>
      <Link
        href={`/project/${project?._id}`}
        // onClick={() => projectModal.current.showModal()}
        className="relative duration-300 transform rounded-md cursor-pointer hover:-translate-y-3"
      >
        <figure>
          <img
            src={project.image[0]}
            className="w-full h-[500px] object-cover object-top rounded-md"
            alt=""
          />
        </figure>

        <div className="w-full h-full absolute top-0 bg-gradient-to-t from-dart01 via-[#000000b0] to-[#ffffff00] flex items-end">
          <div className="w-full p-5">
            <h1 className="text-lg font-semibold font-fira min-h-14">
              {project.name}
            </h1>
            <p className="mt-2 text-sm line-clamp-2 text-dart03">
              {project.description}
            </p>
            <div className="w-full mt-5 btn btn-outline text-light01 font-fira">
              View Project Details
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
