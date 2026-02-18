import { motion } from "framer-motion";
import { Award, Smile, UserCheck, ShieldCheck, Clock, Languages } from "lucide-react";

const features = [
  { icon: Award, title: "Own car driving trainer" },
  { icon: Smile, title: "Friendly, Calm & Patient Teaching Style" },
  { icon: UserCheck, title: "One-on-One Personal Training" },
  { icon: ShieldCheck, title: "Focus on Road Safety & Confidence" },
  { icon: Clock, title: "Flexible Timing Options" },
  { icon: Languages, title: "Training in Telugu, English & Hindi" },
];

const WhyChooseSection = () => {
  return (
    <section id="why-me" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Steery</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mt-3">
            Why Choose Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 flex items-start gap-4 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                <feature.icon size={22} />
              </div>
              <span className="text-primary-foreground font-medium text-sm sm:text-base leading-snug pt-2">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
