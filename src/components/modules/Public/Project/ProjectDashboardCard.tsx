import Image from "next/image";
import profile from "@/assets/profile.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const ProjectDashboardCard = () => {
  return (
    <div className="border p-4 rounded-sm space-y-3">
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                className="w-full h-[300px] object-cover rounded-sm"
                src={profile}
                alt="project image"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full h-[300px] object-cover rounded-sm"
                src={profile}
                alt="project image"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-medium text-xl">Next JS</h1>
        <Badge variant={"outline"}>Category</Badge>
      </div>

      <p className="line-clamp-2">Skill Description</p>
      <div className="flex items-center justify-between gap-2">
        <Button variant={"outline"} className="flex items-center gap-2">
          <FiEye />
          <span>12</span>
        </Button>
        <div className="flex gap-2">
          <Button size={"icon"} variant={"outline"}>
            <Link href={"/dashboard/project/edit-project"}>
              <MdOutlineEdit />
            </Link>
          </Button>

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

export default ProjectDashboardCard;
