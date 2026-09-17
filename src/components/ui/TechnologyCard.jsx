import React from "react";

const TechnologyCard = ({ technology }) => {
  return (
    <div className="flex items-center justify-center cursor-pointer border border-muted bg-muted/50 p-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground font-[var(--font-body)]">
      <h3>{technology.name}</h3>
    </div>
  );
};

export default TechnologyCard;
