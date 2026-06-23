import React from "react";
import { Link } from "wouter";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

export default function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="glass-nav py-3 sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src="/jetfix-logo-full.png"
              alt="JetFix Dispatch"
              className="h-28 w-auto object-contain mix-blend-screen transition-transform group-hover:scale-105"
            />
          </Link>
          <Link href="/">
            <span className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">
              &larr; Back to Home
            </span>
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <div className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-[Space_Grotesk] mb-3">{title}</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated} &nbsp;|&nbsp; Effective for all users of JetFix Dispatch</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050810] border-t border-white/5 py-8 mt-16">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 JetFix Dispatch. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link>
            <Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/technician-agreement"><span className="hover:text-primary transition-colors cursor-pointer">Technician Agreement</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
