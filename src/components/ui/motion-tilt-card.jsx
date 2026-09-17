"use client";

import { useRef } from "react";
import { motion, useSpring } from "motion/react";
import "./motion-tilt-card-utils/index.css";

const styles = {
  card: {
    position: "relative",
    width: "100%",
    maxWidth: 420,
    height: 560,
    borderRadius: "var(--radius-xl)",
    overflow: "hidden",

    // Same border and shadow styling from your original hero image
    border: "1px solid var(--color-accent)",
    boxShadow: "0 20px 60px 0 var(--color-accent)",

    background: "var(--layer, rgba(255, 255, 255, 0.04))",
    willChange: "transform",
    transformPerspective: 500,
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    userSelect: "none",
    touchAction: "none",
  },

  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    zIndex: 1,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
    pointerEvents: "none",
  },

  caption: {
    position: "absolute",
    zIndex: 2,
    bottom: 20,
    left: 20,
    right: 20,
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 1.5,
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  },
};

const TiltCard = ({
  image,
  alt = "Portfolio image",
  caption,
  maxTilt = 12,
}) => {
  const ref = useRef(null);

  const spring = {
    stiffness: 200,
    damping: 20,
  };

  const z = useSpring(0, spring);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);

  const tiltFromPointer = (event) => {
    if (!ref.current) {
      return {
        rotateX: 0,
        rotateY: 0,
      };
    }

    const box = ref.current.getBoundingClientRect();

    const x = event.clientX - box.left;
    const y = event.clientY - box.top;

    return {
      rotateX: maxTilt * (0.5 - y / box.height),
      rotateY: maxTilt * (x / box.width - 0.5),
    };
  };

  return (
    <motion.div
      ref={ref}
      style={{
        ...styles.card,
        z,
        rotateX,
        rotateY,
      }}
      onPointerMove={(event) => {
        const next = tiltFromPointer(event);

        rotateX.set(next.rotateX);
        rotateY.set(next.rotateY);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        z.set(0);
      }}
      onPointerEnter={() => {
        z.set(-10);
      }}
    >
      <img src={image} alt={alt} style={styles.image} />

      <div style={styles.gradientOverlay} />

      {caption && <div style={styles.caption}>{caption}</div>}
    </motion.div>
  );
};

export default TiltCard;
