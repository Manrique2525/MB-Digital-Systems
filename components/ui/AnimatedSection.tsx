"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { easing } from "@/data/theme";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

export function AnimatedSection({ children, delay = 0, style = {} }: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { y: 40 }}
      animate={reduceMotion || inView ? { y: 0 } : {}}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: easing }}
      style={style}
    >
      {children}
    </motion.div>
  );
}