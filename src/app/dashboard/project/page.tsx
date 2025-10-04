"use client";
import { Button } from "@/components/ui/button";
import ProjectDashboardCard from "@/components/modules/Public/Project/ProjectDashboardCard";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Projects</h1>

        <Button variant="default">
          <Link href={"/dashboard/project/12"}>Add Project</Link>
        </Button>
      </div>
      {/* All Project */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <ProjectDashboardCard />
        <ProjectDashboardCard />
        <ProjectDashboardCard />
        <ProjectDashboardCard />
        <ProjectDashboardCard />
      </div>
    </section>
  );
};

export default ProjectPage;
