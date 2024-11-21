import React from 'react'
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import { Input} from '../input';
import { Button} from '../button';
import DownloadAppButton from '../DownloadAppButton';
import { NavLink } from 'react-router-dom';
const DownloadOurApp = () => {
  //bg-gray-100 dark:bg-gray-800">
  return (
    <section className="w-full py-12 md:py-24 lg:py-32"> 
    
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Our App</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get started with stock market Investing today. Download our app and begin your financial growth journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <DownloadAppButton/> */}
                <NavLink to="/download"><Button className="w-full sm:w-auto" size="lg">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button></NavLink>
                <NavLink to="/download"><Button className="w-full sm:w-auto" size="lg">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Download for Android
                </Button></NavLink>
              </div>
            </div>
          </div>
        </section>
  )
}

export default DownloadOurApp
