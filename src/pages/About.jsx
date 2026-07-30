export default function About({ aboutContent }) {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm">
            {aboutContent.hero.kicker}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-4">
            {aboutContent.hero.title}
          </h1>

          <p className="mt-6 leading-relaxed">{aboutContent.hero.text}</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutContent.hero.image}
            alt="Om Gundengs"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#efe7e2] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-gray-600 font-serif">
            {aboutContent.story.title}
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {aboutContent.story.text}
          </p>
        </div>
      </section>

      <section className="max-w-6xl text-gray-600 mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {aboutContent.values.map((item, i) => (
          <div key={i} className="bg-[#efe7e2] p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">{item.title}</h3>

            <p className="text-sm text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutContent.bottomImage}
            alt="Gundengs arbete"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
