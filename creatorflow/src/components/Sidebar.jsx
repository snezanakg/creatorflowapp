import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/" },
     { name: "Generator", path: "/generator" },
    { name: "Templates", path: "/templates" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-60 h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-400 border-r border-gray-800 flex flex-col">
      <div className="text-center py-6 font-semibold text-purple-400 text-lg">
        ⚙️ Menu
      </div>
      <nav className="flex flex-col gap-2 px-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
