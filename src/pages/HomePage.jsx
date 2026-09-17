import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/images";
import TechnologyCard from "@/components/ui/TechnologyCard";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import TiltCard from "@/components/ui/motion-tilt-card";
import { AnimatePresence, motion } from "motion/react";
import { Card } from "@/components/ui/card";

const HomePage = () => {
  const { activeSection, setActiveSection, direction } = useOutletContext();
  const sectionVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 120 : -120,
      scale: 0.96,
      filter: "blur(8px)",
    }),

    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },

    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -80 : 80,
      scale: 0.97,
      filter: "blur(6px)",
    }),
  };

  const transition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1],
  };
  const technologies = [
    { id: 1, name: "#React" },
    { id: 2, name: "#TailwindCSS" },
    { id: 3, name: "#JavaScript" },
    { id: 4, name: "#NodeJS" },
    { id: 5, name: "#ExpressJS" },
    { id: 6, name: "#MongoDB" },
    { id: 7, name: "#RESTfulAPIs" },
    { id: 8, name: "#GitHub" },
  ];
  return (
    <div className="grid min-h-screen grid-cols-[120px_1fr] ">
      {/* Column 1 */}
      <section className="border-r border-border">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </section>
      <main className="min-w-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={activeSection}
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className={
              activeSection === 1
                ? "relative min-h-screen flex items-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
                : activeSection === 2
                  ? "relative min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
                  : "relative min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex items-center justify-center"
            }
          >
            {/* LARGE SECTION NUMBER */}
            <div
              className="
              pointer-events-none
              absolute
              right-6
              top-4
              select-none
              font-[var(--font-display)]
              text-[10rem]
              font-bold
              leading-none
              text-foreground/[0.025]
              md:right-10
              md:text-[16rem]
              lg:text-[20rem]
            "
            >
              {String(activeSection).padStart(2, "0")}
            </div>

            {/* HOME */}
            {activeSection === 1 && (
              <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                  {/* LEFT CONTENT */}
                  <div className="flex flex-col w-full md:max-w-2xl">
                    <Card className="bg-surface-variant p-2 w-fit">
                      <p className="text-accent-foreground flex items-center gap-2 whitespace-nowrap">
                        <span>Hi, I am Israel</span>

                        <span className="w-1 h-1 rounded-full bg-on-surface inline-block shrink-0" />

                        <span className="text-on-surface">LAGOS, NG</span>
                      </p>
                    </Card>

                    <div>
                      <h1 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-8xl">
                        Frontend <br />
                        <span className="italic bg-gradient-to-r from-[var(--accent-foreground)] via-[var(--accent)] to-[var(--color-tertiary)] bg-clip-text text-transparent">
                          Developer
                        </span>
                      </h1>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                        I am a frontend developer based in Nigeria, bridging
                        graphic precision with raw structural performance. I
                        help build beautiful, responsive web systems that users
                        love and remember.
                      </p>
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <Button>Get in Touch</Button>

                      <Button>Browse Projects</Button>
                    </div>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {technologies.map((tech) => (
                        <TechnologyCard key={tech.id} technology={tech} />
                      ))}
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full md:w-[420px] shrink-0">
                    <TiltCard
                      image={data.portfolio}
                      alt="Israel Ahunanya - Frontend Developer"
                      caption="Frontend Developer • Lagos, NG"
                      maxTilt={12}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ABOUT */}
            {activeSection === 2 && (
              <div className="relative z-10 w-full">
                <AboutPage />
              </div>
            )}

            {/* PROJECTS */}
            {activeSection === 3 && (
              <div className="relative z-10 w-full">
                <ProjectPage />
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default HomePage;
