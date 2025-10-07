import { Button } from "@/components/ui/button";
import { MdOutlineEdit } from "react-icons/md";

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
import { useState } from "react";
import { ISkill } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { updateSkill } from "@/actions/skill";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const skillSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  logoUrl: z.string().min(1, { message: "Logo Url can't be empty!" }),
  category: z.string().min(1, { message: "Category can't be empty!" }),
  content: z.string().optional(),
});

const SkillEditDialog = ({ skill }: { skill: ISkill }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: skill?.name || "",
      logoUrl: skill?.logoUrl || "",
      category: skill?.category || "",
      content: skill?.content || "",
    },
  });

  async function onSubmit(values: z.infer<typeof skillSchema>) {
    try {
      const res = await updateSkill(Number(skill.id), values);
      console.log(res);
      if (res?.success && res?.data?.id) {
        setOpen(false);
        router.refresh();
        toast.success("Skill Updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Failed to update skill:", error);
    }
  }

  return (
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
              Edit skills to your profile here. Click save and changes when
              you&apos;re done.
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
                          <SelectItem value="FRONTEND">Frontend</SelectItem>
                          <SelectItem value="BACKEND">Backend</SelectItem>
                          <SelectItem value="DATABASE">Database</SelectItem>
                          <SelectItem value="OTHER">OTHER</SelectItem>
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
  );
};

export default SkillEditDialog;
