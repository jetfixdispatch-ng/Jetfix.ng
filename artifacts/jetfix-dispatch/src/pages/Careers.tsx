import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Shield, Clock, Star, ArrowRight, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_APPLY = "https://wa.me/2349026115454?text=Hi%2C%20I%27m%20interested%20in%20joining%20JetFix%20Dispatch%20as%20a%20technician.";
const WHATSAPP_URL = "https://wa.me/2349026115454?text=Hello%2C%20I%20need%20a%20technician%20from%20JetFix%20Dispatch.";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const roles = [
  {
    title: "Licensed Electrician",
    type: "Field · Abuja FCT",
    desc: "Handle residential and commercial electrical faults — wiring, circuit breakers, load distribution, and emergency power issues.",
    reqs: ["COREN / NABTEB certification preferred", "Minimum 2 years field experience", "Own tools required", "Strong communication skills"],
    icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10",
    badge: "Open",
  },
  {
    title: "Generator Mechanic",
    type: "Field · Abuja FCT",
    desc: "Service, repair, and maintain petrol and diesel generators for households, offices, and commercial facilities across Abuja.",
    reqs: ["Experience with Honda, Mikano, Perkins, Cummins brands", "Ability to diagnose faults quickly on-site", "Own basic tools required", "Minimum 1 year experience"],
    icon: Shield,
    color: "text-secondary",
    bg: "bg-secondary/10",
    badge: "Open",
  },
  {
    title: "Solar / Inverter Technician",
    type: "Field · Abuja FCT",
    desc: "Install, diagnose, and repair solar panels, charge controllers, batteries, and inverter systems for residential and commercial clients.",
    reqs: ["Knowledge of 12V/24V/48V solar systems", "Familiarity with Luminous, Felicity, Victron products", "Ability to read system diagrams", "Safety-conscious on rooftop work"],
    icon: Star,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    badge: "Open",
  },
  {
    title: "Dispatch Coordinator",
    type: "Office / Remote · Abuja",
    desc: "Match incoming service requests to available technicians in real time. Monitor job progress and ensure clients are updated throughout.",
    reqs: ["Strong verbal communication", "Calm under pressure", "Basic smartphone/computer proficiency", "Prior customer service experience a plus"],
    icon: Clock,
    color: "text-green-400",
    bg: "bg-green-400/10",
    badge: "Open",
  },
];

const perks = [
  { emoji: "💰", title: "Competitive Pay", desc: "Earn per job with no salary cap. Top technicians take home significantly above market rate." },
  { emoji: "⏰", title: "Flexible Hours", desc: "You choose your availability. Work full-time, part-time, or on-call — the schedule is yours." },
  { emoji: "📍", title: "Abuja-Based", desc: "No interstate travel. All jobs are within Abuja, FCT — short distances, high volume." },
  { emoji: "⭐", title: "Rating System", desc: "Build your reputation on the platform. High-rated technicians get priority dispatch and bonuses." },
  { emoji: "🛡️", title: "Platform Protection", desc: "JetFix handles client disputes, payments, and follow-ups. You focus on the technical work." },
  { emoji: "📱", title: "Simple Workflow", desc: "Receive jobs via WhatsApp or the JetFix app. No complicated systems — just clear instructions." },
];

const steps = [
  { num: "01", title: "Send an Application", desc: "Tap the apply button and send us a WhatsApp message with your name, specialty, and years of experience." },
  { num: "02", title: "Skills Assessment", desc: "We schedule a short practical assessment to verify your technical competence in your area of specialty." },
  { num: "03", title: "Background Check", desc: "All JetFix technicians go through identity and reference verification before onboarding." },
  { num: "04", title: "Start Taking Jobs", desc: "Once approved, you'll receive your first dispatch within days. Your JetFix career begins." },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img src="/jetfix-logo-full.png" alt="JetFix Dispatch"
              className="h-12 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-white text-sm">← Back to Home</Button>
            </Link>
            <a href={WHATSAPP_APPLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white border-0 font-semibold rounded-full px-6 glow-blue text-sm">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" /> We're Hiring in Abuja
          </motion.div>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Build Your Career with{" "}
            <span className="text-primary">JetFix Dispatch</span>
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" custom={2}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Join Abuja's most trusted technician dispatch network. Steady jobs, fair pay, 
            flexible hours — and the backing of a platform that puts your professional 
            reputation first.
          </motion.p>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_APPLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white border-0 font-bold rounded-full px-8 py-6 text-base glow-blue">
                Apply via WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#roles">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-base">
                View Open Roles
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Why Join JetFix</p>
            <h2 className="text-3xl md:text-4xl font-black">Work on Your Terms</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div key={p.title}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Current Openings</p>
            <h2 className="text-3xl md:text-4xl font-black">Open Roles</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">All positions are field-based in Abuja, FCT. No prior experience with JetFix required — just your craft.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div key={role.title}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors group flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl ${role.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <role.icon className={`w-5 h-5 ${role.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{role.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <MapPin className="w-3 h-3" /> {role.type}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full flex-shrink-0">{role.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                <ul className="space-y-2">
                  {role.reqs.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_APPLY} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button className={`w-full rounded-xl border-0 font-semibold text-sm ${role.bg} ${role.color} hover:opacity-80 transition-opacity`}>
                    Apply for This Role <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-black">How to Join</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Join the Network?</h2>
            <p className="text-muted-foreground mb-8">Send us a WhatsApp message with your name, specialty, and experience. We respond within 24 hours.</p>
            <a href={WHATSAPP_APPLY} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white border-0 font-bold rounded-full px-8 py-6 text-base glow-blue">
                Apply via WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050810] border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 JetFix Dispatch. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link>
            <Link href="/technician-agreement"><span className="hover:text-primary transition-colors cursor-pointer">Technician Agreement</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
