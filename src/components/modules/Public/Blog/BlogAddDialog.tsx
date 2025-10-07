"use client";
import { createBlog } from "@/actions/blog";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, { message: "Name can't be empty!" }),
  imgUrl: z.string().min(1, { message: "Images Url can't be empty!" }),
  tags: z.string().min(1, { message: "Tags can't be empty!" }),
  content: z.string().min(1, { message: "Content can't be empty!" }),
});

const BlogAddDialog = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      imgUrl: "",
      tags: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    try {
      const imgUrl: string[] = values.imgUrl
        .split(",")
        .map((img) => img.trim());
      const tags: string[] = values.tags.split(",").map((img) => img.trim());
      const formData = {
        ...values,
        imgUrl,
        tags,
      };
      const res = await createBlog(formData);
      if (res?.success && res?.data?.id) {
        setOpen(false);
        router.refresh();
        toast.success("Project Added successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Failed to add project:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <DialogTrigger asChild>
          <Button variant="default">Add Blogs</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
            <DialogDescription>
              Add blog to your profile here. Click submit when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="blog-add-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="enter title" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your title.
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
                    <FormLabel>Images Url</FormLabel>
                    <FormControl>
                      <Input placeholder="enter images url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your images url.
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
                      <Input placeholder="enter tags" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your tags.
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
            <Button form="blog-add-form" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default BlogAddDialog;
