import { motion } from "framer-motion";
import { GraduationCap, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const items = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Software Engineering graduate from FPT University with a GPA of 3.2/4.0.",
    },
    {
      icon: Target,
      title: "Focus",
      desc: "Strong backend focus with experience in real production systems at enterprise scale.",
    },
    {
      icon: Zap,
      title: "Passion",
      desc: "Passionate about performance optimization, scalability, and clean architecture.",
    },
  ];

  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// about me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl">
            Software Engineering graduate with 1 year of backend development experience in production environments.
            Skilled in implementing features, improving system performance, and collaborating within cross-functional teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-lg p-6 border border-border card-hover"
            >
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
