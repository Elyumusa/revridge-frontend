import React from 'react'
import { Button } from '../button'
import { NavLink } from 'react-router-dom'
const Hero = ({stayUpdatedSectionRef}) => {
  const onGetStartedButtonClicked=()=>{
    stayUpdatedSectionRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smart Investing for Your Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering Southern Africans to invest in the global financial markets. Our platform simplifies access to diverse investment options, from stocks to various ETFs. 
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={onGetStartedButtonClicked} size="lg">Get Started</Button>
                <NavLink to="/blog"><Button variant="outline" size="lg">Learn More</Button></NavLink>
                
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
