import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm" style={{background:"#101826", border:"1px solid rgba(255,255,255,.08)", borderRadius:12, padding:20}}>
        <h2 className="text-2xl font-bold mb-2">Login (placeholder)</h2>
        <p className="opacity-70 mb-6">We’ll wire Firebase auth next.</p>
        <Link to="/app" className="block text-center px-4 py-2 rounded-md" style={{background:"#4A8BFF", color:"#0B0F17", fontWeight:600}}>
          Continue to App
        </Link>
      </div>
    </div>
  );
}
