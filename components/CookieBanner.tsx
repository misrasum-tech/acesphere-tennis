'use client';

import { useState } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="fixed bottom-5 left-5 right-5 z-[60] mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
      <div>
        <h3 className="font-black">Cookie consent</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">We use cookies to improve your shopping experience. Configure this with a GDPR-compliant consent management platform before going live.</p>
      </div>
      <div className="mt-4 flex gap-3 md:mt-0">
        <button onClick={() => setShow(false)} className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-black">Manage</button>
        <button onClick={() => setShow(false)} className="rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-black text-white">Accept</button>
      </div>
    </div>
  );
}
