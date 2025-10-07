import SkillAddDialog from "@/components/modules/Public/Skill/SkillAddDialog";
import SkillDashboardCard from "@/components/modules/Public/Skill/SkillDashboardCard";
import { ISkill } from "@/types";

const SkillPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill`, {
    next: {
      tags: ["SKILL"],
    },
  });
  const { data: skills = [] } = await res.json();

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Skills</h1>
        <SkillAddDialog />
      </div>
      {/* All Skills */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills?.map((skill: ISkill) => (
          <SkillDashboardCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
