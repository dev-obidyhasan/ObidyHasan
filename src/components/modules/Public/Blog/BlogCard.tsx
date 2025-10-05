import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <div className="relative duration-300 transform rounded-md cursor-pointer hover:-translate-y-3">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <div className="w-full h-full flex flex-col  p-5">
          <div className="w-full">
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
          <figure>
            <Image
              src=""
              className="w-full h-[270px] object-cover object-top rounded-md"
              alt="project image"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
