"use client";
import Image from "next/image";
import profile from "@/assets/profile.png";
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
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

const loginSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  imageUrl: z.string().optional(),
  facebookUrl: z.string().optional(),
  twitterUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  title: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  resume: z.string().optional(),
  about: z.string().optional(),
});

export default function ProfilePage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      imageUrl: "",
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      githubUrl: "",
      instagramUrl: "",
      phone: "",
      address: "",
      title: "",
      company: "",
      website: "",
      resume: "",
      about: "",
    },
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosInstance.get(`/user?email=obidyhasan@gmail.com`);
        const userData = res?.data?.data;

        if (userData) {
          form.reset({
            name: userData.name || "",
            email: userData.email || "",
            imageUrl: userData.imageUrl || "",
            facebookUrl: userData.facebookUrl || "",
            twitterUrl: userData.twitterUrl || "",
            linkedinUrl: userData.linkedinUrl || "",
            githubUrl: userData.githubUrl || "",
            instagramUrl: userData.instagramUrl || "",
            phone: userData.phone || "",
            address: userData.address || "",
            title: userData.title || "",
            company: userData.company || "",
            website: userData.website || "",
            resume: userData.resume || "",
            about: userData.about || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    getUser();
  }, [form]);

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <section>
      <div>
        <Image src={profile} alt="profile" className="max-w-40 rounded-full" />
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="mt-7 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
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
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your email.
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
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your image Url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} />
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your company.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter website" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your website.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="facebookUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook URL</FormLabel>
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
              <FormField
                control={form.control}
                name="twitterUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter twitter url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your twitter url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter linkedin url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your linkedin url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="githubUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter github url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your linkedin url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagramUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter instagram url" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your instagram url.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="lg:col-span-2">
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter resume" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        This is your resume.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter about" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your about.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-2" type="submit">
              Save & Change
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
