import { ShineBorder } from "@/components/ui/shine-border";
import { IBlog } from "@/types";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <>
      <div className="relative duration-300 transform rounded-md cursor-pointer hover:-translate-y-3">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <div className="w-full h-full flex flex-col p-5">
          <div className="w-full grow">
            <h1 className="text-base font-semibold font-fira min-h-14">
              {blog?.title || "No title available"}
            </h1>
            <p className="mt-2 text-sm line-clamp-2 text-dart03">
              {blog?.content || "No description available"}
            </p>
          </div>
          <figure className="mt-4">
            <Image
              src={blog?.imgUrl[0] || ""}
              className="w-full h-[270px] object-cover object-top rounded-md"
              alt="project image"
              width={400}
              height={270}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
