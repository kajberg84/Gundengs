import { useState } from "react";
import { Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, cart = [], setCart }) {
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  const cartCount = cart?.length ?? 0;

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function goToCheckout() {
    setOpenCart(false);
    navigate("/checkout");
  }

  return (
    <header className="py-3 border-b border-black/5 dark:border-white/10 transition-colors relative">
      <div className="max-w-6xl mx-auto px-6 flex items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/bilder/logotran.png"
            alt="logo"
            className="w-35 h-35 object-contain"
          />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex flex-1 justify-evenly text-sm">
          <Link to="/">Hem</Link>
          <Link to="/event">Event</Link>
          <Link to="/about">Om</Link>
          <Link to="/shop">Butik</Link>
          <Link to="/galleri">Galleri</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-6 relative">
          {/* DARK MODE */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* SEARCH */}
          <button>
            <Search size={20} />
          </button>

          {/* CART BUTTON */}
          <button className="relative" onClick={() => setOpenCart(!openCart)}>
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span
                className="
                absolute -top-2 -right-2
                text-[10px]
                bg-black dark:bg-white
                text-white dark:text-black
                rounded-full
                w-4 h-4
                flex items-center justify-center
              "
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* DROPDOWN */}
          {openCart && (
            <div
              className="
              absolute right-0 top-10
              w-80
              bg-white dark:bg-zinc-900
              shadow-2xl
              rounded-xl
              p-4
              z-50
            "
            >
              <h3 className="font-bold mb-3">Din kundkorg</h3>

              {cart.length === 0 ? (
                <p className="text-sm opacity-60">Kundkorgen är tom</p>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center">
                        <img
                          src={item.image}
                          className="w-10 h-10 object-cover rounded"
                        />

                        <div className="flex-1">
                          <p className="text-sm">{item.title}</p>
                          <p className="text-xs opacity-60">{item.price} kr</p>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-xs"
                        >
                          Ta bort
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* TOTAL */}
                  <div className="mt-4 border-t pt-3 flex justify-between text-sm font-bold">
                    <span>Totalt</span>
                    <span>{totalPrice} kr</span>
                  </div>

                  {/* CHECKOUT BUTTON */}
                  <button
                    onClick={goToCheckout}
                    className="
                      mt-4 w-full
                      bg-black text-white
                      dark:bg-white dark:text-black
                      py-2 rounded-lg
                      hover:opacity-80 transition
                    "
                  >
                    Gå till checkout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
