import React from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
const ProjectPreview = ({ project }) => {
  return (
    <Link size="sm" to={project.link} className="border">
      <img
        src={project.image}
        alt={project.title}
        className="aspect-video object-cover w-full  cursor-pointer"
      />
      <div className="flex flex-col gap-2 mt-4 px-4 pb-4 ">
        <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
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
    </Link>
  );
};

export default ProjectPreview;
