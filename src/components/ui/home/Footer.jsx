import React from 'react'
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'
import Logo from "@/assets/images/Revridge.png"
export default function Footer() {
  return (
    <footer className="w-full shrink-0 border-t bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Revridge Logo" width={32} height={32} />
              <span className="text-xl font-bold text-gray-900">Revridge</span>
            </a>
            {/* <p className="mt-2 text-sm text-gray-600">
              Empowering your financial future through innovative stock investing solutions.
            </p> */}
          </div>
          <div>
            {/* <h3 className="mb-4 text-sm font-semibold text-gray-900">Site Links</h3> */}
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-gray-900 hover:underline">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 hover:underline">About</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900 hover:underline">Blog</a></li>
              <li><a href="/div_calendar" className="text-gray-600 hover:text-gray-900 hover:underline">Dividend Calendar</a></li>
              <li><a href="/stock-predictor" className="text-gray-600 hover:text-gray-900 hover:underline">Stock Predictor</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900 hover:underline">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900 hover:underline">Privacy Policy</a></li>
              <li><a href="/compliance" className="text-gray-600 hover:text-gray-900 hover:underline">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/revridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://linkedin.com/company/revridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://instagram.com/revridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com/revridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-600">
            © 2023 Revridge Inc. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Revridge Inc. is registered with the Zambian Securities and Exchange Commission as an investment adviser. 
            Brokerage services are provided to Revridge clients by Alpaca Securities, LLC, an SEC-registered broker-dealer and member FINRA/SIPC.
            Investments: Not FDIC Insured • No Bank Guarantee • May Lose Value. 
            Investing in securities involves risks, and there is always the potential of losing money when you invest in securities. 
            Before investing, consider your investment objectives and Revridge's charges and expenses. 
            Past performance does not guarantee future results. Revridge's internet-based services are designed to assist clients in achieving discrete financial goals. 
            They are not intended to provide comprehensive tax advice or financial planning with respect to every aspect of a client's financial situation and do not incorporate specific investments that clients hold elsewhere.
          </p>
        </div>
      </div>
    </footer>
  )
}