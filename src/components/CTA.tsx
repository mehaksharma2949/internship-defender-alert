
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-hero-gradient text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Protect Yourself?
        </h2>
        
        <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of students who stay safe from internship scams with our AI-powered detection system
        </p>
        
        <Button 
          size="lg"
          className="bg-white text-primary-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg"
        >
          Start Detection Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
