import { cn } from "@/lib/utils";
import Image from "next/image";

export const SkillCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden border-gray-50/[.1] bg-gray-50/[.10]  hover:bg-gray-950/[.05] rounded-xl border p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="60"
          height="60"
          alt="skill icon"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs text-start line-clamp-2">
        {body}
      </blockquote>
    </figure>
  );
};
