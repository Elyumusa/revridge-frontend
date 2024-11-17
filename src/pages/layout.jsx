import React from 'react';
import './globals.css'
//import { Inter } from 'next/font/google'
import Navbar from '../components/ui/Navbar';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
//const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Revridge',
  description: 'Smart investing for your future',
}

export default function RootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
    // <html lang="en">
    //   <head>
    //     <title>{metadata.title}</title>
    //     <meta name="description" content={metadata.description} />
    //   </head>
    //   <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    // </html>
  )
}

/*import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revridge',
  description: 'Smart investing for your future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}*/