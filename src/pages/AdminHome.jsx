import { useState, useEffect } from "react";

export default function AdminHome({ homeContent, setHomeContent }) {
  const [draft, setDraft] = useState(homeContent);

  useEffect(() => {
    setDraft(homeContent);
  }, [homeContent]);

  function handleSave() {
    setHomeContent(draft);
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-serif">Edit Home</h1>

      <input
        value={draft.hero.title}
        onChange={(e) =>
          setDraft({
            ...draft,
            hero: {
              ...draft.hero,
              title: e.target.value,
            },
          })
        }
        className="border p-2 w-full"
      />

      <input
        value={draft.hero.subtitle}
        onChange={(e) =>
          setDraft({
            ...draft,
            hero: {
              ...draft.hero,
              subtitle: e.target.value,
            },
          })
        }
        className="border p-2 w-full"
      />

      <input
        value={draft.hero.image}
        onChange={(e) =>
          setDraft({
            ...draft,
            hero: {
              ...draft.hero,
              image: e.target.value,
            },
          })
        }
        className="border p-2 w-full"
      />

      <button
        onClick={handleSave}
        className="px-5 py-2 bg-black text-white rounded-md hover:opacity-80"
      >
        Spara ändringar
      </button>
    </div>
  );
}
