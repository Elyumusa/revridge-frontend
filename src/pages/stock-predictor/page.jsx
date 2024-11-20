import React from 'react';
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowRight, BarChart2, Brain, TrendingUp } from "lucide-react"
import Footer from '@/components/ui/home/Footer';

export default function StockPredictorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
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
          <div className="container px-4 m-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stock Price Predictor</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Harness the power of AI to predict stock prices and make informed investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Parameters</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="stock-symbol">Stock Symbol</Label>
                      <Input id="stock-symbol" placeholder="e.g., AAPL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prediction-timeframe">Prediction Timeframe</Label>
                      <Select>
                        <SelectTrigger id="prediction-timeframe">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1d">1 Day</SelectItem>
                          <SelectItem value="1w">1 Week</SelectItem>
                          <SelectItem value="1m">1 Month</SelectItem>
                          <SelectItem value="3m">3 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      Generate Prediction
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Prediction Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Predicted Price:</span>
                      <span className="text-2xl font-bold text-green-600">$150.25</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Confidence Level:</span>
                      <span className="text-lg font-semibold">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Prediction Date:</span>
                      <span>June 15, 2024</span>
                    </div>
                    <div className="pt-4">
                      <BarChart2 className="h-48 w-full text-gray-400" />
                      <p className="text-center text-sm text-gray-500">Predicted price trend</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Brain className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Our model uses advanced machine learning algorithms to analyze vast amounts of market data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BarChart2 className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Real-Time Data</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We incorporate the latest market trends and news to provide up-to-date predictions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <TrendingUp className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Our model continuously learns and adapts to improve prediction accuracy over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
              The stock price predictions provided by this tool are based on historical data and complex algorithms.
              However, stock markets are subject to numerous factors and can be unpredictable. This tool should be used
              for informational purposes only and not as financial advice. Always consult with a qualified financial
              advisor before making investment decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
/*import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowRight, BarChart2, Brain, TrendingUp } from "lucide-react"

export default function StockPredictorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
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
          <div className="container px-4 m-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stock Price Predictor</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Harness the power of AI to predict stock prices and make informed investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Parameters</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="stock-symbol">Stock Symbol</Label>
                      <Input id="stock-symbol" placeholder="e.g., AAPL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prediction-timeframe">Prediction Timeframe</Label>
                      <Select>
                        <SelectTrigger id="prediction-timeframe">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1d">1 Day</SelectItem>
                          <SelectItem value="1w">1 Week</SelectItem>
                          <SelectItem value="1m">1 Month</SelectItem>
                          <SelectItem value="3m">3 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      Generate Prediction
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Prediction Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Predicted Price:</span>
                      <span className="text-2xl font-bold text-green-600">$150.25</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Confidence Level:</span>
                      <span className="text-lg font-semibold">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Prediction Date:</span>
                      <span>June 15, 2024</span>
                    </div>
                    <div className="pt-4">
                      <BarChart2 className="h-48 w-full text-gray-400" />
                      <p className="text-center text-sm text-gray-500">Predicted price trend</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Brain className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Our model uses advanced machine learning algorithms to analyze vast amounts of market data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BarChart2 className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Real-Time Data</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We incorporate the latest market trends and news to provide up-to-date predictions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <TrendingUp className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Our model continuously learns and adapts to improve prediction accuracy over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
              The stock price predictions provided by this tool are based on historical data and complex algorithms.
              However, stock markets are subject to numerous factors and can be unpredictable. This tool should be used
              for informational purposes only and not as financial advice. Always consult with a qualified financial
              advisor before making investment decisions.
            </p>
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