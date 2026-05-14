export default function Contact() {
  return (
    <div className="text-[#2c2c2c]">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Kontakt
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mt-4">
          Hör av dig till oss
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Vi svarar gärna på frågor om produkter, beställningar eller
          samarbeten.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">
        <div className="bg-[#efe7e2] p-6 rounded-xl shadow-sm">
          <h2 className="font-serif text-xl mb-6">Skicka ett meddelande</h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Namn"
              className="px-4 py-3 border rounded-md"
            />

            <input
              type="email"
              placeholder="E-post"
              className="px-4 py-3 border rounded-md"
            />

            <textarea
              placeholder="Meddelande"
              rows="5"
              className="px-4 py-3 border rounded-md"
            />

            <button className="px-5 py-3 bg-[#e3d3c2] rounded-md hover:opacity-90 transition">
              Skicka
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#efe7e2] p-6 rounded-xl">
            <h3 className="font-semibold">E-post</h3>
            <p className="text-gray-600 mt-1">kontakt@gundengs.se</p>
          </div>

          <div className="bg-[#efe7e2] p-6 rounded-xl">
            <h3 className="font-semibold">Telefon</h3>
            <p className="text-gray-600 mt-1">+46 70 123 45 67</p>
          </div>

          <div className="bg-[#efe7e2] p-6 rounded-xl">
            <h3 className="font-semibold">Adress</h3>
            <p className="text-gray-600 mt-1">Sverige</p>
          </div>
        </div>
      </section>

      <section className="bg-[#efe7e2] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-serif">Vi återkommer så snart vi kan</h2>

          <p className="text-gray-600 mt-2">Vanligtvis svar inom 24 timmar.</p>
        </div>
      </section>
    </div>
  );
}
