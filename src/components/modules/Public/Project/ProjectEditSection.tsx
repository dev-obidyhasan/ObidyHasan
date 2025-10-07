"use client";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { updateProject } from "@/actions/project";
import { IProject } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectSchema = z.object({
  title: z.string().optional(),
  images: z.string(),
  technologies: z.string(),
  type: z.string().optional(),
  projectUrl: z.string().optional(),
  frontendRepoUrl: z.string().optional(),
  backendRepoUrl: z.string().optional(),
  description: z.string().optional(),
});

const ProjectEditSection = ({ project }: { project: IProject }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || "",
      images: project?.images?.join(", ") || "",
      technologies: project?.technologies?.join(", ") || "",
      type: project?.type || "",
      projectUrl: project?.projectUrl || "",
      frontendRepoUrl: project?.frontendRepoUrl || "",
      backendRepoUrl: project?.backendRepoUrl || "",
      description: project?.description || "",
    },
  });

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    try {
      const images: string[] = values.images
        .split(",")
        .map((img) => img.trim());
      const technologies: string[] = values.technologies
        .split(",")
        .map((img) => img.trim());
      const formData = {
        ...values,
        images: images,
        technologies: technologies,
      };
      const res = await updateProject(Number(project.id), formData);
      if (res?.data?.id) {
        form.reset();
        router.push("/dashboard/project");
        toast.success("Project updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to update project");
      console.error("Failed to updated project:", error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="mt-7 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      {...field.onBlur}
                      {...field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PERSONAL">PERSONAL</SelectItem>
                        <SelectItem value="CLIENT">CLIENT</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your type.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Url</FormLabel>
                  <FormControl>
                    <Input placeholder="enter project url" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your project url.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="lg:col-span-2">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images Url</FormLabel>
                    <FormControl>
                      <Input placeholder="enter image urls" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your image urls.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="frontendRepoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frontend URL</FormLabel>
                  <FormControl>
                    <Input placeholder="enter frontend url" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your website.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="lg:col-span-2">
              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technologies</FormLabel>
                    <FormControl>
                      <Input placeholder="enter technologies" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your technologies.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="backendRepoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Backend URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter facebook url" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your facebook url.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="enter description" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  This is your description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-2" type="submit">
            Change & Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectEditSection;
