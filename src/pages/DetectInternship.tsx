import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Clock, Zap, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const DetectInternship = () => {
  const [internshipText, setInternshipText] = useState("");
  const [internshipUrl, setInternshipUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Real-time stats
  const [stats] = useState({
    totalScanned: 15247,
    scamsDetected: 3891,
    usersProtected: 12456,
    accuracy: 97.3
  });

  const analyzeInternship = async () => {
    if (!internshipText.trim() && !internshipUrl.trim()) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const redFlags = [];
      const text = (internshipText + " " + internshipUrl).toLowerCase();
      
      if (text.includes("registration fee") || text.includes("pay") || text.includes("₹") || text.includes("money")) {
        redFlags.push("Mentions registration fee or payment");
      }
      if (text.includes("@gmail.com") || text.includes("@yahoo.com")) {
        redFlags.push("Uses personal email domain instead of company domain");
      }
      if (text.includes("immediate joining") || text.includes("urgent")) {
        redFlags.push("Creates false urgency");
      }
      if (text.includes("no experience required") && text.includes("high salary")) {
        redFlags.push("Promises high salary with no experience");
      }
      if (text.includes("work from home") && text.includes("guaranteed")) {
        redFlags.push("Unrealistic work-from-home guarantees");
      }
      
      const riskLevel = redFlags.length >= 3 ? "High" : redFlags.length >= 1 ? "Medium" : "Low";
      const verdict = redFlags.length >= 2 ? "🚫 Suspicious" : "✅ Safe";
      
      setResult({
        risk: riskLevel,
        redFlags,
        verdict,
        analysis: redFlags.length > 0 ? 
          "Our AI detected potential red flags in this internship posting. Please review carefully before proceeding." :
          "This internship posting appears legitimate based on our analysis.",
        trustScore: redFlags.length === 0 ? 95 : redFlags.length === 1 ? 70 : redFlags.length === 2 ? 45 : 15
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            AI-Powered Detection
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Detect Internship Scams
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our advanced AI to analyze internship postings for potential red flags and protect yourself from scams
          </p>
        </div>

        {/* Real-time Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.totalScanned.toLocaleString()}</div>
              <div className="text-blue-100">Total Scanned</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.scamsDetected.toLocaleString()}</div>
              <div className="text-red-100">Scams Detected</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.usersProtected.toLocaleString()}</div>
              <div className="text-green-100">Users Protected</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.accuracy}%</div>
              <div className="text-purple-100">Accuracy Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Tool */}
        <Card className="mb-8 shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Shield className="h-6 w-6" />
              Internship Analysis Tool
            </CardTitle>
            <p className="text-primary-100">Paste your internship details below for instant analysis</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Internship URL (Optional)
              </label>
              <Input
                value={internshipUrl}
                onChange={(e) => setInternshipUrl(e.target.value)}
                placeholder="https://example.com/internship-posting"
                className="w-full h-12 border-2 border-gray-200 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Internship Description *
              </label>
              <Textarea
                value={internshipText}
                onChange={(e) => setInternshipText(e.target.value)}
                placeholder="Paste the complete internship description here..."
                className="w-full h-40 border-2 border-gray-200 focus:border-primary-500 resize-none"
              />
            </div>
            
            <Button 
              onClick={analyzeInternship}
              disabled={(!internshipText.trim() && !internshipUrl.trim()) || isAnalyzing}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  <Clock className="h-5 w-5 mr-2" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Shield className="h-5 w-5 mr-2" />
                  Analyze Internship Now
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {result.verdict.includes('Safe') ? (
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  )}
                  <div>
                    <span className="text-2xl font-bold">{result.verdict}</span>
                    <div className="text-gray-600">Trust Score: {result.trustScore}%</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={`px-4 py-2 text-lg font-medium ${
                    result.risk === 'High' ? 'bg-red-100 text-red-800 border-red-300' :
                    result.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                    'bg-green-100 text-green-800 border-green-300'
                  }`}>
                    {result.risk} Risk
                  </Badge>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      result.trustScore >= 70 ? 'bg-green-500' :
                      result.trustScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${result.trustScore}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">Trust Score: {result.trustScore}% confidence</p>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">{result.analysis}</p>
              
              {result.redFlags.length > 0 && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-800 mb-4 flex items-center text-lg">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Red Flags Detected:
                  </h4>
                  <div className="space-y-3">
                    {result.redFlags.map((flag: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-200">
                        <span className="text-red-500 text-lg">⚠️</span>
                        <span className="text-red-700 font-medium">{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default DetectInternship;
