import Image from "next/image";
import profile from "@/assets/profile.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
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
import { ISkill } from "@/types";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";

const skillSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  logoUrl: z.string().min(1, { message: "Logo Url can't be empty!" }),
  category: z.string().min(1, { message: "Category can't be empty!" }),
  content: z.string().optional(),
});

const SkillDashboardCard = ({ skill }: { skill: ISkill }) => {
  const [open, setOpen] = useState(false);
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
    const getUser = async () => {
      try {
        const res = await axiosInstance.get(`/skill/${skill.id}`);
        const skillData = res?.data?.data;
        if (skillData) {
          form.reset({
            name: skillData.name || "",
            logoUrl: skillData.logoUrl || "",
            category: skillData.category || "",
            content: skillData.content || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    getUser();
  }, [form, skill.id]);

  async function onSubmit(values: z.infer<typeof skillSchema>) {
    try {
      const response = await axiosInstance.patch(`/skill/${skill.id}`, values);
      if (response?.data?.success) {
        toast?.success("Skill updated successfully!");
        form.reset();
        setOpen(false);
      }
    } catch (error) {
      console.error("Failed to update skill:", error);
    }
  }

  return (
    <div className="border p-4 rounded-sm space-y-3">
      <Image
        src={skill?.logoUrl}
        alt="skill icon"
        width={80}
        height={80}
        className="w-20 h-20 object-contain"
      />
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-medium text-xl">{skill?.name}</h1>
        <Badge variant={"outline"}>{skill?.category}</Badge>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>{skill?.content}</p>
        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
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
                    Edit skills to your profile here. Click save and changes
                    when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    id="edit-skill-form"
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
                              defaultValue={skill?.category}
                              onValueChange={field.onChange}
                              {...field.onBlur}
                              {...field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="FRONTEND">
                                  Frontend
                                </SelectItem>
                                <SelectItem value="BACKEND">Backend</SelectItem>
                                <SelectItem value="DATABASE">
                                  Database
                                </SelectItem>
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
                  <Button form="edit-skill-form" type="submit">
                    Save & Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>

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
                  This action cannot be undone. This will permanently delete
                  your skill server.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default SkillDashboardCard;
