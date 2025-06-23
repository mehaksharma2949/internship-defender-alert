
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Shield className="h-16 w-16 animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <CheckCircle className="h-12 w-12 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Avoid Fake{" "}
                <span className="text-blue-200">Internships.</span>
                <br />
                <span className="text-blue-300">Protect Your Future.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Don't fall victim to internship scams. Our AI-powered platform detects fake opportunities and helps you make informed career decisions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/detect" className="flex-1 sm:flex-none">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 transform hover:scale-105"
                >
                  Detect Scam Now
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
              <Link to="/learn" className="flex-1 sm:flex-none">
                <Button 
                  size="lg" 
                  
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-blue-200 text-sm">Students Protected</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Scams Detected</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-blue-200 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="relative">
              {/* Main illustration placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Shield className="h-32 w-32 text-white animate-pulse" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">AI-Powered Detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Real-time Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Community Verified</span>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                Safe ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce" style={{ animationDelay: '0.5s' }}>
                Scam ✗
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
