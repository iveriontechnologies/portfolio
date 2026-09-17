import CursorFollower from "@/components/CursorFollower";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  const [activeSection, setActiveSectionState] = useState(1);
  const [direction, setDirection] = useState(1);

  const setActiveSection = (nextSection) => {
    if (nextSection === activeSection) return;

    setDirection(nextSection > activeSection ? 1 : -1);
    setActiveSectionState(nextSection);
  };

  return (
    <div className="min-h-screen w-full">
      <CursorFollower />
      <main className="min-h-screen">
        <Outlet
          context={{
            activeSection,
            setActiveSection,
            direction,
          }}
        />
      </main>
    </div>
  );
};

export default PublicLayout;
