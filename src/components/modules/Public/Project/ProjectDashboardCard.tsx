import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdOutlineEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import ProjectDeleteDialog from "./ProjectDeleteDialog";
import { IProject } from "@/types";

const ProjectDashboardCard = ({ project }: { project: IProject }) => {
  return (
    <div className="border p-4 rounded-sm space-y-3">
      <div>
        <Carousel>
          <CarouselContent>
            {project?.images?.length > 0 &&
              project?.images?.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <Image
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
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-medium text-xl">{project?.title}</h1>
        <Badge variant={"outline"}>{project?.type}</Badge>
      </div>

      <p className="line-clamp-2">{project?.description}</p>
      <div className="flex items-center justify-between gap-2">
        <Button variant={"outline"} className="flex items-center gap-2">
          <FiEye />
          <span>{project?.viewCount}</span>
        </Button>
        <div className="flex gap-2">
          <Button size={"icon"} variant={"outline"}>
            <Link href={`/dashboard/project/edit-project/${project?.id}`}>
              <MdOutlineEdit />
            </Link>
          </Button>

          <ProjectDeleteDialog project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboardCard;
