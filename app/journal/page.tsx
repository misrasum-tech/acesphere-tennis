export default function JournalPage() {
  const posts = [
    ['How to choose your first tennis racquet', 'A practical guide for beginners and parents.'],
    ['Clay court shoe buying guide', 'What European players should look for before the season starts.'],
    ['Upgrade your match-day bag', 'The accessories every club player should carry.']
  ];
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">AceSphere Journal</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight">Expert advice for better tennis buying decisions.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map(([title, copy]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-100 to-purple-100 text-5xl">🎾</div><h2 className="text-xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p></article>)}
      </div>
    </main>
  );
}
