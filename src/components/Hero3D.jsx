import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="collections">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8M5d4oYgVYIh7Lfq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-600 mb-4">New Arrival</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Elevate your step. Define your edge.
          </h1>
          <p className="mt-5 text-neutral-600 max-w-xl">
            Explore our 2025 drop: sculpted sneakers, engineered tees, and adaptive layers. Motion-first design that performs anywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sneakers" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-black/90 transition-colors">
              Shop Sneakers
            </a>
            <a href="#apparel" className="inline-flex items-center justify-center rounded-full bg-white text-black border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-colors">
              Shop Apparel
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
