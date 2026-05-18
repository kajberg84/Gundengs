export default function EventsPage({ events }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-serif mb-6">Events</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="p-6 bg-[#efe7e2] rounded-xl">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.short}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
