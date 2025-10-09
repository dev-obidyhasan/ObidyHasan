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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProject } from "@/actions/project";
import toast from "react-hot-toast";

const projectSchema = z.object({
  title: z.string().min(1, "Title must be required"),
  images: z.string().min(1, "Image Url must be required"),
  technologies: z.string().min(1, "Technologies must be required"),
  type: z.string().min(1, "Type must be required"),
  projectUrl: z.string().min(1, "Project Url must be required"),
  frontendRepoUrl: z.string().optional(),
  backendRepoUrl: z.string().optional(),
  description: z.string().min(1, "Description must be required"),
});

const AddProject = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      images: "",
      technologies: "",
      type: "",
      projectUrl: "",
      frontendRepoUrl: "",
      backendRepoUrl: "",
      description: "",
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

      const res = await createProject(formData);
      if (res?.data?.id) {
        form.reset();
        router.push("/dashboard/project");
        toast.success("Project Added successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to add project");
      console.error("Failed to add project:", error);
    }
  }

  return (
    <div>
      <h1 className="font-medium text-xl">Add Project</h1>
      <div>
        <Form {...form}>
          <form
            id="add-project"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
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
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Images Urls (Separate by Commas)</FormLabel>
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

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="technologies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Technologies (Separate by Commas)</FormLabel>
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

            <Button form="add-project" className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProject;
