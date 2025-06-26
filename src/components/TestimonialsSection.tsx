
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      text: "Ringlify transformed our customer support operations. Their 24/7 multilingual team helped us expand globally while maintaining exceptional service quality. Outstanding professionalism and results."
    },
    {
      name: "Michael Chen",
      company: "HealthCare Partners",
      text: "The revenue cycle management services provided by Ringlify increased our collection rates by 35%. Their expertise in healthcare billing is unmatched, and their team is incredibly reliable."
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Growth Agency",
      text: "Working with Ringlify on our web development projects has been fantastic. They deliver high-quality websites on time and provide excellent ongoing support. Highly recommended for any business."
    },
    {
      name: "David Thompson",
      company: "Global Retail Corp",
      text: "Ringlify's digital marketing and call services drove a 40% increase in our lead generation. Their strategic approach and dedicated team make them an invaluable business partner."
    },
    {
      name: "Lisa Wang",
      company: "E-commerce Solutions",
      text: "The web management services from Ringlify keep our online store running smoothly 24/7. Their proactive approach and technical expertise have significantly improved our site performance and customer experience."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-ringlify-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="mb-6">
                <div className="flex text-ringlify-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold text-ringlify-dark-blue">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <div 
              key={index + 3}
              className="bg-ringlify-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="mb-6">
                <div className="flex text-ringlify-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold text-ringlify-dark-blue">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
