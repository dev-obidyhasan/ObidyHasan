import { Skeleton } from "@/components/ui/skeleton";

export const BlogCardSkeleton = () => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-2xl animate-pulse">
      <Skeleton className="h-64 w-full " />

      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-3" />

        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-5/6 " />
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full " />{" "}
            <Skeleton className="h-4 w-8 " />
          </div>

          <div className="flex space-x-3">
            <Skeleton className="h-5 w-5 rounded-full " />
            <Skeleton className="h-5 w-5 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};
