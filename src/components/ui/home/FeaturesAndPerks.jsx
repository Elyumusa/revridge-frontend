import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"

const FeaturesAndPerks = () => {
  return (
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
                  <p> Begin your investment journey with a minimal initial deposit and unlock a world of opportunities. </p>
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
  )
}

export default FeaturesAndPerks
