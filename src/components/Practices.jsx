export default function Practices() {
  const items = [
    {
      title: "Yawp Sessions",
      text: "Guided somatic vocalizations to move emotion through the body and reclaim presence.",
      badge: "Somatic + Sound",
    },
    {
      title: "Movement Rituals",
      text: "Rhythmic, breath-led practices that ignite energy and ground the nervous system.",
      badge: "Breath + Flow",
    },
    {
      title: "Collective Circles",
      text: "Weekly virtual gatherings co-created around honesty, empathy, and embodied expression.",
      badge: "Community",
    },
  ];

  return (
    <section id="practices" className="relative py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Practices that move you</h2>
          <p className="mt-4 text-white/80">Built for the doers, the feelers, the ones ready to transmute. Start small, stay consistent, go deep.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">{item.badge}</span>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-pink-300 transition-colors">{item.title}</h3>
              <p className="mt-2 text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
