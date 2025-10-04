"use client";
import SkillDashboardCard from "@/components/modules/Public/Skill/SkillDashboardCard";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const skillSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  logoUrl: z.string().min(1, { message: "Logo Url can't be empty!" }),
  category: z.string().min(1, { message: "Category can't be empty!" }),
  content: z.string().optional(),
});

const SkillPage = () => {
  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      logoUrl: "",
      category: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof skillSchema>) {
    console.log(values);
  }

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Skills</h1>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="default">Add Skill</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Skill</DialogTitle>
                <DialogDescription>
                  Add skills to your profile here. Click submit when you&apos;re
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
                    name="name"
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
                    name="logoUrl"
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
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="frontend">Frontend</SelectItem>
                              <SelectItem value="backend">Backend</SelectItem>
                              <SelectItem value="database">Database</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your skill category.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="logoUrl"
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
      {/* All Skills */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SkillDashboardCard />
        <SkillDashboardCard />
        <SkillDashboardCard />
        <SkillDashboardCard />
        <SkillDashboardCard />
      </div>
    </section>
  );
};

export default SkillPage;
