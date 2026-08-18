import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import TrustBar from '@/components/TrustBar';
import CategoryRail from '@/components/CategoryRail';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">Featured categories</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Premium tennis essentials.</h2>
        <CategoryRail />
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">Best sellers</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Player-approved performance.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
