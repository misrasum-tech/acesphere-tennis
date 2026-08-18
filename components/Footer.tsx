export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-purple-700 text-xl font-black text-white">AS</div>
            <div>
              <h3 className="text-xl font-black">AceSphere Tennis</h3>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Where Every Point Begins</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-300">A premium global tennis store for players, coaches, juniors, families and tennis lifestyle enthusiasts.</p>
        </div>
        <div><h4 className="font-black">Shop</h4><ul className="mt-4 grid gap-3 text-sm text-slate-300"><li>Racquets</li><li>Shoes</li><li>Clothing</li><li>Bags</li><li>Accessories</li><li>Training</li></ul></div>
        <div><h4 className="font-black">Support</h4><ul className="mt-4 grid gap-3 text-sm text-slate-300"><li>Contact</li><li>Shipping</li><li>Returns</li><li>Warranty</li><li>Size guides</li><li>Order tracking</li></ul></div>
        <div><h4 className="font-black">Legal</h4><ul className="mt-4 grid gap-3 text-sm text-slate-300"><li>Privacy policy</li><li>Cookie settings</li><li>Terms</li><li>Imprint</li><li>GDPR</li><li>VAT information</li></ul></div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">© 2026 AceSphere Tennis. All rights reserved.</div>
    </footer>
  );
}
