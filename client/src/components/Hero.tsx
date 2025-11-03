import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const textVariant = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0.2,
    },
  },
};

const fadeIn = (direction: string, delay: number) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen mx-auto pt-20" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <h1 className="font-black text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl" data-testid="text-hero-greeting">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-muted-foreground font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4" data-testid="text-hero-subtitle">
            Computer Science Student
            <br className="sm:block hidden" />
            at <span className="text-chart-2">IIIT Kancheepuram</span>
          </p>
          <p className="text-muted-foreground/90 text-base sm:text-lg mt-6 max-w-2xl" data-testid="text-hero-description">
            Passionate about building innovative solutions and exploring cutting-edge technologies. 
            Specialized in web development, machine learning, and software engineering.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              size="lg"
              onClick={scrollToAbout}
              data-testid="button-get-started"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <div className="text-8xl md:text-9xl font-black text-primary/40">CS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <button
          onClick={scrollToAbout}
          className="flex items-center justify-center p-2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
