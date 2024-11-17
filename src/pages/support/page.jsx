import React from 'react';
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { HelpCircle, Mail, MessageCircle, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <HelpCircle className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge Support</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Can We Help You?</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our support team is here to assist you with any questions or issues you may have.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@Revridge.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat (9 AM - 5 PM EST)</span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">How do I create an account?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To create an account, click on the "Sign Up" button on the homepage and follow the prompts.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">What are the fees for using Revridge?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our fee structure varies depending on the services you use. Please visit our pricing page for detailed information.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">How secure is my data?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We use state-of-the-art encryption and security measures to protect your data. For more information, please see our security page.
                </p>
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

/*import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { HelpCircle, Mail, MessageCircle, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <HelpCircle className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge Support</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Can We Help You?</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our support team is here to assist you with any questions or issues you may have.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@Revridge.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat (9 AM - 5 PM EST)</span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">How do I create an account?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To create an account, click on the "Sign Up" button on the homepage and follow the prompts.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">What are the fees for using Revridge?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our fee structure varies depending on the services you use. Please visit our pricing page for detailed information.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">How secure is my data?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We use state-of-the-art encryption and security measures to protect your data. For more information, please see our security page.
                </p>
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