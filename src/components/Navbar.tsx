import { useState } from "react";
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

  const handleScroll = (id) => {
    // 1. Immediately close the menu state
    setOpen(false);

    // 2. Find the element
    const section = document.getElementById(id);
    
    if (section) {
      // 3. Small delay (100ms) allows the mobile menu to start closing 
      // which prevents layout shifts during the scroll calculation
      setTimeout(() => {
        const yOffset = -80; // Adjusted for navbar height
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            className="text-xl sm:text-2xl font-heading font-extrabold text-primary-foreground tracking-tight"
          >
            Steer<span className="text-accent">y</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            <a
              href="tel:7671978080"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground p-2 relative z-[110]"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="px-4 pb-8 pt-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  // Using onPointerDown for faster response on mobile touch
                  onPointerDown={() => handleScroll(link.href)}
                  className="block w-full text-left py-4 px-2 text-primary-foreground/90 hover:text-accent active:bg-white/5 transition-colors text-lg font-medium border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4">
                <a
                  href="tel:7671978080"
                  className="flex items-center justify-center gap-3 bg-accent text-accent-foreground px-4 py-4 rounded-xl text-base font-bold shadow-lg"
                >
                  <Phone size={20} />
                  Call Now: 7671978080
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;