import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Zap,
  Wrench,
  Sun,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  CheckCircle,
  Menu,
  X,
  LocateFixed,
  Loader2,
  MessageCircle,
  Users,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "2349026115454";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20technician%20from%20JetFix%20Dispatch.`;

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [serviceType, setServiceType] = useState("electrical");
  const [issueDescription, setIssueDescription] = useState("");
  const [locationError, setLocationError] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        locationInputRef.current &&
        !locationInputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buildAddressLabel = (item: any): string => {
    const addr = item.address || {};
    const parts = [
      addr.road || addr.pedestrian || addr.footway || addr.path || item.name,
      addr.suburb || addr.neighbourhood || addr.quarter || addr.residential,
      addr.city_district || addr.district || addr.county,
    ].filter(Boolean);
    return parts.length > 0 ? parts.join(", ") + ", Abuja, FCT" : item.display_name.split(",").slice(0, 3).join(",");
  };

  const buildSecondaryLabel = (item: any): string => {
    const addr = item.address || {};
    const parts = [
      addr.suburb || addr.neighbourhood || addr.quarter || addr.residential,
      addr.city_district || addr.district,
      "Abuja, FCT"
    ].filter(Boolean);
    return [...new Set(parts)].join(" · ");
  };

  const searchLocation = (query: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!query || query.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      setSuggestionsLoading(true);
      try {
        // Abuja FCT bounding box: lon_min, lat_max, lon_max, lat_min
        const viewbox = "6.75,9.25,7.85,8.40";
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=10&countrycodes=ng&addressdetails=1&viewbox=${viewbox}&bounded=1`,
          { headers: { "Accept-Language": "en", "User-Agent": "JetFixDispatch/1.0" } }
        );
        const data = await res.json();
        const filtered = (data as any[]).filter((item) => {
          const addr = item.address || {};
          const state = (addr.state || "").toLowerCase();
          const county = (addr.county || "").toLowerCase();
          return (
            state.includes("federal capital") ||
            state.includes("abuja") ||
            county.includes("abuja") ||
            county.includes("fct")
          );
        });
        setSuggestions(filtered.slice(0, 6));
        setShowSuggestions(filtered.length > 0);
      } catch {
        setSuggestions([]);
        setShowSuggestions(false);
      }
      setSuggestionsLoading(false);
    }, 300);
  };

  const pickSuggestion = (item: any) => {
    setLocationValue(buildAddressLabel(item));
    setSuggestions([]);
    setShowSuggestions(false);
    setLocationError("");
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }
    setLocationLoading(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const addr = data.address || {};
          const parts = [
            addr.road || addr.pedestrian || addr.footway || addr.path,
            addr.suburb || addr.neighbourhood || addr.quarter || addr.residential,
            addr.city_district || addr.district || addr.county,
          ].filter(Boolean);
          setLocationValue(
            parts.length > 0
              ? parts.join(", ") + ", Abuja, FCT"
              : data.display_name.split(",").slice(0, 3).join(",")
          );
        } catch {
          setLocationValue(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        }
        setLocationLoading(false);
      },
      (err) => {
        setLocationError("Could not get location. Please enter manually.");
        setLocationLoading(false);
        console.error(err);
      },
      { timeout: 10000 }
    );
  };

  const scrollToSection = (id: string) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
    setMobileMenuOpen(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">

      {/* 1. Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-1' : 'bg-transparent py-2'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/jetfix-logo-full.png"
              alt="JetFix Dispatch"
              className={`w-auto object-contain mix-blend-screen transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-12' : 'h-36'}`}
              data-testid="img-logo-navbar"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-white transition-colors">How It Works</button>
            <button onClick={() => scrollToSection("emergency")} className="hover:text-secondary transition-colors">Emergency</button>
            <button onClick={() => scrollToSection("technicians")} className="hover:text-white transition-colors">Our Technicians</button>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <button onClick={() => scrollToSection("partner")} className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
              <Handshake className="w-4 h-4" /> Partnership
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button onClick={() => scrollToSection("join-team")} variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary rounded-full px-5 font-semibold text-sm" data-testid="button-join-technician-nav">
              <Users className="w-4 h-4 mr-2" />
              Join as Technician
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden glass absolute top-full left-0 w-full p-4 flex flex-col gap-4 border-t border-white/10"
          >
            <button onClick={() => scrollToSection("services")} className="text-lg font-medium p-2 text-left">Services</button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-lg font-medium p-2 text-left">How It Works</button>
            <button onClick={() => scrollToSection("emergency")} className="text-lg font-medium text-secondary p-2 text-left">Emergency</button>
            <Link href="/about" className="text-lg font-medium p-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <button onClick={() => { setMobileMenuOpen(false); scrollToSection("partner"); }} className="flex items-center gap-2 text-lg font-semibold text-yellow-400 p-2">
              <Handshake className="w-5 h-5" /> Partnership
            </button>
            <Button onClick={() => scrollToSection("join-team")} variant="outline" className="w-full border-secondary/50 text-secondary rounded-full">
              <Users className="w-4 h-4 mr-2" /> Join as Technician
            </Button>
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section id="book" className="relative pt-40 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn}>
                <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse inline-block" />
                  Available 24/7 in Abuja, FCT
                </Badge>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 font-[Space_Grotesk]">
                Fast Technician Dispatch Built For <span className="text-gradient">Modern Nigeria.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Verified Electricians, Generator &amp; Solar Experts On Demand. Stop waiting days for unreliable repairs. Get a trusted professional at your door in minutes.
              </motion.p>

            </motion.div>

            {/* Booking Card UI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:ml-auto w-full max-w-md"
            >
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <h3 className="text-xl font-bold mb-6 font-[Space_Grotesk]">Request Dispatch</h3>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Service Type</label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="bg-white/5 border-white/10 h-12 text-white rounded-xl focus:ring-primary/50" data-testid="select-service-type">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0f1e] border-white/10 text-white">
                        <SelectItem value="electrical">Electrical Repair</SelectItem>
                        <SelectItem value="generator">Generator Repair</SelectItem>
                        <SelectItem value="solar">Solar / Inverter Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                      <input
                        ref={locationInputRef}
                        type="text"
                        value={locationValue}
                        onChange={(e) => {
                          setLocationValue(e.target.value);
                          searchLocation(e.target.value);
                        }}
                        onFocus={() => {
                          if (suggestions.length > 0) setShowSuggestions(true);
                        }}
                        placeholder="Search your street or area in Abuja"
                        autoComplete="off"
                        data-testid="input-location"
                        className="w-full bg-white/5 border border-white/10 h-12 pl-10 pr-12 text-white rounded-xl focus:outline-none focus:border-primary/50 text-sm placeholder:text-muted-foreground"
                      />
                      <button
                        type="button"
                        onClick={handleGetLocation}
                        disabled={locationLoading}
                        data-testid="button-detect-location"
                        title="Use my current location"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors disabled:opacity-50 z-10"
                      >
                        {locationLoading
                          ? <Loader2 className="w-5 h-5 animate-spin" />
                          : <LocateFixed className="w-5 h-5" />
                        }
                      </button>

                      {/* Suggestions Dropdown */}
                      {(showSuggestions || suggestionsLoading) && (
                        <div
                          ref={suggestionsRef}
                          className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 rounded-xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                          style={{ background: "rgba(10,15,30,0.97)", backdropFilter: "blur(16px)" }}
                        >
                          {suggestionsLoading && (
                            <div className="flex items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
                              <Loader2 className="w-3 h-3 animate-spin" /> Searching locations...
                            </div>
                          )}
                          {!suggestionsLoading && suggestions.map((s, i) => {
                            const primary = (s.address?.road || s.address?.pedestrian || s.address?.footway || s.address?.path || s.name || s.display_name.split(",")[0]).trim();
                            const secondary = buildSecondaryLabel(s);
                            return (
                              <button
                                key={s.place_id}
                                type="button"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  pickSuggestion(s);
                                }}
                                data-testid={`suggestion-item-${i}`}
                                className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors border-b border-white/5 last:border-0 group"
                              >
                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="flex flex-col min-w-0">
                                  <span className="text-sm text-white/90 group-hover:text-white font-medium leading-snug truncate">{primary}</span>
                                  <span className="text-xs text-muted-foreground mt-0.5 truncate">{secondary}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {locationError && (
                      <p className="text-xs text-red-400 mt-1">{locationError}</p>
                    )}
                    {!locationError && (
                      <p className="text-xs text-muted-foreground">
                        Type to search or tap <LocateFixed className="w-3 h-3 inline-block" /> to auto-detect
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Issue Description</label>
                    <Textarea
                      placeholder="E.g. Phase issue, Mikano not starting, inverter showing fault code..."
                      className="bg-white/5 border-white/10 min-h-[100px] text-white rounded-xl resize-none focus:border-primary/50"
                      data-testid="textarea-issue"
                      value={issueDescription}
                      onChange={(e) => setIssueDescription(e.target.value)}
                    />
                  </div>

                  <a
                    href={`https://wa.me/2349026115454?text=${encodeURIComponent(
                      `Hello JetFix Dispatch, I need a technician!\n\nService: ${
                        serviceType === "electrical" ? "Electrical Repair" :
                        serviceType === "generator" ? "Generator Repair" : "Solar / Inverter Service"
                      }\nLocation: ${locationValue || "Not specified"}\nIssue: ${issueDescription || "Not specified"}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-dispatch-submit"
                    className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-base flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    Dispatch Technician
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { num: "80+", label: "Verified Technicians" },
              { num: "< 15 min", label: "Avg Dispatch Time" },
              { num: "98.4%", label: "Customer Satisfaction" },
              { num: "Abuja", label: "FCT Coverage" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                data-testid={`stat-item-${i}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-[Space_Grotesk] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{stat.num}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Space_Grotesk]">Premium Technical Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Specialized repair and maintenance for modern homes and businesses in Abuja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Licensed Electricians",
                desc: "Wiring faults, fuse box replacements, phase balancing, and smart home installations handled by certified professionals."
              },
              {
                icon: <Wrench className="w-8 h-8 text-secondary" />,
                title: "Generator Mechanics",
                desc: "Servicing for petrol, diesel, and heavy-duty industrial generators — Mikano, Perkins, Mantrac, and more."
              },
              {
                icon: <Sun className="w-8 h-8 text-amber-400" />,
                title: "Solar & Inverter Experts",
                desc: "Panel cleaning, battery rack replacement, charge controller setup, and full system diagnostics."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
                data-testid={`card-service-${i}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-[Space_Grotesk] text-white">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <button onClick={() => scrollToSection("book")} className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Book Now <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="how-it-works" className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Space_Grotesk]">How JetFix Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From fault to fix in three simple steps.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 -translate-y-1/2 z-0" />

            {[
              { num: "01", title: "Describe Issue", desc: "Call or message us to describe what went wrong." },
              { num: "02", title: "We Match a Tech", desc: "Our system finds the closest verified specialist in Abuja." },
              { num: "03", title: "Technician Arrives", desc: "Your technician heads straight to you, fast." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center max-w-[250px] mb-12 md:mb-0"
                data-testid={`step-item-${i}`}
              >
                <div className="w-16 h-16 rounded-full bg-[#0a0f1e] border-2 border-white/10 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-[Space_Grotesk]">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Emergency Support */}
      <section id="emergency" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-transparent to-[#0a0f1e]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6 glow-orange">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Space_Grotesk]">Need Emergency Technical Support?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Our dispatch team is online 24/7 across Abuja. Power failures, generator faults, or inverter crashes — we'll have a verified technician at your door in under 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+2349026115454" data-testid="button-emergency-call" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white h-14 px-8 rounded-full text-base font-bold w-full sm:w-auto glow-orange transition-all duration-200">
              <Phone className="w-5 h-5 mr-2" /> Call Emergency Line
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-emergency"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold h-14 px-8 rounded-full text-base w-full sm:w-auto transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </section>

      {/* 7. Trusted Technicians */}
      <section id="technicians" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Space_Grotesk]">Elite Dispatch Network</h2>
              <p className="text-muted-foreground max-w-xl">Every technician is strictly vetted, background-checked, and rated by your community.</p>
            </div>
            <button onClick={() => scrollToSection("join-team")} className="hidden md:flex items-center text-secondary font-medium hover:underline mt-4 md:mt-0">
              <Users className="w-4 h-4 mr-1" /> Become a Technician <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Emeka Okonkwo", role: "Master Electrician", jobs: 412, rating: 4.9, initials: "EO" },
              { name: "Adaeze Nwachukwu", role: "Solar Specialist", jobs: 289, rating: 5.0, initials: "AN" },
              { name: "Bola Adeleke", role: "Gen Mechanic", jobs: 534, rating: 4.8, initials: "BA" },
              { name: "Tunde Bakare", role: "Inverter Tech", jobs: 310, rating: 4.9, initials: "TB" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 flex flex-col items-center text-center"
                data-testid={`card-technician-${i}`}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {tech.initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#0a0f1e] rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white font-[Space_Grotesk]">{tech.name}</h4>
                <p className="text-sm text-primary font-medium mb-3">{tech.role}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground w-full justify-center mt-auto pt-4 border-t border-white/5">
                  <span className="flex items-center"><Star className="w-4 h-4 text-amber-400 mr-1 fill-current" /> {tech.rating}</span>
                  <span>•</span>
                  <span>{tech.jobs} Jobs</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-[Space_Grotesk]">Trusted by Abuja Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chinedu O.", city: "Maitama, Abuja", quote: "My inverter crashed right before a major pitch. JetFix had a tech at my door in 12 minutes. Absolute lifesavers." },
              { name: "Aisha F.", city: "Wuse II, Abuja", quote: "Finally, a reliable platform for generator repairs. The mechanic was professional, clean, and didn't overcharge." },
              { name: "David M.", city: "Gwarinpa, Abuja", quote: "The transparency is what sold me. I could see the tech's rating and exact arrival time. Premium service all the way." }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-6 leading-relaxed">"{review.quote}"</p>
                <div>
                  <h5 className="font-bold text-white">{review.name}</h5>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. For Estates & Businesses / Partnership */}
      <section id="partner" className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-primary/5" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-yellow-500/5 rounded-full blur-[120px] -z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">For Estates & Businesses</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 font-[Space_Grotesk]">
              Partner with <span className="text-primary">JetFix Dispatch</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Managing a residential estate, facility, or business in Abuja? We offer dedicated dispatch partnerships so your tenants and staff always have a trusted technician one call away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
                title: "Estate Managers",
                desc: "Set up a standing arrangement for your residential estate. We assign a dedicated coordinator who responds to faults within minutes.",
                color: "text-primary",
                glow: "group-hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]",
                border: "border-primary/20",
              },
              {
                icon: <Handshake className="w-7 h-7" />,
                title: "Facility Managers",
                desc: "Office complexes, hotels, hospitals, and commercial buildings get priority dispatch slots and detailed reports for all completed jobs.",
                color: "text-secondary",
                glow: "group-hover:shadow-[0_0_24px_rgba(249,115,22,0.15)]",
                border: "border-secondary/20",
              },
              {
                icon: <MessageCircle className="w-7 h-7" />,
                title: "Bulk Dispatch Plans",
                desc: "High-frequency service needs? We create custom pricing arrangements for businesses that require regular technician visits across Abuja.",
                color: "text-yellow-400",
                glow: "group-hover:shadow-[0_0_24px_rgba(234,179,8,0.15)]",
                border: "border-yellow-400/20",
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-8 border ${card.border} group transition-all duration-300 ${card.glow}`}
              >
                <div className={`mb-5 ${card.color}`}>{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-[Space_Grotesk]">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/2349026115454?text=${encodeURIComponent("Hi JetFix, I'm interested in a partnership/bulk dispatch arrangement for my estate/business in Abuja.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold h-14 px-10 rounded-full text-base transition-all duration-200 shadow-[0_0_24px_rgba(234,179,8,0.3)]"
            >
              <Handshake className="w-5 h-5" /> Start a Partnership Conversation
            </a>
          </div>
        </div>
      </section>

      {/* 10. Join as Technician / Recruit Section */}
      <section id="join-team" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="glass max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center border-secondary/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Space_Grotesk]">Are You a Skilled Technician?</h2>
            <p className="text-lg text-white/70 mb-4 max-w-2xl mx-auto">
              Join the JetFix Dispatch network and start earning more. We connect verified electricians, generator mechanics, and solar experts with clients across Abuja who need your skills — right now.
            </p>
            <ul className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-white/60 mb-10">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> Flexible work hours</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> Fast weekly payouts</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> Verified badge &amp; profile</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> More clients, zero cold-calling</li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 rounded-full text-base font-bold glow-orange border-0" data-testid="button-join-technician-section">
                <Users className="w-5 h-5 mr-2" /> Apply to Join the Network
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-whatsapp-join"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] font-semibold h-14 px-8 rounded-full transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us to Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#050810] border-t border-white/5 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="/jetfix-logo-full.png"
                  alt="JetFix Dispatch"
                  className="h-24 w-auto object-contain mix-blend-screen"
                  data-testid="img-logo-footer"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-6">Fast Technician Dispatch Built For Modern Nigeria. Proudly serving Abuja, FCT.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("emergency")} className="hover:text-primary transition-colors">Emergency Dispatch</button></li>
                <li><button onClick={() => scrollToSection("how-it-works")} className="hover:text-primary transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection("book")} className="hover:text-primary transition-colors">Request Dispatch</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
                <li><button onClick={() => scrollToSection("join-team")} className="hover:text-secondary transition-colors">Join as Technician</button></li>
                <li><Link href="/careers"><span className="hover:text-primary transition-colors cursor-pointer">Careers</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link></li>
                <li><Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link></li>
                <li><Link href="/technician-agreement"><span className="hover:text-primary transition-colors cursor-pointer">Technician Agreement</span></Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 JetFix Dispatch. All rights reserved.</p>
            <div className="flex gap-3">
              {/* TikTok */}
              <a href="https://www.tiktok.com/@jetfixdispatch.ng" target="_blank" rel="noopener noreferrer" aria-label="TikTok" data-testid="link-social-tiktok" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary/20 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/jetfix.ng" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-social-instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary/20 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/jetfixdispatch/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="link-social-linkedin" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary/20 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
