export default function SupportPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">Support</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight">How can we help?</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {['Shipping', 'Returns', 'Warranty', 'Size guides', 'Order tracking', 'Contact'].map((item) => <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-purple-800">{item}</h2><p className="mt-2 text-slate-600">Placeholder content for {item.toLowerCase()}.</p></div>)}
      </div>
    </main>
  );
}
