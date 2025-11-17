export default function Results() {
  const wins = [
    {
      stat: "+312%",
      label: "Reach in 60 days",
      note: "Short-form + pillar testing on TikTok & Reels",
    },
    {
      stat: "7.8x",
      label: "Pipeline from social",
      note: "Lead magnet + DM funnel integration",
    },
    {
      stat: "-40%",
      label: "CAC vs. paid social",
      note: "Organic distribution and repurposing",
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Results that compound</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Real outcomes from research-driven strategy and relentless iteration.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wins.map((w, i) => (
            <div key={i} className="rounded-2xl border border-black/10 bg-white p-8 text-center">
              <div className="text-4xl font-extrabold tracking-tight">{w.stat}</div>
              <div className="mt-1 text-gray-700 font-medium">{w.label}</div>
              <div className="mt-2 text-gray-500 text-sm">{w.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
