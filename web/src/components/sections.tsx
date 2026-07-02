import {
  LayoutDashboard,
  Activity,
  Coins,
  LineChart,
  BellRing,
  Users,
  GitCompareArrows,
  Wand2,
  Cloud,
  MessageSquareText,
  Gauge,
  HeartPulse,
  ScrollText,
  Building2,
  AppWindow,
  Server,
  ShieldCheck,
  Lock,
  KeyRound,
  FileCheck2,
  Eye,
  Network,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-pretty text-zinc-400">{subtitle}</p>}
    </FadeIn>
  );
}

/* ---------------- Trusted By ---------------- */

const companies = [
  "Vantage Labs",
  "Northwind AI",
  "Helios Systems",
  "Quantify",
  "Arcadia Cloud",
  "Nexline",
  "Ironvale",
  "Corelight AI",
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 py-12" aria-label="Trusted by">
      <p className="mb-8 text-center text-sm text-zinc-500">
        Trusted by AI-native teams and platform organizations
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-16 pr-16">
          {[...companies, ...companies].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="whitespace-nowrap text-lg font-medium tracking-tight text-zinc-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product Overview ---------------- */

const personas = [
  {
    title: "Starting with AI",
    body: "Compare clouds, models, and inference costs before you commit a dollar. Know if your product stays viable at production scale.",
    icon: Wand2,
  },
  {
    title: "Already on the cloud",
    body: "Answer 'which LLM should we use?' with data. Benchmark cost, latency, and quality across OpenAI, Anthropic, Gemini, and open source.",
    icon: Cloud,
  },
  {
    title: "Running at scale",
    body: "Centralize spend, enforce governance, kill duplicate API usage, and allocate costs per team, project, and application.",
    icon: Network,
  },
];

export function ProductOverview() {
  return (
    <section id="product" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Product"
          title="One platform for every stage of your AI journey"
          subtitle="Whether you're evaluating your first model or governing hundreds of API keys across teams, AIOptic is your AI operations control plane."
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass group h-full rounded-2xl p-7 transition-colors hover:bg-white/[0.07]">
                <div className="mb-5 inline-flex rounded-xl bg-indigo-500/15 p-3 text-indigo-300 transition-transform group-hover:scale-110">
                  <p.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */

const features = [
  { icon: LayoutDashboard, title: "Unified AI Dashboard", body: "Every provider, cloud, and model in one pane of glass." },
  { icon: Activity, title: "Live API Usage Tracking", body: "Real-time request streams with per-key attribution." },
  { icon: Coins, title: "Token Analytics", body: "Input/output token breakdowns by model, team, and app." },
  { icon: LineChart, title: "Cost Forecasting", body: "ML-driven projections of monthly spend before it lands." },
  { icon: BellRing, title: "Budget Alerts", body: "Thresholds and anomaly detection via Slack, email, PagerDuty." },
  { icon: Users, title: "Team & Project Management", body: "Spaces, roles, and per-project budgets built in." },
  { icon: GitCompareArrows, title: "LLM Comparison", body: "Cost, latency, and quality side by side across providers." },
  { icon: Wand2, title: "Model Recommendations", body: "Route each workload to the most cost-effective model." },
  { icon: Cloud, title: "Cloud Cost Visibility", body: "AWS, Azure, and GCP AI infrastructure spend, unified." },
  { icon: MessageSquareText, title: "Prompt Analytics", body: "Find your most expensive prompts and optimize them." },
  { icon: Gauge, title: "Rate Limit Monitoring", body: "See throttling before your users do." },
  { icon: HeartPulse, title: "API Health Monitoring", body: "Provider uptime, latency percentiles, and error rates." },
  { icon: ScrollText, title: "Audit Logs", body: "Every model call and config change, immutably recorded." },
  { icon: Building2, title: "Usage by Team", body: "Chargeback-ready cost allocation per department." },
  { icon: AppWindow, title: "Usage by Application", body: "Attribute every token to the product feature that spent it." },
  { icon: Server, title: "Self-hosted Monitoring", body: "Track open-source models running in your own infra." },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run AI like an engineering org"
          subtitle="Datadog-grade observability, Stripe-grade billing clarity, and Vercel-grade DX — for your entire AI stack."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="glass group h-full rounded-xl p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.07]">
                <f.icon className="mb-3 h-5 w-5 text-indigo-400" aria-hidden />
                <h3 className="mb-1 text-sm font-semibold">{f.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Integrations ---------------- */

const clouds = [
  { name: "Amazon Web Services", detail: "Bedrock, SageMaker, EC2 GPU fleets" },
  { name: "Microsoft Azure", detail: "Azure OpenAI, AKS, ML Studio" },
  { name: "Google Cloud", detail: "Vertex AI, GKE, TPU workloads" },
];

const providers = [
  "OpenAI",
  "Anthropic",
  "Google Gemini",
  "Grok",
  "Cohere",
  "Mistral",
  "Together AI",
  "OpenRouter",
  "Ollama",
  "Self-hosted OSS",
];

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Integrations"
          title="Multi-cloud. Multi-provider. Zero blind spots."
          subtitle="Connect your clouds and providers in minutes with read-only credentials or our lightweight gateway."
        />
        <Stagger className="mb-10 grid gap-6 md:grid-cols-3">
          {clouds.map((c) => (
            <StaggerItem key={c.name}>
              <div className="glass h-full rounded-2xl p-7 transition-colors hover:bg-white/[0.07]">
                <Cloud className="mb-4 h-6 w-6 text-cyan-300" aria-hidden />
                <h3 className="mb-1 font-semibold">{c.name}</h3>
                <p className="text-sm text-zinc-500">{c.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn>
          <div className="glass rounded-2xl p-8">
            <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-zinc-500">
              Supported LLM providers
            </h3>
            <ul className="flex flex-wrap justify-center gap-3">
              {providers.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-indigo-400/50 hover:text-white"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- Self-hosted ---------------- */

export function SelfHosted() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass grid items-center gap-10 rounded-3xl p-10 md:grid-cols-2 md:p-14">
          <FadeIn>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
              Self-hosted models
            </p>
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Your models. Your infrastructure. Our visibility.
            </h2>
            <p className="mb-6 text-zinc-400">
              Run Llama, Mistral, or any open-source model inside your own VPC or
              on-prem cluster. AIOptic&apos;s agent streams usage, performance, and
              GPU cost telemetry without your data ever leaving your network.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              {[
                "GPU utilization and cost-per-inference tracking",
                "Latency and throughput benchmarking vs. hosted APIs",
                "Air-gapped and VPC-peered deployment options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-[family-name:var(--font-geist-mono)] text-xs leading-relaxed text-zinc-400">
              <p className="mb-2 text-zinc-500"># deploy the AIOptic agent</p>
              <p>
                <span className="text-emerald-400">$</span> helm install aioptic-agent \
              </p>
              <p className="pl-6">aioptic/agent --namespace ai-ops \</p>
              <p className="pl-6">--set cluster=prod-gpu-01</p>
              <p className="mt-3 text-zinc-500"># streaming telemetry…</p>
              <p className="text-indigo-300">✓ llama-3-70b · 412 req/min · $0.0009/req</p>
              <p className="text-indigo-300">✓ mistral-7b · 1.2k req/min · $0.0001/req</p>
              <p className="text-emerald-400">✓ connected to AIOptic control plane</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Security ---------------- */

const security = [
  { icon: Lock, title: "SOC 2 Type II", body: "Independently audited controls across security and availability." },
  { icon: KeyRound, title: "SSO & SCIM", body: "Okta, Azure AD, and Google Workspace with automated provisioning." },
  { icon: Eye, title: "Zero prompt retention", body: "Metadata-only mode: we never need to store your prompts." },
  { icon: FileCheck2, title: "GDPR & HIPAA ready", body: "Regional data residency with BAA support for healthcare." },
];

export function Security() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Enterprise security"
          title="Built for the strictest security reviews"
          subtitle="AIOptic is designed to pass your CISO's checklist on day one."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {security.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass h-full rounded-2xl p-6 text-center transition-colors hover:bg-white/[0.07]">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-300">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mb-1 text-sm font-semibold">{s.title}</h3>
                <p className="text-xs text-zinc-500">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
