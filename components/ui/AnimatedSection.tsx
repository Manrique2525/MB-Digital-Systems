"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { easing } from "@/data/theme";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

export function AnimatedSection({ children, delay = 0, style = {} }: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easing }}
      style={style}
    >
      {children}
    </motion.div>
  );
}