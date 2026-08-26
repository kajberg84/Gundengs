export default function Galleri({ galleryImages }) {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-widest text-sm">Galleri</p>

        <h1 className="text-4xl md:text-5xl font-serif mt-4">
          En visuell berättelse
        </h1>

        <p className="mt-6 max-w-2xl mx-auto">
          Ett urval av vår estetik, vårt hantverk och våra miljöer.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl shadow-sm group"
            >
              <img
                src={item.image}
                alt={item.title || "Galleri"}
                className="
                  w-full
                  h-48
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-300
                "
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe7e2] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl text-gray-600 font-serif">
            Estetik genom enkelhet
          </h2>

          <p className="text-gray-600 mt-2">
            Vi tror på att varje bild berättar en historia.
          </p>
        </div>
      </section>
    </div>
  );
}
