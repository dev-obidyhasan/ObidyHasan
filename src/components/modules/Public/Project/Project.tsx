import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div id="projects">
      <div className="px-4 py-16 mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl font-fira">
            Work Highlights
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-dart03">
            From concept to deployment, these projects highlight my journey as a
            developer.
          </p>
        </div>

        {/* Project Card */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          {/* All Project Button */}
          <div className="mt-14 text-center">
            <Button>Explore All Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
