import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.handle}`} className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mb-4 flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-purple-100"><div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-700 shadow">{product.badge}</div><div className="text-6xl">🎾</div></div>
      <div className="mb-2 flex items-center justify-between gap-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{product.category}</p><p className="text-sm text-amber-500">★ {product.rating}</p></div>
      <h3 className="min-h-14 text-lg font-bold text-slate-900">{product.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>
      <div className="mt-5 flex items-center justify-between"><p className="text-2xl font-black text-purple-800">€{product.price}</p><span className="rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow">View</span></div>
    </Link>
  );
}
