import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    //todo: remove mock functionality - integrate with EmailJS or backend API
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-32" data-testid="section-contact">
      <div className="hash-span" id="contact" />
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-wider" data-testid="text-section-label">
            Get in touch
          </p>
          <h2 className="text-foreground font-black text-3xl sm:text-4xl md:text-5xl mt-2" data-testid="text-section-title">
            Contact
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="What's your email?"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What do you want to say?"
                      rows={6}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    data-testid="button-submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-6"
          >
            <Card className="hover-elevate cursor-pointer" data-testid="card-contact-email">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground text-sm mt-1" data-testid="text-email">
                    your.email@example.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate cursor-pointer" data-testid="card-contact-location">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg">Location</h3>
                  <p className="text-muted-foreground text-sm mt-1" data-testid="text-location">
                    IIIT Kancheepuram, Tamil Nadu, India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate cursor-pointer" data-testid="card-contact-phone">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-chart-4" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground text-sm mt-1" data-testid="text-phone">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 mt-4">
              <CardContent className="p-6">
                <h3 className="text-foreground font-bold text-lg mb-2">Download Resume</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get a copy of my resume to learn more about my experience and skills.
                </p>
                <Button
                  variant="outline"
                  onClick={() => console.log("Resume download clicked")}
                  data-testid="button-download-resume"
                >
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
