import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Eye, Users, BookOpen, CheckCircle, XCircle, Mail, DollarSign, Clock, Building } from 'lucide-react';

const ScamDetectionApp = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [scanText, setScanText] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [userStories, setUserStories] = useState([]);
  const [newStory, setNewStory] = useState({
    title: '',
    company: '',
    description: '',
    amount: '',
    redFlags: [],
    isAnonymous: false,
    authorName: ''
  });

  // Sample data - in real app, this would come from backend
  const [scamDatabase] = useState([
    {
      id: 1,
      title: "Orient Electric Fake Job Scam",
      company: "Orient Electric",
      contactMethod: "Gmail",
      amount: "₹10,000",
      type: "Security Deposit Scam",
      redFlags: ["Gmail ID", "Security fees", "No proper interview"],
      description: "Received job offer via Gmail claiming to be from Orient Electric. Asked for ₹10,000 as security deposit. Verified with company - no such position existed.",
      dateReported: "2024-01-15",
      isVerified: true,
      reportedBy: "Anonymous Student"
    },
    {
      id: 2,
      title: "TCS Fake Interview Scam",
      company: "TCS",
      contactMethod: "WhatsApp",
      amount: "₹5,000",
      type: "Processing Fee Scam",
      redFlags: ["WhatsApp contact", "Immediate hiring", "Processing fees"],
      description: "Got WhatsApp message for TCS job with immediate selection. Asked for processing fees. Real TCS never asks for money.",
      dateReported: "2024-01-10",
      isVerified: true,
      reportedBy: "Rahul M."
    }
  ]);

  // Red flag detection logic
  const detectRedFlags = (text) => {
    const redFlags = [];
    const suspiciousEmails = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const financialTerms = ['security fee', 'deposit', 'registration fee', 'processing fee', 'advance payment'];
    const urgencyTerms = ['immediate', 'urgent', 'limited time', 'act now', 'hurry'];
    const scamCompanies = ['orient electric', 'tcs', 'infosys', 'wipro', 'accenture'];

    // Check for suspicious email domains
    suspiciousEmails.forEach(domain => {
      if (text.toLowerCase().includes(domain)) {
        redFlags.push(`Suspicious email domain: ${domain}`);
      }
    });

    // Check for financial demands
    financialTerms.forEach(term => {
      if (text.toLowerCase().includes(term)) {
        redFlags.push(`Financial demand detected: ${term}`);
      }
    });

    // Check for urgency tactics
    urgencyTerms.forEach(term => {
      if (text.toLowerCase().includes(term)) {
        redFlags.push(`Urgency tactic: ${term}`);
      }
    });

    // Check for company name + gmail combination
    scamCompanies.forEach(company => {
      if (text.toLowerCase().includes(company) && text.toLowerCase().includes('gmail')) {
        redFlags.push(`Company impersonation via Gmail: ${company}`);
      }
    });

    return redFlags;
  };

  const calculateRiskScore = (redFlags) => {
    let score = 0;
    redFlags.forEach(flag => {
      if (flag.includes('Financial demand')) score += 40;
      if (flag.includes('gmail') || flag.includes('yahoo')) score += 30;
      if (flag.includes('Company impersonation')) score += 50;
      if (flag.includes('Urgency tactic')) score += 20;
    });
    return Math.min(score, 100);
  };

  const handleScan = () => {
    const detectedFlags = detectRedFlags(scanText);
    const riskScore = calculateRiskScore(detectedFlags);
    
    let riskLevel = 'LOW';
    if (riskScore >= 70) riskLevel = 'HIGH';
    else if (riskScore >= 40) riskLevel = 'MEDIUM';

    // Find similar cases
    const similarCases = scamDatabase.filter(scam => 
      detectedFlags.some(flag => 
        scam.redFlags.some(scamFlag => 
          flag.toLowerCase().includes(scamFlag.toLowerCase())
        )
      )
    );

    setScanResult({
      redFlags: detectedFlags,
      riskScore,
      riskLevel,
      similarCases
    });
  };

  const handleStorySubmit = () => {
    const story = {
      ...newStory,
      id: Date.now(),
      dateReported: new Date().toISOString().split('T')[0],
      isVerified: false,
      reportedBy: newStory.isAnonymous ? 'Anonymous' : newStory.authorName
    };
    setUserStories([...userStories, story]);
    setNewStory({
      title: '',
      company: '',
      description: '',
      amount: '',
      redFlags: [],
      isAnonymous: false,
      authorName: ''
    });
  };

  const RiskIndicator = ({ level, score }) => {
    const colors = {
      LOW: 'text-green-600 bg-green-100',
      MEDIUM: 'text-yellow-600 bg-yellow-100',
      HIGH: 'text-red-600 bg-red-100'
    };
    
    return (
      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[level]}`}>
        {level} RISK ({score}%)
      </div>
    );
  };

  const ScamStoryCard = ({ story }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{story.title}</h3>
        {story.isVerified && <CheckCircle className="w-5 h-5 text-green-500" />}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-gray-500" />
          <span><strong>Company:</strong> {story.company}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-gray-500" />
          <span><strong>Amount:</strong> {story.amount}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{story.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2">Red Flags:</h4>
        <div className="flex flex-wrap gap-2">
          {story.redFlags.map((flag, index) => (
            <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
              {flag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Reported by: {story.reportedBy}</span>
        <span>{story.dateReported}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">ScamGuard</h1>
            </div>
            <div className="text-sm text-gray-600">
              Protecting Students from Job Scams
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'scanner', label: 'Scam Scanner', icon: Eye },
              { id: 'stories', label: 'Real Experiences', icon: Users },
              { id: 'blog', label: 'Awareness Hub', icon: BookOpen }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 text-sm font-medium ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'scanner' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Scam Detection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Paste your job offer, email, or message below. Our AI will analyze it for red flags and show you similar scam cases.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paste your job offer or suspicious message:
                  </label>
                  <textarea
                    value={scanText}
                    onChange={(e) => setScanText(e.target.value)}
                    placeholder="Example: Dear Student, We are hiring for Orient Electric. Please send ₹10,000 security deposit to confirm your position. Contact: hr.orient@gmail.com"
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleScan}
                  disabled={!scanText.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Analyze for Scam
                </button>
              </div>
            </div>

            {scanResult && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Analysis Results</h3>
                  <RiskIndicator level={scanResult.riskLevel} score={scanResult.riskScore} />
                </div>

                {scanResult.redFlags.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Red Flags Detected:
                    </h4>
                    <div className="space-y-2">
                      {scanResult.redFlags.map((flag, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded border-l-4 border-red-400">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-red-800">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {scanResult.similarCases.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Similar Cases from Community:</h4>
                    <div className="grid gap-4">
                      {scanResult.similarCases.map((case_) => (
                        <ScamStoryCard key={case_.id} story={case_} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Student Experiences</h2>
              <p className="text-gray-600">
                Learn from real scam cases reported by students. Share your experience to help others.
              </p>
            </div>

            {/* Submit Story Form */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Scam title (e.g., 'Fake TCS Job Offer')"
                  value={newStory.title}
                  onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  value={newStory.company}
                  onChange={(e) => setNewStory({...newStory, company: e.target.value})}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Amount asked (e.g., ₹10,000)"
                  value={newStory.amount}
                  onChange={(e) => setNewStory({...newStory, amount: e.target.value})}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={newStory.authorName}
                  onChange={(e) => setNewStory({...newStory, authorName: e.target.value})}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder="Describe what happened, how you identified it as a scam..."
                value={newStory.description}
                onChange={(e) => setNewStory({...newStory, description: e.target.value})}
                className="w-full h-24 p-3 border border-gray-300 rounded-lg mt-4 focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-4 mt-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newStory.isAnonymous}
                    onChange={(e) => setNewStory({...newStory, isAnonymous: e.target.checked})}
                    className="rounded"
                  />
                  Submit anonymously
                </label>
                <button
                  onClick={handleStorySubmit}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Share Story
                </button>
              </div>
            </div>

            {/* Existing Stories */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Community Reports</h3>
              <div className="grid gap-6">
                {[...scamDatabase, ...userStories].map((story) => (
                  <ScamStoryCard key={story.id} story={story} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Awareness Hub</h2>
              <p className="text-gray-600">
                Stay informed about latest scam tactics and learn how to protect yourself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "How Scammers Use Real Company Names",
                  excerpt: "Learn how fraudsters impersonate legitimate companies like Orient Electric, TCS, and others to deceive job seekers.",
                  category: "Awareness",
                  readTime: "5 min read"
                },
                {
                  title: "Red Flags in Job Offers",
                  excerpt: "10 warning signs that indicate a job offer might be a scam. From Gmail addresses to upfront fees.",
                  category: "Guide",
                  readTime: "8 min read"
                },
                {
                  title: "How to Verify Job Offers",
                  excerpt: "Step-by-step process to verify if a job offer is legitimate. Check company websites, contact HR directly.",
                  category: "Tutorial",
                  readTime: "6 min read"
                },
                {
                  title: "Student Job Scam Statistics 2024",
                  excerpt: "Latest data on job scams targeting students. Most common tactics and financial impact.",
                  category: "Research",
                  readTime: "4 min read"
                },
                {
                  title: "What to Do If You've Been Scammed",
                  excerpt: "Immediate steps to take if you've fallen victim to a job scam. Report, recover, and prevent further damage.",
                  category: "Help",
                  readTime: "7 min read"
                },
                {
                  title: "Building a Scam-Aware Community",
                  excerpt: "How sharing experiences helps protect others. The power of community-driven awareness.",
                  category: "Community",
                  readTime: "5 min read"
                }
              ].map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScamDetectionApp;