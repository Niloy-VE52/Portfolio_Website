import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Sliders, BarChart3, Building2, Play, RefreshCw, CheckCircle2, AlertCircle, Send, Cpu, UserCheck } from 'lucide-react';

export default function ProjectSimulators({ activeSimulatorId, setActiveSimulatorId }) {
  // State for Face Scanner
  const [isScanning, setIsScanning] = useState(true);
  const [faceLogs, setFaceLogs] = useState([
    { id: 'STU-104', name: 'Niloy Das', status: 'VERIFIED', confidence: '98.6%', time: '14:15:02' },
    { id: 'STU-108', name: 'Rohan Sharma', status: 'VERIFIED', confidence: '96.2%', time: '14:14:48' }
  ]);

  // State for Lead Scoring Engine
  const [leadParams, setLeadParams] = useState({
    hiringIntent: 85,
    companyFit: 90,
    jobFit: 80,
    fundingRound: 75
  });

  const computedLeadScore = Math.round(
    (leadParams.hiringIntent * 0.35 + leadParams.companyFit * 0.25 + leadParams.jobFit * 0.25 + leadParams.fundingRound * 0.15)
  );

  const getLeadDecision = (score) => {
    if (score >= 82) return { decision: 'KEEP (High Priority)', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40' };
    if (score >= 65) return { decision: 'HOLD (Review Later)', color: 'text-amber-400 border-amber-500/40 bg-amber-950/40' };
    return { decision: 'REJECT (Low Fit)', color: 'text-red-400 border-red-500/40 bg-red-950/40' };
  };

  // State for Chart Assistant
  const [selectedChartPrompt, setSelectedChartPrompt] = useState('Sales by Region');

  // State for Property Matcher Chat
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your AI Property Assistant. What type of property are you looking for?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const names = ['Ananya Sen', 'Vikram Malhotra', 'Priya Roy', 'Arjun Mehta'];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomId = 'STU-' + Math.floor(100 + Math.random() * 900);
      const conf = (94 + Math.random() * 5).toFixed(1) + '%';
      const now = new Date().toLocaleTimeString();

      setFaceLogs(prev => [{ id: randomId, name: randomName, status: 'VERIFIED', confidence: conf, time: now }, ...prev.slice(0, 3)]);
      setIsScanning(false);
    }, 800);
  };

  const handleChatSend = (e) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `Found 3 matching listings for query "${userText}":`,
          listings: [
            { name: 'Skyline Heights 3BHK', loc: 'Cyber City, Sector 24', price: '₹ 1.45 Cr', badge: 'GPT-4o Match 96%' },
            { name: 'Elysium Luxury Residences', loc: 'Golf Course Extension', price: '₹ 1.60 Cr', badge: 'GPT-4o Match 91%' }
          ]
        }
      ]);
    }, 600);
  };

  return (
    <section id="simulators" className="py-20 relative bg-[#060911]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Play className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
            <span>Interactive AI Simulators</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Play with <span className="text-gradient">Live AI Prototypes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Test interactive live simulations of the core algorithmic pipelines designed by Niloy Das.
          </p>

          {/* Simulator Selection Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl pt-4">
            <button
              onClick={() => setActiveSimulatorId('face-scanner')}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                activeSimulatorId === 'face-scanner'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Face Scanner</span>
            </button>

            <button
              onClick={() => setActiveSimulatorId('lead-scorer')}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                activeSimulatorId === 'lead-scorer'
                  ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Lead Scorer</span>
            </button>

            <button
              onClick={() => setActiveSimulatorId('chart-sandbox')}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                activeSimulatorId === 'chart-sandbox'
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>CSV Analytics</span>
            </button>

            <button
              onClick={() => setActiveSimulatorId('property-matcher')}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                activeSimulatorId === 'property-matcher'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Property AI</span>
            </button>
          </div>
        </div>

        {/* SIMULATOR CANVAS PANEL */}
        <div className="glass-panel border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl min-h-[420px] flex flex-col justify-between">

          {/* 1. FACE SCANNER SIMULATOR */}
          {activeSimulatorId === 'face-scanner' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Camera Frame Preview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-cyan-500/40 flex items-center justify-center">
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                  {/* Simulated Face Vector Box */}
                  <div className="relative w-44 h-56 border-2 border-cyan-400 rounded-2xl flex flex-col items-center justify-between p-3 animate-pulse">
                    <span className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                      IDENTIFIED: NILOY DAS
                    </span>
                    <div className="grid grid-cols-3 gap-3 opacity-60">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                      CONFIDENCE: 98.6%
                    </span>
                  </div>

                  {/* Live Scan Radar Bar */}
                  <motion.div
                    animate={{ y: [-100, 100, -100] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Pipeline: OpenCV + MediaPipe Face Mesh</span>
                  <button
                    onClick={triggerScan}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30 transition-all"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                    Simulate Next Face
                  </button>
                </div>
              </div>

              {/* Attendance Log Output */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center justify-between">
                  <span>Real-time Attendance Log</span>
                  <span className="text-slate-500">Live Sync</span>
                </h4>
                <div className="space-y-2.5">
                  {faceLogs.map((log, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <UserCheck className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="text-xs font-bold text-white">{log.name}</div>
                          <div className="text-[10px] font-mono text-slate-400">{log.id} • {log.time}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                        {log.confidence}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. LEAD SCORING SIMULATOR */}
          {activeSimulatorId === 'lead-scorer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  Adjust Lead Score Parameters (LLM Weighted Model)
                </h4>
                
                {/* Sliders */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Hiring Intent Signals (Weight: 35%)</span>
                      <span className="text-purple-300">{leadParams.hiringIntent}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={leadParams.hiringIntent}
                      onChange={(e) => setLeadParams({ ...leadParams, hiringIntent: Number(e.target.value) })}
                      className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Company Profile & Industry Fit (Weight: 25%)</span>
                      <span className="text-purple-300">{leadParams.companyFit}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={leadParams.companyFit}
                      onChange={(e) => setLeadParams({ ...leadParams, companyFit: Number(e.target.value) })}
                      className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Job Requirement Fit (Weight: 25%)</span>
                      <span className="text-purple-300">{leadParams.jobFit}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={leadParams.jobFit}
                      onChange={(e) => setLeadParams({ ...leadParams, jobFit: Number(e.target.value) })}
                      className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Decision Box */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase">Computed LLM Score</span>
                  <div className="text-5xl font-syne font-extrabold text-white">
                    {computedLeadScore}<span className="text-xl text-purple-400">/100</span>
                  </div>

                  {(() => {
                    const dec = getLeadDecision(computedLeadScore);
                    return (
                      <div className={`p-3 rounded-xl border text-xs font-mono font-bold ${dec.color}`}>
                        ACTION: {dec.decision}
                      </div>
                    );
                  })()}
                  <p className="text-[11px] text-slate-400 font-mono">
                    LLM Decision Rule: Score &gt;= 82 triggers automated LinkedIn outreach script.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. CSV ANALYTICS SIMULATOR */}
          {activeSimulatorId === 'chart-sandbox' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-emerald-400">Select Natural Language Data Prompt:</span>
                <div className="flex flex-wrap gap-2">
                  {['Sales by Region', 'Customer Churn Rate', 'Monthly Growth'].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => setSelectedChartPrompt(prompt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono ${
                        selectedChartPrompt === prompt
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      "{prompt}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Chart Container */}
              <div className="p-6 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Gemini Prompt Reasoning: "Analyzing categorical distribution for '{selectedChartPrompt}'"
                  </span>
                  <span>Engine: Plotly Sandbox</span>
                </div>

                {/* Animated Chart SVG Bars */}
                <div className="h-44 flex items-end justify-around gap-4 pt-4 border-b border-slate-800 pb-2">
                  {[
                    { label: 'North', val: 78, color: 'bg-emerald-500' },
                    { label: 'South', val: 92, color: 'bg-teal-400' },
                    { label: 'East', val: 64, color: 'bg-cyan-500' },
                    { label: 'West', val: 85, color: 'bg-emerald-400' }
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[10px] font-mono text-emerald-300">{bar.val}%</span>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.val}%` }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`w-full max-w-[50px] rounded-t-lg ${bar.color} shadow-lg shadow-emerald-500/20`}
                      />
                      <span className="text-xs font-mono text-slate-400">{bar.label}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-300 font-mono pt-1">
                  💡 Gemini Insight: <span className="text-slate-100">South region outperforms baseline by 18%. High conversion observed in enterprise tiers.</span>
                </div>
              </div>
            </div>
          )}

          {/* 4. REAL ESTATE AI CHAT SIMULATOR */}
          {activeSimulatorId === 'property-matcher' && (
            <div className="space-y-4">
              <div className="h-64 overflow-y-auto space-y-3 p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-md p-3 rounded-xl ${msg.sender === 'user' ? 'bg-amber-500/20 border border-amber-500/40 text-amber-200' : 'bg-slate-900 border border-slate-800 text-slate-200'}`}>
                      {msg.text}
                    </div>

                    {msg.listings && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 w-full max-w-md">
                        {msg.listings.map((item, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                            <div className="font-bold text-white text-[11px]">{item.name}</div>
                            <div className="text-[10px] text-slate-400">{item.loc}</div>
                            <div className="text-amber-400 font-bold text-[11px]">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleChatSend} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="e.g. Find 3BHK in Cyber City under 1.5 Cr with balcony..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
