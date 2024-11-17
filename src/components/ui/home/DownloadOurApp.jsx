import React from 'react'
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import { Input} from '../input';
import { Button} from '../button';
const DownloadOurApp = () => {
  return (
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
  )
}

export default DownloadOurApp
