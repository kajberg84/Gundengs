import content from "../content/homeContent";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-[#2c2c2c] dark:text-gray-100 transition-colors">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400">
            {content.hero.kicker}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-4">
            {content.hero.title}
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            {content.hero.subtitle}
          </p>

          {/* NAVIGATION BUTTONS FIXED */}
          <div className="flex gap-4 mt-8">
            <Link
              to="/event"
              className="
                px-5 py-3
                bg-[#e3d3c2] dark:bg-zinc-700
                rounded-md
                hover:scale-[1.02]
                transition
              "
            >
              Se Events
            </Link>

            <Link
              to="/shop"
              className="
                px-5 py-3
                border border-black dark:border-white
                rounded-md
                hover:scale-[1.02]
                transition
              "
            >
              Till Shop
            </Link>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg dark:shadow-black/40">
          <img
            src={content.hero.image}
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* EVENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif mb-10">Kommande Events</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/events"
            className="bg-[#efe7e2] dark:bg-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="font-semibold">Följ oss till gården</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              24/2 — Upplev gården och djuren på plats.
            </p>
          </Link>

          <Link
            to="/events"
            className="bg-[#efe7e2] dark:bg-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="font-semibold">Kouppsläpp</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              12/4 — Se korna springa ut på bete för första gången.
            </p>
          </Link>

          <Link
            to="/events"
            className="bg-[#efe7e2] dark:bg-zinc-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="font-semibold">Öppet gårdsbesök</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Kom och träffa oss och djuren under säsongen.
            </p>
          </Link>
        </div>
      </section>

      {/* SHOP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-serif">Shop</h2>

          <Link
            to="/shop"
            className="text-sm underline text-gray-600 dark:text-gray-300"
          >
            Se alla produkter
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {content.categories.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#efe7e2] dark:bg-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="h-40 bg-gray-200 dark:bg-zinc-700" />

              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-serif">Om oss</h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            {content.about.text}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={content.about.image}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © Gundengs Kreativa
      </footer>
    </div>
  );
}
