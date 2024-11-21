import React from 'react';
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { BarChart, Globe, ShieldCheck, TrendingUp, Users } from "lucide-react"
import Elyu from '../../assets/images/papa.jpg'
import Lishiba from '../../assets/images/lishiba.jpg'
import Wo from '../../assets/images/Wongani.jpg'
import Footer from '@/components/ui/home/Footer';
export default function AboutPage() {
  const team=[
    { name: "Ely'umusa Njobvu", role: "CEO & Co-Founder", image: `${Elyu}?` },
    { name: "Wongani Chilongo", role: "COO & Co-Founder", image: `${Wo}` },
    { name: "Lishiba Chiboboka", role: "Founding Software Engineer", image: `${Lishiba}` },
  ]
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
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Revridge</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Revridge is a pioneering fintech company with a mission to empower Africans to participate in the global financial landscape. Our innovative platform provides a seamless and accessible way for individuals across Africa to invest in their favorite international brands, right from the comfort of their homes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
          {/*text-2xl font-bold mb-4  */}
            <div class='flex flex-col items-center justify-center space-y-4 text-center px-20 pb-12'>
              
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Mission and Values</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
            Our mission at Revridge is to make global Stock Market investing accessible to all Africans. We believe that with the right information and technology, everyone can have the ability to invest in their favorite global brands and make smart investment decisions while doing so.
            </p>
            </div>
            {/* <h2 className="text-2xl font-bold mb-6 sm:text-4xl text-center">Our Values</h2> */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We uphold the highest ethical standards in all our operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BarChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We continuously push the boundaries of financial technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We make investing accessible to everyone, regardless of experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Globe className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Global Perspective</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We provide insights on markets worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Executive Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-[250px] mb-6 rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Ely'umusa Njobvu", role: "CEO & Co-Founder", image: `${Elyu}?` },
                { name: "Wongani Chilongo", role: "COO & Co-Founder", image: `${Wo}` },
                { name: "Lishiba Chiboboka", role: "Founding Software Engineer", image: `${Lishiba}` },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center p-6 pt-8">
                    <div className="relative w-70 h-80 mb-6 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-t-lg rounded-b-lg w-full h-full mb-4"
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              We're always looking for talented individuals to join our mission. Check out our open positions and become part of the Revridge family.
            </p>
            <Button>View Open Positions</Button>
          </div>
        </section> */}
      </main>
      <Footer/>
    </div>
  )
}

/*import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { BarChart, Globe, ShieldCheck, TrendingUp, Users } from "lucide-react"

export default function AboutPage() {
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
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Revridge</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Empowering investors with cutting-edge technology and expert insights since 2015.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              At Revridge, our mission is to democratize investing by providing advanced tools and insights to investors of all levels. We believe that with the right information and technology, everyone can make smarter investment decisions.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We uphold the highest ethical standards in all our operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BarChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We continuously push the boundaries of financial technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We make investing accessible to everyone, regardless of experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Globe className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Global Perspective</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    We provide insights on markets worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
                { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
                { name: "Alice Johnson", role: "Head of Research", image: "/placeholder.svg?height=200&width=200" },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 mb-4"
                      width={128}
                      height={128}
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              We're always looking for talented individuals to join our mission. Check out our open positions and become part of the Revridge family.
            </p>
            <Button>View Open Positions</Button>
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