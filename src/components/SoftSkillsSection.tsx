import { motion } from "framer-motion";
import { Globe, Users, BookOpen, Heart } from "lucide-react";

const SoftSkillsSection = () => {
  const languages = [
    { name: "English", level: "B1+", percent: 60 },
    { name: "Japanese", level: "N4", percent: 35 },
  ];

  const softSkills = [
    { icon: Users, label: "Teamwork & Communication" },
    { icon: BookOpen, label: "Self-motivated & Quick learner" },
    { icon: Heart, label: "Responsible & Works under pressure" },
  ];

  return (
    <section id="languages" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// soft skills & languages</p>
          <h2 className="section-title">More About Me</h2>
          <p className="section-subtitle">Languages I speak and skills beyond code.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Foreign Languages</h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{lang.name}</span>
                    <span className="font-mono text-xs text-primary">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg card-hover"
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
