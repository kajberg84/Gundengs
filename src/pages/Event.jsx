import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Följ oss till gården",
    date: "24/2",
    short: "Upplev gården och djuren på plats.",
    long: "Följ med oss till gården och se hur vardagen ser ut. Vi visar runt, berättar om djuren och låter dig komma nära verksamheten.",
  },
  {
    id: 2,
    title: "Kouppsläpp",
    date: "12/4",
    short: "Se korna springa ut på bete för första gången.",
    long: "En av årets mest uppskattade händelser. Kom och se när korna släpps ut på grönt bete efter vintern.",
  },
  {
    id: 3,
    title: "Öppet gårdsbesök",
    date: "Maj",
    short: "Kom och hälsa på djuren och oss.",
    long: "En öppen dag på gården där du kan träffa oss, djuren och lära dig mer om verksamheten.",
  },
];

export default function EventsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#efe2e2] dark:bg-zinc-900 text-[#2c2c2c] dark:text-gray-100 transition-colors">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif mb-2">Events</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Klicka på ett event för att läsa mer
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelected(event)}
            className="
              cursor-pointer
              bg-[#efe7e2]
              dark:bg-zinc-800
              p-6 rounded-xl
              hover:scale-[1.02]
              transition
              shadow-sm
            "
          >
            <h3 className="font-semibold text-lg">{event.title}</h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {event.date}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              {event.short}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL / DETAILS */}
      {selected && (
        <div
          className="
            fixed inset-0
            bg-black/50
            flex items-center justify-center
            p-6
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="
              bg-[#efe7e2]
              dark:bg-zinc-800
              max-w-lg w-full
              p-6 rounded-xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-serif">{selected.title}</h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {selected.date}
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {selected.long}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="
                mt-6 px-4 py-2
                bg-black dark:bg-white
                text-white dark:text-black
                rounded-md
              "
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
