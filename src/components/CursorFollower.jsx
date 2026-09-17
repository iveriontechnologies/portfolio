import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CursorFollower = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // FAST - the small dot responds first
  const dotX = useSpring(mouseX, {
    stiffness: 1000,
    damping: 50,
    mass: 0.2,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 1000,
    damping: 50,
    mass: 0.2,
  });

  // SLOW - the outer circle lags behind
  const ringX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.8,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[var(--color-accent)]/70
          bg-[var(--color-accent)]/5
          md:block
        "
        style={{
          x: ringX,
          y: ringY,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--color-accent)]
          md:block
        "
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
};

export default CursorFollower;
