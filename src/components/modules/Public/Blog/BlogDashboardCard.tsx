"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BlogEditDialog from "./BlogEditDialog";
import { IBlog } from "@/types";
import BlogDeleteDialog from "./BlogDeleteDialog";

const BlogDashboardCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="border p-4 rounded-sm space-y-3">
      <div>
        <Carousel>
          <CarouselContent>
            {blog?.imgUrl?.length > 0 &&
              blog?.imgUrl?.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <Image
                    loading="lazy"
                    className="w-full h-[300px] object-cover rounded-sm"
                    src={image}
                    alt="project image"
                    width={400}
                    height={300}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      <h1 className="font-medium text-xl">{blog?.title}</h1>

      <p className="line-clamp-2">{blog?.content}</p>
      <div className="flex items-center justify-between gap-2">
        <Button variant={"outline"} className="flex items-center gap-2">
          <FiEye />
          <span>{blog?.viewCount}</span>
        </Button>
        <div className="flex gap-2">
          <BlogEditDialog blog={blog} />
          <BlogDeleteDialog blog={blog} />
        </div>
      </div>
    </div>
  );
};

export default BlogDashboardCard;
