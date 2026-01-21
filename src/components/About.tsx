import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Building2, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Gissat</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 1991, we've been Uganda's trusted environmental consultancy partner, helping organizations navigate
            complex environmental challenges with integrity and expertise.
          </p>
        </div>

        {/* Company history */}
        <div className="mb-12 sm:mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                    Gissat, established in 1991, is a specialist, environmental consultancy located in Muyenga, Kampala,
                    Uganda. Across a wide range of public, commercial and industrial projects, our team focuses on the
                    practical aspects of environmental planning, engineering and science. Through our extensive level of
                    knowledge and experience, we achieve our clients desired outcomes as efficiently as possible;
                    delivering and communicating effective solutions in the field or in the boardroom. Over the years we
                    have grown to become one of the leading firms in this industry in Uganda, providing a wealth of
                    environmental expertise in the areas of Transport and Infrastructure, Tourism, Energy and Utilities,
                    Telecommunication, Manufacturing to mention etc in both the Government and the private sectors. At
                    Gissat, understanding the client’s needs is priority. We assist our clients with the integration of
                    environmental considerations during project development, provide advice regarding actual or likely
                    risks and impacts of development on natural or built environments as well as ensure compliance with
                    the current environmental laws and regulations to promote sound environmental impact management. We
                    provide in-depth, guidance and tools to help businesses understand what they need to do to assess
                    and control risks in a work place and comply with health and safety laws. We believe that striking
                    the appropriate balance upfront in the life cycle of a development project will limit the risks of
                    costly delays in obtaining appropriate planning permissions, limit public resistance as well as
                    limit unnecessary mitigation costs during the construction and operation stages of the development.
                    We are founded on the principles of integrity and professionalism and as such, we have remained
                    compliant with all regulatory requirements at all levels. This partly explains our expeditious
                    execution of our clients’ work.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-sm text-muted-foreground">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="text-center">
            <CardContent className="p-6 sm:p-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To provide innovative and practical environmental solutions that enable sustainable development while
                protecting Uganda's natural heritage for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 sm:p-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To be East Africa's premier environmental consultancy, recognized for excellence in environmental
                stewardship and sustainable development practices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 sm:p-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Our Values</h3>
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
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
            Why Gissat is Your Trusted Environmental Partner
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">30+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Years of proven expertise in environmental consulting
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100%</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Regulatory compliance success rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Successful projects across all sectors</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">24/7</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Dedicated support and monitoring services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
