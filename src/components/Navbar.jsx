import { Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header
      className="
      py-3
      border-b border-black/5

      dark:border-white/10
      transition-colors
    "
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center">
        <div className="flex items-center gap-3">
          <img
            src="/bilder/logotran.png"
            alt="Gundengs logo"
            className="w-35 h-35 object-contain"
          />
        </div>

        <nav
          className="
          hidden md:flex
          flex-1 justify-evenly
          text-sm

          text-[#6d5c53]
          dark:text-gray-300
        "
        >
          <Link
            to="/"
            className="
            relative group
          "
          >
            Hem
            <span
              className="
              absolute left-0 -bottom-1
              w-0 h-[1px]

              bg-[#6d5c53]
              dark:bg-white

              transition-all duration-300
              group-hover:w-full
            "
            />
          </Link>

          <Link to="/event" className="relative group">
            Event
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] dark:bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/about" className="relative group">
            Om Gundengs
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] dark:bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/shop" className="relative group">
            Butik
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] dark:bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/galleri" className="relative group">
            Galleri
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] dark:bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link to="/contact" className="relative group">
            Kontakt
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6d5c53] dark:bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div
          className="
          flex items-center gap-6

          text-[#6d5c53]
          dark:text-gray-300
        "
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
            hover:text-black
            dark:hover:text-white
            transition
          "
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hover:text-black dark:hover:text-white transition">
            <Search size={20} />
          </button>

          <button className="relative hover:text-black dark:hover:text-white transition">
            <ShoppingCart size={20} />

            <span
              className="
              absolute -top-2 -right-2
              text-[10px]

              bg-black
              dark:bg-white

              text-white
              dark:text-black

              rounded-full
              w-4 h-4

              flex items-center justify-center
            "
            >
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
