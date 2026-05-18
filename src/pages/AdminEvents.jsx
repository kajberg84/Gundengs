import { useState } from "react";

export default function AdminEvents({ events, setEvents }) {
  const [editMode, setEditMode] = useState(true);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  function addEvent() {
    const newEvent = {
      id: Date.now(),
      title,
      date,
      short: text,
      long: text,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setText("");
  }

  function removeEvent(id) {
    setEvents(events.filter((e) => e.id !== id));
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-serif mb-6">Admin Events</h1>

      <div className="space-y-3 max-w-md mb-10">
        <input
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Datum"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={addEvent}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Lägg till event
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="p-6 bg-[#efe7e2] rounded-xl relative">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.short}</p>

            <button
              onClick={() => removeEvent(event.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
