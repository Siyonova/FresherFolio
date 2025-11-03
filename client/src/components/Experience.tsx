import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code } from "lucide-react";
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

//todo: remove mock data - replace with real experience
const experiences = [
  {
    title: "B.Tech in Computer Science",
    company: "IIIT Kancheepuram",
    icon: GraduationCap,
    iconBg: "hsl(var(--primary))",
    date: "2021 - Present",
    points: [
      "Pursuing Bachelor of Technology with focus on Computer Science fundamentals",
      "Coursework includes Data Structures, Algorithms, Database Management, Operating Systems",
      "Active participant in coding competitions and hackathons",
      "CGPA: 8.5/10",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Tech Company",
    icon: Briefcase,
    iconBg: "hsl(var(--chart-2))",
    date: "May 2024 - July 2024",
    points: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and agile development processes",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    icon: Code,
    iconBg: "hsl(var(--chart-4))",
    date: "2023 - Present",
    points: [
      "Contributing to open-source projects on GitHub",
      "Fixed bugs and implemented new features in popular repositories",
      "Engaged with developer communities and learned best practices",
      "Built portfolio of contributions across multiple technologies",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 sm:py-32" data-testid="section-experience">
      <div className="hash-span" id="experience" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            What I've done so far
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Education & Experience
          </h2>
        </motion.div>

        <div className="mt-16 space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
              data-testid={`timeline-item-${index}`}
            >
              <div className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <experience.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>

                <Card className="flex-1 hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-foreground text-xl font-bold" data-testid={`text-experience-title-${index}`}>
                          {experience.title}
                        </h3>
                        <p className="text-muted-foreground text-base font-semibold mt-1" data-testid={`text-experience-company-${index}`}>
                          {experience.company}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm font-medium bg-muted px-3 py-1 rounded-full">
                        {experience.date}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {experience.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-muted-foreground/90 text-sm leading-relaxed flex gap-2"
                          data-testid={`text-experience-point-${index}-${pointIndex}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
