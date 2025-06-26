
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, Globe, Phone, Monitor, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Multilingual customer service across all time zones"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies and campaigns"
    },
    {
      icon: Phone,
      title: "Call Services",
      description: "Professional inbound and outbound calling solutions"
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom website development and digital solutions"
    },
    {
      icon: Users,
      title: "Web Management",
      description: "Ongoing website maintenance and optimization"
    },
    {
      icon: FileText,
      title: "Revenue Cycle Management",
      description: "Specialized RCM services for U.S. healthcare facilities"
    }
  ];

  return (
    <section className="py-20 bg-ringlify-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to help your company grow and succeed in today's competitive market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
            >
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ringlify-blue/20 transition-colors">
                <service.icon className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-ringlify-blue hover:bg-ringlify-dark-blue text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
