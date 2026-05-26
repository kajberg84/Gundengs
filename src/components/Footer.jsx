import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      bg-[#efe2d9]
      dark:bg-zinc-950
      border-t
      border-black/10
      dark:border-white/10
      mt-20
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-16
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-10
      "
      >
        {/* LEFT */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-serif">Gundengs Kreativa</h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Kreativ studio för events, design och unika produkter.
          </p>
        </div>

        {/* RIGHT - SOCIALS */}
        <div className="flex gap-6 text-2xl">
          {/* Instagram (gradient-like pink) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition text-pink-500"
          >
            <FaInstagram />
          </a>

          {/* Facebook (blue) */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition text-blue-600"
          >
            <FaFacebook />
          </a>

          {/* Email */}
          <a
            href="mailto:kontakt@example.com"
            className="hover:scale-110 transition text-gray-700 dark:text-gray-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div
        className="
        border-t
        border-black/10
        dark:border-white/10
        py-5
        text-center
        text-sm
        text-gray-500
        dark:text-gray-400
      "
      >
        © {new Date().getFullYear()} Gundengs Kreativa
      </div>
    </footer>
  );
}
