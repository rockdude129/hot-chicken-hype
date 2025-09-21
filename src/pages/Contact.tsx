import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mjkabywl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out! We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl mb-4">
            Get in Touch
          </h1>
          <p className="font-display text-xl sm:text-2xl">
            We'd love to hear from you! Questions, feedback, or just want to say hello?
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="font-brand text-2xl text-primary">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(615) 555-0123"
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="transition-smooth focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:shadow-brand transition-smooth"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-brand text-xl text-primary flex items-center">
                  <MapPin className="mr-2 text-brand-red" />
                  Location & Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-display font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    123 Music Row<br />
                    Nashville, TN 37203
                  </p>
                </div>
                
                <div>
                  <h4 className="font-display font-semibold mb-2 flex items-center">
                    <Clock className="mr-2 text-brand-orange" size={16} />
                    Hours
                  </h4>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium">Mon - Thu:</span> 11:00 AM - 9:00 PM</p>
                    <p><span className="font-medium">Fri - Sat:</span> 11:00 AM - 10:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-brand text-xl text-primary">
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-brand-red flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">(615) 555-FIRE</p>
                    <p className="text-sm text-muted-foreground">Call us during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-brand-orange flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">hello@daveshotchicken.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-brand text-xl text-primary">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay up to date with our latest menu items, events, and hot chicken news!
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-gradient-warm rounded-lg hover:bg-primary hover:text-white transition-smooth"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gradient-warm rounded-lg hover:bg-primary hover:text-white transition-smooth"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gradient-warm rounded-lg hover:bg-primary hover:text-white transition-smooth"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-soft">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-warm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto text-primary mb-2" size={32} />
                    <p className="font-display font-semibold text-primary">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Coming soon with Google Maps integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;