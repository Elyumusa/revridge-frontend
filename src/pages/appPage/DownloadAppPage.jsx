import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Apple, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import StockPage  from '/stock_resized.png'
import InvestInWhatYouBelieveIn from '/invest.png'
import Google  from '/google.svg'
import Nike from '/nike.svg'
import Microsoft from '/microsoft.svg'
import Netflix from '/netflix.svg'
import AppleLogo from '/Apple.svg'
import DownloadAppButton from '@/components/ui/DownloadAppButton'


export default function DownloadAppPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Invest Without Breaking the Bank
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Build your stock portfolio by investing in fractional shares of your favorite publicly traded companies.
              </p>
              <div className="flex flex-wrap gap-4">
              <DownloadAppButton/>
                {/* <Link
                  href="#"
                  className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Google Play
                </Link> */}
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[400px] h-[400px] mx-auto">
                <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20"></div>
                {/* Phone Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={`${StockPage}?height=400&width=400`}
                    alt="Trading App Interface"
                    className="w-[300px] h-auto relative z-10"
                  />
                </div>
                {/* Floating Brand Circles */}
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <img src={`${Google}?height=30&width=30`} alt="Google" className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 transform -translate-x-1/4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <img src={`${AppleLogo}?height=30&width=30`} alt="Apple" className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <img src={`${Nike}?height=30&width=30`} alt="Nike" className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative w-[300px] h-[500px] mx-auto">
              <img
                src={`${InvestInWhatYouBelieveIn}?height=300&width=300`}
                alt="People using the trading app"
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img src={`${Netflix}?height=30&width=30`} alt="Netflix Logo" className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img src={`${Microsoft}?height=30&width=30`} alt="Microsoft Logo" className="w-8 h-8" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Invest in Stocks</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Buy fractional stock shares with as little as $1 in USD and other currencies.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Own shares of Facebook, Amazon, Apple, Google, Nike, Netflix & 1000's more publicly traded companies.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Lowest commissions. Fastest trade execution.</p>
                </li>
              </ul>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg text-lg">
                Start Investing Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-20">
        <Card className="container mx-auto px-4 relative overflow-hidden bg-gray-100">
          <div className="absolute left-0 bottom-0 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10 py-12 px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Invest Globally, Africa Wins</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <DownloadAppButton/>
              {/* <Link
                href="#"
                className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                <Apple className="mr-2 h-5 w-5" />
                Download on the App Store
              </Link>
              <Link
                href="#"
                className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                <Play className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Link> */}
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}