
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="hero-bg-1 absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}} />
        <div className="hero-bg-2 absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}} />
        <div className="hero-bg-3 absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}} />
        <div className="absolute inset-0 bg-ringlify-dark-blue/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to 
          <span className="block text-ringlify-accent">Ringlify</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 max-w-3xl mx-auto">
          Your trusted global partner for customer support, web development, digital marketing, 
          and revenue cycle management solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-ringlify-light-blue hover:bg-ringlify-blue text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-xl"
            asChild
          >
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-ringlify-dark-blue px-8 py-4 text-lg rounded-full transition-all duration-300"
            asChild
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
