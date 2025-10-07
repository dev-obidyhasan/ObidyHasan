import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MdOutlineEdit } from "react-icons/md";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IBlog } from "@/types";
import { updateBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const skillSchema = z.object({
  title: z.string().min(1, { message: "Title can't be empty!" }),
  imgUrl: z.string().min(1, { message: "Image Url can't be empty!" }),
  tags: z.string().min(1, { message: "Tags can't be empty!" }),
  content: z.string().min(1, { message: "Content can't be empty!" }),
});

const BlogEditDialog = ({ blog }: { blog: IBlog }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      title: blog?.title || "",
      imgUrl: blog?.imgUrl?.join(", ") || "",
      tags: blog?.tags?.join(", ") || "",
      content: blog?.content || "",
    },
  });

  async function onSubmit(values: z.infer<typeof skillSchema>) {
    try {
      const imgUrl: string[] = values.imgUrl
        .split(",")
        .map((img) => img.trim());
      const tags: string[] = values.tags.split(",").map((tag) => tag.trim());
      const formData = {
        ...values,
        imgUrl,
        tags,
      };
      const res = await updateBlog(Number(blog.id), formData);
      if (res?.data?.id) {
        form.reset();
        router.push("/dashboard/project");
        toast.success("Blog updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to blog project");
      console.error("Failed to blog project:", error);
    }
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MdOutlineEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Skill</DialogTitle>
            <DialogDescription>
              Edit blog to your profile here. Click save and changes when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="blog-edit-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="enter skill name" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your skill name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imgUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo Url</FormLabel>
                    <FormControl>
                      <Input placeholder="enter logo url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your logo url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Textarea placeholder="enter tags" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your content.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="enter content" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your content.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button form="blog-edit-form" type="submit">
              Save & Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default BlogEditDialog;
