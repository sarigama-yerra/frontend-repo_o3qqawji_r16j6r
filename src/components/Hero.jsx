import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-600">
            Data-driven Social Growth
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Stop posting and hoping. Start scaling with bolko media.
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-prose">
            We build strategies powered by research, not guesswork—so every post moves the needle on reach, engagement, and revenue.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-medium shadow hover:shadow-md transition-shadow">
              Get your strategy plan
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur border border-black/10 px-6 py-3 font-medium text-gray-900">
              See results
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  );
}
