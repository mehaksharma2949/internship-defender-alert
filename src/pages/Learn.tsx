
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, DollarSign, Mail, Zap, Clock, Globe, Phone, FileText, Shield, CheckCircle, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            Educational Resources
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Learn to <span className="text-green-600">Protect</span> Yourself
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the art of identifying internship scams with our comprehensive guide and protect your career from fraudulent opportunities
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Students Educated</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-8">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-green-100">Scam Detection Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-purple-100">Scams Prevented</div>
            </CardContent>
          </Card>
        </div>

        {/* Top Red Flags Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Top 5 Red Flags to Avoid</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn to spot these warning signs before it's too late
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-red-600" />
                  <div>
                    <div className="text-xl text-red-700">Upfront Payment Requests</div>
                    <div className="text-sm text-red-600 font-normal">Most Common Scam Tactic</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 text-lg">
                  Legitimate internships never ask for registration fees, training costs, or any upfront payments from candidates.
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-700 font-semibold flex items-center gap-2">
                    <span className="text-xl">🚨</span>
                    "Pay ₹500 registration fee to confirm your internship slot"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="text-xl text-orange-700">Unprofessional Email Domains</div>
                    <div className="text-sm text-orange-600 font-normal">Easy to Spot</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 text-lg">
                  Be wary of companies using Gmail, Yahoo, or other free email services for official recruitment communication.
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                  <p className="text-orange-700 font-semibold flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    company123@gmail.com instead of hr@company.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-yellow-600" />
                  <div>
                    <div className="text-xl text-yellow-700">Unrealistic Promises</div>
                    <div className="text-sm text-yellow-600 font-normal">Too Good to Be True</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 text-lg">
                  Extremely high salaries, guaranteed job offers, or "no experience required" claims are major red flags.
                </p>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-700 font-semibold flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    "₹50,000/month for freshers, no experience needed!"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-xl text-purple-700">Pressure Tactics</div>
                    <div className="text-sm text-purple-600 font-normal">Creates False Urgency</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 text-lg">
                  Legitimate companies don't create artificial urgency with "limited time offers" or "immediate joining required".
                </p>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                  <p className="text-purple-700 font-semibold flex items-center gap-2">
                    <span className="text-xl">⏰</span>
                    "Only 2 slots left! Apply now or miss out forever!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Verification Guide */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">How to Verify a Company</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these steps to ensure the company and internship are legitimate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Check Company Website</h3>
                <p className="text-gray-600">
                  Visit the official website. Look for 'About Us', contact information, and legitimate career pages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-green-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verify Contact Info</h3>
                <p className="text-gray-600">
                  Call the official number listed on their website to confirm the internship posting exists.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-purple-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Documentation</h3>
                <p className="text-gray-600">
                  Ask for formal offer letters, company registration details, and proper employment contracts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-indigo-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Background Check</h3>
                <p className="text-gray-600">
                  Search for company reviews, news articles, and employee testimonials on LinkedIn and Google.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl text-yellow-800">
                <AlertTriangle className="h-8 w-8" />
                Essential Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="px-12 pb-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    DO:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-green-700">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-lg">Research the company thoroughly on multiple platforms</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-lg">Ask detailed questions about the role and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-lg">Trust your instincts if something feels suspicious</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-lg">Keep detailed records of all communications</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-lg">Verify company registration and legal status</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    DON'T:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-red-700">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-lg">Pay any money upfront for any reason</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-700">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-lg">Share personal documents without verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-700">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-lg">Accept vague or unclear job descriptions</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-700">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-lg">Ignore red flags due to desperation</span>
                    </li>
                    <li className="flex items-start gap-3 text-red-700">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-lg">Rush into decisions without proper research</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Action Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Test Your Knowledge
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Try our AI-powered scam detection tool with real internship postings
                </p>
                <Link to="/detect">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                    Analyze Internship
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Protect Others
                </h3>
                <p className="text-green-100 mb-6 text-lg">
                  Share your experience and help build a safer community for everyone
                </p>
                <Link to="/report">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
                    Report a Scam
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Learn;
