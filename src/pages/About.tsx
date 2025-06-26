
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Target, Eye, Shield, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Our clients' success is our success. We prioritize their needs and deliver exceptional service."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, continuously improving our services and capabilities."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We provide 24/7 services across multiple time zones with multilingual support capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ringlify-dark-blue to-ringlify-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Ringlify
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Empowering businesses worldwide with innovative outsourcing solutions 
            and exceptional service quality since our inception
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-ringlify-blue mr-4" />
                <h2 className="text-3xl font-bold text-ringlify-dark-blue">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide world-class outsourcing solutions that enable businesses to focus on their core 
                competencies while we handle their operational excellence. We are committed to delivering 
                exceptional value through innovative technology, skilled professionals, and unwavering 
                dedication to client success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission extends beyond service delivery - we aim to build lasting partnerships that 
                drive sustainable growth and competitive advantage for our clients in an increasingly 
                complex global marketplace.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-ringlify-blue mr-4" />
                <h2 className="text-3xl font-bold text-ringlify-dark-blue">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the leading global provider of comprehensive business process outsourcing 
                solutions, recognized for our innovation, reliability, and exceptional client outcomes. 
                We envision a future where businesses of all sizes can access enterprise-level 
                capabilities through our seamless service integration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We strive to set industry standards for quality, efficiency, and customer satisfaction 
                while maintaining our commitment to ethical business practices and sustainable growth 
                for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-ringlify-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-ringlify-blue/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-8 w-8 text-ringlify-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between global businesses and exceptional 
                outsourcing solutions, Ringlify has grown from a small team of dedicated professionals 
                to a comprehensive service provider trusted by companies worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began with a simple observation: businesses needed reliable partners 
                who could deliver consistent quality while enabling them to focus on strategic growth. 
                Today, we serve clients across multiple industries and time zones, maintaining our 
                commitment to excellence and innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our headquarters in Lahore, Pakistan, we've built a global network of skilled 
                professionals who share our passion for delivering exceptional results. Every project 
                we undertake reflects our dedication to client success and our belief in the 
                transformative power of strategic outsourcing.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Modern office building"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Professional workspace"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Business architecture"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300 -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Corporate building"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
