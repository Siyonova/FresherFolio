import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
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

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Professional certification demonstrating expertise in Generative AI technologies and Oracle Cloud Infrastructure.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-20 sm:py-32" data-testid="section-certifications">
      <div className="hash-span" id="certifications" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            Professional Credentials
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Certifications
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Card className="hover-elevate active-elevate-2 transition-all" data-testid={`card-certification-${index}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-foreground font-bold text-xl sm:text-2xl leading-tight" data-testid={`text-cert-title-${index}`}>
                            {cert.title}
                          </h3>
                          <p className="text-muted-foreground font-semibold text-base mt-1" data-testid={`text-cert-issuer-${index}`}>
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-muted-foreground text-sm font-medium bg-muted px-3 py-1 rounded-full w-fit">
                          {cert.date}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed" data-testid={`text-cert-description-${index}`}>
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-4">
                        <CheckCircle2 className="w-5 h-5 text-chart-2" />
                        <span className="text-chart-2 text-sm font-medium">Verified Credential</span>
                      </div>
                    </div>
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
