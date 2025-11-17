import { CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Discovery & Audit",
      desc: "We audit your profiles, content, competitors, and audience to uncover growth levers.",
    },
    {
      title: "Strategy Sprints",
      desc: "We translate research into a 90-day roadmap with content pillars, cadence, and KPIs.",
    },
    {
      title: "Production System",
      desc: "We build briefs, templates, and workflows that make high-output content repeatable.",
    },
    {
      title: "Testing & Scale",
      desc: "Weekly experiments, dashboards, and iterations focused on compounding growth.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">How we work</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A clear path from research to repeatable results.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-semibold text-lg">{i + 1}. {s.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
