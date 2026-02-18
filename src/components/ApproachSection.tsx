import { motion } from "framer-motion";
import { TrafficCone, ShieldCheck, Gauge, TrendingUp } from "lucide-react";

const points = [
  { icon: TrafficCone, title: "Traffic Rules & Road Signs", desc: "Complete understanding of traffic rules, road signs, and regulations for safe driving." },
  { icon: ShieldCheck, title: "Safe Driving Habits", desc: "Building lifelong habits that keep you and others safe on the road." },
  { icon: Gauge, title: "Proper Vehicle Control", desc: "Master steering, braking, gear handling, and smooth acceleration." },
  { icon: TrendingUp, title: "Real Traffic Confidence", desc: "Practice in real Hyderabad traffic — from colonies to highways." },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How I Teach</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-4">
            My Teaching Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            I believe learning to drive should be a calm, supportive, and confidence-building experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-6 border border-border flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <point.icon size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
