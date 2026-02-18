import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Approach", href: "approach" },
  { label: "Why Me", href: "why-me" },
  { label: "Reviews", href: "testimonials" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Highlight active link on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor jump
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Adjusted for a slightly taller navbar feel
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="text-xl sm:text-2xl font-heading font-extrabold text-primary-foreground tracking-tight"
          >
            Steer<span className="text-accent">y</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                  activeSection === link.href 
                  ? "text-accent" 
                  : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
                {/* Visual indicator for active link */}
                {activeSection === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </a>
            ))}

            <a
              href="tel:7671978080"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-lg font-medium ${
                    activeSection === link.href ? "text-accent" : "text-primary-foreground/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="tel:7671978080"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-4 rounded-xl text-md font-bold"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;