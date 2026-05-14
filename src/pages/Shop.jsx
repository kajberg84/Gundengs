export default function Shop() {
  const products = [
    {
      title: "Keramikskål",
      price: "299 kr",
      image: "/bilder/logo.jpg",
    },
    {
      title: "Handgjord mugg",
      price: "199 kr",
      image: "/bilder/logo.jpg",
    },
    {
      title: "Linneservett",
      price: "149 kr",
      image: "/bilder/logo.jpg",
    },
    {
      title: "Vas i naturlera",
      price: "399 kr",
      image: "/bilder/logo.jpg",
    },
  ];

  return (
    <div className="text-[#2c2c2c]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-500">Butik</p>

        <h1 className="text-4xl md:text-5xl font-serif mt-4">
          Handgjorda produkter med själ
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Varje produkt är skapad med omsorg, inspirerad av naturen och
          tillverkad för att hålla länge.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-[#e3d3c2] rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.price}</p>

                <button className="mt-4 w-full py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
                  Lägg i varukorg
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-[#efe7e2] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-serif">Skapat för att hålla</h2>

          <p className="text-gray-600 mt-2">
            Vi fokuserar på kvalitet, hållbarhet och tidlös design i varje
            produkt.
          </p>
        </div>
      </section>
    </div>
  );
}
