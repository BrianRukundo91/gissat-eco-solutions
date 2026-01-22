import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe, Heart, Briefcase } from "lucide-react";

const whyJoinReasons = [
  {
    icon: Award,
    title: "Prestigious Projects",
    description: "Delivering prestigious, life-changing, and innovative projects creates a business we can be proud to work for.",
  },
  {
    icon: Users,
    title: "The People",
    description:
      "We have an incredibly diverse range of people working towards common goals, and we set new standards of excellence as we go.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "For us, sustainability is about using our own ingenuity to deliver lasting value for our clients and the communities where we work.",
  },
];

const staffFeedback = [
  "High ethics / morals / standards",
  "Diversity of work both in scale and complexity",
  "Good reputation",
  "Flexible work conditions",
  "Work opportunities at regional and national levels",
  "Supportive and friendly environment",
  "Considerate leave entitlements",
];

const Careers = () => {
  return (
    <section id="careers" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Careers at Gissat</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your career with Uganda's leading environmental consultancy.
          </p>
        </div>

        <Card className="bg-background mb-10 sm:mb-16">
          <CardContent className="p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Join Our Team</h3>
                </div>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p>
                    Gissat offers the experience and insight gained from more than 500 projects. Our growth and success is
                    attributable to one key factor – our people!
                  </p>
                  <p>
                    As experts in a variety of environmental disciplines, we are committed to collaborate in a workplace
                    enabling inspired, innovative and cutting-edge solutions.
                  </p>
                  <p>
                    We pride ourselves on maintaining a "small company feel" and a cooperative culture amongst our employees.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">What Our Staff Say</h3>
                </div>
                <ul className="space-y-2">
                  {staffFeedback.map((feedback, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base">{feedback}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6 sm:mb-8">Why Join Gissat?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyJoinReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center bg-background">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your CV and tell us how you'd like to
            contribute to Uganda's environmental sustainability efforts.
          </p>
          <Button size="lg">Submit General Application</Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
