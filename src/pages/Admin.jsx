import { Outlet, Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Admin({ isAdmin, setIsAdmin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "kossa" && password === "123") {
      setIsAdmin(true);
    } else {
      alert("Fel användarnamn eller lösenord");
    }
  }

  function logout() {
    setIsAdmin(false);
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#efe2d9] dark:bg-zinc-900">
        <div className="p-6 border rounded-xl space-y-3 w-80 bg-white dark:bg-zinc-800">
          <h1 className="text-xl font-bold">Admin Login</h1>

          <input
            placeholder="Username"
            className="border p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="bg-black text-white w-full py-2 rounded hover:opacity-80"
          >
            Logga in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#efe2d9] dark:bg-zinc-900">
      <div className="flex items-center gap-6 px-6 py-4 border-b dark:border-white/10">
        <Link to="/admin/home">Home</Link>
        <Link to="/admin/event">Events</Link>
        <Link to="/admin/shop">Shop</Link>
        <Link to="/admin/about">About</Link>
        <Link to="/admin/galleri">Galleri</Link>

        <button
          onClick={logout}
          className="ml-auto text-red-500 hover:opacity-70"
        >
          Logga ut
        </button>
      </div>

      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}
