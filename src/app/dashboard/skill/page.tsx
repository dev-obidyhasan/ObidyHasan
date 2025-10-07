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
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { ISkill } from "@/types";

const skillSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  logoUrl: z.string().min(1, { message: "Logo Url can't be empty!" }),
  category: z.string().min(1, { message: "Category can't be empty!" }),
  content: z.string().optional(),
});

const SkillPage = () => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState([]);

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      logoUrl: "",
      category: "",
      content: "",
    },
  });

  useEffect(() => {
    const getAllSkills = async () => {
      try {
        const data = await axiosInstance.get(`/skill`);
        console.log(data?.data?.data);
        if (data?.data?.success) {
          setSkills(data?.data?.data);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    getAllSkills();
  }, []);

  async function onSubmit(values: z.infer<typeof skillSchema>) {
    try {
      const res = await axiosInstance.post("/skill", values);
      console.log(res.data);
      if (res?.data?.data?.id) {
        toast.success("Skill added successfully!");
        form.reset();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      console.log("Something went wrong!");
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Skills</h1>
        <Dialog open={open} onOpenChange={setOpen}>
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
                  id="add-skill"
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
                          <Select
                            onValueChange={field.onChange}
                            {...field.onBlur}
                            {...field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="FRONTEND">Frontend</SelectItem>
                              <SelectItem value="BACKEND">Backend</SelectItem>
                              <SelectItem value="DATABASE">Database</SelectItem>
                              <SelectItem value="OTHER">Other</SelectItem>
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
                <Button form="add-skill" type="submit">
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      {/* All Skills */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills?.map((skill: ISkill) => (
          <SkillDashboardCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
