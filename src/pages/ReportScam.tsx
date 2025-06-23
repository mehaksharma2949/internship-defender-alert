
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Flag, Upload, Shield, Users, Database, TrendingUp, Lock, AlertTriangle, CheckCircle, Clock, X, Image } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const ReportScam = () => {
  const [formData, setFormData] = useState({
    internshipTitle: "",
    companyName: "",
    location: "",
    description: "",
    contactMethod: "",
    anonymous: true
  });

  const [screenshots, setScreenshots] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Real-time impact stats
  const [stats] = useState({
    reportsToday: 23,
    totalReports: 1547,
    scamsDetected: 389,
    studentsProtected: 8924
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024 // 5MB limit
    );
    setScreenshots(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeScreenshot = (index: number) => {
    setScreenshots(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with file upload
    const formDataWithFiles = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFiles.append(key, value.toString());
    });
    screenshots.forEach((file, index) => {
      formDataWithFiles.append(`screenshot_${index}`, file);
    });
    
    setTimeout(() => {
      console.log("Report submitted with screenshots:", formData, screenshots);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="text-center shadow-xl border-0">
            <CardContent className="p-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h1>
              <p className="text-xl text-gray-600 mb-8">Thank you for helping protect the community. Your report will help prevent others from falling victim to this scam.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                  Submit Another Report
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/scam-list'}>
                  View All Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flag className="h-4 w-4" />
            Community Protection
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Report a Scam Internship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help protect fellow students by reporting suspicious internship opportunities and building a safer community
          </p>
        </div>

        {/* Real-time Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.reportsToday}</div>
              <div className="text-blue-100 text-sm">Reports Today</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <Database className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.totalReports.toLocaleString()}</div>
              <div className="text-orange-100 text-sm">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.scamsDetected}</div>
              <div className="text-red-100 text-sm">Scams Detected</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.studentsProtected.toLocaleString()}</div>
              <div className="text-green-100 text-sm">Students Protected</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Flag className="h-6 w-6" />
                  Report Details
                </CardTitle>
                <p className="text-red-100">
                  Provide detailed information to help us verify and alert others about this scam
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Internship Title *
                      </label>
                      <Input
                        value={formData.internshipTitle}
                        onChange={(e) => setFormData({...formData, internshipTitle: e.target.value})}
                        placeholder="e.g., Digital Marketing Intern"
                        className="h-12 border-2 border-gray-200 focus:border-red-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Company/Organization Name *
                      </label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder="e.g., TechCorp Solutions"
                        className="h-12 border-2 border-gray-200 focus:border-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Location
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., Mumbai, Maharashtra, India"
                      className="h-12 border-2 border-gray-200 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      How were you contacted?
                    </label>
                    <Input
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                      placeholder="e.g., WhatsApp, Email, Phone call, LinkedIn"
                      className="h-12 border-2 border-gray-200 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Detailed Description of the Scam *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Provide a detailed description including: red flags you noticed, payment requests, communication methods, promises made, timeline, and any other suspicious behavior..."
                      className="h-40 border-2 border-gray-200 focus:border-red-500 resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Upload Screenshots/Evidence *
                    </label>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="screenshot-upload"
                        />
                        <label htmlFor="screenshot-upload" className="cursor-pointer">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2 font-medium">Click to upload screenshots</p>
                          <p className="text-sm text-gray-500">Upload images, emails, or documents (Max 5 files, 5MB each)</p>
                        </label>
                      </div>
                      
                      {screenshots.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {screenshots.map((file, index) => (
                            <div key={index} className="relative bg-white border rounded-lg p-3 shadow-sm">
                              <div className="flex items-center gap-2">
                                <Image className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 truncate flex-1">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeScreenshot(index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div>
                      <label className="text-lg font-semibold text-blue-800">
                        Submit anonymously (recommended)
                      </label>
                      <p className="text-sm text-blue-600 mt-1">Your identity will be protected while helping others</p>
                    </div>
                    <Switch
                      checked={formData.anonymous}
                      onCheckedChange={(checked) => setFormData({...formData, anonymous: checked})}
                      className="data-[state=checked]:bg-blue-600"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || screenshots.length === 0}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <Flag className="h-5 w-5 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                  
                  {screenshots.length === 0 && (
                    <p className="text-sm text-red-600 text-center">Please upload at least one screenshot or evidence file</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Report */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 text-xl">Why Report Scams?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Protect Fellow Students</p>
                    <p className="text-sm text-blue-700">Prevent others from falling victim to the same scam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Build Scam Database</p>
                    <p className="text-sm text-blue-700">Contribute to a comprehensive fraud prevention system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Improve AI Detection</p>
                    <p className="text-sm text-blue-700">Help train our algorithms to spot new scam patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Create Awareness</p>
                    <p className="text-sm text-blue-700">Highlight emerging scam trends and tactics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Include */}
            <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-yellow-900 text-xl">Evidence to Include</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Screenshots of conversations",
                    "Email communications",
                    "Job posting screenshots",
                    "Payment request evidence",
                    "Company website screenshots",
                    "Social media interactions",
                    "Document requests made",
                    "Any suspicious communications"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Badge variant="outline" className="bg-yellow-200 text-yellow-800 border-yellow-400 text-xs px-2 py-1">
                        {index + 1}
                      </Badge>
                      <span className="text-sm text-yellow-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Privacy Assurance */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900 text-xl">
                  <Lock className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-green-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Anonymous reporting protects your identity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Files encrypted and securely stored</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Information used only for scam prevention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No personal details shared publicly</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default ReportScam;
