import React from 'react'
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import { Input} from '../input';
import { Button} from '../button';

const StartInvestingToday = () => {
  return (
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
  )
}

export default StartInvestingToday
