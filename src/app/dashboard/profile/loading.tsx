import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileEditSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center space-x-4 mb-8">
        <Skeleton className="h-32 w-32 rounded-full " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Row 1 */}
        <InputSkeleton labelWidth="w-20" />
        <InputSkeleton labelWidth="w-24" />
        <InputSkeleton labelWidth="w-28" />

        {/* Row 2 */}
        <InputSkeleton labelWidth="w-16" />
        <InputSkeleton labelWidth="w-24" />
        <InputSkeleton labelWidth="w-20" />

        {/* Row 3 */}
        <InputSkeleton labelWidth="w-28" />
        <InputSkeleton labelWidth="w-24" />
        <InputSkeleton labelWidth="w-28" />

        {/* Row 4 */}
        <InputSkeleton labelWidth="w-24" />
        <InputSkeleton labelWidth="w-28" />
        <InputSkeleton labelWidth="w-28" />

        {/* Row 5 */}
        <InputSkeleton labelWidth="w-20" />
        <InputSkeleton labelWidth="w-28" />
        <InputSkeleton labelWidth="w-28" />
      </div>

      <div className="mb-8">
        <Skeleton className="h-6 w-16  rounded-lg mb-2" />
        <Skeleton className="h-32 w-full  rounded-lg" />
      </div>

      <Skeleton className="h-10 w-40  rounded-lg" />
    </div>
  );
}

const InputSkeleton = ({ labelWidth }: { labelWidth: string }) => (
  <div className="space-y-2">
    <Skeleton className={`h-4 ${labelWidth}  rounded-lg`} />
    <Skeleton className="h-6 w-full  rounded-lg" />
  </div>
);
