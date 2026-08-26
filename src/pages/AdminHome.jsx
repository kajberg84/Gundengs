import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function EditInput({ path, value, update, className = "" }) {
  return (
    <input
      value={value || ""}
      onChange={(e) => update(path, e.target.value)}
      className={`
        bg-transparent
        border
        border-dashed
        border-gray-400
        p-1
        rounded
        w-full
        ${className}
      `}
    />
  );
}

function EditText({ path, value, update, className = "" }) {
  return (
    <textarea
      value={value || ""}
      onChange={(e) => update(path, e.target.value)}
      className={`
        bg-transparent
        border
        border-dashed
        border-gray-400
        p-1
        rounded
        w-full
        ${className}
      `}
    />
  );
}

function ImageUpload({ path, image, update, className = "" }) {
  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      update(path, reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <label className="cursor-pointer block">
      <input type="file" accept="image/*" hidden onChange={handleImage} />

      <img
        src={image}
        className={`
          hover:opacity-80
          transition
          ${className}
        `}
      />
    </label>
  );
}

export default function AdminHome({
  events,
  shopItems,
  homeContent,
  setHomeContent,
}) {
  const [draft, setDraft] = useState(structuredClone(homeContent));

  useEffect(() => {
    setDraft(structuredClone(homeContent));
  }, [homeContent]);

  function update(path, value) {
    const keys = path.split(".");

    setDraft((prev) => {
      const copy = structuredClone(prev);

      let obj = copy;

      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;

      return copy;
    });
  }

  function saveChanges() {
    setHomeContent(draft);
  }

  function cancelChanges() {
    setDraft(structuredClone(homeContent));
  }

  const upcomingEvents = [...(events || [])]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  const featuredProducts = (shopItems || []).slice(0, 4);

  return (
    <div className="text-[#2c2c2c] dark:text-gray-100">
      {/* SAVE BAR */}

      <div
        className="
sticky
top-0
z-20
bg-[#f5f1ee]
dark:bg-zinc-900
p-4
flex
gap-4
border-b
"
      >
        <button
          onClick={saveChanges}
          className="
bg-[#d7c3b1]
px-6
py-3
rounded-xl
hover:scale-105
transition
"
        >
          Spara ändringar
        </button>

        <button
          onClick={cancelChanges}
          className="
border
px-6
py-3
rounded-xl
"
        >
          Ångra
        </button>
      </div>

      {/* HERO */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-20
grid
md:grid-cols-2
gap-10
items-center
"
      >
        <div>
          <EditInput
            path="hero.kicker"
            value={draft.hero.kicker}
            update={update}
            className="
uppercase
tracking-widest
text-sm
"
          />

          <EditInput
            path="hero.title"
            value={draft.hero.title}
            update={update}
            className="
text-4xl
md:text-5xl
font-serif
mt-4
"
          />

          <EditText
            path="hero.subtitle"
            value={draft.hero.subtitle}
            update={update}
            className="mt-6"
          />
        </div>

        <ImageUpload
          path="hero.image"
          image={draft.hero.image}
          update={update}
          className="
rounded-2xl
h-[420px]
object-cover
w-full
"
        />
      </section>

      {/* EVENTS */}

      <section
        className="
max-w-6xl
mx-auto
px-6
"
      >
        <h2 className="text-3xl font-serif mb-10">Kommande Events</h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
"
        >
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              to="/event"
              className="
bg-[#efe7e2]
dark:bg-zinc-800
rounded-xl
overflow-hidden
"
            >
              {event.image && (
                <img
                  src={event.image}
                  className="
h-40
w-full
object-cover
"
                />
              )}

              <div className="p-6">
                <h3 className="font-serif text-lg">{event.title}</h3>

                <p className="text-sm mt-2 opacity-70">{event.date}</p>

                <p className="text-sm mt-2">{event.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="
max-w-6xl
mx-auto
px-6
py-16
"
      >
        <h2 className="text-2xl font-serif">Shop</h2>

        <div
          className="
grid
md:grid-cols-4
gap-6
mt-8
"
        >
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="
bg-[#efe7e2]
dark:bg-zinc-800
rounded-xl
overflow-hidden
"
            >
              <img
                src={item.image}
                className="
h-40
w-full
object-cover
"
              />

              <div className="p-4">
                <h3>{item.title}</h3>

                <p>{item.price} kr</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-16
grid
md:grid-cols-2
gap-10
"
      >
        <div>
          <EditInput
            path="about.title"
            value={draft.about.title}
            update={update}
            className="
text-3xl
font-serif
"
          />

          <EditText
            path="about.text"
            value={draft.about.text}
            update={update}
            className="
mt-6
"
          />
        </div>

        <ImageUpload
          path="about.image"
          image={draft.about.image}
          update={update}
          className="
rounded-2xl
h-[400px]
object-cover
w-full
"
        />
      </section>
    </div>
  );
}
