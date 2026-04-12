'use client';
import React, { useState } from 'react';
import { Shield, Search, Upload, BarChart3, Globe, MessageCircle, Languages } from 'lucide-react';
// 1. IMPORT THE GEMINI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function VerifyAIDashboard() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [language, setLanguage] = useState('English');
  const [score, setScore] = useState(0);

  const mockClaims = [
    { text: "Recent data suggests a 40% increase in regional energy costs.", status: "neutral", reason: "Verified by local utility reports." },
    { text: "Government officials are planning an immediate total blackout.", status: "false", reason: "This is a recurring viral hoax with no official basis." }
  ];

  // 2. THE NEW, POWERFUL VERIFY FUNCTION
  const handleVerify = async () => {
    if (!input) {
      alert("Please enter some text to analyze!");
      return;
    }
    
    setIsAnalyzing(true);

    try {
      // Initialize Gemini using the key from your .env.local file
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      // The Master Prompt forcing a JSON response
      const prompt = `
        You are an elite misinformation detection engine. Analyze the following text: "${input}"
        
        Respond ONLY with a valid JSON object matching this exact structure, nothing else:
        {
          "credibility_score": [A number from 0 to 100 based on factual accuracy],
          "virality_risk": ["Low", "Med", or "High" based on emotional panic language]
        }
      `;

      // Call the API
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textResponse = response.text();
      
      // Clean up the response in case Gemini adds markdown like ```json ... ```
      const cleanedJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
      
      // Parse the data and update your UI!
      const data = JSON.parse(cleanedJson);
      
      setScore(data.credibility_score);
      // Later you can add states to handle the virality_risk too!

    } catch (error) {
      console.error("Error analyzing text:", error);
      alert("Analysis failed. Make sure your API key is in .env.local!");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-slate-200 p-6 font-sans overflow-hidden">
      
      {/* THE NEON PURPLE WAVE BACKGROUND (UNTOUCHED) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ribbon-flow {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .bg-canvas { position: fixed; inset: 0; z-index: 0; background: #000000; overflow: hidden; pointer-events: none; }
          .wave-container { position: absolute; bottom: 0; width: 200vw; height: 65vh; display: flex; }
          .ribbon-back { animation: ribbon-flow 35s linear infinite; opacity: 0.5; filter: blur(12px); }
          .ribbon-mid { animation: ribbon-flow 25s linear infinite; opacity: 0.7; filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5)); }
          .ribbon-front { animation: ribbon-flow 45s linear infinite; opacity: 0.9; filter: drop-shadow(0 0 10px rgba(192, 132, 252, 0.8)); }
          .svg-pane { width: 100vw; height: 100%; flex-shrink: 0; }
        `
      }} />

      <div className="bg-canvas">
        <div className="wave-container ribbon-back">
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,200 C360,400 360,0 720,200 C1080,400 1080,0 1440,200 L1440,400 L0,400 Z" fill="rgba(147, 51, 234, 0.15)" /></svg>
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,200 C360,400 360,0 720,200 C1080,400 1080,0 1440,200 L1440,400 L0,400 Z" fill="rgba(147, 51, 234, 0.15)" /></svg>
        </div>
        <div className="wave-container ribbon-mid">
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,250 C360,50 360,450 720,250 C1080,50 1080,450 1440,250" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="40" /></svg>
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,250 C360,50 360,450 720,250 C1080,50 1080,450 1440,250" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="40" /></svg>
        </div>
        <div className="wave-container ribbon-front">
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,150 C360,-50 360,350 720,150 C1080,-50 1080,350 1440,150" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="12" /></svg>
          <svg className="svg-pane" viewBox="0 0 1440 400" preserveAspectRatio="none"><path d="M0,150 C360,-50 360,350 720,150 C1080,-50 1080,350 1440,150" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="12" /></svg>
        </div>
      </div>

      {/* --- ORIGINAL WEBSITE CONTENT (UNTOUCHED) --- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <nav className="flex justify-between items-center mb-10 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-500 w-8 h-8" />
            <h1 className="text-2xl font-bold tracking-tight text-white">Verify<span className="text-blue-500">AI</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <Languages className="w-4 h-4 text-blue-400" />
              <select 
                className="bg-transparent text-xs outline-none cursor-pointer text-slate-300"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
              Gemini Pro Active
            </span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <Search className="w-5 h-5 text-blue-400" /> Analysis Hub
              </h2>
              
              <textarea
                className="w-full h-40 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={`Paste news here...`}
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
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Processing..." : "Run Intelligence Check"}
              </button>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm">
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
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-6 text-white self-start">Credibility Index</h2>
              <div className="relative flex items-center justify-center">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#1e293b" strokeWidth="10" fill="transparent" />
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
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Virality Risk
              </h2>
              <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 w-1/3" />
                <div className="h-full bg-yellow-500 w-1/3" />
                <div className="h-full bg-red-500 w-1/3 border-l-4 border-slate-900" />
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <BarChart3 className="w-5 h-5 text-purple-400" /> Propaganda Map
              </h2>
              <div className="relative w-full h-32 bg-slate-900 rounded-xl border border-slate-700">
                 <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_cyan]" style={{ left: '70%', top: '30%' }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}