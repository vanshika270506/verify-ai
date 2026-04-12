'use client';
import React, { useState } from 'react';
import { Shield, Search, Upload, BarChart3, Globe, MessageCircle, Languages, Activity } from 'lucide-react';

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [language, setLanguage] = useState('English');
  const [score, setScore] = useState(0);

  const mockClaims = [
    { text: "Recent data suggests a 40% increase in regional energy costs.", status: "neutral", reason: "Verified by local utility reports." },
    { text: "Government officials are planning an immediate total blackout.", status: "false", reason: "This is a recurring viral hoax with no official basis." }
  ];

  const handleVerify = () => {
    if (!input) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setScore(78); 
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-200 p-6 font-sans overflow-hidden">
      
      {/* --- GLOBAL NEON PURPLE MOVING WAVE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path fill="rgba(168, 85, 247, 0.2)" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z">
            <animate 
              attributeName="d" 
              dur="10s" 
              repeatCount="indefinite" 
              values="
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z;
                M0,250L48,220C96,190,192,130,288,140C384,150,480,230,576,240C672,250,768,190,864,160C960,130,1056,130,1152,150C1248,170,1344,210,1392,230L1440,250L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z;
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z
              " 
            />
          </path>
        </svg>
      </div>

      {/* Main Content (Z-10 to stay above background) */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <nav className="flex justify-between items-center mb-10 border-b border-purple-500/20 pb-5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Shield className="text-purple-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <h1 className="text-2xl font-bold tracking-tight text-white">Verify<span className="text-purple-500">AI</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-purple-500/30">
              <Languages className="w-4 h-4 text-purple-400" />
              <select 
                className="bg-transparent text-xs outline-none cursor-pointer text-slate-300"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <span className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
              Gemini Pro Active
            </span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-white">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-purple-500/20 shadow-xl backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <Search className="w-5 h-5 text-purple-400" /> Analysis Hub
              </h2>
              
              <textarea
                className="w-full h-40 bg-black/40 border border-purple-500/30 rounded-xl p-4 text-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder={`Paste content in ${language} for scanning...`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="mt-4 border-2 border-dashed border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/50 bg-black/20">
                <input type="file" accept="image/*" className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-purple-400/50" />
                  <p className="text-sm text-slate-400">Upload screenshot for Vision Analysis</p>
                </label>
              </div>

              <button
                onClick={handleVerify}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-900/40"
              >
                {isAnalyzing ? "Scanning Neural Patterns..." : "Execute Deep Scan"}
              </button>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 text-white">Claim Breakdown</h2>
              <div className="space-y-3">
                {mockClaims.map((claim, i) => (
                  <span key={i} className={`inline-block px-1 rounded border-b-2 ${claim.status === 'false' ? 'bg-red-500/10 border-red-500' : 'bg-yellow-500/10 border-yellow-500'}`}>
                    {claim.text}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Credibility Index Section (Now with dark glass effect) */}
            <div className="bg-black/60 rounded-3xl border border-purple-500/30 p-8 flex flex-col items-center backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-8">Credibility Index</h2>
              
              <div className="relative flex items-center justify-center">
                <svg className="w-40 h-40 transform -rotate-90 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  <circle cx="80" cy="80" r="70" stroke="#121212" strokeWidth="10" fill="transparent" />
                  <circle 
                    cx="80" cy="80" r="70" 
                    stroke="rgb(168, 85, 247)" 
                    strokeWidth="10" 
                    fill="transparent" 
                    strokeDasharray="439.8"
                    strokeDashoffset={439.8 - (439.8 * score) / 100}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <span className="absolute text-4xl font-bold text-white">{score}%</span>
              </div>
              <p className="mt-4 text-xs font-bold text-purple-300 uppercase tracking-tighter">
                {score > 0 ? 'Neural Signal Verified' : 'Awaiting Input...'}
              </p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Virality Risk
              </h2>
              <div className="h-4 w-full bg-black/40 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 w-1/3" />
                <div className="h-full bg-yellow-500 w-1/3" />
                <div className="h-full bg-red-500 w-1/3" />
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-md text-center">
               <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Propaganda Mapping Active</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}