
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, Globe, Phone, Monitor, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Comprehensive multilingual customer service solutions across all time zones to ensure your customers receive exceptional support whenever they need it.",
      features: [
        "24/7 availability across multiple time zones",
        "Multilingual support in 10+ languages",
        "Omnichannel support (phone, email, chat, social media)",
        "Trained customer service representatives",
        "Real-time reporting and analytics",
        "Scalable solutions for businesses of all sizes"
      ]
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Strategic digital marketing campaigns designed to increase your online presence, drive qualified leads, and boost conversions across all digital channels.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising management",
        "Social media marketing and management",
        "Content creation and marketing",
        "Email marketing campaigns",
        "Analytics and performance tracking"
      ]
    },
    {
      icon: Phone,
      title: "Inbound & Outbound Call Services",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Professional calling solutions including lead generation, appointment setting, customer surveys, and sales support to help grow your business.",
      features: [
        "Outbound lead generation and qualification",
        "Appointment setting and scheduling",
        "Customer surveys and market research",
        "Sales support and follow-up calls",
        "Inbound order processing and support",
        "CRM integration and data management"
      ]
    },
    {
      icon: Monitor,
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Custom website development using cutting-edge technologies to create responsive, user-friendly, and conversion-optimized digital experiences.",
      features: [
        "Custom website design and development",
        "E-commerce platform development",
        "Mobile-responsive design",
        "Content Management Systems (CMS)",
        "API integration and development",
        "Performance optimization and SEO-friendly code"
      ]
    },
    {
      icon: Users,
      title: "Web Management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Ongoing website maintenance, updates, and optimization services to ensure your website remains secure, fast, and up-to-date.",
      features: [
        "Regular website updates and maintenance",
        "Security monitoring and protection",
        "Performance optimization and speed enhancement",
        "Content updates and management",
        "Backup and disaster recovery",
        "Technical support and troubleshooting"
      ]
    },
    {
      icon: FileText,
      title: "U.S. Health Revenue Cycle Management",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Specialized revenue cycle management services for U.S. healthcare facilities, ensuring maximum reimbursement and streamlined billing processes.",
      features: [
        "Medical billing and coding services",
        "Claims processing and submission",
        "Denial management and appeals",
        "Patient registration and insurance verification",
        "Accounts receivable management",
        "Compliance with HIPAA and healthcare regulations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-ringlify-dark-blue to-ringlify-blue opacity-90"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Comprehensive business solutions designed to help your company grow 
            and succeed in today's competitive market
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-ringlify-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-ringlify-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-ringlify-dark-blue">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-ringlify-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-ringlify-blue hover:bg-ringlify-dark-blue text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-ringlify-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-ringlify-blue hover:bg-ringlify-dark-blue text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ringlify-blue text-ringlify-blue hover:bg-ringlify-blue hover:text-white px-8 py-4 rounded-full transition-all duration-300"
              onClick={() => window.open('https://wa.me/923074323319', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
