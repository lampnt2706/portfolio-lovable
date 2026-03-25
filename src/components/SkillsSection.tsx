import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Java"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "Spring Web", "MyBatis"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    label: "AI / Tools",
    skills: ["LangChain", "ChromaDB", "Ollama"],
  },
  {
    label: "DevOps",
    skills: ["Docker", "Git"],
  },
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// skills</p>
          <h2 className="section-title">Technologies & Skills</h2>
          <p className="section-subtitle">Tools and technologies I work with daily.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
