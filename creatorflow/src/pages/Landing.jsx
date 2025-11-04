import { Link } from "react-router-dom";

export default function Landing(){
  return (
    <div className="min-h-screen grid place-items-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">CreatorFlow</h1>
        <p className="mt-4 opacity-80 text-lg">Plan content. Create faster. Grow smarter.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/login" className="px-5 py-3 rounded-md" style={{background:"#4A8BFF", color:"#0B0F17", fontWeight:600}}>Get Started</Link>
          <Link to="/app" className="px-5 py-3 rounded-md border border-white/20">Open Demo</Link>
        </div>
      </div>
    </div>
  );
}
