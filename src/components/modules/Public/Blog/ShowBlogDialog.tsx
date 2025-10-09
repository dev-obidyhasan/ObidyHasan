import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ShowBlogDialog = ({ blog }: { blog: IBlog }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="w-full h-full">
          <BlogCard blog={blog} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="w-full h-full flex flex-col">
              <div className="w-full grow">
                <h1 className="text-lg font-semibold font-fira min-h-14">
                  {blog?.title || "No title available"}
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  {blog?.content || "No description available"}
                </p>
              </div>
              <figure className="mt-4">
                <Carousel>
                  <CarouselContent>
                    {blog?.imgUrl?.length > 0 &&
                      blog?.imgUrl?.map((image: string, index: number) => (
                        <CarouselItem key={index}>
                          <Image
                            src={image || ""}
                            className="w-full h-[270px] object-cover object-top rounded-md"
                            alt="project image"
                            width={400}
                            height={270}
                          />
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                </Carousel>
              </figure>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowBlogDialog;
