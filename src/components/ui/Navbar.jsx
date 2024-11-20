import { NavLink } from 'react-router-dom'
import {TrendingUp } from "lucide-react"
import logo from '../../assets/images/Revridge.png'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const linkClass = 'text-sm font-medium hover:underline underline-offset-4'//"text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
  const activeLinkClass = 'text-sm font-medium underline underline-offset-4 hover:underline underline-offset-4';//"text-sm font-medium text-gray-900 dark:text-gray-50"

  const navItems = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/div_calendar", label: "Dividend Calendar" },
    { to: "/stock-predictor", label: "Stock Predictor" },
    { to: "/support", label: "Support" },
    { to: "/compliance", label: "Compliance" },
  ]

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md">
      <NavLink className="flex items-center justify-center" to="/">
        <img className="h-8 w-8" src={logo} alt="Revridge logo" />
        <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Revridge</span>
      </NavLink>

      <nav className="hidden md:flex gap-4 sm:gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) => isActive ? activeLinkClass : linkClass}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="md:hidden p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 shadow-md md:hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : linkClass} py-2`
                }
                to={item.to}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
// const Navbar = () => {
//   const linkClass=({isActive})=>isActive?'text-sm font-medium underline underline-offset-4 hover:underline underline-offset-4':'text-sm font-medium hover:underline underline-offset-4'
//   return (
//     <header className="px-4 lg:px-6 h-14 flex items-center">
//   <NavLink className="flex items-center justify-center" to="/">
//     <img className="h-8 w-8" src={logo} />
//     <span className="ml-2 text-2xl font-bold">Revridge</span>
//   </NavLink>

//   <nav className="ml-auto flex gap-4 sm:gap-6">
//     <NavLink className={linkClass} to="/about">
//       About
//     </NavLink>
//     <NavLink className={linkClass} to="/blog">
//       Blog
//     </NavLink>
//     <NavLink className={linkClass} to="/div_calendar">
//       Dividend Calendar
//     </NavLink>
//     <NavLink className={linkClass} to="/stock-predictor">
//       Stock Predictor
//     </NavLink>

//     {/* Mobile Menu Button */}
//     <button className="block sm:hidden">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//       </svg>
//     </button>

//     {/* Mobile Menu */}
//     <div className="hidden sm:hidden absolute top-full left-0 w-full bg-white shadow-md">
//       <NavLink className={linkClass} to="/support">
//         Support
//       </NavLink>
//       <NavLink className={linkClass} to="/compliance">
//         Compliance
//       </NavLink>
//     </div>
//   </nav>
// </header>
//     // <header className="px-4 lg:px-6 h-14 flex items-center">
//     //     <NavLink className="flex items-center justify-center" to="/">
//     //       <img className="h-8 w-8" src={logo} />
//     //       <span className="ml-2 text-2xl font-bold">Revridge</span>
//     //     </NavLink>
//     //     <nav className="ml-auto flex gap-4 sm:gap-6">
//     //       <NavLink className={linkClass} to="/about">
//     //         About
//     //       </NavLink>
//     //       <NavLink className={linkClass} to="/blog">
//     //         Blog
//     //       </NavLink>
//     //       <NavLink className={linkClass} to="/div_calendar">
//     //         Dividend Calendar
//     //       </NavLink>
//     //       <NavLink className={linkClass} to="/stock-predictor">
//     //         Stock Predictor
//     //       </NavLink>
//     //       <NavLink className={linkClass} to="/support">
//     //         Support
//     //       </NavLink>
//     //       <NavLink className={linkClass} to="/compliance">
//     //         Compliance
//     //       </NavLink>
//     //     </nav>
//     //   </header>
//   )
// }

//export default Navbar
