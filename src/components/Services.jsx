import { ChartBar, FileText, BarChart3, PieChart, Rocket, LineChart } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Audience & Content Research",
      desc: "Deep-dive audits, ICP mapping, and content gap analysis so your posts hit the right people with the right message.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Data-Driven Strategy",
      desc: "We build posting cadences, content pillars, and formats backed by historical performance and platform trends.",
    },
    {
      icon: <ChartBar className="h-5 w-5" />,
      title: "Analytics & Iteration",
      desc: "Weekly dashboards and insight reports—what worked, what didn’t, and exactly how we’re improving.",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Content Systems",
      desc: "Production workflows, templates, and briefs that scale output without losing quality.",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Funnel Integration",
      desc: "We connect content to outcomes: leads, appointments, sales. No vanity metrics.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Distribution & Repurposing",
      desc: "Turn one idea into 10+ native posts tailored for each platform to maximize surface area.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            End-to-end social growth built on research, testing, and relentless iteration.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-black/10 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white shadow">
                {item.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
