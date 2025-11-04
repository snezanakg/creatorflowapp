
export default function Dashboard() {
  return (
    <div className="p-8 text-gray-200">
      <h2 className="text-3xl font-bold mb-6">Welcome back, Creator 👋</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white mb-2">Your Templates</h3>
          <p className="text-gray-400">Manage and edit your saved content.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
          <p className="text-gray-400">Check your growth and engagement stats.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white mb-2">AI Generator</h3>
          <p className="text-gray-400">Generate ideas and content fast.</p>
        </div>
      </div>
    </div>
  );
}
