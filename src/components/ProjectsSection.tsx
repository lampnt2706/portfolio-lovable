import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// projects</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built and contributed to.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-lg overflow-hidden card-hover"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">FU-OJ</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                    5 members
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Algorithm training platform for FPT University students
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/dung204/fu-oj-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>

            <div className="mb-4">
              <span className="font-mono text-xs text-primary">Role: </span>
              <span className="text-sm">Backend Developer</span>
              <span className="font-mono text-xs text-muted-foreground ml-4">Sep 2025 – Dec 2025</span>
            </div>

            <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Group creation and academic group management.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Realtime commenting using WebSocket to enhance interaction.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Bulk account import/export to Excel with chunking & batching for performance.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                AI integration for problem analysis and solution suggestions.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {["Spring Boot 3", "JPA", "Security", "WebSocket", "PostgreSQL", "Redis", "MinIO"].map((t) => (
                <span key={t} className="skill-badge text-xs">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
