'use client';
import React, { useState } from 'react';
import { Shield, Search, AlertTriangle, CheckCircle, Info, Upload, BarChart3, Globe } from 'lucide-react';

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [image, setImage] = useState(null);

  // Mock data for the UI - You will replace this with real Gemini API data on the 18th!
  const mockClaims = [
    { text: "Recent data suggests a 40% increase in regional energy costs.", status: "neutral", reason: "Verified by local utility reports, though context varies by city." },
    { text: "Government officials are planning an immediate total blackout.", status: "false", reason: "This is a recurring viral hoax with no official basis." },
    { text: "Renewable energy projects are currently at an all-time high.", status: "true", reason: "Confirmed by the International Energy Agency 2024 report." }
  ];

  const handleVerify = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center mb-10 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <Shield className="text-blue-500 w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Verify<span className="text-blue-500">AI</span></h1>
        </div>
        <div className="flex gap-4">
          <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> Gemini Pro Enabled
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Input & Multimodal (6 Units) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Search className="w-5 h-5 text-blue-400" /> Analysis Hub
            </h2>
            
            <textarea
              className="w-full h-40 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="Paste news article, social media post, or claim here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {/* Feature 1: Multimodal Upload Zone */}
            <div className="mt-4 border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all group bg-slate-900/30">
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setImage(e.target.files[0])} 
                className="hidden" 
                id="image-upload" 
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-slate-500 group-hover:text-blue-400 transition-colors" />
                <p className="text-sm text-slate-400">Scan screenshots or images for deep analysis</p>
                {image && <p className="text-blue-400 text-xs mt-2 font-mono">{image.name}</p>}
              </label>
            </div>

            <button
              onClick={handleVerify}
              disabled={isAnalyzing}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex justify-center items-center gap-2"
            >
              {isAnalyzing ? "Gemini is thinking..." : "Run Intelligence Check"}
            </button>
          </div>

          {/* Feature 4: Claim-by-Claim Breakdown */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 text-white">Claim Breakdown</h2>
            <div className="space-y-3 leading-relaxed">
              {mockClaims.map((claim, i) => (
                <span 
                  key={i} 
                  className={`inline-block px-1 rounded cursor-help transition-colors ${
                    claim.status === 'false' ? 'bg-red-500/20 border-b-2 border-red-500' : 
                    claim.status === 'true' ? 'bg-green-500/20 border-b-2 border-green-500' : 
                    'bg-yellow-500/20 border-b-2 border-yellow-500'
                  }`}
                  title={claim.reason}
                >
                  {claim.text}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visualizers & Sources (5 Units) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Feature 3: Echo Chamber Visualizer */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <BarChart3 className="w-5 h-5 text-purple-400" /> Propaganda Map
            </h2>
            <div className="relative w-full h-48 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                   style={{backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
              
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Sensational</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Objective</span>
              <span className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Left Bias</span>
              <span className="absolute right-2 top-1/2 rotate-90 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Right Bias</span>
              
              <div 
                className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-1000"
                style={{ left: isAnalyzing ? '50%' : '75%', top: isAnalyzing ? '50%' : '30%' }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center italic text-balance">The dot represents where this content falls on the emotional and political spectrum.</p>
          </div>

          {/* Feature 2: Source Credibility Sidebar */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Globe className="w-5 h-5 text-green-400" /> Credible Sources
            </h2>
            <div className="space-y-3">
              {[
                { site: 'Reuters Fact Check', type: 'Official', trust: 'High' },
                { site: 'Associated Press (AP)', type: 'News', trust: 'High' },
                { site: 'Local Energy Report', type: 'Database', trust: 'Med' }
              ].map((source, i) => (
                <div key={i} className="bg-slate-900/50 p-3 rounded-xl border border-slate-700 flex justify-between items-center group hover:bg-slate-700/30 transition-all cursor-pointer">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{source.site}</h4>
                    <p className="text-[10px] text-slate-500">{source.type} Source</p>
                  </div>
                  <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">{source.trust}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}