"use client";

import { useEffect, useRef, useState } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  socialMedia?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeCircles, setActiveCircles] = useState<boolean[]>([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportMid = window.innerHeight / 2;

      // Calculate progress: when section top reaches viewport mid, start; complete when section bottom passes viewport mid
      const scrollStart = sectionTop - viewportMid;
      const scrollEnd = scrollStart + sectionHeight;
      
      let calculatedProgress = 0;
      if (scrollStart > 0) {
        calculatedProgress = 0;
      } else if (scrollEnd < 0) {
        calculatedProgress = 1;
      } else {
        calculatedProgress = Math.abs(scrollStart) / sectionHeight;
      }

      // If reduced motion, always set to full
      const finalProgress = prefersReducedMotion ? 1 : Math.max(0, Math.min(1, calculatedProgress));
      setProgress(finalProgress);

      // Calculate which circles should be active based on their actual position
      const newActiveCircles = itemRefs.current.map((itemRef) => {
        if (!itemRef) return prefersReducedMotion;
        
        const itemRect = itemRef.getBoundingClientRect();
        const itemTop = itemRect.top;
        
        // Calculate this circle's position relative to the section
        const circlePositionInSection = (itemTop - sectionTop) / sectionHeight;
        
        // Circle becomes active when the line progress reaches its position
        return prefersReducedMotion || finalProgress >= circlePositionInSection;
      });
      
      setActiveCircles(newActiveCircles);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [experiences]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-b from-brand-blue/5 to-accent-blue/5"
      style={{ "--timeline-progress": progress } as React.CSSProperties}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>

        <div className="relative">
          {/* Center vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #000 0%, #000 calc(var(--timeline-progress, 0) * 100%), #e0e0e0 calc(var(--timeline-progress, 0) * 100%), #e0e0e0 100%)`,
            }}
          />

          {/* Experience items */}
          <ul className="space-y-12">
            {experiences.map((exp, index) => {
              const isActive = activeCircles[index] || false;
              
              return (
                <li
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                  {/* Left side content (alternating) */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right" : "md:order-2"
                    } space-y-2`}
                  >
                    <div className="inline-block md:block">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-medium text-accent-blue">
                        {exp.role}
                      </p>
                      <p className="text-sm text-foreground/60 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {exp.description}
                      </p>
                      {exp.socialMedia && (
                        <a
                          href={exp.socialMedia}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent-blue hover:text-brand-blue transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          View Social Media
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right side (empty on alternating) */}
                  <div className={index % 2 === 0 ? "md:order-2" : ""}>
                    {/* Empty space for alternating layout */}
                  </div>

                  {/* Center dot with animated color change */}
                  <div 
                    className={`hidden md:block absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full ring-4 ring-background shadow-lg z-10 transition-all duration-500 ease-out ${
                      isActive 
                        ? "bg-accent-blue scale-110" 
                        : "bg-gray-300 scale-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

