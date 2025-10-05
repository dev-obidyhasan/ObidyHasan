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

const projectSchema = z.object({
  title: z.string().optional(),
  imageUrl: z.string().optional(),
  technologies: z.string().optional(),
  type: z.string().optional(),
  projectUrl: z.string().optional(),
  frontendUrl: z.string().optional(),
  backendUrl: z.string().optional(),
  description: z.string().optional(),
});

const AddProject = () => {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      technologies: "",
      type: "",
      projectUrl: "",
      frontendUrl: "",
      backendUrl: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="font-medium text-xl">Add Project</h1>
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
                      <Input placeholder="enter type" {...field} />
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
                  name="imageUrl"
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
                name="frontendUrl"
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
                name="backendUrl"
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
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProject;
