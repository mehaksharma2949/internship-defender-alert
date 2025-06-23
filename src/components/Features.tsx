
import { AlertTriangle, Flag, BookOpen, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Instant Scam Detection",
      description: "Our AI analyzes internship postings in seconds to identify potential scams and red flags.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Flag,
      title: "Report Fake Internships",
      description: "Help protect other students by reporting suspicious internship opportunities you encounter.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Learn Red Flags",
      description: "Access comprehensive guides on how to identify and avoid internship scams.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "View Scam Trends",
      description: "Stay updated with the latest scam patterns and protect yourself from new threats.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Protection for Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to stay safe from internship scams and make informed career decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
