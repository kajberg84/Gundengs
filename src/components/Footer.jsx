import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#efe2d9] dark:bg-zinc-950 border-t border-black/10 dark:border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-serif">Gundengs Kreativa</h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Kreativ studio för events, design och unika produkter.
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="font-medium mb-2">Navigation</h3>

          <Link to="/" className="hover:underline">
            Hem
          </Link>

          <Link to="/event" className="hover:underline">
            Events
          </Link>

          <Link to="/shop" className="hover:underline">
            Shop
          </Link>

          <Link to="/about" className="hover:underline">
            Om oss
          </Link>

          <Link to="/contact" className="hover:underline">
            Kontakt
          </Link>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-medium mb-3">Följ oss</h3>

          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>

            <a href="mailto:kontakt@example.com" className="hover:underline">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10 dark:border-white/10 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Gundengs Kreativa. All rights reserved.
      </div>
    </footer>
  );
}
