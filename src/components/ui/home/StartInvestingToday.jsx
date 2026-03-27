import React from 'react'
import { Smartphone } from "lucide-react"
import { Button} from '../button';
import { NavLink } from 'react-router-dom';

const StartInvestingToday = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Smartphone className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Learning Today</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of Zambians building their investing knowledge with Revridge. Practice for free \u2014 no real money required.
              </p>
              <NavLink to="/download">
                <Button size="lg">Get Early Access</Button>
              </NavLink>
            </div>
          </div>
        </section>
  )
}

export default StartInvestingToday
