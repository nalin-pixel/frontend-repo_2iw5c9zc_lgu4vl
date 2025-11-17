export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-black via-fuchsia-900/20 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Ready to yawp with us?</h2>
            <p className="mt-4 text-white/80 max-w-2xl">Add your voice to a community redefining mental wellness as a bold, embodied practice. Be the sound that sets someone else free.</p>
          </div>
          <form className="bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="Email" className="col-span-2 rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400" />
              <button className="rounded-xl bg-white text-gray-900 px-4 py-3 font-semibold shadow hover:shadow-md transition-shadow">Join the Roar</button>
            </div>
            <p className="mt-3 text-xs text-white/60">By joining, you agree to receive purposeful, occasional updates. No noise.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
