import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Building2, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Gissat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 1991, we've been Uganda's trusted environmental consultancy partner, 
            helping organizations navigate complex environmental challenges with integrity and expertise.
          </p>
        </div>

        {/* Company history */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Founded in 1991 in Muyenga, Kampala, Gissat has grown from a small environmental consulting 
                    firm to Uganda's leading specialist in environmental management and sustainability solutions. 
                    Over three decades, we have built an unparalleled reputation for delivering practical, 
                    science-based environmental solutions that drive sustainable development.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Established 1991</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Muyenga, Kampala, Uganda</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative and practical environmental solutions that enable 
                sustainable development while protecting Uganda's natural heritage for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be East Africa's premier environmental consultancy, recognized for excellence 
                in environmental stewardship and sustainable development practices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p className="font-medium text-foreground">Integrity</p>
                <p className="font-medium text-foreground">Professionalism</p>
                <p className="font-medium text-foreground">Sustainability</p>
                <p className="font-medium text-foreground">Innovation</p>
                <p className="font-medium text-foreground">Excellence</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why choose us */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Why Gissat is Your Trusted Environmental Partner
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-sm text-muted-foreground">Years of proven expertise in environmental consulting</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Regulatory compliance success rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Successful projects across all sectors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Dedicated support and monitoring services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;