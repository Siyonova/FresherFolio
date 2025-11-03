import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiFirebase,
  SiCplusplus,
} from "react-icons/si";

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

//todo: remove mock data - replace with real skills
const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 sm:py-32" data-testid="section-skills">
      <div className="hash-span" id="skills" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            Technologies I work with
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Skills
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn("up", index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => console.log(`${tech.name} clicked`)}
              data-testid={`skill-item-${index}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-card border border-card-border flex items-center justify-center">
                <tech.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color}`} />
              </div>
              <p className="text-foreground text-sm sm:text-base font-medium text-center" data-testid={`text-skill-name-${index}`}>
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
