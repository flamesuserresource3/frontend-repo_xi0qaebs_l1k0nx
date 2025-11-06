export default function Footer() {
  return (
    <footer id="about" className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">AEROSTEP</h3>
            <p className="text-sm text-neutral-600">Performance-first footwear and apparel crafted for motion. Designed in NYC. Built for everywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><a href="#sneakers" className="hover:underline">Sneakers</a></li>
              <li><a href="#apparel" className="hover:underline">Apparel</a></li>
              <li><a href="#collections" className="hover:underline">Collections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-neutral-600 mb-3">Sign up for early access drops and exclusives.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-md border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20" />
              <button className="rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Aerostep Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}
