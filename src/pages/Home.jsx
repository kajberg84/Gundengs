import content from "../content/homeContent";

export default function Home() {
  return (
    <div className="bg-[#faf7f4] text-[#2c2c2c]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            {content.hero.kicker}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-4">
            {content.hero.title}
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {content.hero.subtitle}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-5 py-3 bg-black text-white rounded-md">
              {content.hero.button1}
            </button>
            <button className="px-5 py-3 border border-black rounded-md">
              {content.hero.button2}
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={content.hero.image}
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 py-10">
        {content.features.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-serif">{content.categories.title}</h2>

          <button className="text-sm underline">
            {content.categories.button}
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {content.categories.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-serif">{content.about.title}</h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {content.about.text}
          </p>

          <button className="mt-8 px-5 py-3 border border-black rounded-md">
            {content.about.button}
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={content.about.image}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#efe7e2] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-serif">{content.newsletter.title}</h2>

          <p className="text-gray-600 mt-2">{content.newsletter.subtitle}</p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <input
              className="px-4 py-3 rounded-md w-full md:w-80"
              placeholder={content.newsletter.placeholder}
            />

            <button className="px-6 py-3 bg-black text-white rounded-md">
              {content.newsletter.button}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        {content.footer}
      </footer>
    </div>
  );
}
