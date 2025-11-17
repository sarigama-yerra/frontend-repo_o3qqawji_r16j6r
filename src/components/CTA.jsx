export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold">Let’s build your data-driven growth engine</h3>
          <p className="mt-3 text-gray-300">
            Book a free strategy call. We’ll audit your content, highlight quick wins, and map a 90-day plan to scale reach, leads, and revenue.
          </p>
        </div>
        <form className="bg-white/5 backdrop-blur rounded-2xl p-6 space-y-3">
          <input className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/60 focus:outline-none" placeholder="Your name" />
          <input type="email" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/60 focus:outline-none" placeholder="Email" />
          <input className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/60 focus:outline-none" placeholder="Company" />
          <textarea className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/60 focus:outline-none" rows="4" placeholder="What are you trying to achieve?" />
          <button type="button" className="w-full rounded-lg bg-white text-gray-900 font-medium py-3">
            Request strategy call
          </button>
        </form>
      </div>
    </section>
  );
}
