import React from "react";

export default function Home() {
  const projects = [
    {
      title: "MLOps FastAPI & Automated CI/CD Pipeline",
      repo: "viben1zxx/mlops_lab",
      description:
        "Containerized Python 3.11 microservice with automated GitHub Actions testing gates, Docker containerization, and production-grade integration tests.",
      tech: ["FastAPI", "Docker", "GitHub Actions", "Python 3.11", "Uvicorn"],
      github: "https://github.com/viben1zxx/mlops_lab",
    },
    {
      title: "Autonomous SOC Tier-1 Analyst",
      repo: "viben1zxx/Autonomous-SOC-Tier1-Analyst",
      description:
        "Automated cybersecurity triage engine that ingests log feeds, enriches threat intelligence telemetry, and reduces alert fatigue for enterprise security ops.",
      tech: ["Python 3.11", "PyTorch", "Threat Intel APIs", "Pandas"],
      github: "https://github.com/viben1zxx/Autonomous-SOC-Tier1-Analyst",
    },
    {
      title: "PyTorch AI Deep Learning Suite",
      repo: "viben1zxx/PyTorch-AI-Solutions",
      description:
        "Modular deep learning architectures with custom DataLoader pipelines, GPU-accelerated training loops, and dynamic model evaluation routines.",
      tech: ["PyTorch 2.x", "CUDA", "NumPy", "Torchvision"],
      github: "https://github.com/viben1zxx/PyTorch-AI-Solutions",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 max-w-5xl mx-auto font-sans">
      {/* Hero Section */}
      <header className="border-b border-slate-800 pb-10 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
          Available for Global & South Korea Freelance Contracts
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
          MLOps & AI Systems Engineer
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-2xl leading-relaxed">
          Specializing in containerized FastAPI microservices, PyTorch deep learning architectures, automated CI/CD pipelines, and autonomous SOC security automation.
        </p>
        
        {/* Core Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Python 3.11", "PyTorch", "FastAPI", "Docker", "GitHub Actions", "Next.js", "Vercel"].map((tech) => (
            <span key={tech} className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-md border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
          Featured Production Engineering Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((p) => (
            <div key={p.repo} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition">
              <h3 className="text-xl font-bold text-slate-100">{p.title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{p.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  View GitHub Repository &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
        <p>© 2026 MLOps & AI Systems Portfolio. Deployed via Vercel.</p>
      </footer>
    </main>
  );
}
