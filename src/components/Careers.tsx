import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  CheckCircle, Award, Users, Globe, Heart, Briefcase,
  MapPin, Building2, ChevronDown, ChevronUp, Upload,
  Send, FileText, Phone, Mail, User,
} from "lucide-react";

// ── Formspree endpoint ────────────────────────────────────────────────────────
// Replace with your actual Formspree form endpoint after setup
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_ID";
// ─────────────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────────────

const whyJoinReasons = [
  {
    icon: Award,
    title: "Prestigious Projects",
    description:
      "Delivering prestigious, life-changing, and innovative projects creates a business we can be proud to work for.",
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

const responsibilities = [
  {
    title: "Financial Management & Reporting",
    items: [
      "Prepare and maintain accurate financial records, ledgers, and journals",
      "Generate weekly, monthly, quarterly, and annual financial reports",
      "Assist in budgeting, forecasting, and financial planning",
      "Monitor daily cash flow and ensure proper fund management",
    ],
  },
  {
    title: "Accounts Payable & Receivable",
    items: [
      "Process invoices, payments, and expense claims in a timely manner",
      "Reconcile supplier and customer accounts",
      "Follow up on outstanding receivables and manage collections",
    ],
  },
  {
    title: "Bank & Cash Management",
    items: [
      "Perform regular bank reconciliations",
      "Manage petty cash and ensure proper documentation",
    ],
  },
  {
    title: "Compliance & Audit",
    items: [
      "Ensure compliance with Ugandan tax laws and financial regulations",
      "Prepare and file statutory returns (e.g., VAT, PAYE, NSSF)",
      "Support internal and external audits by providing required documentation",
    ],
  },
  {
    title: "Payroll Support",
    items: [
      "Assist in payroll processing and ensure timely salary payments",
      "Maintain employee payroll records and statutory deductions",
    ],
  },
  {
    title: "Internal Controls",
    items: [
      "Implement and maintain strong internal financial controls",
      "Ensure proper documentation and approval of financial transactions",
      "Identify and report financial risks or irregularities",
    ],
  },
];

const qualifications = [
  "Bachelor's degree in Accounting, Finance, Business Administration, or related field",
  "Professional certification (CPA, ACCA – Part or Full) is an added advantage",
  "Minimum of 2–4 years of relevant experience in accounting or finance",
  "Strong knowledge of accounting principles and financial reporting",
  "Familiarity with Ugandan tax laws and statutory requirements",
  "Proficiency in accounting software (QuickBooks, Tally, Sage) and Microsoft Excel",
];

const competencies = [
  "High level of accuracy and attention to detail",
  "Strong analytical and problem-solving skills",
  "Integrity and confidentiality",
  "Good communication and interpersonal skills",
  "Ability to meet deadlines and work under pressure",
];

// ── Application Form ──────────────────────────────────────────────────────────

const ApplicationForm = ({ position }: { position: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      const data = new FormData(formRef.current);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
        setFileName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-lg font-semibold text-foreground">Application Submitted!</h4>
        <p className="text-sm text-muted-foreground max-w-sm">
          Thank you for applying. Our team will review your application and be in touch shortly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Hidden field — position */}
      <input type="hidden" name="position" value={position} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="app-name" className="flex items-center gap-1.5 text-sm">
            <User className="w-3.5 h-3.5" /> Full Name *
          </Label>
          <Input id="app-name" name="name" type="text" required placeholder="Your full name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="app-email" className="flex items-center gap-1.5 text-sm">
            <Mail className="w-3.5 h-3.5" /> Email Address *
          </Label>
          <Input id="app-email" name="email" type="email" required placeholder="your@email.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="app-phone" className="flex items-center gap-1.5 text-sm">
            <Phone className="w-3.5 h-3.5" /> Phone / Contact *
          </Label>
          <Input id="app-phone" name="phone" type="tel" required placeholder="+256 700 000 000" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="app-location" className="flex items-center gap-1.5 text-sm">
            <MapPin className="w-3.5 h-3.5" /> Location *
          </Label>
          <Input id="app-location" name="location" type="text" required placeholder="City / District" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="app-cover" className="flex items-center gap-1.5 text-sm">
          <FileText className="w-3.5 h-3.5" /> Cover Letter
        </Label>
        <Textarea
          id="app-cover"
          name="cover_letter"
          placeholder="Briefly tell us why you're the right fit for this role…"
          className="min-h-[120px]"
        />
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5 text-sm">
          <Upload className="w-3.5 h-3.5" /> Upload CV *
        </Label>
        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200">
          <div className="flex flex-col items-center gap-1 text-center px-4">
            <Upload className="w-5 h-5 text-muted-foreground" />
            {fileName ? (
              <span className="text-sm font-medium text-primary">{fileName}</span>
            ) : (
              <>
                <span className="text-sm font-medium text-foreground">Click to upload your CV</span>
                <span className="text-xs text-muted-foreground">PDF, DOC, or DOCX — max 5MB</span>
              </>
            )}
          </div>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please email your application directly to{" "}
          <a href="mailto:talk2gissat@gmail.com" className="underline font-medium">
            talk2gissat@gmail.com
          </a>
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit Application"}
        <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};

// ── JD Section ────────────────────────────────────────────────────────────────

const JobListing = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) =>
    setOpenSection((prev) => (prev === section ? null : section));

  return (
    <div className="mb-14 sm:mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-border" />
        <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-wide uppercase">
          Current Openings
        </h3>
        <div className="h-px flex-1 bg-border" />
      </div>

      <Card className="overflow-hidden border-border/60 hover:shadow-lg transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/8 to-primary/3 px-6 sm:px-8 py-6 border-b border-border/50">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Accounts and Finance Officer
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                  <MapPin className="w-3 h-3" /> Uganda
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                  <Building2 className="w-3 h-3" /> Finance Department
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                  <Briefcase className="w-3 h-3" /> Full-time
                </Badge>
                <Badge className="bg-green-600 hover:bg-green-700 text-xs">Now Hiring</Badge>
              </div>
            </div>

            {/* Apply button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="flex-shrink-0 w-full sm:w-auto">
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl">Apply — Accounts and Finance Officer</DialogTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill in the form below. Your application will be sent directly to the Gissat HR team.
                  </p>
                </DialogHeader>
                <div className="mt-2">
                  <ApplicationForm position="Accounts and Finance Officer" />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Summary */}
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            The Accounts and Finance Officer is responsible for managing day-to-day financial operations,
            maintaining accurate financial records, ensuring compliance with local regulations, and
            supporting financial planning and reporting. The role requires strong attention to detail,
            integrity, and the ability to work in a fast-paced environment. Reports to the Finance Manager / Head of Finance.
          </p>
        </div>

        <CardContent className="p-0">
          {/* Key Responsibilities */}
          <div className="border-b border-border/50">
            <button
              onClick={() => toggle("responsibilities")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-foreground">Key Responsibilities</span>
              {openSection === "responsibilities" ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {openSection === "responsibilities" && (
              <div className="px-6 sm:px-8 pb-6 space-y-5">
                {responsibilities.map((section, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-primary mb-2">{section.title}</p>
                    <ul className="space-y-1.5">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Qualifications */}
          <div className="border-b border-border/50">
            <button
              onClick={() => toggle("qualifications")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-foreground">Qualifications & Requirements</span>
              {openSection === "qualifications" ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {openSection === "qualifications" && (
              <div className="px-6 sm:px-8 pb-6">
                <ul className="space-y-2">
                  {qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Competencies */}
          <div className="border-b border-border/50">
            <button
              onClick={() => toggle("competencies")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-foreground">Key Skills & Competencies</span>
              {openSection === "competencies" ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {openSection === "competencies" && (
              <div className="px-6 sm:px-8 pb-6">
                <ul className="space-y-2">
                  {competencies.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Working Conditions */}
          <div>
            <button
              onClick={() => toggle("conditions")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-foreground">Working Conditions</span>
              {openSection === "conditions" ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {openSection === "conditions" && (
              <div className="px-6 sm:px-8 pb-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    Office-based role with occasional field or audit support duties
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    May require extended hours during reporting periods
                  </li>
                </ul>
              </div>
            )}
          </div>
        </CardContent>

        {/* Footer CTA */}
        <div className="px-6 sm:px-8 py-5 bg-muted/20 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Interested? Click <span className="font-medium text-foreground">Apply Now</span> to submit your application.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Apply Now</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">Apply — Accounts and Finance Officer</DialogTitle>
                <p className="text-sm text-muted-foreground">
                  Fill in the form below. Your application will be sent directly to the Gissat HR team.
                </p>
              </DialogHeader>
              <div className="mt-2">
                <ApplicationForm position="Accounts and Finance Officer" />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────

const Careers = () => {
  return (
    <section id="careers" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Careers at Gissat
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your career with Uganda's leading environmental consultancy.
          </p>
        </div>

        {/* Join Our Team */}
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
                    Gissat offers the experience and insight gained from more than 500 projects. Our growth and success
                    is attributable to one key factor — our people!
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

        {/* Why Join */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6 sm:mb-8">
            Why Join Gissat?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyJoinReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center bg-background">
                  <CardHeader>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Job Listing */}
        <JobListing />

      </div>
    </section>
  );
};

export default Careers;
