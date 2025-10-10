"use client";
import { Badge } from "@/components/ui/badge";
import { ISkill } from "@/types";
import SkillDeleteDialog from "./SkillDeleteDialog";
import Image from "next/image";
import SkillEditDialog from "./SkillEditDialog";

const SkillDashboardCard = ({ skill }: { skill: ISkill }) => {
  return (
    <div className="border p-4 rounded-sm space-y-3">
      <Image
        loading="lazy"
        src={skill?.logoUrl}
        alt="skill icon"
        width={80}
        height={80}
        className="w-20 h-20 object-contain"
      />
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-medium text-xl">{skill?.name}</h1>
        <Badge variant={"outline"}>{skill?.category}</Badge>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>{skill?.content}</p>
        <div className="flex gap-2">
          <SkillEditDialog skill={skill} />
          <SkillDeleteDialog skill={skill} />
        </div>
      </div>
    </div>
  );
};

export default SkillDashboardCard;
