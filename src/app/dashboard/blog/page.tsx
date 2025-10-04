"use client";
import { Button } from "@/components/ui/button";
import BlogDashboardCard from "@/components/modules/Public/Blog/BlogDashboardCard";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const blogSchema = z.object({
  title: z.string().min(1, { message: "Name can't be empty!" }),
  imageUrl: z.string().min(1, { message: "Images Url can't be empty!" }),
  tags: z.string().min(1, { message: "Tags can't be empty!" }),
  content: z.string().min(1, { message: "Content can't be empty!" }),
});

const BlogPage = () => {
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      tags: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    console.log(values);
  }

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Blogs</h1>

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="default">Add Blogs</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Blog</DialogTitle>
                <DialogDescription>
                  Add blog to your profile here. Click submit when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
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
                    name="imageUrl"
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
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      {/* All Project */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <BlogDashboardCard />
        <BlogDashboardCard />
        <BlogDashboardCard />
        <BlogDashboardCard />
        <BlogDashboardCard />
      </div>
    </section>
  );
};

export default BlogPage;
