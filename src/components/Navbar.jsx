import React, { useState, useEffect } from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [menu, openMenu] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            
            const sections = ['Home', 'About', 'Experience', 'Projects', 'Footer']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, target) => {
        e.preventDefault()
        const element = document.getElementById(target)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        openMenu(false)
    }

    const menuItems = [
        { name: 'About', target: 'About' },
        { name: 'Experience', target: 'Experience' },
        { name: 'Projects', target: 'Projects' },
        { name: 'Contact', target: 'Footer' }
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-charcoal/95 backdrop-blur-lg shadow-2xl border-b-2 border-mint/20' 
                    : 'bg-charcoal/80 backdrop-blur-md'
            }`}
        >
            <div className='max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center'>
                {/* Logo */}
                <motion.a
                    href="#Home"
                    onClick={(e) => handleNavClick(e, 'Home')}
                    className='relative group'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className='text-2xl md:text-3xl font-bold text-cream group-hover:text-mint transition-smooth'>
                        Ansab V.K
                    </span>
                </motion.a>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-2 items-center'>
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item.target)}
                                className={`relative px-6 py-3 text-base font-semibold rounded-xl transition-smooth ${
                                    activeSection === item.target
                                        ? 'text-charcoal bg-mint'
                                        : 'text-cream hover:text-mint hover:bg-mint/10'
                                }`}
                            >
                                {item.name}
                                {activeSection === item.target && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-mint rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => openMenu(!menu)}
                    className='md:hidden relative w-12 h-12 bg-mint/10 hover:bg-mint rounded-xl flex items-center justify-center transition-smooth z-50'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    <motion.div
                        animate={{ rotate: menu ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menu ? (
                            <RiCloseLine size={28} className="text-cream" />
                        ) : (
                            <RiMenu2Line size={28} className="text-mint" />
                        )}
                    </motion.div>
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 bg-charcoal z-40 md:hidden flex items-center justify-center'
                    >
                        {/* Background Decoration */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute top-20 right-20 w-64 h-64 bg-mint/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                            transition={{ duration: 15, repeat: Infinity }}
                            className="absolute bottom-20 left-20 w-72 h-72 bg-ocean/20 rounded-full blur-3xl"
                        />

                        <ul className='relative flex flex-col gap-6 text-center'>
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={`#${item.target}`}
                                        onClick={(e) => handleNavClick(e, item.target)}
                                        className={`block text-4xl font-bold transition-smooth ${
                                            activeSection === item.target 
                                                ? 'text-mint scale-110' 
                                                : 'text-cream hover:text-mint hover:scale-110'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
