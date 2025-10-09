import { SkillCardSkeleton } from "@/components/modules/Public/Skill/SkillCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsSkeleton() {
  return (
    <div className=" min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-24  rounded-lg" />

        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkillCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
