import React from "react";

export default function Home() {
  const projects = [
    {
      title: "MLOps FastAPI & CI/CD Pipeline",
      description: "Containerized Python 3.11 microservice with automated GitHub Actions testing gates and production-grade integration tests.",
      tech: ["FastAPI", "Docker", "GitHub Actions", "Python"],
      github: "https://github.com/viben1zxx/mlops_lab",
    },
    {
      title: "Autonomous SOC Tier-1 Analyst",
      description: "Cybersecurity triage engine that ingests log feeds, enriches threat intelligence telemetry, and reduces alert fatigue.",
      tech: ["Python 3.11", "PyTorch", "Threat Intel APIs"],
      github: "https://github.com/viben1zxx/Autonomous-SOC-Tier1-Analyst",
    },
    {
      title: "PyTorch AI Solutions Suite",
      description: "Modular deep learning architectures with custom DataLoader pipelines and GPU-accelerated training loops.",
      tech: ["PyTorch 2.x", "CUDA", "NumPy"],
      github: "https://github.com/viben1zxx/PyTorch-AI-Solutions",
    },
    {
      title: "Legal Sentiment & Risk Engine",
      description: "Domain-adapted NLP tool evaluating legal documents to classify sentiment tone and score contractual risk factors.",
      tech: ["Transformers", "NLTK", "Scikit-learn"],
      github: "https://github.com/viben1zxx/pytorch-legal-sentiment-engine",
    },
    {
      title: "AOA Protocol (Multi-Agent OS)",
      description: "Lightweight framework for multi-agent AI systems, establishing standardized task delegation and state synchronization.",
      tech: ["Asyncio", "Pydantic", "WebSockets"],
      github: "https://github.com/viben1zxx/AOA-PROTOCAL",
    },
    {
      title: "2026-Grade Autonomous AI",
      description: "Advanced AI agent architecture designed for multi-step reasoning, dynamic context management, and tool integration.",
      tech: ["LangChain", "ChromaDB", "OpenAI API"],
      github: "https://github.com/viben1zxx/2026-grade-agent",
    },
    {
      title: "Ad Automation SaaS",
      description: "Advertising operations platform that streamlines campaign generation and budget allocation using generative AI.",
      tech: ["PostgreSQL", "Meta Ads API", "Redis"],
      github: "https://github.com/viben1zxx/ad-automation-saas",
    },
    {
      title: "Python Sentinel Telemetry",
      description: "Automated system monitoring tool tracking system health, detecting anomalous resource usage, and triggering alerts.",
      tech: ["Psutil", "Webhooks", "JSON Logging"],
      github: "https://github.com/viben1zxx/python_sentinel",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 px-6 py-12 md:py-20 font-sans selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Contact Bar */}
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4 border-b border-slate-800 pb-6">
          <div className="text-emerald-400 font-mono text-sm tracking-wider">
            &lt;viben1zxx /&gt;
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="mailto:dipesh4963@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
              ✉️ dipesh4963@gmail.com
            </a>
            <a href="tel:9826190018" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
              📞 9826190018
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-3 py-1.5 rounded-full mb-6">
            Available for Global & South Korea Freelance Contracts
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
            MLOps & AI Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Specializing in containerized FastAPI microservices, PyTorch deep learning architectures, automated CI/CD pipelines, and autonomous SOC security automation. 
          </p>
          
          <div className="flex flex-wrap gap-2">
            {["Python 3.11", "PyTorch", "FastAPI", "Docker", "GitHub Actions", "Next.js"].map((tech) => (
              <span key={tech} className="bg-slate-800/50 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-700/50 backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emerald-500 inline-block"></span>
            Production Engineering Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, index) => (
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer"
                key={index} 
                className="group block bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[60px]">{p.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold bg-slate-950 text-slate-400 px-2 py-1 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/60 mt-24 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Engineered by Dipesh. Deployed via Vercel.</p>
          <p>Ready to scale your infrastructure? <a href="mailto:dipesh4963@gmail.com" className="text-emerald-400 hover:underline">Let's talk.</a></p>
        </footer>
      </div>
    </main>
  );
}
