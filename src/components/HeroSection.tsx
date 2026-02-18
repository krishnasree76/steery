import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Driving in Hyderabad"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-accent/30">
            🚗 Hyderabad's Trusted Driving Trainer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
            Learn Driving With{" "}
            <span className="text-accent">Confidence</span>{" "}
            in Hyderabad
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 font-body">
            Personal One-on-One Driving Training by Venkat – 5+ Years of Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-base font-bold hover:brightness-110 transition-all gold-glow"
          >
            <CalendarCheck size={20} />
            Enquire
          </a>
          <a
            href="tel:7671978080"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:bg-primary-foreground/10 transition-all"
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
