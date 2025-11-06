import { ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-black to-neutral-600" />
            <span className="text-xl font-semibold tracking-tight">AEROSTEP</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#collections" className="hover:text-black/70 transition-colors">Collections</a>
            <a href="#sneakers" className="hover:text-black/70 transition-colors">Sneakers</a>
            <a href="#apparel" className="hover:text-black/70 transition-colors">Apparel</a>
            <a href="#about" className="hover:text-black/70 transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-black/5 transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full px-1">3</span>
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors" aria-label="Account">
              <User size={20} />
            </button>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-3">
            <div className="grid gap-3 text-sm">
              <a href="#collections" className="py-2">Collections</a>
              <a href="#sneakers" className="py-2">Sneakers</a>
              <a href="#apparel" className="py-2">Apparel</a>
              <a href="#about" className="py-2">About</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
