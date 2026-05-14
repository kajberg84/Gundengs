import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#f7f2ed] text-[#6f5c4f]">
      {/* Navbar */}
      <header className="border-b border-[#e6dcd2]">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-[#d8c9bb] flex items-center justify-center bg-white">
              <span className="text-2xl font-serif">GK</span>
            </div>

            <div>
              <h1 className="font-serif text-xl">Gundengs</h1>
              <p className="text-xs tracking-[0.2em] uppercase">
                Kreativa produkter
              </p>
            </div>
          </div>

          {/* Links */}
          <ul className="hidden md:flex gap-10 text-sm">
            <li>
              <a href="#" className="hover:opacity-70">
                Hem
              </a>
            </li>
            <li>
              <a href="#" className="underline underline-offset-4">
                Om Gundengs
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Butik
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Galleri
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Kontakt
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 text-xl">
            <button>⌕</button>
            <button>🛒</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="bg-[#efe7df] border border-[#d8c9bb] rounded-2xl aspect-square flex items-center justify-center">
          <span className="text-7xl">🐔</span>
        </div>

        {/* Content */}
        <div>
          <p className="uppercase tracking-[0.3em] text-xs mb-4">Om Gundengs</p>

          <h2 className="font-serif text-5xl leading-tight text-[#5d4b3f]">
            Kreativitet med värme och omtanke
          </h2>

          <p className="mt-6 leading-8 text-[#7a685b]">
            Gundengs är ett litet kreativt företag med hjärtat på landet. Här
            skapas handgjorda produkter, trycksaker och inredning med fokus på
            kvalitet och personliga detaljer.
          </p>

          <button className="mt-8 bg-[#dcc8b5] hover:bg-[#cfb59f] transition px-8 py-4 rounded-xl text-sm tracking-wide">
            Läs mer om mig →
          </button>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center text-sm">
            <div>
              <div className="text-3xl mb-2">♡</div>
              <p>Skapat med kärlek</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🌿</div>
              <p>Hållbara material</p>
            </div>

            <div>
              <div className="text-3xl mb-2">✋</div>
              <p>Handgjort</p>
            </div>

            <div>
              <div className="text-3xl mb-2">📍</div>
              <p>Från landet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#f2ebe4] rounded-3xl p-8 border border-[#e3d7cb]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] mb-2">
                I butiken
              </p>

              <h3 className="font-serif text-4xl">Populära produkter</h3>
            </div>

            <button className="text-sm">Se alla produkter →</button>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="aspect-square rounded-2xl border border-[#d8c9bb] bg-[#efe7df] flex items-center justify-center text-5xl">
                  🖼️
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Produkt {item}</h4>

                  <p className="text-sm mt-1">299 kr</p>

                  <button className="mt-4 w-full bg-[#dcc8b5] hover:bg-[#cfb59f] transition py-3 rounded-lg text-sm">
                    Lägg i varukorg
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Inredning",
            "Presenter",
            "Papper & Tryck",
            "Säsong & Högtider",
          ].map((category) => (
            <div
              key={category}
              className="bg-[#f2ebe4] border border-[#e3d7cb] rounded-2xl p-6 hover:translate-y-[-4px] transition"
            >
              <div className="text-4xl mb-4">✦</div>

              <h4 className="font-serif text-xl">{category}</h4>

              <p className="mt-2 text-sm leading-6">
                Lorem ipsum dolor sit amet.
              </p>

              <button className="mt-6 text-sm">Läs mer →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[#e6dcd2]">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] mb-3">
              Inspiration & nyheter
            </p>

            <h3 className="font-serif text-4xl">Prenumerera på nyhetsbrevet</h3>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="bg-white border border-[#d8c9bb] rounded-xl px-5 py-4 min-w-[280px] outline-none"
            />

            <button className="bg-[#dcc8b5] hover:bg-[#cfb59f] transition px-6 rounded-xl">
              Prenumerera
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e6dcd2] py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <h4 className="font-serif text-2xl">Gundengs</h4>

            <p className="mt-2">© 2025 Alla rättigheter reserverade</p>
          </div>

          <div className="flex gap-10">
            <div>
              <h5 className="font-medium mb-3">Kundservice</h5>
              <ul className="space-y-2">
                <li>Leverans</li>
                <li>Returer</li>
                <li>Kontakt</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-3">Följ mig</h5>
              <ul className="space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
