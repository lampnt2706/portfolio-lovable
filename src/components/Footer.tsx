const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">&lt;</span>Lam<span className="text-primary">/&gt;</span>{" "}
        © {new Date().getFullYear()}
      </p>
      <p className="text-xs text-muted-foreground">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
