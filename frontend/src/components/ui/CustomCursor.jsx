"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add custom cursor class to body
    document.body.classList.add("custom-cursor-active");
    
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      if (!isVisible) setIsVisible(true);
    };

    const mouseOver = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      opacity: isVisible ? 1 : 0
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "var(--lime)",
      mixBlendMode: "difference",
      opacity: 1
    }
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          backgroundColor: "#fff",
          height: 16,
          width: 16,
        }}
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.15
        }}
      />
      {children}
    </>
  );
}
