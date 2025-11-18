
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("creatorflowData")) || [];
    setItems(data);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("creatorflowData", JSON.stringify(updated));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Saved Content</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No saved content yet.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="border rounded p-4 mb-4 bg-white shadow">
            <p className="whitespace-pre-line mb-2">{item.text}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
