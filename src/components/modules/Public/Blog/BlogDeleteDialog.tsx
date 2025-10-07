"use client";
import { deleteBlog } from "@/actions/blog";
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
import { IBlog } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const BlogDeleteDialog = ({ blog }: { blog: IBlog }) => {
  const router = useRouter();
  const handleDeleteBlog = async () => {
    try {
      const res = await deleteBlog(Number(blog.id));
      if (res?.success && res?.data?.id) {
        router.refresh();
        toast.success("Blog deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Delete blog Error: ", error);
      toast.error("Failed to blog Project. Please try again.");
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
          <AlertDialogAction onClick={handleDeleteBlog}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlogDeleteDialog;
