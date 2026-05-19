import "./App.css";
import { useEffect, useState } from "react";
import eventContent from "./content/eventContent";
import homeContentData from "./content/homeContent";
import shopContentData from "./content/shopContent";

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

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  const [homeContent, setHomeContent] = useState(() => {
    const saved = localStorage.getItem("homeContent");
    return saved ? JSON.parse(saved) : homeContentData;
  });

  useEffect(() => {
    localStorage.setItem("homeContent", JSON.stringify(homeContent));
  }, [homeContent]);

  const [shopItems, setShopItems] = useState(() => {
    const saved = localStorage.getItem("shopItems");
    return saved ? JSON.parse(saved) : shopContentData.items;
  });

  useEffect(() => {
    localStorage.setItem("shopItems", JSON.stringify(shopItems));
  }, [shopItems]);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cart={cart}
          setCart={setCart}
        />

        <Routes>
          <Route
            path="/"
            element={<Home homeContent={homeContent} events={events} />}
          />

          <Route
            path="/event"
            element={<Eventspage events={events} setEvents={setEvents} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/galleri" element={<Galleri />} />

          <Route
            path="/shop"
            element={
              <Shop
                shopItems={shopItems}
                cart={cart}
                setCart={setCart}
                setShopItems={setShopItems}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin"
            element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
          >
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

            <Route
              path="shop"
              element={
                <AdminShop shopItems={shopItems} setShopItems={setShopItems} />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
