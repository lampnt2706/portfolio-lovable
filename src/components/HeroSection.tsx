import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="section-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="terminal-block inline-block px-4 py-2 mb-8">
            <span className="text-primary font-mono text-xs">~</span>
            <span className="font-mono text-xs opacity-70"> $ whoami</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Backend Developer{" "}
          <span className="gradient-text">specializing in</span>{" "}
          Java & Spring Boot
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4"
        >
          1 year of production experience building scalable systems, 
          optimizing performance, and delivering clean architecture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-mono text-sm text-muted-foreground mb-10"
        >
          📍 Hanoi, Vietnam
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 terminal-block p-4 text-left max-w-lg w-full"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs opacity-50 font-mono">terminal</span>
          </div>
          <code className="text-xs leading-relaxed block">
            <span className="text-primary">const</span> developer = {"{"}<br />
            &nbsp;&nbsp;name: <span className="text-yellow-400">"Pham Ngoc Tung Lam"</span>,<br />
            &nbsp;&nbsp;role: <span className="text-yellow-400">"Backend Developer"</span>,<br />
            &nbsp;&nbsp;stack: [<span className="text-green-400">"Java"</span>, <span className="text-green-400">"Spring Boot"</span>, <span className="text-green-400">"PostgreSQL"</span>],<br />
            &nbsp;&nbsp;available: <span className="text-blue-400">true</span><br />
            {"}"};
          </code>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
