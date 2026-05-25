import { useState } from "react";

export default function EventsPage({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  return (
    <div className="text-[#2c2c2c] dark:text-gray-100 transition-colors">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400">
          Kreativa möten & upplevelser
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mt-4">Våra Events</h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Upptäck kommande workshops, marknader och kreativa träffar.
        </p>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {sortedEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="
                text-left
                bg-[#efe7e2]
                dark:bg-zinc-800
                rounded-2xl
                overflow-hidden
                hover:scale-[1.02]
                transition
              "
            >
              <img
                src={event.image}
                alt={event.title}
                className="
                  w-full
                  h-56
                  object-cover
                "
              />

              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {event.date}
                </p>

                <h3 className="font-serif text-xl mt-2">{event.title}</h3>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {event.short}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}

      {selectedEvent && (
        <div
          className="
            fixed inset-0
            bg-black/60
            flex items-center justify-center
            p-6
            z-50
          "
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="
              bg-white
              dark:bg-zinc-900
              rounded-2xl
              overflow-hidden
              max-w-3xl
              w-full
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="
                w-full
                h-[350px]
                object-cover
              "
            />

            <div className="p-8">
              <p className="text-sm text-gray-500">{selectedEvent.date}</p>

              <h2 className="text-3xl font-serif mt-2">
                {selectedEvent.title}
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-300">
                {selectedEvent.description}
              </p>

              <button
                onClick={() => setSelectedEvent(null)}
                className="
                  mt-8
                  px-5 py-3
                  bg-[#e3d3c2]
                  dark:bg-zinc-700
                  rounded-md
                "
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
