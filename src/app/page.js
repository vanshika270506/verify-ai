'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Search, Upload, BarChart3, Globe, MessageCircle, Languages, AlertTriangle, Activity } from 'lucide-react';

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState(0); // This is your missing Credibility Score
  const [analysisData, setAnalysisData] = useState(null);

  // This function simulates the Gemini API call you'll write on the 18th
  const handleVerify = () => {
    if (!input) return alert("Please enter text first!");
    
    setIsAnalyzing(true);
    
    // Simulate API Delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setScore(Math.floor(Math.random() * 40) + 20); // Simulating a low score for fake news
      setAnalysisData({
        risk: "High",
        bias: "Sensationalized",
        sources: 3
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center mb-10 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <Shield className="text-blue-500 w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Verify<span className="text-blue-500">AI</span></h1>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-1 rounded-full text-blue-400 text-xs font-mono animate-pulse">
          SYSTEM_READY // GEMINI_1.5_PRO
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Input */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Activity className="w-5 h-5 text-blue-400" /> Neural Input Engine
            </h2>
            
            <textarea
              className="w-full h-48 bg-black/40 border border-slate-700 rounded-2xl p-4 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              placeholder="Paste news content here for real-time verification..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={handleVerify}
              disabled={isAnalyzing}
              className={`w-full mt-6 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-3 ${
                isAnalyzing ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing via Gemini...
                </>
              ) : "Execute Deep Scan"}
            </button>
          </div>

          {/* Dynamic Evidence Panel */}
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <h2 className="text-lg font-semibold mb-4 text-white">Scan Results</h2>
            {analysisData ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                  "The provided text contains patterns consistent with {analysisData.bias.toLowerCase()} content. Cross-referencing suggests limited verified support."
                </p>
              </div>
            ) : (
              <div className="text-slate-600 italic">Waiting for input scan...</div>
            )}
          </div>
        </div>

        {/* Right Column: Credibility & Charts */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* FEATURE: The Credibility Score Gauge */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Trust Index</h2>
            
            <div className="relative inline-flex items-center justify-center">
              {/* SVG Circle Gauge */}
              <svg className="w-48 h-48 transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                <circle 
                  cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                  strokeDasharray={553}
                  strokeDashoffset={553 - (553 * score) / 100}
                  className={`transition-all duration-1000 ease-out ${score > 70 ? 'text-green-500' : score > 40 ? 'text-yellow-500' : 'text-red-500'}`} 
                />
              </svg>
              <span className="absolute text-5xl font-black text-white">{score}%</span>
            </div>
            
            <p className="mt-4 text-sm font-medium text-slate-400">
              {score === 0 ? "Pending Scan" : score > 70 ? "Highly Credible" : "Questionable Accuracy"}
            </p>
          </div>

          {/* WhatsApp Risk Shell */}
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                <MessageCircle className="w-4 h-4 text-green-500" /> Viral Risk
               </h2>
               {analysisData && <span className="text-xs text-red-400 animate-pulse font-bold">!!! {analysisData.risk}</span>}
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${analysisData ? 'w-[85%] bg-red-500' : 'w-0'}`} 
              />
            </div>
          </div>

          {/* Source Counter */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-blue-500">{analysisData ? analysisData.sources : 0}</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold">Ref Sources</div>
             </div>
             <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-purple-500">{analysisData ? '92ms' : '--'}</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold">Latency</div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}