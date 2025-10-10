import { Skeleton } from "@/components/ui/skeleton";

export default function WorkHighlightsSkeleton() {
  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto">
      <header className="px-6 py-4 flex justify-between items-center">
        <Skeleton className="h-6 w-24 rounded-md" />

        <div className="flex space-x-6">
          <Skeleton className="h-4 w-12 " />
          <Skeleton className="h-4 w-12 " />
          <Skeleton className="h-4 w-12 " />
          <Skeleton className="h-4 w-16 " />
          <Skeleton className="h-4 w-16 " />
          <Skeleton className="h-4 w-16 " />
        </div>

        <Skeleton className="h-8 w-16  rounded-md" />
      </header>

      <main className="py-8 px-4 lg:py-12 flex-grow">
        <div className="text-center mb-8 space-y-2">
          <Skeleton className="h-10 w-64 mx-auto  rounded-lg" />
          <Skeleton className="h-5 w-96 mx-auto  rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <WorkHighlightCardSkeleton key={index} />
          ))}
        </div>
      </main>

      <footer className="py-6 px-4 border-t flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-28 " />
          <Skeleton className="h-4 w-20 " />
        </div>
      </footer>
    </div>
  );
}

const WorkHighlightCardSkeleton = () => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-2xl animate-pulse flex flex-col">
      <Skeleton className="h-72 w-full " />

      <div className="p-4 flex-grow">
        <Skeleton className="h-7 w-5/6 mb-3 " />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-11/12 " />
          <Skeleton className="h-4 w-3/4 " />
        </div>
      </div>
    </div>
  );
};
