import React from "react";
import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectPreview from "@/components/ui/ProjectPreview";

const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 border  transition-all duration-300 cursor-pointer ${
              activeProject.title === project.title
                ? "bg-surface-variant"
                : "bg-transparent"
            }`}
            onMouseEnter={() => setActiveProject(project)}
          >
            <h3 className="text-lg font-semibold text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-surface-variant px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ProjectPreview project={activeProject} />
      </div>
    </div>
  );
};

export default ProjectPage;
