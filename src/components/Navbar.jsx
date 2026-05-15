import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
     py-3 border-b border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center">
        <div className="flex items-center gap-3">
          <img
            src="/bilder/logo.jpg"
            alt="Gundengs logo"
            className="w-35 h-35 object-contain"
          />
        </div>

        <nav className="hidden md:flex flex-1 justify-evenly text-sm text-[#6d5c53]">
          <a href="/" className="relative group text-[#6d5c53]">
            Hem
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="/about" className="relative group text-[#6d5c53]">
            Om Gundengs
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="/shop" className="relative group text-[#6d5c53]">
            Butik
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="/galleri" className="relative group text-[#6d5c53]">
            Galleri
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="/contact" className="relative group text-[#6d5c53]">
            Kontakt
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex items-center gap-6 text-[#6d5c53]">
          <button className="hover:text-black transition">
            <Search size={20} />
          </button>

          <button className="relative hover:text-black transition">
            <ShoppingCart size={20} />

            <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
