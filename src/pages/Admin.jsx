import { Outlet, Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="min-h-screen flex">
      <div className="w-64 p-6 border-r">
        <Link to="/admin/home">Home</Link>
        <br />
        <Link to="/admin/event">Events</Link>
        <br />
        <Link to="/admin/shop">Shop</Link>
        <br />
      </div>

      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}
