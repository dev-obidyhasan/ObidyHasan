"use client";
import { deleteProject } from "@/actions/project";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const ProjectDeleteDialog = ({ project }: { project: IProject }) => {
  const router = useRouter();
  const handleDeleteProject = async () => {
    try {
      const res = await deleteProject(Number(project.id));
      if (res?.success && res?.data?.id) {
        router.refresh();
        toast.success("Project deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Delete Project Error: ", error);
      toast.error("Failed to delete Project. Please try again.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <MdOutlineDelete />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            Project server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteProject}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectDeleteDialog;
