import { useState } from "react";

export default function AdminEvents({ events, setEvents }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    short: "",
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
      setForm((prev) => ({
        ...prev,
        image: reader.result, 
      }));
    };

    reader.readAsDataURL(file);
  }

  function addEvent() {
    if (!form.title || !form.date) return;

    const newEvent = {
      id: Date.now(),
      ...form,
    };

    setEvents([...events, newEvent]);

    setForm({
      title: "",
      date: "",
      short: "",
      description: "",
      image: "",
    });
  }

  function removeEvent(id) {
    setEvents(events.filter((e) => e.id !== id));
  }

  return (
    <div className="min-h-screen dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-serif mb-10">Event Admin</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl">
            <h2 className="font-serif text-2xl mb-8">Skapa event</h2>

            <div className="space-y-5">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Titel"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              {/* IMAGE UPLOAD FIXED */}
              <label
                className="
                block
                border-2
                border-dashed
                border-[#d7c3b1]
                rounded-2xl
                p-8
                text-center
                cursor-pointer
                hover:bg-[#efe7e2]
                transition
              "
              >
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
                    className="h-52 w-full object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <p className="text-lg">Klicka för att ladda upp bild</p>
                    <p className="text-sm opacity-60 mt-2">JPG / PNG / WEBP</p>
                  </>
                )}
              </label>

              <textarea
                rows="3"
                name="short"
                value={form.short}
                onChange={handleChange}
                placeholder="Kort beskrivning"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <textarea
                rows="6"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Full beskrivning"
                className="w-full p-4 rounded-xl bg-[#efe7e2] dark:bg-zinc-800"
              />

              <button
                onClick={addEvent}
                className="w-full py-4 rounded-xl bg-[#d7c3b1] hover:scale-[1.02] transition"
              >
                Publicera event
              </button>
            </div>
          </div>

         
          <div>
            <h2 className="font-serif text-2xl mb-6">Live preview</h2>

            <div className="bg-[#efe7e2] dark:bg-zinc-900 rounded-3xl overflow-hidden">
              {form.image ? (
                <img
                  src={form.image}
                  alt=""
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="h-72 bg-zinc-200 dark:bg-zinc-800" />
              )}

              <div className="p-8">
                <p className="text-sm opacity-60">{form.date || "Datum"}</p>

                <h3 className="text-3xl font-serif mt-2">
                  {form.title || "Titel"}
                </h3>

                <p className="mt-4">{form.short}</p>

                <p className="mt-6 opacity-80">{form.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* EVENTS LIST */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl mb-8">Publicerade event</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden relative"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <p className="text-sm opacity-60">{event.date}</p>

                  <h3 className="font-serif text-xl mt-2">{event.title}</h3>

                  <p className="mt-3">{event.short}</p>
                </div>

                <button
                  onClick={() => removeEvent(event.id)}
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
