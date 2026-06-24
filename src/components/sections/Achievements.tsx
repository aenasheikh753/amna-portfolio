export function Achievements() {
  const stats = [
    { value: '3.5+', label: 'Years Experience', icon: '⏳' },
    { value: '20+', label: 'Projects Delivered', icon: '🚀' },
    { value: '10+', label: 'Happy Clients', icon: '😊' },
    { value: '100%', label: 'Commitment', icon: '⭐' }
  ];

  return (
    <section className="py-20 relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-[var(--color-primary)] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center pt-8 md:pt-0 first:pt-0 flex flex-col items-center justify-center">
                <div className="text-3xl mb-3 opacity-80">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold font-serif text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--color-secondary)] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
