import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sagar Jain",
    text: `I had a wonderful experience learning driving from Venkat in Hyderabad. I started as a complete beginner with zero confidence, but in just 10 days he taught me everything from basics to advanced driving with so much patience and empathy.\n\nHe trained me in my own car, covering all aspects — proper parking, smooth gear handling, and even driving at 100 kmph on ORR and airport routes. We also practiced in busy areas like Begumpet, Tanband, Gachibowli, IKEA, Miyapur, and Chandanagar, so now I feel comfortable driving in any kind of traffic.\n\nWhat makes Venkat special is his calm and understanding nature — he never rushes, always explains clearly, and makes sure you feel safe and confident.\n\n👉 To all beginners: Don't be scared to start! With the right trainer like Venkat, you can overcome your fear and learn to drive confidently in a very short time.\n\nHighly recommend him to anyone who wants to truly learn driving with patience and care.\n\nధన్యవాదాలు Venkat 🙏`,
  },
  {
    name: "Arnab Sinha",
    text: `I initially took training of 10 days at a car driving school and found completely worthless. Later, I decided to go for a personal trainer and found Venkat through a Google search. Venkat has a unique teaching approach — he takes trainees to specific residential areas to help them master the basics first. Therefore, had a wonderful learning experience with him.\n\nWhat I liked most were the practical tips and simple tricks he shared, which made it easy to understand how much to turn the steering in different situations. Within just five days, I gained a lot of confidence. Over the next few days, we practiced on various routes, including congested streets, main roads with traffic, and narrow colony roads.\n\nI really appreciate Venkat's patience and the way he supports every trainee with clear explanations. For beginners, I highly recommend Venkat as a driving instructor. In my opinion, it's much better to learn driving with a personal trainer like him rather than enrolling in a typical driving school.`,
  },
  {
    name: "Kumar Ashish",
    text: `I just want to say that the confidence I got from Venkat's driving classes is something I didn't find anywhere else! He teaches the basics so clearly that driving starts to feel easy and natural. Of course, practice makes you perfect, but when your fundamentals are strong like Venkat teaches, you become a confident driver. Thanks a lot, Venkat! 🚗👏`,
  },
  {
    name: "Pavithra A",
    text: `My training with Venkat was a refreshing and positive experience. Trainer Venkat was incredibly calm, patient, and professional. I really appreciated being able to learn in my own car, which helped boost my confidence.\n\nBefore this, I had been to three other schools where the trainers were short-tempered, money-focused, and taught me almost nothing. Venkat's approach was completely different—clear, step-by-step, and truly supportive in every aspect.\n\nI highly recommend VENKAT.`,
  },
  {
    name: "Anuran Mukherjee",
    text: `Venkat is an excellent instructor - articulate, patient and detail-oriented. He takes complete responsibility for ensuring driving readiness - organizing his classes to ensure exposure to all types of scenarios (traffic, colonies, highways). He will not only make you confident in driving, but inculcate an appreciation for driving. I highly recommend him as a trainer.`,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3">
            What Students Say
          </h2>
        </motion.div>

        <div className="relative bg-card rounded-3xl border border-border p-6 sm:p-10 shadow-sm min-h-[320px] flex flex-col justify-between">
          <Quote className="text-accent/20 absolute top-6 left-6" size={48} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed whitespace-pre-line max-h-[220px] overflow-y-auto pr-2">
                {t.text}
              </p>
              <div className="mt-6 font-heading font-bold text-foreground text-lg">
                {t.name}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110 transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
