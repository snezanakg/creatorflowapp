export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <h1 className="text-lg font-bold text-white tracking-wide">CreatorFlow ⚡</h1>
      <div className="flex items-center gap-4 text-gray-400">
        <button className="hover:text-white transition">Docs</button>
        <button className="hover:text-white transition">Support</button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>
    </nav>
  );
}
