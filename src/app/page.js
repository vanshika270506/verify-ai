'use client';
import React, { useState } from 'react';
import { Shield, Search, Upload, BarChart3, MessageCircle, Languages } from 'lucide-react';

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [language, setLanguage] = useState('English');
  const [score, setScore] = useState(0);

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
      
      {/* CSS INJECTION FOR THE MOVING WAVE */}
      <style jsx global>{`
        @keyframes waveMove {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-10px) translateY(15px); }
          100% { transform: translateX(0) translateY(0); }
        }
        .neon-wave {
          animation: waveMove 8s ease-in-out infinite;
          filter: blur(40px);
        }
      `}</style>
      
      {/* --- GLOBAL NEON PURPLE MOVING WAVE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Glow Spot 1 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        
        {/* The Animated SVG Wave */}
        <svg className="absolute bottom-0 w-full h-[60%] opacity-40 neon-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(168, 85, 247, 0.3)" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <nav className="flex justify-between items-center mb-10 border-b border-purple-500/20 pb-5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Shield className="text-purple-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <h1 className="text-2xl font-bold tracking-tight text-white italic">Verify<span className="text-purple-500">AI</span></h1>
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
              </select>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-purple-500/20 shadow-xl backdrop-blur-xl">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <Search className="w-5 h-5 text-purple-400" /> Analysis Hub
              </h2>
              
              <textarea
                className="w-full h-40 bg-black/60 border border-purple-500/30 rounded-xl p-4 text-slate-200 focus:ring-2 focus:ring-purple-600 outline-none"
                placeholder="Awaiting signal for deep scan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                onClick={handleVerify}
                className="w-full mt-6 bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                {isAnalyzing ? "Processing..." : "Run Intelligence Check"}
              </button>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-purple-500/10 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-white">Claim Breakdown</h2>
              <div className="h-20 flex items-center justify-center text-slate-500 italic text-sm">
                No active threats detected.
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Credibility Index */}
            <div className="bg-black/60 rounded-3xl border border-purple-500/30 p-8 flex flex-col items-center backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-8 text-center">Credibility Index</h2>
              
              <div className="relative flex items-center justify-center">
                <svg className="w-40 h-40 transform -rotate-90 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
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
                <span className="absolute text-4xl font-black text-white">{score}%</span>
              </div>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Virality Risk
              </h2>
              <div className="h-4 w-full bg-black/60 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 w-1/3" />
                <div className="h-full bg-yellow-500 w-1/3" />
                <div className="h-full bg-red-500 w-1/3" />
              </div>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-purple-500/20 text-center">
               <BarChart3 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Propaganda Mapping Active</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}