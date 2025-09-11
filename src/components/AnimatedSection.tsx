import React from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fade-in-up"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in"
    | "slide-up";
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true,
  });

  const animationClasses = `animate-on-scroll animate-${animation} ${
    isVisible ? "animate-visible" : ""
  }`;

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`${animationClasses} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;
