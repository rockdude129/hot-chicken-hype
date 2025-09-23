import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

// Import Dave's Hot Chicken menu item images
import boxOfFries from '@/assets/box-of-fries.jpg';
import daves1TendersFries from '@/assets/daves-1-tenders-fries.jpg';
import daves2SlidersFries from '@/assets/daves-2-sliders-fries.jpg';
import daves3TenderSliderFries from '@/assets/daves-3-tender-slider-fries.jpg';
import singleTender from '@/assets/single-tender.jpg';
import singleSlider from '@/assets/single-slider.jpg';
import davesBites from '@/assets/daves-bites.jpg';
import fries from '@/assets/fries.jpg';
import cheeseFries from '@/assets/cheese-fries.jpg';
import macCheese from '@/assets/mac-cheese.jpg';
import softDrink from '@/assets/soft-drink.jpg';
import chocolateShake from '@/assets/chocolate-shake.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('meals');
  const { addToCart } = useCart();
  const { user } = useAuth();

  const categories = [
    { id: 'meals', name: 'Meals', icon: '🍗' },
    { id: 'chicken', name: 'Chicken', icon: '🔥' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'drinks', name: 'Drinks & Shakes', icon: '🥤' }
  ];

  const menuItems = {
    meals: [
      {
        name: "Dave's #1: 2 Tenders w/ Fries",
        description: "All tenders are served with sliced bread, pickles and a side of Dave's sauce",
        price: "$14.49",
        spiceLevel: 3,
        popular: true,
        category: "Combo",
        image: daves1TendersFries
      },
      {
        name: "Dave's #2: 2 Sliders w/ Fries",
        description: "Sliders are served on a potato bun with kale slaw, pickles and drizzled with Dave's sauce",
        price: "$16.49",
        spiceLevel: 3,
        popular: true,
        category: "Combo",
        image: daves2SlidersFries
      },
      {
        name: "Dave's #3: 1 Tender & 1 Slider w/ Fries",
        description: "Sliders are served on a potato bun with kale slaw, pickles and drizzled with Dave's sauce & all tenders are served with sliced bread, pickles and a side of Dave's sauce",
        price: "$15.49",
        spiceLevel: 2,
        popular: false,
        category: "Combo",
        image: daves3TenderSliderFries
      },
      {
        name: "10 pc. Dave's Bites w/ Fries",
        description: "White meat chicken tender bites served with a side of fries, a slice of bread, pickles, and side of Dave's sauce",
        price: "$12.49",
        spiceLevel: 3,
        popular: true,
        category: "Combo",
        image: davesBites
      }
    ],
    chicken: [
      {
        name: "Single Tender",
        description: "All tenders are served with sliced bread, pickles, and a side of Dave's sauce",
        price: "$6.49",
        spiceLevel: 3,
        popular: true,
        category: "Individual",
        image: singleTender
      },
      {
        name: "Single Slider",
        description: "Sliders are served on a potato bun with kale slaw, pickles and drizzled with Dave's sauce",
        price: "$8.49",
        spiceLevel: 3,
        popular: true,
        category: "Individual",
        image: singleSlider
      },
      {
        name: "10pc. Dave's Bites",
        description: "White meat chicken tender bites served with a slice of bread, pickles, and side of Dave's sauce",
        price: "$8.99",
        spiceLevel: 3,
        popular: false,
        category: "Bites",
        image: davesBites
      }
    ],
    sides: [
      {
        name: "Box of Fries",
        description: "18 ounces of our awesomely seasoned and perfectly crispy fries!",
        price: "$11.49",
        popular: true,
        image: boxOfFries
      },
      {
        name: "Fries",
        description: "Perfectly seasoned and crispy golden fries",
        price: "$4.29",
        popular: true,
        image: fries
      },
      {
        name: "Cheese Fries",
        description: "Our crispy fries topped with melted cheese sauce",
        price: "$5.29",
        popular: true,
        image: cheeseFries
      },
      {
        name: "Mac & Cheese",
        description: "Creamy, rich macaroni and cheese",
        price: "$4.29",
        popular: true,
        image: macCheese
      }
    ],
    drinks: [
      {
        name: "Soft Drink",
        description: "Choice of Coca-Cola, Diet Coke, Sprite, and more",
        price: "$2.29",
        popular: true,
        image: softDrink
      },
      {
        name: "Chocolate Shake",
        description: "Rich and creamy chocolate milkshake",
        price: "$5.49",
        popular: true,
        image: chocolateShake
      },
      {
        name: "Bottled Water",
        description: "Refreshing bottled water",
        price: "$2.79",
        popular: false
      }
    ]
  };

  const handleAddToCart = (item: any) => {
    const price = parseFloat(item.price.replace('$', ''));
    addToCart({
      item_name: item.name,
      item_price: price,
      item_image: 'image' in item ? item.image : undefined,
      item_description: item.description,
    });
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
                <div className="space-y-4">
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
                  
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center space-x-2 bg-gradient-hero hover:shadow-brand transition-smooth"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </Button>
                    
                    {!user && (
                      <p className="text-xs text-muted-foreground">
                        Sign in to save your cart
                      </p>
                    )}
                  </div>
                </div>
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