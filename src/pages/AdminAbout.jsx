import { useState } from "react";

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
  function upload(e) {
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
      <input type="file" accept="image/*" hidden onChange={upload} />

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

export default function AdminAbout({ aboutContent, setAboutContent }) {
  const [draft, setDraft] = useState(structuredClone(aboutContent));

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
    setAboutContent(draft);
  }

  function cancelChanges() {
    setDraft(structuredClone(aboutContent));
  }

  return (
    <div className="text-[#2c2c2c] dark:text-gray-100">
      {/* SAVE BAR */}

      <div
        className="
sticky
top-0
z-10
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
gap-12
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
leading-tight
mt-4
"
          />

          <EditText
            path="hero.text"
            value={draft.hero.text}
            update={update}
            className="
mt-6
leading-relaxed
"
          />
        </div>

        <ImageUpload
          path="hero.image"
          image={draft.hero.image}
          update={update}
          className="
w-full
h-[420px]
rounded-2xl
object-cover
"
        />
      </section>

      {/* STORY */}

      <section
        className="
bg-[#efe7e2]
py-20
"
      >
        <div
          className="
max-w-4xl
mx-auto
px-6
text-center
"
        >
          <EditInput
            path="story.title"
            value={draft.story.title}
            update={update}
            className="
text-3xl
font-serif
text-gray-600
"
          />

          <EditText
            path="story.text"
            value={draft.story.text}
            update={update}
            className="
mt-6
text-gray-600
leading-relaxed
"
          />
        </div>
      </section>

      {/* VALUES */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-20
grid
md:grid-cols-3
gap-6
"
      >
        {draft.values.map((item, index) => (
          <div
            key={index}
            className="
bg-[#efe7e2]
p-6
rounded-xl
shadow-sm
"
          >
            <EditInput
              path={`values.${index}.title`}
              value={item.title}
              update={update}
              className="font-semibold"
            />

            <EditText
              path={`values.${index}.text`}
              value={item.text}
              update={update}
              className="
text-sm
mt-2
"
            />
          </div>
        ))}
      </section>

      {/* BOTTOM IMAGE */}

      <section
        className="
max-w-6xl
mx-auto
px-6
pb-20
"
      >
        <ImageUpload
          path="bottomImage"
          image={draft.bottomImage}
          update={update}
          className="
w-full
h-[400px]
object-cover
rounded-2xl
"
        />
      </section>
    </div>
  );
}
