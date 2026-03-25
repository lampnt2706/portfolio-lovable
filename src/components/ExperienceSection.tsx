import { motion } from "framer-motion";
import { Building2, Trophy } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// experience</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Where I've contributed and grown as a developer.</p>
        </motion.div>

        <div className="space-y-8">
          {/* LG CNS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <span className="font-mono text-xs text-muted-foreground">Oct 2025 – Present</span>
                </div>
                <p className="text-primary font-medium text-sm mb-4">LG CNS</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Smart ORCHESTRA</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A project support tool for development productivity and quality improvement, 
                    supporting effective communication and transparent business execution.
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      Maintained and enhanced production-level backend system, implementing features from Korea HQ tickets.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      Analyzed business requirements and implemented functionalities while ensuring compatibility.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      Optimized workflows and data processing logic for performance, stability, and scalability.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "MyBatis", "PostgreSQL", "JQuery"].map((t) => (
                    <span key={t} className="skill-badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hackathon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold">AI Telecom Hackathon</h3>
                  <span className="font-mono text-xs text-muted-foreground">2-week competition</span>
                </div>
                <p className="text-primary font-medium text-sm mb-4">AI Chatbot Development</p>

                <p className="text-sm text-muted-foreground mb-3">
                  Built an AI chatbot trained on telecom service packages from UBiz+ to assist customers 
                  with pricing and package inquiries.
                </p>

                <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    Built LangChain-powered RAG pipeline with ChromaDB for semantic retrieval.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    Implemented SSE streaming for real-time token-by-token AI responses.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    Optimized retrieval quality via chunking strategies and metadata tagging.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {["FlaskAPI", "ReactJS", "MongoDB", "Ollama", "LangChain", "ChromaDB"].map((t) => (
                    <span key={t} className="skill-badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
