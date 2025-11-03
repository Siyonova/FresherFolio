import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@assets/generated_images/E-commerce_Dashboard_Project_4eda79fc.png";
import project2 from "@assets/generated_images/Task_Manager_App_4220cdf0.png";
import project3 from "@assets/generated_images/Portfolio_Website_Project_2d1a466d.png";

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

const projects = [
  {
    name: "Building a Large Language Model from Scratch",
    description:
      "Implementing LLM architecture step-by-step including tokenization, embeddings, attention mechanisms, and transformers. Training small-scale transformer models to understand text prediction and generation workflows.",
    tags: ["Python", "Transformers", "Deep Learning", "NLP"],
    image: project1,
    github: "https://github.com/Siyonova",
    demo: "#",
  },
  {
    name: "Dynamic Pricing for E-Commerce using RL",
    description:
      "Developed an RL-based pricing model to optimize product prices in real-time based on demand, competitor pricing, and market trends using Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO).",
    tags: ["Python", "DQN", "PPO", "Reinforcement Learning"],
    image: project2,
    github: "https://github.com/Siyonova",
    demo: "#",
  },
  {
    name: "Human Pose Estimation",
    description:
      "Real-time human pose estimation model using OpenCV and DNN. Implemented key point detection and skeleton visualization for motion tracking and analysis with deep learning.",
    tags: ["Python", "OpenCV", "DNN", "TensorFlow"],
    image: project3,
    github: "https://github.com/Siyonova",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 sm:py-32" data-testid="section-projects">
      <div className="hash-span" id="projects" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            My work
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Projects
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-6 text-muted-foreground/90 text-base sm:text-lg max-w-3xl"
          data-testid="text-projects-description"
        >
          Following projects showcase my skills and experience through real-world examples. 
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Card className="overflow-hidden h-full hover-elevate active-elevate-2 transition-all" data-testid={`card-project-${index}`}>
                <div className="relative w-full aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${index}`}
                  />
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="text-foreground font-bold text-xl" data-testid={`text-project-title-${index}`}>
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" data-testid={`badge-tag-${index}-${tagIndex}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                      data-testid={`button-demo-${index}`}
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                      data-testid={`button-github-${index}`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
