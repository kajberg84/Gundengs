export default function Navbar() {
  return (
    <header className="bg-[#faf7f4] border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
            G
          </div>
          <span className="font-serif text-lg tracking-wide">Gundengs</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="/" className="hover:text-black transition">
            Hem
          </a>
          <a href="/about" className="hover:text-black transition">
            Om Gundengs
          </a>
          <a href="/shop" className="hover:text-black transition">
            Butik
          </a>
          <a href="/gallery" className="hover:text-black transition">
            Galleri
          </a>
          <a href="/contact" className="hover:text-black transition">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
