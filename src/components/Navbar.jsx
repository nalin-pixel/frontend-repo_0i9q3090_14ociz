import { useState } from 'react';
import { Menu, ShoppingCart, Search } from 'lucide-react';

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="mr-1 rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white md:hidden" onClick={() => setOpen(!open)}>
            <Menu size={20} />
          </button>
          <a href="#" className="text-lg font-semibold text-white">NeoShop</a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm text-white/80 hover:text-white">Products</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 backdrop-blur md:flex">
            <Search size={16} className="mr-2" />
            <input placeholder="Search" className="w-40 bg-transparent outline-none placeholder:text-white/40" />
          </div>
          <a href="#cart" className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-white/90 backdrop-blur hover:bg-white/10">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-cyan-500 px-1 text-[10px] font-semibold text-slate-950">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/80 px-6 py-3 md:hidden">
          <a href="#products" className="block py-2 text-white/80">Products</a>
          <a href="#about" className="block py-2 text-white/80">About</a>
          <a href="#contact" className="block py-2 text-white/80">Contact</a>
        </div>
      )}
    </header>
  );
}
