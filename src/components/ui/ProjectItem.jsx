import React from "react";
import { Card } from "@/components/ui/card";

const ProjectItem = ({ project, isActive, onHover }) => {
  return (
    <Card
      onMouseEnter={() => onHover(project)}
      className={`flex flex-col gap-4 p-4 border border-border rounded-lg transition-all duration-300 ${isActive ? "bg-surface-variant" : "bg-transparent"}`}
        >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-surface-variant px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default ProjectItem;
