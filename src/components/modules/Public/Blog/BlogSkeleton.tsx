import { Skeleton } from "@/components/ui/skeleton";
import { BlogCardSkeleton } from "./BlogCardSkeleton";

const BlogSkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-24  rounded-lg" />
        <Skeleton className="h-10 w-28  rounded-lg" />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </>
  );
};

export default BlogSkeleton;
