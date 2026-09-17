import React from "react";
import { motion } from "motion/react";
import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import CV from "@/assets/cv/Front-End Israel Resume.pdf";

const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Projects" },
  ];

  return (
    <nav className="relative flex h-full min-h-screen items-center justify-center">
      {/* Social Icons */}
      <div className="absolute top-6 left-0 right-0 flex flex-col items-center justify-center gap-4">
        <a
          href="https://github.com/ahunanyaisrael"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            text-muted-foreground
            transition-colors
            duration-300
            hover:text-[var(--color-accent)]
          "
        >
          <SiGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/israel-ahunanya-259513300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            text-muted-foreground
            transition-colors
            duration-300
            hover:text-[var(--color-accent)]
          "
        >
          <LinkedinLogoIcon size={24} />
        </a>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-col items-center">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isPassed = activeSection > section.id;
          const isLast = index === sections.length - 1;

          return (
            <div key={section.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`
                  group relative z-10
                  flex h-12 w-12
                  items-center justify-center
                  rounded-[var(--radius-xl)]
                  border
                  text-sm font-medium
                  cursor-pointer
                  overflow-hidden
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {/* Active background */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="
                      absolute inset-0
                      rounded-[var(--radius-xl)]
                      bg-accent
                      shadow-[0_0_24px_var(--color-accent)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 26,
                    }}
                  />
                )}

                {/* Hover background */}
                {!isActive && (
                  <span
                    className="
                      absolute inset-0
                      rounded-[var(--radius-xl)]
                      bg-muted/0
                      transition-colors duration-300
                      group-hover:bg-muted
                    "
                  />
                )}

                <span className="relative z-10">
                  {String(section.id).padStart(2, "0")}
                </span>
              </button>

              {/* Connecting Line */}
              {!isLast && (
                <div className="relative h-20 w-px overflow-hidden bg-muted">
                  <motion.div
                    className="absolute inset-x-0 top-0 w-full origin-top bg-primary"
                    initial={false}
                    animate={{
                      scaleY: isPassed || isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div>
        {/* Cv */}
        <a
          className="absolute bottom-6 left-0 right-0 flex items-center justify-center text-muted-foreground hover:text-[var(--color-accent)] transition-colors duration-300"
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
