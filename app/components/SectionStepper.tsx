import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type SectionScrollerProps = {
  sections: ReactNode[];
};

export default function SectionStepper({
  sections,
}: SectionScrollerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isAnimating) return;

      const direction = event.deltaY > 0 ? 1 : -1;

      const nextIndex = activeIndex + direction;

      if (nextIndex < 0 || nextIndex >= sections.length) {
        return;
      }

      event.preventDefault();

      setIsAnimating(true);
      setActiveIndex(nextIndex);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isAnimating, sections.length]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.section
          key={activeIndex}
          className="absolute inset-0 flex h-screen w-full items-center justify-center"
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -80,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            {sections[activeIndex]}
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}