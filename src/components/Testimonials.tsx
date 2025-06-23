
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "InternShield saved me from a fake internship that asked for ₹500 upfront. I almost fell for it until I used this tool!",
      author: "Priya",
      role: "Engineering Student",
      rating: 5,
      bgColor: "bg-blue-50"
    },
    {
      text: "The red flags section taught me exactly what to look for. Now I can spot fake internships from a mile away.",
      author: "Rahul",
      role: "MBA Student", 
      rating: 5,
      bgColor: "bg-green-50"
    },
    {
      text: "Quick and accurate detection! This tool should be mandatory for every student looking for internships.",
      author: "Sneha",
      role: "Computer Science Student",
      rating: 5,
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Students Nationwide
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from students who avoided scams
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`${testimonial.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
