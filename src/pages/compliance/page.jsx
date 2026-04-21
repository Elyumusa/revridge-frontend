import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { AlertCircle, FileText, ShieldCheck, Info, Scale, Lock, ShieldAlert } from "lucide-react";
import Footer from '@/components/ui/home/Footer';

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  <ShieldCheck className="mr-1 h-4 w-4 text-primary" />
                  Compliance & Transparency
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Building Trust Through Clarity
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Revridge is committed to building a trustworthy and transparent platform for financial education and simulated investing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Status & Position */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Info className="mr-1 h-3 w-3" />
                  Current Status
                </div>
                <h2 className="text-3xl font-bold">Education First</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Revridge is a financial education and virtual trading platform.
                  </p>
                  <p className="font-medium text-foreground">
                    We do not currently facilitate real-money trading, brokerage services, or investment execution.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Scale className="mr-1 h-3 w-3" />
                  Regulatory Position
                </div>
                <h3 className="text-3xl font-bold">Regulatory Transparency</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Because Revridge operates as a simulation platform, it is not currently registered as a broker-dealer or investment advisor with regulatory authorities.
                  </p>
                  <p>
                    We are actively exploring the regulatory and licensing requirements needed to support real-money investing features in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment & Protection */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Commitment</h2>
                <p className="text-muted-foreground">
                  As we grow, we are committed to aligning with applicable regulations, including:
                </p>
                <div className="grid gap-4">
                  {[
                    { title: "User identity verification standards (KYC)", icon: ShieldCheck },
                    { title: "Anti-money laundering practices (AML)", icon: Scale },
                    { title: "Data protection and privacy laws", icon: Lock },
                    { title: "Financial market regulations where applicable", icon: FileText }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-xl border shadow-sm">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">User Protection</h2>
                <div className="space-y-4">
                  {[
                    "All trading within Revridge is virtual and risk-free",
                    "No real funds are deposited, invested, or held",
                    "Market data may be delayed or provided by third-party sources"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground">{text}</span>
                    </div>
                  ))}
                  <div id="risk-disclosure" className="mt-6 p-6 rounded-2xl bg-yellow-50 border border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-900/50">
                    <div className="flex items-center gap-2 mb-2 text-yellow-800 dark:text-yellow-400">
                      <ShieldAlert className="h-5 w-5" />
                      <span className="font-bold uppercase tracking-wider text-xs">Risk Disclosure</span>
                    </div>
                    <p className="text-yellow-900 dark:text-yellow-200 font-medium">
                      Investing involves risk. Past performance does not guarantee future results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Policies & Documents</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <Link 
                  to="/privacy"
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border bg-background hover:bg-muted transition-colors group"
                >
                  <FileText className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-bold">Privacy Policy</span>
                </Link>
                <Link 
                  to="/terms"
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border bg-background hover:bg-muted transition-colors group"
                >
                  <FileText className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-bold">Terms of Service</span>
                </Link>
                <a 
                  href="#risk-disclosure"
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border bg-background hover:bg-muted transition-colors group"
                >
                  <FileText className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-bold">Risk Disclosure</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}