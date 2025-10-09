import { Skeleton } from "@/components/ui/skeleton";

export const SkillCardSkeleton = () => {
  return (
    <div className="rounded-xl shadow-xl animate-pulse flex flex-col p-4 border">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-12 w-12  rounded-md" />

        <div className="flex-1 ml-4 flex flex-col items-end">
          <Skeleton className="h-6 w-24  mb-2" />
          <Skeleton className="h-4 w-20  rounded-full" />
        </div>
      </div>

      <div className="space-y-2 mb-4 flex-grow">
        <Skeleton className="h-4 w-full " />
        <Skeleton className="h-4 w-11/12 " />
      </div>

      <div className="flex justify-end items-center pt-2 border-t ">
        <div className="flex space-x-3">
          <Skeleton className="h-5 w-5 rounded-full " />
          <Skeleton className="h-5 w-5 rounded-full " />
        </div>
      </div>
    </div>
  );
};
