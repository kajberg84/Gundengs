import { useState } from "react";

export default function AdminShop({ shopItems, setShopItems }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  function addItem() {
    if (!form.title || !form.price) return;

    const newItem = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };

    setShopItems([...shopItems, newItem]);

    setForm({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  }

  function removeItem(id) {
    setShopItems(shopItems.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-screen  dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-serif mb-10">Shop Admin</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORM */}

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8">
            <h2 className="text-2xl font-serif mb-8">Lägg till produkt</h2>

            <div className="space-y-5">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Produktnamn"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Pris"
                type="number"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Kategori"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              {/* IMAGE UPLOAD */}

              <label className="block border-2 border-dashed border-[#d7c3b1] rounded-2xl p-8 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />

                {form.image ? (
                  <img
                    src={form.image}
                    alt=""
                    className="h-56 w-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="text-center opacity-60">
                    Klicka för att ladda upp bild
                  </div>
                )}
              </label>

              <textarea
                rows="5"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Beskrivning"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <button
                onClick={addItem}
                className="w-full py-4 rounded-xl bg-[#d7c3b1] hover:scale-[1.02] transition"
              >
                Publicera produkt
              </button>
            </div>
          </div>

          {/* LIVE PREVIEW */}

          <div>
            <h2 className="text-2xl font-serif mb-6">Live preview</h2>

            <div className="rounded-3xl overflow-hidden bg-[#efe7e2] dark:bg-zinc-900">
              {form.image ? (
                <img
                  src={form.image}
                  alt=""
                  className="w-full h-80 object-cover"
                />
              ) : (
                <div className="h-80 bg-zinc-200 dark:bg-zinc-800" />
              )}

              <div className="p-8">
                <p className="text-sm opacity-60">
                  {form.category || "Kategori"}
                </p>

                <h3 className="text-3xl font-serif mt-2">
                  {form.title || "Produkt"}
                </h3>

                <p className="mt-4 text-xl">
                  {form.price ? `${form.price} kr` : "Pris"}
                </p>

                <p className="mt-4">{form.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}

        <section className="mt-20">
          <h2 className="text-3xl font-serif mb-8">Publicerade produkter</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {shopItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden relative"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-6">
                  <p className="text-sm opacity-60">{item.category}</p>

                  <h3 className="text-xl font-serif mt-2">{item.title}</h3>

                  <p className="mt-3">{item.price} kr</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red-500 text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
