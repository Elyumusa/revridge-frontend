import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/design-system';
import Logo from '@/assets/images/Revridge.png';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { to: "/about", label: "About" },
        { to: "/support", label: "Support" },
        // Removed: Dividend Calendar, Stock Predictor, Trading Bot
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-2 shadow-sm" : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">

                {/* Logo */}
                <NavLink className="flex items-center gap-3 z-50 relative" to="/">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center shadow-lg border border-white/10">
                        <img className="h-6 w-6 object-contain" src={Logo} alt="Revridge Code" />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight transition-colors", scrolled ? "text-foreground" : "text-foreground/90")}>
                        Revridge
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink to="/download">
                        <Button size="sm" variant={scrolled ? "primary" : "secondary"}>Download App</Button>
                    </NavLink>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-background pt-24 px-6 md:hidden z-40"
                        >
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) => cn(
                                            "text-2xl font-medium border-b border-border/50 pb-4 flex justify-between items-center",
                                            isActive ? "text-foreground" : "text-muted-foreground"
                                        )}
                                    >
                                        {item.label}
                                        <ChevronRight size={16} className="opacity-50" />
                                    </NavLink>
                                ))}
                                <NavLink to="/download" className="mt-4">
                                    <Button className="w-full" size="lg">Download App</Button>
                                </NavLink>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
