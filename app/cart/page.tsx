export default function CartPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <h1 className="text-5xl font-black tracking-tight">Your cart</h1>
      <p className="mt-4 text-slate-600">This is the cart page placeholder. In the live version, this connects to Shopify cart and checkout.</p>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Checkout options</h2>
        <p className="mt-2 text-slate-600">Support PayPal, credit/debit cards, Apple Pay and Google Pay through Shopify checkout.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-2xl border border-slate-300 px-5 py-4 font-black">PayPal</button>
          <button className="rounded-2xl border border-slate-300 px-5 py-4 font-black">Apple Pay</button>
          <button className="rounded-2xl border border-slate-300 px-5 py-4 font-black">Google Pay</button>
          <button className="rounded-2xl bg-purple-700 px-5 py-4 font-black text-white">Card checkout</button>
        </div>
      </div>
    </main>
  );
}
