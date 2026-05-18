import "./App.css";
import { useEffect, useState } from "react";
import eventContent from "./content/eventContent";
import homeContentData from "./content/homeContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Eventspage from "./pages/Event";
import About from "./pages/About";
import Galleri from "./pages/Galleri";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminHome from "./pages/AdminHome";
import AdminEvents from "./pages/AdminEvents";
import AdminShop from "./pages/AdminShop";

function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : eventContent.events;
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const [homeContent, setHomeContent] = useState(() => {
    const saved = localStorage.getItem("homeContent");
    return saved ? JSON.parse(saved) : homeContentData;
  });

  useEffect(() => {
    localStorage.setItem("homeContent", JSON.stringify(homeContent));
  }, [homeContent]);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#efe2d9] dark:bg-zinc-900 transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home homeContent={homeContent} />} />
          <Route
            path="/event"
            element={<Eventspage events={events} setEvents={setEvents} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/galleri" element={<Galleri />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />}>
            <Route
              path="home"
              element={
                <AdminHome
                  homeContent={homeContent}
                  setHomeContent={setHomeContent}
                />
              }
            />
            <Route
              path="event"
              element={<AdminEvents events={events} setEvents={setEvents} />}
            />
            <Route path="shop" element={<AdminShop />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
