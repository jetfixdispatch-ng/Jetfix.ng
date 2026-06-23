import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Zap, Building2, Users, Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2349026115454?text=Hello%2C%20I%20need%20a%20technician%20from%20JetFix%20Dispatch.";
const WHATSAPP_EMERGENCY = "https://wa.me/2349026115454?text=EMERGENCY%3A%20I%20need%20urgent%20technician%20dispatch%20in%20Abuja.";
const WHATSAPP_PARTNER = "https://wa.me/2349026115454?text=Hi%20JetFix%2C%20I%27m%20interested%20in%20a%20partnership%2Fbulk%20dispatch%20arrangement%20for%20my%20estate%2Fbusiness%20in%20Abuja.";
const WHATSAPP_REFER = "https://wa.me/2349026115454?text=Hi%20JetFix%2C%20I%20have%20a%20technician%20referral%20I%27d%20like%20to%20share.";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp (Fastest)",
    desc: "Send us a message and we dispatch within minutes. Available 24/7.",
    action: "Chat on WhatsApp",
    href: WHATSAPP_URL,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    glow: "hover:shadow-[0_0_24px_rgba(74,222,128,0.2)]",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak directly with our dispatch team in Abuja, any time of day.",
    action: "+234 902 611 5454",
    href: "tel:+2349026115454",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    glow: "hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "For non-urgent enquiries, partnership requests, or feedback.",
    action: "jetfixdispatch.ng@gmail.com",
    href: "mailto:jetfixdispatch.ng@gmail.com",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    glow: "hover:shadow-[0_0_24px_rgba(249,115,22,0.2)]",
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Emergency Line", time: "24 / 7 — Always On" },
];

const faqs = [
  {
    q: "How quickly can a technician arrive?",
    a: "Our average dispatch time across Abuja is under 15 minutes for central districts (Garki, Wuse, Maitama, Asokoro). Outlying areas like Kubwa or Lugbe may take slightly longer depending on technician availability.",
  },
  {
    q: "Do you charge before the job starts?",
    a: "No. You only pay after the job is completed and you are satisfied. Our technician provides a clear quote before starting any work — no hidden fees.",
  },
  {
    q: "Which services do you cover?",
    a: "We dispatch Licensed Electricians (wiring faults, circuit breakers, lighting), Generator Mechanics (petrol and diesel generators), and Solar/Inverter Specialists. All services are FCT Abuja only.",
  },
  {
    q: "Are your technicians certified?",
    a: "Every JetFix technician passes a technical skills assessment, background verification, and a probationary period before being listed on the platform. We do not take shortcuts on vetting.",
  },
  {
    q: "What if I'm not satisfied with the job?",
    a: "Contact us immediately via WhatsApp and we will investigate. If the fault was not resolved correctly, we will send another technician at no extra charge.",
  },
];

export default function Contact() {
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
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px] -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" /> Abuja, FCT — Nigeria
          </motion.div>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl font-black mb-5 leading-tight">
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" custom={2}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether it's an emergency, a routine booking, or a general question — our team is ready. 
            WhatsApp is the fastest way to reach us.
          </motion.p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.a
            href={WHATSAPP_EMERGENCY}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center justify-between gap-4 bg-red-500/10 border border-red-500/30 rounded-2xl px-6 py-4 hover:bg-red-500/15 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-bold text-red-400 text-sm">Emergency? Don't wait.</div>
                <div className="text-xs text-muted-foreground">Tap to send a priority WhatsApp dispatch request right now.</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </motion.a>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                className={`glass rounded-2xl p-7 border ${c.border} flex flex-col gap-4 transition-all duration-200 ${c.glow} group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <c.icon className={`w-6 h-6 ${c.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{c.desc}</p>
                  <span className={`text-sm font-semibold ${c.color} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                    {c.action} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours + Location */}
      <section className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Hours */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-white text-lg">Operating Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm py-2 border-b border-white/5 last:border-0">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className={`font-semibold ${h.day === "Emergency Line" ? "text-green-400" : "text-white"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
              className="glass rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold text-white text-lg">Our Base</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>JetFix Dispatch operates exclusively within <strong className="text-white">Abuja, Federal Capital Territory</strong>.</p>
                <p>Our dispatch coordinators and technician network are distributed across the FCT for maximum coverage and speed.</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Coverage Area</div>
                  <p className="text-white font-medium">Abuja, FCT — All Districts</p>
                  <p className="text-xs mt-1">Garki · Wuse · Maitama · Asokoro · Gwarinpa · Jabi · Kubwa · Lugbe · Gudu · Apo and more</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner / Estates Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">For Estates & Businesses</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Partner with <span className="text-primary">JetFix Dispatch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Managing a residential estate, facility, or commercial property in Abuja? 
              We offer dedicated dispatch partnerships so your tenants and staff always 
              have a trusted technician one call away — no waiting, no guessing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Building2,
                title: "Estate Managers",
                desc: "Set up a standing arrangement for your residential estate. We assign a dedicated coordinator who knows your properties and responds to faults within minutes.",
                color: "text-primary",
                bg: "bg-primary/10",
                border: "border-primary/20",
              },
              {
                icon: Handshake,
                title: "Facility Managers",
                desc: "Office complexes, warehouses, hospitals, and commercial buildings get priority dispatch slots and monthly service reports for all completed jobs.",
                color: "text-secondary",
                bg: "bg-secondary/10",
                border: "border-secondary/20",
              },
              {
                icon: Users,
                title: "Refer a Technician",
                desc: "Know a skilled electrician, generator mechanic, or solar expert in Abuja? Refer them to JetFix. If they pass vetting, you earn a referral bonus — paid on their first completed job.",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10",
                border: "border-yellow-400/20",
              },
            ].map((card, i) => (
              <motion.div key={card.title}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                className={`glass rounded-2xl p-7 border ${card.border} flex flex-col gap-4 group hover:scale-[1.02] transition-transform`}>
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${card.color}`}>{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership benefits */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
            className="glass rounded-2xl border border-white/5 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-black text-white mb-4">What Partners Get</h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated dispatch coordinator for your property",
                    "Priority queue — ahead of standard bookings",
                    "Monthly invoice and job completion reports",
                    "Discounted rates on high-frequency jobs",
                    "Direct WhatsApp line to estate dispatch team",
                    "Same-day fault resolution guarantee on weekdays",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Estate / Business Partnership</div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Reach out via WhatsApp to start the conversation. We'll discuss your 
                    property size, typical fault frequency, and set up a custom arrangement 
                    within 24 hours.
                  </p>
                  <a href={WHATSAPP_PARTNER} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white border-0 font-semibold rounded-xl glow-blue">
                      <MessageCircle className="w-4 h-4 mr-2" /> Enquire via WhatsApp
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
                <div className="bg-yellow-400/5 border border-yellow-400/15 rounded-xl p-5">
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Refer a Technician</div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Know someone great? Send their name and specialty. If they join and complete 
                    their first job, your referral bonus is paid automatically.
                  </p>
                  <a href={WHATSAPP_REFER} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 rounded-xl font-semibold">
                      <Users className="w-4 h-4 mr-2" /> Submit a Referral
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-black">FAQs</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-black mb-5">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">Send us a WhatsApp message and a real human on our team will respond — not a bot.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0 font-bold rounded-full px-8 py-6 text-base shadow-[0_0_24px_rgba(37,211,102,0.3)] hover:shadow-[0_0_32px_rgba(37,211,102,0.5)]">
                <MessageCircle className="w-5 h-5 mr-2" /> Message Us on WhatsApp
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
