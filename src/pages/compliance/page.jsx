import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { AlertCircle, FileText, ShieldCheck } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <ShieldCheck className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge Compliance</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compliance and Regulations</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Revridge is committed to maintaining the highest standards of compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Our Compliance Framework</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Anti-Money Laundering (AML) Policy</AccordionTrigger>
                <AccordionContent>
                  Our AML policy is designed to prevent and detect money laundering activities. We conduct thorough customer due diligence, monitor transactions, and report suspicious activities to the relevant authorities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Know Your Customer (KYC) Procedures</AccordionTrigger>
                <AccordionContent>
                  We implement robust KYC procedures to verify the identity of our clients and assess their risk profiles. This helps us maintain the integrity of our platform and comply with regulatory requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Data Protection and Privacy</AccordionTrigger>
                <AccordionContent>
                  We adhere to strict data protection regulations, including GDPR and CCPA. Our privacy policy outlines how we collect, use, and protect your personal information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Securities Regulations</AccordionTrigger>
                <AccordionContent>
                  Revridge complies with all applicable securities laws and regulations, including those set by the SEC and FINRA. We maintain necessary licenses and registrations to operate as a financial services provider.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Regulatory Disclosures</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  Investment involves risk. Past performance is not indicative of future results.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  Revridge is registered with the Securities and Exchange Commission (SEC) as a broker-dealer.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  We are a member of the Financial Industry Regulatory Authority (FINRA) and Securities Investor Protection Corporation (SIPC).
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Compliance Documents</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Risk Disclosure Statement
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Code of Ethics
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Revridge Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}



/*import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, FileText, ShieldCheck } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <ShieldCheck className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge Compliance</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compliance and Regulations</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Revridge is committed to maintaining the highest standards of compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Our Compliance Framework</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Anti-Money Laundering (AML) Policy</AccordionTrigger>
                <AccordionContent>
                  Our AML policy is designed to prevent and detect money laundering activities. We conduct thorough customer due diligence, monitor transactions, and report suspicious activities to the relevant authorities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Know Your Customer (KYC) Procedures</AccordionTrigger>
                <AccordionContent>
                  We implement robust KYC procedures to verify the identity of our clients and assess their risk profiles. This helps us maintain the integrity of our platform and comply with regulatory requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Data Protection and Privacy</AccordionTrigger>
                <AccordionContent>
                  We adhere to strict data protection regulations, including GDPR and CCPA. Our privacy policy outlines how we collect, use, and protect your personal information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Securities Regulations</AccordionTrigger>
                <AccordionContent>
                  Revridge complies with all applicable securities laws and regulations, including those set by the SEC and FINRA. We maintain necessary licenses and registrations to operate as a financial services provider.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Regulatory Disclosures</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  Investment involves risk. Past performance is not indicative of future results.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  Revridge is registered with the Securities and Exchange Commission (SEC) as a broker-dealer.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>
                  We are a member of the Financial Industry Regulatory Authority (FINRA) and Securities Investor Protection Corporation (SIPC).
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Compliance Documents</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Risk Disclosure Statement
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="hover:underline">
                  Code of Ethics
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Revridge Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}*/