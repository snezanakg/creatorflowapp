import { useState } from "react";

export default function Generator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) {
      setOutput("⚠️ Please enter a topic first.");
      return;
    }

    // Mock AI response
    const ideas = [
      `Here's a creative post idea about "${input}": Share your process, not just results.`,
      `Turn "${input}" into a carousel showing before & after steps.`,
      `Create a short video summarizing key tips about "${input}".`,
      `Ask your followers their opinion about "${input}" — instant engagement.`,
      `Write a mini-guide or checklist on "${input}" in your caption.`,
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setOutput(randomIdea);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard ✨");
  };

  return (
    <div className="p-8 text-gray-200">
      <h2 className="text-3xl font-bold mb-6">AI Content Generator 🤖</h2>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4 max-w-2xl">
        <textarea
          className="bg-gray-800 text-gray-200 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
          placeholder="Enter your topic or idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold transition"
          >
            Generate
          </button>
          {output && (
            <button
              onClick={handleCopy}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition"
            >
              Copy
            </button>
          )}
        </div>

        {output && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg text-gray-100 border border-gray-700">
            <p>{output}</p>
          </div>
        )}
      </div>
    </div>
  );
}
