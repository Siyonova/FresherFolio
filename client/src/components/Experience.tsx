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

const experiences = [
  {
    title: "B.Tech in Computer Science",
    company: "IIIT-DM Kancheepuram",
    icon: GraduationCap,
    iconBg: "hsl(var(--primary))",
    date: "Nov 2022 - Present",
    points: [
      "Pursuing Bachelor of Technology with focus on Computer Science and Engineering",
      "Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management",
      "General Affairs Coordinator (June 2024 - April 2025): Led campus-wide technical and cultural events",
      "Cultural Affairs Coordinator (July 2023 - April 2024): Managed decor and hospitality for Samgatha 2024",
    ],
  },
  {
    title: "SDE Intern",
    company: "Chella Software, Madurai",
    icon: Briefcase,
    iconBg: "hsl(var(--chart-2))",
    date: "May 2025 - July 2025",
    points: [
      "Developed a C binary file combiner for merging .DAT files using BOD/EOD markers with timestamp-based sorting",
      "Leveraged AI-assisted workflows to generate structured error/data logs, enhancing traceability and debugging",
      "Built regression test suite to significantly improve code quality and debugging efficiency",
      "Created Python automation tool generating 550 synthetic finance portfolios using rule-based data parsing for equities, futures, and options",
    ],
  },
  {
    title: "Achievements & Recognition",
    company: "Sports & Certifications",
    icon: Code,
    iconBg: "hsl(var(--chart-4))",
    date: "2020 - Present",
    points: [
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      "National Player – Shooting: Qualified and competed in 2021 and 2022",
      "Secured 2nd place in SGF Shooting at the 64th National Shooting Championship, 2020",
      "Strong soft skills: Problem-solving, analytical thinking, teamwork, and time management",
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
