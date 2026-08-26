import "./App.css";

import { useEffect, useState } from "react";

import eventContent from "./content/eventContent";
import homeContentData from "./content/homeContent";
import shopContentData from "./content/shopContent";
import aboutContentData from "./content/aboutContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
import AdminAbout from "./pages/AdminAbout";
import AdminGalleri from "./pages/AdminGalleri";

function App() {
  // EVENTS
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : eventContent.events;
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // ADMIN
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  // HOME CONTENT
  const [homeContent, setHomeContent] = useState(() => {
    const saved = localStorage.getItem("homeContent");
    return saved ? JSON.parse(saved) : homeContentData;
  });

  useEffect(() => {
    localStorage.setItem("homeContent", JSON.stringify(homeContent));
  }, [homeContent]);

  // SHOP
  const [shopItems, setShopItems] = useState(() => {
    const saved = localStorage.getItem("shopItems");
    return saved ? JSON.parse(saved) : shopContentData.items;
  });

  useEffect(() => {
    localStorage.setItem("shopItems", JSON.stringify(shopItems));
  }, [shopItems]);

  // ABOUT
  const [aboutContent, setAboutContent] = useState(() => {
    const saved = localStorage.getItem("aboutContent");
    return saved ? JSON.parse(saved) : aboutContentData;
  });

  useEffect(() => {
    localStorage.setItem("aboutContent", JSON.stringify(aboutContent));
  }, [aboutContent]);

  // GALLERY
  const [galleryImages, setGalleryImages] = useState(() => {
    const saved = localStorage.getItem("galleryImages");

    if (saved) {
      return JSON.parse(saved);
    }

    // Om du vill ha några standardbilder första gången
    return [
      {
        id: 1,
        title: "Bild 1",
        description: "",
        image: "/bilder/logo.jpg",
      },
      {
        id: 2,
        title: "Bild 2",
        description: "",
        image: "/bilder/logo.jpg",
      },
      {
        id: 3,
        title: "Bild 3",
        description: "",
        image: "/bilder/logo.jpg",
      },
      {
        id: 4,
        title: "Bild 4",
        description: "",
        image: "/bilder/logo.jpg",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(galleryImages));
  }, [galleryImages]);

  // CART
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");

      if (!saved) return [];

      const parsed = JSON.parse(saved);

      return parsed.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: item.quantity || 1,
      }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const cleanCart = cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
      }));

      localStorage.setItem("cart", JSON.stringify(cleanCart));
    } catch (err) {
      console.error("Cart save failed", err);
    }
  }, [cart]);

  // DARK MODE
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
      <div
        className="
          min-h-screen
          bg-[#f5f1ee]
          dark:bg-zinc-900
          text-[#2c2c2c]
          dark:text-white
          transition-colors
        "
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cart={cart}
          setCart={setCart}
        />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                homeContent={homeContent}
                events={events}
                shopItems={shopItems}
              />
            }
          />

          {/* EVENT */}
          <Route
            path="/event"
            element={<Eventspage events={events} setEvents={setEvents} />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About aboutContent={aboutContent} />}
          />

          {/* GALLERI */}
          <Route
            path="/galleri"
            element={<Galleri galleryImages={galleryImages} />}
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <Shop shopItems={shopItems} cart={cart} setCart={setCart} />
            }
          />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
          >
            {/* ADMIN HOME */}
            <Route
              path="home"
              element={
                <AdminHome
                  homeContent={homeContent}
                  setHomeContent={setHomeContent}
                  events={events}
                  shopItems={shopItems}
                />
              }
            />

            {/* ADMIN ABOUT */}
            <Route
              path="about"
              element={
                <AdminAbout
                  aboutContent={aboutContent}
                  setAboutContent={setAboutContent}
                />
              }
            />

            {/* ADMIN EVENT */}
            <Route
              path="event"
              element={<AdminEvents events={events} setEvents={setEvents} />}
            />

            {/* ADMIN SHOP */}
            <Route
              path="shop"
              element={
                <AdminShop shopItems={shopItems} setShopItems={setShopItems} />
              }
            />

            {/* ADMIN GALLERI */}
            <Route
              path="galleri"
              element={
                <AdminGalleri
                  galleryImages={galleryImages}
                  setGalleryImages={setGalleryImages}
                />
              }
            />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
