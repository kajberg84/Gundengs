import { useState } from "react";

export default function AdminGalleri({ galleryImages, setGalleryImages }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
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

  function addImage() {
    if (!form.image) return;

    const newImage = {
      id: Date.now(),
      ...form,
    };

    setGalleryImages([...galleryImages, newImage]);

    setForm({
      title: "",
      description: "",
      image: "",
    });
  }

  function removeImage(id) {
    setGalleryImages(galleryImages.filter((image) => image.id !== id));
  }

  return (
    <div className="min-h-screen dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-serif mb-10">Galleri Admin</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORMULÄR */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8">
            <h2 className="text-2xl font-serif mb-8">Lägg till bild</h2>

            <div className="space-y-5">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Titel"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

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
                rows="4"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Beskrivning"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <button
                onClick={addImage}
                className="w-full py-4 rounded-xl bg-[#d7c3b1] hover:scale-[1.02] transition"
              >
                Publicera bild
              </button>
            </div>
          </div>

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
                <p className="text-sm opacity-60">Galleri</p>

                <h3 className="text-3xl font-serif mt-2">
                  {form.title || "Bildtitel"}
                </h3>

                <p className="mt-4">{form.description}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-serif mb-8">Publicerade bilder</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden relative"
              >
                {image.image && (
                  <img
                    src={image.image}
                    alt={image.title || ""}
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-5">
                  <h3 className="text-xl font-serif">{image.title}</h3>

                  {image.description && (
                    <p className="mt-2 text-sm opacity-70">
                      {image.description}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => removeImage(image.id)}
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
