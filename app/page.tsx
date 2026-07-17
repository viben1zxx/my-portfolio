import React from 'react';
import {
  Terminal,
  Shield,
  Activity,
  Server,
  Cpu,
  Mail,
  ExternalLink,
  Layers,
  Database,
  Globe,
  CheckCircle2
} from 'lucide-react';

// Custom inline SVG Github Icon to bypass Lucide v1.0 brand removal
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono antialiased selection:bg-emerald-500 selection:text-neutral-950">

      {/* GLOW EFFECT BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="text-emerald-400 w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg tracking-wider text-neutral-200">viben1zxx // root</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">./about</a>
            <a href="#homelab" className="hover:text-emerald-400 transition-colors">./homelab</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">./projects</a>
            <a href="https://github.com/viben1zxx" target="_blank" rel="noopener noreferrer" className="text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/5 hover:bg-emerald-500/10 transition-all flex items-center gap-1.5">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">

        {/* HERO / BIO */}
        <section id="about" className="space-y-6 pt-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            Incoming BSc (Hons) Computer Science @ Sunderland University (Sept)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400">
            Specializing in SOC Automation & Machine Learning
          </h1>
          <p className="text-neutral-400 max-w-3xl leading-relaxed text-md">
            I construct automated security pipelines, custom AI orchestration networks, and localized enterprise network sandboxes. I specialize in bridging the gap between automated threat response, industrial reality tracking, and high-performance system configurations.
          </p>
        </section>

        {/* HOMELAB OVERVIEW */}
        <section id="homelab" className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Server className="text-emerald-400 w-5 h-5" />
            <h2 className="text-2xl font-bold tracking-tight">Active Virtualization Homelab</h2>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-neutral-400 text-sm leading-relaxed">
                I operate a dedicated system sandbox environment utilizing hypervisors to deploy enterprise AD domains, construct vulnerable targets for SOC simulation testing, and test automated network defense actions safely.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-800 px-2.5 py-1 rounded text-xs text-neutral-300 border border-neutral-700">VMware Workstation</span>
                <span className="bg-neutral-800 px-2.5 py-1 rounded text-xs text-neutral-300 border border-neutral-700">Oracle VirtualBox</span>
                <span className="bg-neutral-800 px-2.5 py-1 rounded text-xs text-neutral-300 border border-neutral-700">AD Forests</span>
                <span className="bg-neutral-800 px-2.5 py-1 rounded text-xs text-neutral-300 border border-neutral-700">Isolated Network Topologies</span>
              </div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 rounded p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span>SYSTEM LAB TOPOLOGY</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-neutral-900 pb-1.5">
                  <span className="text-neutral-400">🔒 Windows Server Domain Controller</span>
                  <span className="text-neutral-500">10.0.0.1</span>
                </div>
                <div className="flex justify-between border-b border-neutral-900 pb-1.5">
                  <span className="text-neutral-400">🖥️ Enterprise SOC Analyst Host</span>
                  <span className="text-neutral-500">10.0.0.10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">🤖 Autonomous Incident Bot</span>
                  <span className="text-neutral-500">10.0.0.50</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Layers className="text-emerald-400 w-5 h-5" />
            <h2 className="text-2xl font-bold tracking-tight">Enterprise & Cyber-Ops Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="group border border-neutral-800 bg-neutral-900/30 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <Shield className="text-emerald-400 w-8 h-8" />
                  <a href="https://github.com/viben1zxx/Autonomous-SOC-Tier1-Analyst" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">Autonomous SOC Tier-1 Analyst</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An automated Python tool designed to automate traditional Tier-1 security analysis. Investigates IPs, resolves hashes, and exports structured threat intel reports instantly.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Python</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Security Automation</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Threat Intel</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group border border-neutral-800 bg-neutral-900/30 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <Activity className="text-emerald-400 w-8 h-8" />
                  <a href="https://github.com/viben1zxx/Threat-intelligence-soc-tool" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">Threat Intelligence SOC Tool</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  A custom pipeline designed for intelligence feed ingestion, automated correlation, and immediate notification routing for security indicators.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Python</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">API Orchestration</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Monitoring</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group border border-neutral-800 bg-neutral-900/30 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <Cpu className="text-emerald-400 w-8 h-8" />
                  <a href="https://github.com/viben1zxx/pytorch-legal-sentiment-engine" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">PyTorch Document AI Engine</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An advanced pipeline fusing local Optical Document Parsing with deep learning classifications for structured legal document sentiment analytics.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">PyTorch</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Deep Learning</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">OCR AI</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group border border-neutral-800 bg-neutral-900/30 rounded-lg p-6 space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <Database className="text-emerald-400 w-8 h-8" />
                  <span className="text-xs font-bold text-emerald-500/80 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">In Dev</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">AD Ticketing Management</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An enterprise support portal automating Active Directory provisioning, account resets, and group security changes directly linked to internal system queues.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Next.js</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Active Directory</span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">IT Support API</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950 mt-20 py-10 text-center text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} viben1zxx. Built for Newcastle & Sunderland Tech Ecosystems.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/viben1zxx" className="hover:text-neutral-300"><GithubIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
