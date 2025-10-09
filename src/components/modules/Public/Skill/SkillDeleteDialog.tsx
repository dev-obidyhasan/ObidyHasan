import { deleteSkill } from "@/actions/skill";
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
import { ISkill } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const SkillDeleteDialog = ({ skill }: { skill: ISkill }) => {
  const router = useRouter();
  const handleDeleteSkill = async () => {
    try {
      const res = await deleteSkill(Number(skill.id));
      if (res?.success && res?.data?.id) {
        router.refresh();
        toast.success("Skill deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Delete Skill Error: ", error);
      toast.error("Failed to delete skill. Please try again.");
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
            skill server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteSkill}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SkillDeleteDialog;
