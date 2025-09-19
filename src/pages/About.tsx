import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "2017",
      title: "The Beginning",
      description: "Dave's Hot Chicken was born in Nashville with a simple mission: serve the best hot chicken in the South."
    },
    {
      year: "2019",
      title: "Secret Recipe",
      description: "After two years of perfecting our blend, we created the signature spice mix that makes Dave's special."
    },
    {
      year: "2021",
      title: "Community Love",
      description: "Named 'Best Hot Chicken in Nashville' by Nashville Scene and became a local favorite."
    },
    {
      year: "2024",
      title: "Growing Strong",
      description: "Today we continue serving authentic Nashville hot chicken with the same passion and quality."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-brand-red" />,
      title: "Made with Love",
      description: "Every piece of chicken is hand-crafted with care, following traditional Nashville methods passed down through generations."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-orange" />,
      title: "Authentic Heat",
      description: "We use only the finest spices and peppers, sourced locally when possible, to create our signature heat levels."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-yellow" />,
      title: "Community First",
      description: "We're more than a restaurant - we're part of the Nashville community, supporting local suppliers and events."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-red" />,
      title: "Quality Promise",
      description: "Fresh ingredients, traditional techniques, and uncompromising quality in every single order we serve."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Story
          </h1>
          <p className="font-display text-xl sm:text-2xl leading-relaxed">
            From a small Nashville kitchen to your table - 
            <br className="hidden sm:block" />
            the passion for <span className="text-brand-yellow">authentic hot chicken</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h2 className="font-brand text-3xl sm:text-4xl text-primary mb-6">
                The Dave's Hot Chicken Story
              </h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-8 lg:p-12">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                It all started in 2017 in a small Nashville kitchen, where Dave had a simple but bold vision: 
                create the most authentic, flavorful hot chicken experience that honors Nashville's rich 
                culinary traditions while adding his own passionate twist.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Growing up in Nashville, Dave was surrounded by the city's legendary hot chicken culture. 
                But he noticed something missing - a place that combined the traditional Nashville heat 
                with fresh, quality ingredients and genuine hospitality. That's when Dave's Hot Chicken was born.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                What started as weekend pop-ups and farmer's market stands quickly grew into something special. 
                Word spread about Dave's secret spice blend, the perfectly crispy chicken, and the warm 
                community atmosphere. Customers didn't just come for the food - they came for the experience.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Today, Dave's Hot Chicken continues that same mission: serving Nashville's finest hot chicken 
                with authentic flavors, fresh ingredients, and the genuine hospitality that makes every 
                customer feel like family. Because great hot chicken isn't just about the heat - 
                it's about the heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl sm:text-4xl text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to Nashville favorite - here's how we've grown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center group hover:shadow-warm transition-smooth">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-hero text-white px-4 py-2 rounded-full font-display font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl sm:text-4xl text-primary mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do, from sourcing ingredients to serving customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-warm transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-bounce">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-text-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl mb-6 text-brand-red">
            Become Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Every customer who walks through our doors adds a new chapter to the Dave's Hot Chicken story. 
            Come taste the passion, feel the heat, and join our growing family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-red hover:bg-primary-dark text-white font-medium rounded-lg transition-smooth"
            >
              Visit Us Today
            </a>
            <a 
              href="/menu" 
              className="inline-flex items-center justify-center px-8 py-3 border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-text-dark font-medium rounded-lg transition-smooth"
            >
              See Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;