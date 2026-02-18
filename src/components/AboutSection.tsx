import { motion } from "framer-motion";
import { Award, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Students Trained", value: "500+" },
  { icon: ShieldCheck, label: "Safe Record", value: "100%" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Venkat</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-6">
            Your Driving Journey Starts Here
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            Hi, I'm <strong className="text-foreground">Venkat</strong>, a professional personal driving instructor based in Hyderabad. With over 5 years of experience, I have helped many learners become confident, skilled, and responsible drivers.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Learning to drive is an important milestone, and I make sure the journey is smooth, safe, and stress-free. Whether you are a beginner, a nervous driver, or someone who wants to improve driving skills, I provide patient and structured training suited to your comfort level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-heading font-extrabold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
