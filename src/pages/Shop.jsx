import { useState } from "react";

export default function Shop({ shopItems, cart = [], setCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const categories = [
    "all",
    ...new Set(shopItems.map((item) => item.category).filter(Boolean)),
  ];

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }

  const filteredItems = shopItems
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "all" || item.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;

      if (sort === "price-high") return b.price - a.price;

      return 0;
    });

  return (
    <div className="text-[#2c2c2c] dark:text-gray-100">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif">Shop</h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Sök, filtrera och hitta unika produkter
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sök produkter..."
            className="p-3 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Alla kategorier" : cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-3 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
          >
            <option value="default">Standard</option>

            <option value="price-low">Pris: lågt → högt</option>

            <option value="price-high">Pris: högt → lågt</option>
          </select>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              Inga produkter hittades
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="
                  bg-[#efe7e2]
                  dark:bg-zinc-800
                  rounded-2xl
                  overflow-hidden
                  hover:scale-[1.02]
                  transition
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-gray-500">{item.category}</p>

                  <h2 className="text-xl font-serif mt-2">{item.title}</h2>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <p className="text-lg font-medium">{item.price} kr</p>

                    <button
                      onClick={() => addToCart(item)}
                      className="
                        px-4 py-2
                        bg-[#d7c3b1]
                        rounded-md
                        hover:scale-[1.05]
                        transition
                        dark:text-black
                      "
                    >
                      Lägg i varukorg
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
