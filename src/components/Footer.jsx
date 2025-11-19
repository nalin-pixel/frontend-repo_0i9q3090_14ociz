export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/10 bg-slate-950/60 py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-white">NeoShop</h4>
            <p className="mt-2 text-sm">A futuristic storefront built with immersive interactions.</p>
          </div>
          <div>
            <h4 className="text-white">Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Newsletter</h4>
            <p className="mt-2 text-sm">Get product drops and special offers.</p>
            <div className="mt-3 flex overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur">
              <input placeholder="you@domain.com" className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none" />
              <button className="rounded-lg bg-cyan-500 px-3 py-2 text-xs font-medium text-slate-950">Subscribe</button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} NeoShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
