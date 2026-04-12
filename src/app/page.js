'use client';
import React, { useState } from 'react';
import { Shield, Search, Upload, BarChart3, Globe, MessageCircle, Languages, AlertTriangle } from 'lucide-react';

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('English');

  const mockClaims = [
    { text: "Recent data suggests a 40% increase in regional energy costs.", status: "neutral", reason: "Verified by local utility reports." },
    { text: "Government officials are planning an immediate total blackout.", status: "false", reason: "This is a recurring viral hoax with no official basis." }
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
        
        <div className="flex items-center gap-4">
          {/* Feature: Language Toggle Shell */}
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <Languages className="w-4 h-4 text-blue-400" />
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
          <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 hidden md:block">
             Gemini Pro Active
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Search className="w-5 h-5 text-blue-400" /> Analysis Hub
            </h2>
            
            <textarea
              className="w-full h-40 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder={`Paste news in ${language} here...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="mt-4 border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 bg-slate-900/30">
              <input type="file" accept="image/*" className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                <p className="text-sm text-slate-400">Upload screenshot for Vision Analysis</p>
              </label>
            </div>

            <button
              onClick={handleVerify}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all"
            >
              {isAnalyzing ? "Processing..." : "Run Intelligence Check"}
            </button>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
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
          
          {/* Feature: WhatsApp Risk Meter Shell */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Virality Risk
            </h2>
            <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden flex">
              <div className="h-full bg-green-500 w-1/3" />
              <div className="h-full bg-yellow-500 w-1/3" />
              <div className="h-full bg-red-500 w-1/3 border-l-4 border-slate-900" />
            </div>
            <div className="flex justify-between text-[10px] mt-2 text-slate-500 font-bold uppercase">
              <span>Low Risk</span>
              <span>Potential Hoax</span>
              <span>High Danger</span>
            </div>
            <p className="mt-4 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
              <AlertTriangle className="w-3 h-3 inline mr-1 text-yellow-500" /> 
              Patterns suggest this is designed to trigger emotional sharing.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <BarChart3 className="w-5 h-5 text-purple-400" /> Propaganda Map
            </h2>
            <div className="relative w-full h-32 bg-slate-900 rounded-xl border border-slate-700">
               <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_cyan]" style={{ left: '70%', top: '30%' }} />
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Globe className="w-5 h-5 text-green-400" /> Sources Found
            </h2>
            <div className="text-xs text-slate-500 italic text-center">API integration pending for live sourcing...</div>
          </div>

        </div>
      </div>
    </div>
  );
}