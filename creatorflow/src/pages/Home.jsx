
import React, { useState } from "react";
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

  const generateContent = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await client.responses.create({
        model: "gpt-4.1-mini",
        input: templates[template] + input,
      });
      setOutput(response.output[0].content[0].text);
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

      {output && (
        <div className="w-full max-w-2xl mt-6 bg-gray-800 p-4 rounded-xl whitespace-pre-wrap">
          <h2 className="font-semibold text-lg mb-2">✨ Generated Output</h2>
          {output}
        </div>
      )}
    </div>
  );
}
