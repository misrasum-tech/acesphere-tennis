import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">Shop premium tennis</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight">Curated for every court, every age, every ambition.</h1>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <input placeholder="Search products" className="rounded-2xl border border-slate-300 px-5 py-3 md:col-span-2" />
          <select className="rounded-2xl border border-slate-300 px-5 py-3"><option>All categories</option><option>Racquets</option><option>Shoes</option><option>Clothing</option></select>
          <select className="rounded-2xl border border-slate-300 px-5 py-3"><option>Sort by featured</option><option>Price low to high</option><option>Price high to low</option></select>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
