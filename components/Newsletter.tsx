export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-purple-900 p-8 text-white lg:col-span-2">
          <p className="font-bold uppercase tracking-[0.25em] text-purple-200">Club loyalty</p>
          <h2 className="mt-3 text-4xl font-black">Join AceSphere Club.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/80">Earn points, unlock early drops, receive birthday rewards and get member-only access to premium tennis launches.</p>
        </div>
        <div className="rounded-[2rem] bg-emerald-700 p-8 text-white">
          <h3 className="text-2xl font-black">Newsletter</h3>
          <p className="mt-3 text-white/80">Get new arrivals, player guides and private offers.</p>
          <input placeholder="Email address" className="mt-6 w-full rounded-2xl border-0 px-5 py-4 text-slate-900 outline-none" />
          <button className="mt-3 w-full rounded-2xl bg-white px-5 py-4 font-black text-emerald-800">Sign up</button>
        </div>
      </div>
    </section>
  );
}
