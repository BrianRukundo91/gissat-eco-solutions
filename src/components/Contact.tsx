import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

// ── EmailJS config ─────────────────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account
const EMAILJS_SERVICE_ID  = "service_eeecppf";
const EMAILJS_TEMPLATE_ID = "template_n1lqhom";
const EMAILJS_PUBLIC_KEY  = "uFZ6N0UoCUB0uEDvz";
// ──────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          message:    formData.query,
          to_email:   "talk2gissat@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", query: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your environmental project? Get in touch with our expert team for consultation, quotes, or any
            questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Environment Management & Development Consultants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-muted-foreground">
                    <p>House 26 | Plot 7140A | Muyenga Tank Hill Road</p>
                    <p>P.O. BOX 138929 KAMPALA, UGANDA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-muted-foreground">
                    <p>+256 760-539-469</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:talk2gissat@gmail.com" className="text-primary hover:underline">
                      talk2gissat@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=Muyenga+Tank+Hill+Road,Kampala,Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

          <Card id="contact-form">
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
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-1"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="query">Your Query *</Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={(e) => setFormData((prev) => ({ ...prev, query: e.target.value }))}
                    required
                    className="mt-1 min-h-[180px]"
                    placeholder="Please describe your query or how we can help you..."
                  />
                </div>
                {status === "success" ? (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-sm">Query sent successfully!</p>
                      <p className="text-xs text-green-700 mt-0.5">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {status === "error" && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Something went wrong. Please email us directly at{" "}
                        <a href="mailto:talk2gissat@gmail.com" className="underline font-medium">
                          talk2gissat@gmail.com
                        </a>
                      </p>
                    )}
                    <Button type="submit" className="w-full" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Submit Query"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
