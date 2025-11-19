import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
            Futuristic commerce • Fast, secure, delightful
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Discover tech products you'll love
          </h1>
          <p className="mt-4 max-w-xl text-blue-200/80">
            A minimalist, interactive storefront with immersive 3D. Explore, add to cart, and checkout seamlessly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
              Shop featured
            </a>
            <a href="#about" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
              Learn more
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-blue-300/70">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Live, interactive 3D experience
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 aspect-[4/3] w-full"
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
