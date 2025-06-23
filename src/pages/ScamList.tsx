
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, Flag, Shield, TrendingUp, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Link } from "react-router-dom";

const ScamList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const scamReports = [
    {
      id: 1,
      title: "Digital Marketing Internship",
      company: "TechCorp Solutions",
      reportedBy: "Anonymous",
      date: "2024-06-15",
      reports: 25,
      riskLevel: "High",
      trustScore: 15,
      redFlags: ["Requests ₹500 registration fee", "Uses Gmail for contact", "Promises unrealistic salary", "No company website"],
      location: "Mumbai, India"
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "QuickHire Technologies",
      reportedBy: "Anonymous",
      date: "2024-06-14",
      reports: 42,
      riskLevel: "High",
      trustScore: 8,
      redFlags: ["No company website", "Immediate start without interview", "Payment required upfront", "Telegram-based communication"],
      location: "Bangalore, India"
    },
    {
      id: 3,
      title: "Data Entry Work From Home",
      company: "HomeJobs India",
      reportedBy: "Anonymous",
      date: "2024-06-13",
      reports: 18,
      riskLevel: "Medium",
      trustScore: 35,
      redFlags: ["Too good to be true salary", "No company verification", "WhatsApp communication only"],
      location: "Delhi, India"
    },
    {
      id: 4,
      title: "Content Writing Internship",
      company: "ContentPro Media",
      reportedBy: "Anonymous",
      date: "2024-06-12",
      reports: 31,
      riskLevel: "High",
      trustScore: 12,
      redFlags: ["Advance fee required", "No proper job description", "Pressure tactics", "Personal email domain"],
      location: "Pune, India"
    }
  ];

  const filteredReports = scamReports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Real-time statistics
  const totalReports = scamReports.reduce((sum, report) => sum + report.reports, 0);
  const avgTrustScore = Math.round(scamReports.reduce((sum, report) => sum + report.trustScore, 0) / scamReports.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="h-4 w-4" />
            Community Alert System
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reported Scam Internships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Community-verified fake internship reports to help protect fellow students from fraud
          </p>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">{scamReports.length}</div>
              <div className="text-red-100 font-medium">Total Scams Reported</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6 text-center">
              <Flag className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">{totalReports}</div>
              <div className="text-orange-100 font-medium">Total Reports Filed</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">8,450</div>
              <div className="text-green-100 font-medium">Students Protected</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">{avgTrustScore}%</div>
              <div className="text-blue-100 font-medium">Avg Trust Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-6 w-6 text-primary-600" />
              Search Reported Scams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by company name, internship title, or location..."
                className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-primary-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Scam Reports */}
        <div className="space-y-6 mb-12">
          {filteredReports.map((report) => (
            <Card key={report.id} className="border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-red-600">
                        {report.title}
                      </h3>
                      <Badge className={`px-3 py-1 text-sm font-medium ${
                        report.riskLevel === 'High' ? 'bg-red-100 text-red-800 border-red-300' :
                        report.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                        'bg-green-100 text-green-800 border-green-300'
                      }`}>
                        {report.riskLevel} Risk
                      </Badge>
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">{report.company}</div>
                    <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {report.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {report.reports} reports
                      </span>
                      <span>📍 {report.location}</span>
                    </div>
                    
                    {/* Trust Score Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Trust Score</span>
                        <span className="text-sm font-bold text-red-600">{report.trustScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.max(report.trustScore, 5)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      {report.reports} reports
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-red-700 text-lg">Red Flags Detected:</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {report.redFlags.map((flag, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <span className="text-red-500 text-lg">⚠️</span>
                        <span className="text-red-700 font-medium text-sm">{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <Link to="/report">
                    <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50">
                      <Flag className="h-4 w-4 mr-2" />
                      Report Similar Scam
                    </Button>
                  </Link>
                  <span className="text-sm text-gray-500">Last updated: {report.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flag className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Encountered a Suspicious Internship?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Help protect other students by reporting fake internships. Your report could save someone from falling victim to a scam.
            </p>
            <Link to="/report">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg">
                <Flag className="h-5 w-5 mr-2" />
                Report a Scam Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default ScamList;
