import { Link } from "react-router-dom";

export default function Settings(){
  return (
    <div className="min-h-screen">
      <div className="h-14" style={{background:"#101826", borderBottom:"1px solid rgba(255,255,255,.08)"}}>
        <div className="h-full max-w-6xl mx-auto flex items-center justify-between px-4">
          <Link to="/app" className="font-extrabold tracking-tight">CreatorFlow</Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-2">Settings</h2>
        <p className="opacity-80">We’ll add billing & AI keys later.</p>
      </div>
    </div>
  );
}
