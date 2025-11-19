import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Products({ onAdd }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();
        // Fallback demo products if none in DB
        if (!Array.isArray(data) || data.length === 0) {
          setItems([
            { title: 'Quantum Earbuds', description: 'AI-tuned, noise adaptive', price: 149, category: 'audio', image: 'https://images.unsplash.com/photo-1602703651892-7f0e73a14302?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxRdWFudHVtJTIwRWFyYnVkc3xlbnwwfDB8fHwxNzYzNTM3ODEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.7, in_stock: true },
            { title: 'Holo Keyboard', description: 'Projection keys + haptics', price: 199, category: 'peripherals', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1000&auto=format&fit=crop', rating: 4.6, in_stock: true },
            { title: 'Neon Drone', description: '4K stabilized, smart tracking', price: 599, category: 'drones', image: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1000&auto=format&fit=crop', rating: 4.8, in_stock: true },
            { title: 'Flux Watch', description: 'Health AI, 7-day battery', price: 249, category: 'wearables', image: 'https://images.unsplash.com/photo-1602703651892-7f0e73a14302?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxRdWFudHVtJTIwRWFyYnVkc3xlbnwwfDB8fHwxNzYzNTM3ODEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.5, in_stock: true },
          ]);
        } else {
          setItems(data);
        }
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section id="products" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured products</h2>
          <p className="mt-2 text-blue-200/70">Hand-picked tech with a futuristic aesthetic</p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white/90">{p.title}</h3>
                  <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-cyan-300">${p.price}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-blue-200/80">{p.description}</p>
                <button onClick={() => onAdd(p)} className="mt-3 w-full rounded-xl bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
