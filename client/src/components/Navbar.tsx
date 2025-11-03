import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setToggle(false);
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-testid="logo"
          >
            <span className="text-primary">CS</span>
            <span className="text-foreground"> Portfolio</span>
          </div>

          <ul className="hidden md:flex gap-10" data-testid="nav-links-desktop">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-primary" : "text-muted-foreground"
                } hover:text-foreground text-base font-medium cursor-pointer transition-colors`}
                onClick={() => handleNavClick(link.id)}
                data-testid={`link-${link.id}`}
              >
                {link.title}
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setToggle(!toggle)}
              data-testid="button-mobile-menu"
            >
              {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {toggle && (
          <div
            className="md:hidden bg-card border-t border-border"
            data-testid="mobile-menu"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-primary" : "text-muted-foreground"
                  } hover:text-foreground text-base font-medium cursor-pointer transition-colors`}
                  onClick={() => handleNavClick(link.id)}
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
