
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ringlify-dark-blue to-ringlify-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Ready to take your business to the next level? Let's start the conversation
          </p>
        </div>
      </section>

      {/* Global Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ringlify-dark-blue mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600">Connect with us from anywhere in the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Primary Location - UK */}
            <div className="text-center animate-fade-in bg-ringlify-gray p-8 rounded-2xl relative">
              <div className="absolute top-4 right-4 bg-ringlify-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                Primary
              </div>
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">United Kingdom</h3>
              <p className="text-gray-600 mb-4">
                116A Ipswich Road<br />
                Colchester, United Kingdom<br />
                CO40AE
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MessageSquare className="h-4 w-4 text-ringlify-blue" />
                <a 
                  href="tel:+447495917185" 
                  className="text-ringlify-blue font-semibold hover:underline"
                >
                  +44 7495 917185
                </a>
              </div>
            </div>

            {/* Pakistan Office */}
            <div className="text-center animate-fade-in bg-white border-2 border-ringlify-gray p-8 rounded-2xl">
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">Pakistan</h3>
              <p className="text-gray-600 mb-4">
                Nazir Garden Society<br />
                Lahore, Pakistan
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MessageSquare className="h-4 w-4 text-ringlify-blue" />
                <a 
                  href="tel:+923074323319" 
                  className="text-ringlify-blue font-semibold hover:underline"
                >
                  +92 307 4323319
                </a>
              </div>
            </div>

            {/* Australia Office */}
            <div className="text-center animate-fade-in bg-white border-2 border-ringlify-gray p-8 rounded-2xl">
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">Australia</h3>
              <p className="text-gray-600 mb-4">
                3064 Craigieburn<br />
                Melbourne, Australia
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MessageSquare className="h-4 w-4 text-ringlify-blue" />
                <a 
                  href="tel:+61473671747" 
                  className="text-ringlify-blue font-semibold hover:underline"
                >
                  +61 473 671 747
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in">
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">Email</h3>
              <a 
                href="mailto:services@ringlify.site" 
                className="text-gray-600 hover:text-ringlify-blue transition-colors"
              >
                services@ringlify.site
              </a>
            </div>

            <div className="text-center animate-fade-in">
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/447495917185" 
                className="text-gray-600 hover:text-ringlify-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7495 917185
              </a>
            </div>

            <div className="text-center animate-fade-in">
              <div className="bg-ringlify-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-ringlify-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-2">Availability</h3>
              <p className="text-gray-600">
                24/7 Support<br />
                All Time Zones
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-ringlify-gray rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ringlify-dark-blue mb-4">Why Choose Ringlify?</h2>
              <p className="text-xl text-gray-600">We're committed to your success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-ringlify-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-3">Global Expertise</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with deep understanding of international business practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="h-8 w-8 text-ringlify-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock availability ensures your business never stops moving forward
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-8 w-8 text-ringlify-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ringlify-dark-blue mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of delivering measurable results and exceeding client expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
