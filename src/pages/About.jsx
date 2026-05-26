export default function About() {
  return (
    <div className="">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm ">Om Gundengs</p>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-4">
            Ett hantverk med själ och tradition
          </h1>

          <p className="mt-6  leading-relaxed">
            Gundengs är byggt på kärleken till det enkla, det naturliga och det
            genuina. Vi skapar produkter och upplevelser inspirerade av naturen,
            hantverk och tidlös design.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/bilder/logo.jpg"
            alt="Om Gundengs"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#efe7e2] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-gray-600 font-serif">Vår berättelse</h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Gundengs startade som en liten idé om att skapa något ärligt och
            hållbart. Med tiden har det vuxit till ett varumärke som fokuserar
            på kvalitet framför kvantitet, och på design som håller över tid –
            både estetiskt och funktionellt.
          </p>
        </div>
      </section>

      <section className="max-w-6xl text-gray-600 mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Hantverk",
            text: "Vi värdesätter noggrant arbete och detaljer som gör skillnad.",
          },
          {
            title: "Hållbarhet",
            text: "Vi tänker långsiktigt i allt vi skapar och producerar.",
          },
          {
            title: "Tidlös design",
            text: "Vi följer inte trender – vi skapar något som håller över tid.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-[#efe7e2] p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/bilder/logo.jpg"
            alt="Gundengs arbete"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
