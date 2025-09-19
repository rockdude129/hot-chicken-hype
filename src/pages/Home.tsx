import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Clock, Heart, Star } from 'lucide-react';
import logo from '@/assets/logo.png';

const Home = () => {
  const features = [
    {
      icon: <Flame className="h-8 w-8 text-brand-red" />,
      title: "Nashville Hot",
      description: "Authentic Nashville-style hot chicken with our signature spice blend"
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-orange" />,
      title: "Fresh Daily",
      description: "Made fresh daily with premium ingredients and traditional methods"
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-red" />,
      title: "Made with Love",
      description: "Every piece is hand-crafted with care and passion for perfection"
    }
  ];

  const menuHighlights = [
    {
      name: "Classic Hot Chicken",
      description: "Our signature Nashville hot chicken, crispy and perfectly spiced",
      price: "$12.99",
      spiceLevel: "🌶️🌶️🌶️"
    },
    {
      name: "Fire Tender Combo",
      description: "Three hot tenders with fries and your choice of side",
      price: "$15.99",
      spiceLevel: "🌶️🌶️🌶️🌶️"
    },
    {
      name: "Nashville Sandwich",
      description: "Hot chicken breast on a brioche bun with pickles and slaw",
      price: "$13.99",
      spiceLevel: "🌶️🌶️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={logo} 
                alt="Dave's Hot Chicken" 
                className="h-24 w-24 lg:h-32 lg:w-32 rounded-full shadow-brand animate-pulse"
              />
            </div>
            <h1 className="font-brand text-4xl sm:text-5xl lg:text-7xl mb-6 tracking-wide">
              Dave's Hot Chicken
            </h1>
            <p className="font-display text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Nashville's spiciest and most flavorful hot chicken experience. 
              <br className="hidden sm:block" />
              <span className="text-brand-yellow">Fresh, crispy, and made with love.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-brand transition-bounce"
              >
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-bounce"
              >
                <Link to="/coming-soon">Order Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Since 2017, we've been serving Nashville's finest hot chicken with authentic flavors and unmatched quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-warm transition-smooth">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
              Menu Favorites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try our most popular dishes that keep customers coming back for more heat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuHighlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">
                      Spice Level: {item.spiceLevel}
                    </span>
                    <div className="flex text-brand-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-hero hover:shadow-brand transition-smooth">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-text-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl mb-6 text-brand-red">
            Ready to Feel the Heat?
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Visit us today and experience Nashville's hottest chicken. 
            Your taste buds will thank you (eventually).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-red hover:bg-primary-dark transition-smooth">
              <Link to="/contact">Find Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-text-dark transition-smooth">
              <Link to="/coming-soon">Order Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;