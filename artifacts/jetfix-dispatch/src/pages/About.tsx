import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Shield, Clock, Users, MapPin, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2349026115454?text=Hello%2C%20I%20need%20a%20technician%20from%20JetFix%20Dispatch.";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const values = [
  {
    icon: Zap,
    title: "Speed First",
    desc: "We understand that a power failure or broken generator in Abuja's heat is not a minor inconvenience — it is an emergency. Our dispatch system is engineered to get a verified technician to your door in the shortest time possible.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Verified Experts Only",
    desc: "Every technician on the JetFix platform passes a rigorous background check, technical assessment, and probationary period before their first job. You never gamble with a stranger — you get a credentialed professional.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Available Around the Clock",
    desc: "Faults don't respect business hours. Whether it's 2 AM and your inverter has gone silent, or a Sunday afternoon generator crisis — JetFix Dispatch is live, staffed, and ready to move.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Star,
    title: "Transparent & Fair",
    desc: "No surprise charges. Every job is quoted clearly before work begins. Our technicians are compensated fairly, which is exactly why they stay with us and deliver consistent, professional service.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

const milestones = [
  { year: "May 2026", event: "JetFix Dispatch founded in Abuja, FCT — launching with a team of certified electricians, generator mechanics, and solar/inverter specialists." },
  { year: "Jun 2026", event: "Digital dispatch platform goes live. Serving Garki, Wuse, Maitama, Asokoro, Gwarinpa, Jabi, Kubwa, Lugbe, Gudu, and beyond." },
  { year: "Now", event: "Growing fast — onboarding more verified technicians across the FCT to meet rising demand from Abuja residents and businesses." },
];

const stats = [
  { value: "80+", label: "Verified Technicians" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "< 15 min", label: "Average Dispatch Time" },
  { value: "4.8 / 5", label: "Average Client Rating" },
];

const coverage = [
  "Garki", "Wuse", "Maitama", "Asokoro", "Gwarinpa", "Jabi",
  "Kubwa", "Lugbe", "Gudu", "Apo", "Kado", "Utako",
  "Central Area", "Area 1–11", "Nbora", "Lokogoma",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/jetfix-logo-full.png"
              alt="JetFix Dispatch"
              className="h-12 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-white text-sm">
                ← Back to Home
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white border-0 font-semibold rounded-full px-6 glow-blue text-sm">
                Book a Technician
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
          >
            <MapPin className="w-3.5 h-3.5" /> Abuja, FCT — Nigeria
          </motion.div>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Built for Abuja.{" "}
            <span className="text-primary">Wired for Speed.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            JetFix Dispatch was born from a simple frustration — finding a reliable, 
            trustworthy electrician or generator mechanic in Abuja should not feel like 
            a game of chance. We built the platform we always wished existed.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                We Got Tired of Waiting. So We Fixed It.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In May 2026, our founders — a team of Nigerian engineers who had grown up in Abuja — 
                  found themselves stuck in the same cycle everyone in the city knows too well: 
                  power goes out, generator fails, calls go unanswered, and hours pass before 
                  anything gets fixed.
                </p>
                <p>
                  The problem was never a shortage of skilled technicians. Abuja has plenty. 
                  The problem was <strong className="text-white">discovery, trust, and reliability</strong>. 
                  Clients couldn't find vetted professionals quickly. Technicians couldn't build 
                  steady clientele. Everyone lost.
                </p>
                <p>
                  JetFix Dispatch closes that gap. We operate as the logistics layer between 
                  Abuja residents and FCT businesses on one side, and a curated network of 
                  certified electrical, generator, and solar/inverter technicians on the other.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-6"
            >
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-xs flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full min-h-[24px] bg-white/5 mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="text-xs text-primary font-bold mb-1">{m.year}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-black">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Where We Operate</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Covering All of Abuja, FCT</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our technicians are strategically positioned across the FCT so response times stay fast 
              regardless of which district you're in.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-wrap gap-3 justify-center"
          >
            {coverage.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/20 text-primary/80 text-sm px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Who We Serve</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                From Homeowners to Large Businesses
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Abuja's residential communities, government housing estates, commercial districts, 
                  and private businesses all rely on stable power infrastructure. When that infrastructure 
                  fails, it costs money, comfort, and productivity.
                </p>
                <p>
                  JetFix Dispatch serves <strong className="text-white">individual homeowners</strong> dealing 
                  with wiring faults, tripped circuits, or inverter failures. We serve <strong className="text-white">offices 
                  and SMEs</strong> that need rapid generator servicing to protect revenue. And we serve 
                  <strong className="text-white"> estates and facilities managers</strong> who need a dependable 
                  partner on call.
                </p>
                <p>
                  Every client — regardless of job size — receives the same level of urgency, 
                  professionalism, and follow-through.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass rounded-2xl p-8 border border-white/5"
            >
              <div className="space-y-5">
                {[
                  { icon: "🏠", title: "Homeowners & Tenants", desc: "Fast residential dispatch for electrical faults, inverter issues, and generator breakdowns." },
                  { icon: "🏢", title: "Offices & SMEs", desc: "Priority commercial dispatch to minimise downtime and protect your operations." },
                  { icon: "🏗️", title: "Estates & Facilities", desc: "Ongoing partnership with estate managers who need a reliable technician pool on demand." },
                  { icon: "⚡", title: "Emergency Situations", desc: "24/7 emergency response for critical electrical faults and power failures." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to Experience{" "}
              <span className="text-primary">JetFix?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of Abuja residents and businesses who no longer stress about finding 
              a reliable technician. One message and we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white border-0 font-bold rounded-full px-8 py-6 text-base glow-blue">
                  Book a Technician Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-base">
                  Back to Home
                </Button>
              </Link>
            </div>
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
