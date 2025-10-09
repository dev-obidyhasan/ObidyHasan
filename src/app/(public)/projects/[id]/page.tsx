import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  const project: IProject = data;

  return (
    <>
      <Navbar />
      <div className="px-4 mx-auto mb-5 mt-14 max-w-6xl">
        <div>
          <div className="flex flex-col gap-3 mb-10">
            <h1 className="text-xl font-semibold sm:text-2xl font-fira">
              {project?.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {project?.description}
            </p>
            <div className="mb-5">
              <p className="mt-2 mb-3 font-semibold font-fira">
                Technology are Used:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {project?.technologies?.map((tech, idx) => (
                  <Badge key={idx} className="mt-2 badge font-fira">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {project?.projectUrl && (
                <Button variant="outline">
                  <Link
                    href={`${project?.projectUrl}`}
                    target="_blank"
                    className="btn btn-outline text-light01 font-fira"
                  >
                    Live Demo
                  </Link>
                </Button>
              )}
              {project?.frontendRepoUrl && (
                <Button variant="outline">
                  <Link
                    href={`${project?.frontendRepoUrl}`}
                    target="_blank"
                    className="btn btn-outline text-light01 font-fira"
                  >
                    Frontend Repository Link
                  </Link>
                </Button>
              )}
              {project?.backendRepoUrl && (
                <Button variant="outline">
                  <Link
                    href={`${project?.backendRepoUrl}`}
                    target="_blank"
                    className="btn btn-outline text-light01 font-fira"
                  >
                    Backend Repository Link
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <Carousel>
            <CarouselContent className="h-max">
              {project?.images?.length > 0 &&
                project?.images?.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <Image
                      className="w-full max-h-[600px] object-top object-contain sm:object-cover  rounded-sm"
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
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
