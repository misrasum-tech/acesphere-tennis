'use client';

import { useState } from 'react';
import Link from 'next/link';

const menu = [
  { label: 'Shop', href: '/shop' },
  { label: 'Racquets', href: '/shop?category=Racquets' },
  { label: 'Shoes', href: '/shop?category=Shoes' },
  { label: 'Clothing', href: '/shop?category=Clothing' },
  { label: 'Training', href: '/shop?category=Training' },
  { label: 'Journal', href: '/journal' },
  { label: 'Support', href: '/support' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-purple-700 text-xl font-black text-white shadow-lg">AS</div>
          <div>
            <p className="text-xl font-black tracking-tight text-purple-800">AceSphere Tennis</p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Where Every Point Begins</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {menu.map((item) => <Link key={item.label} href={item.href} className="hover:text-purple-700">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/shop" className="rounded-full bg-gradient-to-r from-emerald-700 to-purple-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg">Shop now</Link>
          <Link href="/cart" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-900 hover:border-purple-400">Cart</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold lg:hidden">Menu</button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-3 text-sm font-semibold text-slate-700">
            {menu.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/cart" className="mt-2 rounded-2xl bg-purple-700 px-5 py-3 text-center text-white">Open cart</Link>
          </div>
        </div>
      )}
    </header>
  );
}
