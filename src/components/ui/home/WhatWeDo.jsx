import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'

const WhatWeDo = () => {
  return (
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
  )
}

export default WhatWeDo
