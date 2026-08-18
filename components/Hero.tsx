import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-emerald-950 text-white">
      <div className="absolute inset-0 opacity-30"><div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" /><div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500 blur-3xl" /></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">Worldwide delivery • Europe-first service • Premium tennis retail</div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">Elevate every rally with premium tennis gear.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">Discover racquets, shoes, apparel, bags and training equipment curated for juniors, club players, coaches and performance athletes.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href="/shop" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-purple-800 shadow-xl">Shop the collection</Link><Link href="/shop?category=Racquets" className="rounded-2xl border border-white/40 px-7 py-4 text-center font-black text-white">Find your perfect racquet</Link></div>
        </div>
        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur"><div className="rounded-[1.5rem] bg-gradient-to-br from-white via-emerald-50 to-purple-100 p-8 text-slate-950"><p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Hero product</p><div className="my-10 flex h-72 items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-200 to-purple-200 text-8xl shadow-inner">🎾</div><h2 className="text-3xl font-black">Apex Control 98</h2><p className="mt-2 text-slate-600">Precision engineered for confident attacking tennis.</p><div className="mt-6 flex items-center justify-between"><p className="text-3xl font-black text-purple-800">€249</p><Link href="/product/apex-control-98-racquet" className="rounded-2xl bg-emerald-700 px-5 py-3 font-bold text-white">View product</Link></div></div></div>
      </div>
    </section>
  );
}
