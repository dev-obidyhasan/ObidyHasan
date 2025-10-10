import { cn } from "@/lib/utils";
import { ISkill } from "@/types";
import Image from "next/image";

export const SkillCard = ({ skill }: { skill: ISkill }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden border-gray-50/[.1] bg-gray-50/[.10]  hover:bg-gray-950/[.05] rounded-xl border p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          loading="lazy"
          className="object-contain"
          width="60"
          height="60"
          alt="skill icon"
          src={skill?.logoUrl || ""}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {skill?.name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-xs text-start line-clamp-2">
        {skill?.content}
      </blockquote>
    </figure>
  );
};
