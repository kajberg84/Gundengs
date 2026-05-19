import { useState } from "react";

export default function AdminShop({ shopItems, setShopItems }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  function addItem() {
    if (!title || !price || !image) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const newItem = {
        id: Date.now(),
        title,
        price: Number(price),
        image: reader.result,
      };

      setShopItems([...shopItems, newItem]);

      setTitle("");
      setPrice("");
      setImage(null);
    };

    reader.readAsDataURL(image);
  }

  function removeItem(id) {
    setShopItems(shopItems.filter((item) => item.id !== id));
  }

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-serif">Admin Shop</h1>

      <div className="space-y-3 max-w-md">
        <input
          placeholder="Produkt"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          placeholder="Pris"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full"
        />

        <button
          onClick={addItem}
          className="bg-black text-white px-5 py-2 rounded"
        >
          Lägg till produkt
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover rounded"
              />
            )}

            <h3 className="mt-3">{item.title}</h3>
            <p>{item.price} kr</p>

            <button
              onClick={() => removeItem(item.id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Ta bort
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
