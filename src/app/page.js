'use client';
import React, { useState } from 'react';
import { Search, ShieldCheck, AlertTriangle, Info, BarChart3, Globe } from 'lucide-react';

const FakeNewsDetector = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setLoading(true);
    // Simulate Gemini API Call
    setTimeout(() => {
      setResult({
        score: 85,
        status: 'Credible',
        bias: 'Center-Left',
        reasoning: "The article cites primary sources and official government data. However, the headline uses slightly sensationalist language.",
        claims: [
          { text: "Unemployment fell by 2%", status: "Verified" },
          { text: "The city is in total chaos", status: "Sensationalized" }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-blue-400 w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">VERIFY<span className="text-blue-400">AI</span></h1>
        </div>
        <div className="text-slate-400 text-sm">Powered by Google Gemini</div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Input */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Analyze News Content</h2>
            <div className="relative">
              <textarea 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Paste news text or URL here..."
                rows="8"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={loading || !url}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all flex justify-center items-center gap-2"
              >
                {loading ? "Analyzing with Gemini..." : "Verify Credibility"}
                <Search size={18} />
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 animate-in fade-in duration-500">
              <h3 className="flex items-center gap-2 font-semibold mb-4 text-blue-400">
                <Info size={18} /> Gemini Reasoning
              </h3>
              <p className="text-slate-300 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                "{result.reasoning}"
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Metrics */}
        <div className="space-y-6">
          {/* Score Card */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
            <h3 className="text-slate-400 text-sm uppercase font-bold mb-4">Credibility Score</h3>
            <div className="relative inline-flex items-center justify-center">
              {/* Circular Progress Placeholder */}
              <svg className="w-32 h-32">
                <circle className="text-slate-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64" />
                <circle className="text-blue-500" strokeWidth="10" strokeDasharray={314} strokeDashoffset={314 - (314 * (result?.score || 0)) / 100} strokeLinecap="round" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64" />
              </svg>
              <span className="absolute text-3xl font-bold">{result ? `${result.score}%` : '--'}</span>
            </div>
            <p className={`mt-4 font-bold ${result?.score > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
              {result ? result.status : 'Awaiting Input'}
            </p>
          </div>

          {/* Bias Meter */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold uppercase text-slate-400">Bias Detection</h3>
              <BarChart3 size={16} className="text-slate-400" />
            </div>
            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-full w-full opacity-50"></div>
            </div>
            <div className="flex justify-between text-[10px] mt-2 text-slate-500 font-bold">
              <span>LEFT</span>
              <span>NEUTRAL</span>
              <span>RIGHT</span>
            </div>
            <div className="text-center mt-3 font-semibold text-purple-400">
              {result ? result.bias : 'Unknown'}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FakeNewsDetector;