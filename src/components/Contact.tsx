import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    query: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Query from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\n\nQuery:\n${formData.query}`);
    window.location.href = `mailto:talk2gissat@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your environmental project? Get in touch with our expert team 
            for consultation, quotes, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Environment Management & Development Consultants
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-muted-foreground">
                    <p>House 26 | Plot 7140A | Muyenga Tank Hill Road</p>
                    <p>P.O. BOX 21598 KAMPALA, UGANDA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-muted-foreground">
                    <p>Tel/Fax: 256-700-411-411</p>
                    <p>+256 760-539-469</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:talk2gissat@gmail.com" className="text-primary hover:underline">talk2gissat@gmail.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Google Map embed */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7545!2d32.6001!3d0.2955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbc4bb530f11%3A0x7166ba75fb7c947c!2s26b%20Tank%20Hill%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sae!4v1704067200000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gissat Office Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir//26b+Tank+Hill+Rd,+Kampala,+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Query</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="query">Your Query *</Label>
                    <Textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[180px]"
                      placeholder="Please describe your query or how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Query
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;