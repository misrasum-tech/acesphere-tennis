import { products } from '@/lib/products';
import Link from 'next/link';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  const product =
    products.find((item) => item.handle === handle) ||
    products[0];
  return (
    <main className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-emerald-100 via-white to-purple-100 p-8">
          <div className="flex h-96 items-center justify-center rounded-[1.5rem] bg-white/70 text-8xl shadow-inner">🎾</div>
          <div className="mt-5 grid grid-cols-4 gap-3">{[1, 2, 3, 4].map((item) => <div key={item} className="flex h-20 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🎾</div>)}</div>
        </div>
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">{product.name}</h1>
          <p className="mt-3 text-lg leading-8 text-slate-600">{product.description}</p>
          <p className="mt-8 text-5xl font-black text-purple-800">€{product.price}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button className="rounded-2xl bg-emerald-700 px-6 py-4 font-black text-white shadow-lg">Add to cart</button>
            <Link href="/cart" className="rounded-2xl bg-purple-700 px-6 py-4 text-center font-black text-white shadow-lg">Buy now</Link>
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-black text-slate-900">Product details</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600"><li>Premium product gallery with alternative views</li><li>Size, grip and colour selectors ready for Shopify variants</li><li>Related products, reviews and Q&A area planned</li><li>International shipping, returns and warranty messaging</li></ul>
          </div>
        </div>
      </div>
    </main>
  );
}
