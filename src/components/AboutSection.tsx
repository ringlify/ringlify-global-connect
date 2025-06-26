
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-ringlify-dark-blue mb-6">
              About Ringlify
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ringlify is a leading global service provider specializing in outsourced business solutions 
              that help companies scale efficiently and cost-effectively. With our headquarters in Lahore, 
              Pakistan, we serve clients worldwide with 24/7 multilingual support and cutting-edge technology.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of experienced professionals delivers exceptional results across customer support, 
              web development, digital marketing, and specialized healthcare revenue cycle management. 
              We combine industry expertise with innovative approaches to drive measurable growth for our partners.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Ringlify, we believe in building long-term partnerships based on trust, quality, and 
              consistent delivery. Our commitment to excellence has made us the preferred choice for 
              businesses looking to outsource critical operations while maintaining the highest standards.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional team working"
              className="rounded-lg shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
