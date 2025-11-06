import { motion } from 'framer-motion';

const looks = [
  'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-6cdf1e3a27e8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975682035-2957d68cc7b1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
];

export default function LookbookMarquee() {
  return (
    <section id="apparel" className="py-24 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Lookbook</h2>
            <p className="text-neutral-600 mt-2">Street-ready fits styled with our latest silhouettes.</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...looks, ...looks].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="look"
              className="h-56 w-80 object-cover rounded-xl border border-black/10 shadow-sm"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
