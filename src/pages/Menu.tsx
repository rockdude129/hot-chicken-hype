import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Star } from 'lucide-react';

// Import menu item images
import classicHotChicken from '@/assets/classic-hot-chicken.jpg';
import fireTenderCombo from '@/assets/fire-tender-combo.jpg';
import nashvilleSandwich from '@/assets/nashville-sandwich.jpg';
import theInferno from '@/assets/the-inferno.jpg';
import mildWild from '@/assets/mild-wild.jpg';
import hotChickenWrap from '@/assets/hot-chicken-wrap.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chicken');

  const categories = [
    { id: 'chicken', name: 'Hot Chicken', icon: '🍗' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = {
    chicken: [
      {
        name: "Classic Hot Chicken",
        description: "Our signature Nashville hot chicken breast, perfectly seasoned and fried to crispy perfection",
        price: "$12.99",
        spiceLevel: 3,
        popular: true,
        category: "Entrées",
        image: classicHotChicken
      },
      {
        name: "Fire Tender Combo",
        description: "Three blazing hot chicken tenders served with your choice of two sides",
        price: "$15.99",
        spiceLevel: 4,
        popular: true,
        category: "Combos",
        image: fireTenderCombo
      },
      {
        name: "Nashville Sandwich",
        description: "Hot chicken breast on a toasted brioche bun with pickles, slaw, and our signature sauce",
        price: "$13.99",
        spiceLevel: 2,
        popular: false,
        category: "Sandwiches",
        image: nashvilleSandwich
      },
      {
        name: "The Inferno",
        description: "Our hottest chicken for the brave souls. Served with cooling ranch and extra napkins",
        price: "$16.99",
        spiceLevel: 5,
        popular: false,
        category: "Entrées",
        image: theInferno
      },
      {
        name: "Mild & Wild",
        description: "Perfect for beginners - tender chicken with just enough spice to get your attention",
        price: "$11.99",
        spiceLevel: 1,
        popular: false,
        category: "Entrées",
        image: mildWild
      },
      {
        name: "Hot Chicken Wrap",
        description: "Sliced hot chicken with fresh lettuce, tomatoes, and ranch in a flour tortilla",
        price: "$10.99",
        spiceLevel: 2,
        popular: false,
        category: "Wraps",
        image: hotChickenWrap
      }
    ],
    sides: [
      {
        name: "Seasoned Fries",
        description: "Crispy golden fries tossed with our signature seasoning blend",
        price: "$4.99",
        popular: true
      },
      {
        name: "Mac & Cheese",
        description: "Creamy, three-cheese macaroni that pairs perfectly with our hot chicken",
        price: "$5.99",
        popular: true
      },
      {
        name: "Coleslaw",
        description: "Cool, creamy coleslaw that helps balance the heat",
        price: "$3.99",
        popular: false
      },
      {
        name: "Loaded Baked Beans",
        description: "Smoky baked beans with bacon and brown sugar",
        price: "$4.99",
        popular: false
      },
      {
        name: "Pickles",
        description: "House-made dill pickles - the perfect hot chicken companion",
        price: "$2.99",
        popular: false
      }
    ],
    drinks: [
      {
        name: "Sweet Tea",
        description: "Southern-style sweet tea to cool down the heat",
        price: "$2.99",
        popular: true
      },
      {
        name: "Lemonade",
        description: "Fresh-squeezed lemonade with just the right amount of tartness",
        price: "$3.49",
        popular: true
      },
      {
        name: "Craft Sodas",
        description: "Selection of artisanal sodas including cola, root beer, and orange",
        price: "$3.99",
        popular: false
      },
      {
        name: "Milk",
        description: "Ice-cold whole milk - trust us, you might need it",
        price: "$2.49",
        popular: false
      }
    ],
    desserts: [
      {
        name: "Honey Biscuit",
        description: "Warm, fluffy biscuit drizzled with local honey",
        price: "$3.99",
        popular: true
      },
      {
        name: "Peach Cobbler",
        description: "Traditional Southern peach cobbler with vanilla ice cream",
        price: "$6.99",
        popular: true
      },
      {
        name: "Chocolate Brownie",
        description: "Rich, fudgy brownie that's the perfect end to a spicy meal",
        price: "$4.99",
        popular: false
      }
    ]
  };

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame 
        key={i} 
        size={16} 
        className={i < level ? 'text-brand-red fill-brand-red' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl mb-4">
            Our Menu
          </h1>
          <p className="font-display text-xl sm:text-2xl max-w-2xl mx-auto">
            From mild to <span className="text-brand-yellow">blazing inferno</span> - 
            find your perfect level of heat
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="lg"
              className={`transition-smooth ${
                activeCategory === category.id 
                  ? 'bg-gradient-hero shadow-brand' 
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card key={index} className="group hover:shadow-warm transition-smooth relative overflow-hidden">
              {item.popular && (
                <Badge className="absolute top-4 right-4 bg-brand-red text-white border-0 z-10">
                  <Star size={12} className="mr-1 fill-current" />
                  Popular
                </Badge>
              )}
              {'image' in item && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.name} - ${item.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-display text-lg group-hover:text-primary transition-smooth">
                    {item.name}
                  </CardTitle>
                  <span className="font-display text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                {'category' in item && (
                  <Badge variant="outline" className="w-fit text-xs">
                    {item.category}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                {'spiceLevel' in item && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Heat Level:
                    </span>
                    <div className="flex space-x-1">
                      {getSpiceIcons(item.spiceLevel)}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Heat Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-soft p-8">
          <h3 className="font-brand text-2xl text-primary mb-6 text-center">
            Heat Guide
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { level: 1, name: "Mild", desc: "Just a whisper of heat" },
              { level: 2, name: "Medium", desc: "Warming up nicely" },
              { level: 3, name: "Hot", desc: "Now we're talking" },
              { level: 4, name: "Fire", desc: "Serious business" },
              { level: 5, name: "Inferno", desc: "For the fearless" }
            ].map((heat) => (
              <div key={heat.level} className="text-center p-4 rounded-lg bg-neutral-warm">
                <div className="flex justify-center mb-2">
                  {getSpiceIcons(heat.level)}
                </div>
                <h4 className="font-display font-semibold text-foreground">
                  {heat.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {heat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;