import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    tag: 'Best Seller',
    title: 'AeroStep Vortex',
    desc: 'Featherlite knit with carbon arc midsole for explosive energy return.',
    price: '$189',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'New',
    title: 'AeroSoft Tee',
    desc: 'Cooling microfibers and mapped ventilation. Moves when you do.',
    price: '$49',
    img: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Limited',
    title: 'ThermaFlex Jacket',
    desc: 'Adaptive insulation with storm-guard coating. Packable, durable, ready.',
    price: '$219',
    img: 'https://images.unsplash.com/photo-1618355776464-8666794d252e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductShowcase() {
  return (
    <section id="sneakers" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Drops</h2>
            <p className="text-neutral-600 mt-2">Curated picks engineered for performance and everyday comfort.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium underline-offset-4 hover:underline">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-flex text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-black text-white">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold">{p.price}</span>
                  <button className="text-sm rounded-full px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors">Add to cart</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
