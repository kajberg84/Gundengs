export default function Shop({ shopItems, cart = [], setCart }) {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-serif mb-8">Shop</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="
              bg-[#efe7e2]
              dark:bg-zinc-800
              rounded-xl
              p-4
            "
          >
            <img
              src={item.image}
              className="h-52 w-full object-cover rounded"
            />

            <h2 className="mt-4 text-xl">{item.title}</h2>

            <p>{item.price} kr</p>

            <button
              onClick={() => setCart([...cart, item])}
              className="
                mt-3
                px-4 py-2
                bg-black text-white
                rounded
              "
            >
              Lägg i kundkorg
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
