/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const blogSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  email: z.email(),
  message: z.string().min(1, { message: "Message can't be empty!" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    toast.success("Form submitted successfully!");
  }

  return (
    <div>
      <div className="w-full">
        <Form {...form}>
          <form
            id="contact-add-form"
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
                    <Input placeholder="enter name" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter email" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your Email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="enter message" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your message.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="mt-6 flex justify-center sm:justify-start">
          <Button form="contact-add-form">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
