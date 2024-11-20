import React, { useState,useRef } from 'react';
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import Hero from '../components/ui/home/Hero';
import WhatWeDo from '../components/ui/home/WhatWeDo';
import FeaturesAndPerks from '../components/ui/home/FeaturesAndPerks';
import StayUpdated from '../components/ui/home/StayUpdated';
import DownloadOurApp from '../components/ui/home/DownloadOurApp';
import StartInvestingToday from '../components/ui/home/StartInvestingToday';
import Footer from '../components/ui/home/Footer';
import InvestmentCalculator from '@/components/ui/InvestmentCalculator';

export default function HomePage() {
  const stayUpdatedSectionRef=useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header> */}
      <main className="flex-1">
        <Hero stayUpdatedSectionRef={stayUpdatedSectionRef}/>
        <InvestmentCalculator/>
        <WhatWeDo/>
        <FeaturesAndPerks/>
        <StayUpdated stayUpdatedSectionRef={stayUpdatedSectionRef} />
        <DownloadOurApp/>
        {/* <StartInvestingToday/> */}
      </main>
      <Footer/>
    </div>
  )
}

/*'use client';

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smart Investing for Your Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revridge provides cutting-edge tools and insights to help you make informed investment decisions and grow your wealth.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">What We Do</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Stock Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access a wide range of stocks and ETFs with real-time market data and advanced trading tools.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily manage and track your investments with our intuitive portfolio management system.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get in-depth market analysis and insights to make informed investment decisions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automated Investing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Set up automated investment strategies tailored to your financial goals and risk tolerance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access a wealth of educational content to improve your investing knowledge and skills.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy peace of mind with our bank-level security measures protecting your investments and data.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Features and Perks</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Grow your wealth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Diversify your investment portfolio with well-structured investments and risk management. Watch your investments grow over time and achieve your financial goals.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Start with as low as K100</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Begin your investment journey with a minimal initial deposit and unlock a world of opportunities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Top level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Protect your investments, financial and personal information with our bank-level security and enjoy peace of mind.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Invest in your favorite Brands</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Back the companies you love and support their growth while earning potential returns on your investment.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Investing 101</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our educational resources will guide you through the investment process and help you understand key concepts.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Let your money work for you</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sit back and watch your investments generate income while you focus on other aspects of your life.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Mail className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join our email list to be the first to know when we launch and receive exclusive investment insights.
              </p>
              <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
              {isSubmitted && (
                <p className="text-green-600 dark:text-green-400">Thank you for subscribing!</p>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Our App</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get started with Revridge today. Download our app and begin your journey to financial growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto" size="lg">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button className="w-full sm:w-auto" size="lg">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Smartphone className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Investing Today</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of successful investors. Sign up now and get a free consultation with our experts.
              </p>
              <Button size="lg">Sign Up Now</Button>
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
          <a className="text-xs hover:underline underline-offset-4" href="/compliance">
            Compliance
          </a>
        </nav>
      </footer>
    </div>
  )
}*/