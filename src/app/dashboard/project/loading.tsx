import { ProjectCardSkeleton } from "@/components/modules/Public/Project/ProjectCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-28  rounded-lg" />

        <Skeleton className="h-10 w-32  rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
