"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import ProjectCard from "@/components/modules/Public/Project/ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./../../../json/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="projects">
      <div className="px-5 py-16 mx-auto max-w-7xl">
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project._id} project={project}></ProjectCard>
            ))}
          </div>
          {/* All Project Button */}
          <div className="mt-8 text-center ">
            <Link href={`/project`} className="text-center">
              <button className=" btn">Explore All Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
