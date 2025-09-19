import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Smartphone, Truck, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ComingSoon = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would typically send the email to a server
    setIsSubscribed(true);
    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as online ordering is available.",
    });
    setEmail('');
  };

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-brand-orange" />,
      title: "Mobile Ordering",
      description: "Order your favorite hot chicken right from your phone - quick, easy, and convenient."
    },
    {
      icon: <Truck className="h-8 w-8 text-brand-red" />,
      title: "Delivery & Pickup",
      description: "Get Dave's Hot Chicken delivered to your door or skip the line with pickup orders."
    },
    {
      icon: <Bell className="h-8 w-8 text-brand-yellow" />,
      title: "Order Notifications",
      description: "Real-time updates on your order status, so you know exactly when your food is ready."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Clock className="mx-auto h-16 w-16 text-brand-yellow mb-6 animate-pulse" />
          </div>
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl mb-6">
            Online Ordering
            <br />
            <span className="text-brand-yellow">Coming Soon!</span>
          </h1>
          <p className="font-display text-xl sm:text-2xl mb-8 leading-relaxed">
            We're working hard to bring you the convenience of ordering 
            <br className="hidden sm:block" />
            Dave's Hot Chicken online. Get ready for the heat!
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl sm:text-4xl text-primary mb-4">
              What's Coming
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our online ordering system will make getting your hot chicken fix easier than ever
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

      {/* Notification Signup */}
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-brand">
            <CardContent className="p-8 text-center">
              {!isSubscribed ? (
                <>
                  <h3 className="font-brand text-2xl sm:text-3xl text-primary mb-4">
                    Be the First to Know
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join our notification list and be among the first to experience 
                    online ordering when we launch. Plus, get exclusive early access!
                  </p>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 transition-smooth focus:border-primary"
                    />
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-hero hover:shadow-brand transition-smooth whitespace-nowrap"
                    >
                      Notify Me
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll only email you about the launch. No spam, we promise! 🌶️
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                  <h3 className="font-brand text-2xl text-primary mb-2">
                    You're All Set!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for signing up! We'll email you as soon as online ordering is ready.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Options */}
      <section className="py-16 lg:py-24 bg-text-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand text-3xl sm:text-4xl mb-6 text-brand-red">
            Can't Wait? Visit Us Today!
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            While we're perfecting our online ordering system, 
            come experience the full Dave's Hot Chicken atmosphere in person.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-display font-semibold mb-2 text-brand-yellow">
                Dine In
              </h4>
              <p className="text-gray-300 text-sm">
                Full restaurant experience with our complete menu
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-display font-semibold mb-2 text-brand-yellow">
                Takeout
              </h4>
              <p className="text-gray-300 text-sm">
                Call ahead and we'll have your order ready for pickup
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-red hover:bg-primary-dark transition-smooth">
              <a href="/contact">Get Directions</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-text-dark transition-smooth">
              <a href="tel:(615)555-3473">Call to Order</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;