export default function TrustBar() {
  const items = [
    ['Secure payments', 'PayPal, cards, Apple Pay and Google Pay checkout.'],
    ['Europe-first logistics', 'Fast European delivery with worldwide fulfilment options.'],
    ['Expert curation', 'Premium products selected by level, surface and style.'],
    ['Easy returns', 'Clear support journey for exchanges and refunds.']
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-5 md:grid-cols-4">
        {items.map(([title, copy]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-purple-800">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
