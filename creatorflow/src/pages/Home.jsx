import React, { useState, useEffect } from "react";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const templates = {
  youtube: "Write a YouTube video script about ",
  blog: "Write a detailed blog post about ",
  instagram: "Write an engaging Instagram caption about ",
  linkedin: "Write a professional LinkedIn post about ",
};

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState("youtube");
  const [history, setHistory] = useState([]);

  // Load saved history when the app starts
  useEffect(() => {
    const saved = localStorage.getItem("creatorflow_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Save history whenever it changes
  useEffect(() => {
    localStorage.setItem("creatorflow_history", JSON.stringify(history));
  }, [history]);

  const generateContent = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await client.responses.create({
        model: "gpt-4.1-mini",
        input: templates[template] + input,
      });
      const generatedText = response.output[0].content[0].text;
      setOutput(generatedText);

      const newEntry = {
        id: Date.now(),
        type: template,
        prompt: input,
        result: generatedText,
        date: new Date().toLocaleString(),
      };
      setHistory([newEntry, ...history]);
    } catch (err) {
      console.error("Error:", err);
      setOutput("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-8">
      <img src="/favicon.png" alt="CreatorFlow Logo" className="w-20 mb-4" />
      <h1 className="text-4xl font-bold mb-4">CreatorFlow AI</h1>
      <p className="text-gray-400 mb-6 text-center">
        Select a content type, describe your idea, and let AI create it.
      </p>

      {/* Template selector */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {Object.keys(templates).map((key) => (
          <button
            key={key}
            onClick={() => setTemplate(key)}
            className={`px-4 py-2 rounded-lg ${
              template === key ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <textarea
        className="w-full max-w-2xl p-4 rounded-xl bg-gray-800 text-white mb-4 outline-none resize-none h-32"
        placeholder={`Describe your ${template} idea...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={generateContent}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
      >
        {loading ? "Generating..." : "Generate Content"}
      </button>

      {/* Output Section */}
      {output && (
        <div className="w-full max-w-2xl mt-6 bg-gray-800 p-4 rounded-xl whitespace-pre-wrap relative">
          <h2 className="font-semibold text-lg mb-2">✨ Generated Output</h2>
          <p>{output}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText(output);
                alert("✅ Copied to clipboard!");
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Copy
            </button>

            <button
              onClick={() => {
                const blob = new Blob([output], { type: "text/plain" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "creatorflow-output.txt";
                link.click();
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Download .txt
            </button>
          </div>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <div className="w-full max-w-3xl mt-10 bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">🕓 History</h2>
          <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-4 rounded-xl flex flex-col gap-2"
              >
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-blue-400 font-medium">
                  Type: {item.type.toUpperCase()}
                </p>
                <p className="text-gray-300">
                  <strong>Prompt:</strong> {item.prompt}
                </p>
                <p className="text-gray-100 whitespace-pre-wrap">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              if (confirm("Clear all history?")) setHistory([]);
            }}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
}
