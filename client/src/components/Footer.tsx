import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Siyonova", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siyona-bonam", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:bonamsiyona@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative w-full py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-lg">SB</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Siyona Bonam. All rights reserved.
            </span>
          </div>

          <div className="flex gap-2">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                data-testid={`button-social-${link.label.toLowerCase()}`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-muted-foreground text-sm">
          <p data-testid="text-footer-message">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
