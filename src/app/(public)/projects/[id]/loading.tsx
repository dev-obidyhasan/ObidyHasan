import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailsSkeleton() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex flex-col">
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

      <main className="px-4 py-8 lg:py-12 flex-grow">
        <Skeleton className="h-10 w-3/4  mb-4" />

        <div className="space-y-2 mb-6 max-w-4xl">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-11/12 " />
          <Skeleton className="h-4 w-5/6 " />
        </div>

        <div className="mb-8">
          <Skeleton className="h-5 w-32  mb-3" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20  rounded-full" />
            <Skeleton className="h-7 w-16  rounded-full" />
            <Skeleton className="h-7 w-24  rounded-full" />
            <Skeleton className="h-7 w-18  rounded-full" />
            <Skeleton className="h-7 w-16  rounded-full" />
            <Skeleton className="h-7 w-18  rounded-full" />
            <Skeleton className="h-7 w-16  rounded-full" />
            <Skeleton className="h-7 w-16  rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <Skeleton className="h-10 w-32  rounded-lg" />
          <Skeleton className="h-10 w-48  rounded-lg" />
          <Skeleton className="h-10 w-48  rounded-lg" />
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden mb-12">
          <Skeleton className="h-full w-full " />
        </div>

        <Skeleton className="h-8 w-2/3  mb-6" />

        <div className="flex space-x-4 mb-8">
          <Skeleton className="h-40 w-1/3  rounded-lg" />
          <Skeleton className="h-40 w-1/3  rounded-lg" />
          <Skeleton className="h-40 w-1/3  rounded-lg" />
        </div>
      </main>

      <footer className="py-6 px-4 border-t flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-6 w-6  rounded-md" />
          <Skeleton className="h-4 w-32 " />
        </div>

        <Skeleton className="h-4 w-64 " />

        <div className="flex space-x-3">
          <Skeleton className="h-6 w-6 rounded-full " />
          <Skeleton className="h-6 w-6 rounded-full " />
          <Skeleton className="h-6 w-6 rounded-full " />
        </div>
      </footer>
    </div>
  );
}
