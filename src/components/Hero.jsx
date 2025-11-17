import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
        <div className="relative flex min-h-[90vh] items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="uppercase tracking-[0.2em] text-sm text-white/80 mb-3">Mental wellness, unleashed</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                YAWP
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400"> — Your Barbaric Yawp of Freedom</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/90">
                Break the quiet chains. Embrace raw expression. We turn mental health into a vibrant, communal act of liberation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition-shadow">
                  Join the Roar
                </a>
                <a href="#philosophy" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
