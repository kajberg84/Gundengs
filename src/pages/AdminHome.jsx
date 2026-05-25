export default function AdminHome({ homeContent, setHomeContent }) {
  function update(path, value) {
    const keys = path.split(".");

    setHomeContent((prev) => {
      const copy = structuredClone(prev);

      let obj = copy;

      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;

      return copy;
    });
  }

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-serif">Edit Home Page</h1>

      {/* HERO */}
      <div className="space-y-3">
        <h2 className="font-serif text-xl">Hero</h2>

        <input
          value={homeContent.hero.kicker}
          onChange={(e) => update("hero.kicker", e.target.value)}
          placeholder="Kicker"
          className="border p-2 w-full"
        />

        <input
          value={homeContent.hero.title}
          onChange={(e) => update("hero.title", e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />

        <input
          value={homeContent.hero.subtitle}
          onChange={(e) => update("hero.subtitle", e.target.value)}
          placeholder="Subtitle"
          className="border p-2 w-full"
        />
      </div>

      {/* SECTIONS */}
      <div className="space-y-3">
        <h2 className="font-serif text-xl">Sections</h2>

        <input
          value={homeContent.eventsTitle}
          onChange={(e) => update("eventsTitle", e.target.value)}
          placeholder="Events title"
          className="border p-2 w-full"
        />

        <input
          value={homeContent.shopTitle}
          onChange={(e) => update("shopTitle", e.target.value)}
          placeholder="Shop title"
          className="border p-2 w-full"
        />

        <input
          value={homeContent.shopLinkText}
          onChange={(e) => update("shopLinkText", e.target.value)}
          placeholder="Shop link text"
          className="border p-2 w-full"
        />
      </div>

      {/* ABOUT */}
      <div className="space-y-3">
        <h2 className="font-serif text-xl">About</h2>

        <input
          value={homeContent.about.title}
          onChange={(e) => update("about.title", e.target.value)}
          className="border p-2 w-full"
        />

        <textarea
          value={homeContent.about.text}
          onChange={(e) => update("about.text", e.target.value)}
          className="border p-2 w-full"
        />

        <input
          value={homeContent.about.image}
          onChange={(e) => update("about.image", e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <p className="text-sm opacity-60">
        Alla ändringar sparas automatiskt (via App state + localStorage)
      </p>
    </div>
  );
}
