import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + (item.quantity || 1), 0), [cart]);

  const handleAdd = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.title === product.title);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity || 1) + 1 };
        return copy;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Navbar cartCount={cartCount} />
      <Hero />
      <Products onAdd={handleAdd} />

      {/* Mini cart preview */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white backdrop-blur">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-semibold">Cart</h4>
            <span className="text-sm text-white/60">{cartCount} items</span>
          </div>
          <div className="max-h-64 space-y-2 overflow-auto pr-1">
            {cart.map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-2 text-sm">
                <span className="truncate pr-2">{item.title}</span>
                <span className="text-white/70">${item.price} × {item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-white/70">Total</span>
            <span className="font-semibold">${cart.reduce((t, i) => t + i.price * (i.quantity || 1), 0).toFixed(2)}</span>
          </div>
          <button className="mt-3 w-full rounded-xl bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
            Checkout
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App
