import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const services = [
  {
    title: "Education",
    icon: GraduationCap,
    description: "Pursuing B.Tech in Computer Science at IIIT Kancheepuram with strong fundamentals in algorithms and data structures.",
  },
  {
    title: "Development",
    icon: Code,
    description: "Full-stack development experience with modern frameworks and technologies, building scalable applications.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "Passionate about solving real-world problems through technology and creating impactful solutions.",
  },
  {
    title: "Learning",
    icon: Award,
    description: "Continuously expanding knowledge in AI/ML, cloud computing, and emerging technologies.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-32" data-testid="section-about">
      <div className="hash-span" id="about" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            Introduction
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Overview
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-6 text-muted-foreground/90 text-base sm:text-lg max-w-3xl leading-relaxed"
          data-testid="text-about-description"
        >
          I'm a BTech Computer Science student at IIIT-DM Kancheepuram with a strong foundation in 
          software development, machine learning, and system programming. My experience spans from 
          developing production-ready tools at Chella Software to implementing cutting-edge deep learning 
          models. I excel at problem-solving, independent work, and thrive in collaborative environments. 
          Beyond academics, I'm a national-level shooting athlete, bringing the same precision and focus 
          to my technical work.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn("right", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Card className="hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-service-${index}`}>
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
