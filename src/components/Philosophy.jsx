export default function Philosophy() {
  const pillars = [
    {
      title: "Raw Expression",
      text: "We celebrate unfiltered emotion as the starting point of healing. Voice it. Move it. Yawp it.",
    },
    {
      title: "Active Wellness",
      text: "Mental health is a verb. Practices that energize the body, engage the mind, and free the spirit.",
    },
    {
      title: "Collective Power",
      text: "We heal louder together. Community circles, shared rituals, and supportive accountability.",
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">A philosophy that refuses to whisper</h2>
          <p className="mt-4 text-white/80">We redefine mental wellness as movement and resonance—where discipline meets catharsis, and softness meets strength.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
