import { Button } from "@/components/ui/button";
import ProjectDashboardCard from "@/components/modules/Public/Project/ProjectDashboardCard";
import Link from "next/link";
import { IProject } from "@/types";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    next: {
      tags: ["PROJECT"],
    },
  });
  const { data: projects = [] } = await res.json();

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Projects</h1>

        <Button variant="default">
          <Link href={"/dashboard/project/add-project"}>Add Project</Link>
        </Button>
      </div>
      {/* All Project */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {projects?.map((project: IProject) => (
          <ProjectDashboardCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
