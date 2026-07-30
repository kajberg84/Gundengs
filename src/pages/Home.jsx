import { Link } from "react-router-dom";

export default function Home({ events, shopItems, homeContent }) {
  const upcomingEvents = [...(events || [])]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  const featuredProducts = (shopItems || []).slice(0, 4);

  return (
    <div className="text-[#2c2c2c] dark:text-gray-100">
      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm">
            {homeContent.hero.kicker}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif mt-4">
            {homeContent.hero.title}
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            {homeContent.hero.subtitle}
          </p>

          <div className="flex gap-4 mt-8 dark:text-black">
            <Link to="/event" className="px-5 py-3 bg-[#e3d3c2] rounded-md">
              Se Events
            </Link>

            <Link
              to="/shop"
              className="px-5 py-3 border border-black dark:text-white dark:border-white rounded-md"
            >
              Till Shop
            </Link>
          </div>
        </div>

        <img
          src={homeContent.hero.image}
          className="rounded-2xl h-[420px] object-cover w-full"
        />
      </section>

      {/* EVENTS */}

      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif mb-10">
          {homeContent.eventsTitle || "Kommande Events"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              to="/event"
              className="bg-[#efe7e2] dark:bg-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {event.image && (
                <img src={event.image} className="h-40 w-full object-cover" />
              )}

              <div className="p-6">
                <h3 className="font-serif text-lg">{event.title}</h3>

                <p className="text-sm mt-2 opacity-70">{event.date}</p>

                <p className="text-sm mt-2">{event.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SHOP */}

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-serif">
            {homeContent.shopTitle || "Shop"}
          </h2>

          <Link to="/shop" className="text-sm underline">
            {homeContent.shopLinkText || "Se alla produkter"}
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <Link
              key={item.id}
              to="/shop"
              className="bg-[#efe7e2] dark:bg-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {item.image && (
                <img src={item.image} className="h-40 w-full object-cover" />
              )}

              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>

                <p className="text-sm mt-1 opacity-70">{item.price} kr</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-serif">
            {homeContent.about.title || "Om oss"}
          </h2>

          <p className="mt-6">{homeContent.about.text}</p>
        </div>

        <img
          src={homeContent.about.image}
          className="rounded-2xl h-[400px] object-cover w-full"
        />
      </section>
    </div>
  );
}
