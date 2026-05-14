export default function Home() {
  return (
    <div className="bg-[#faf7f4] text-[#2c2c2c]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Välkommen till Gundengs
          </p>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-4">
            Handgjort med <br /> kärlek & omtanke
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Gundengs är ett litet kreativt företag med hjärtat på landet. Vi
            skapar handgjorda produkter med fokus på kvalitet, hållbarhet och
            personliga detaljer.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-5 py-3 bg-black text-white rounded-md">
              Till butiken
            </button>
            <button className="px-5 py-3 border border-black rounded-md">
              Läs mer om mig
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 py-10">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Skapat med kärlek</h3>
          <p className="text-sm text-gray-600 mt-2">
            Varje produkt är gjord med omtanke.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Hållbara material</h3>
          <p className="text-sm text-gray-600 mt-2">
            Vi väljer material med miljön i fokus.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Handgjort & unikt</h3>
          <p className="text-sm text-gray-600 mt-2">
            Inget är exakt det andra likt.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-serif">Populära kategorier</h2>
          <button className="text-sm underline">Se alla produkter</button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {["Inredning", "Presenter", "Papper & tryck", "Säsong"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-40 bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-medium">{item}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Handgjorda produkter
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-serif">
            Kreativitet med värme och omtanke
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Gundengs handlar om skapande, lugn och personlighet. Varje produkt
            berättar en liten historia.
          </p>

          <button className="mt-8 px-5 py-3 border border-black rounded-md">
            Läs mer om mig
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#efe7e2] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-serif">Prenumerera på nyhetsbrevet</h2>
          <p className="text-gray-600 mt-2">
            Få tips, nyheter och exklusiva erbjudanden.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <input
              className="px-4 py-3 rounded-md w-full md:w-80"
              placeholder="Din e-postadress"
            />
            <button className="px-6 py-3 bg-black text-white rounded-md">
              Prenumerera
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 Gundengs Kreativa
      </footer>
    </div>
  );
}
