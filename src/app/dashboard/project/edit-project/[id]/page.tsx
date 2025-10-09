import ProjectEditSection from "@/components/modules/Public/Project/ProjectEditSection";

const EditProject = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: project } = await res.json();

  return (
    <div>
      <h1 className="font-medium text-xl">Edit Project</h1>
      <ProjectEditSection project={project} />
    </div>
  );
};

export default EditProject;
