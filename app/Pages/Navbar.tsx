'use client'
import "./css/Navbar.css"
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const navItems = [
        { name: "Inicio", href: "#inicio" },
        { name: "Servicios", href: "#servicios" },
        { name: "Galería", href: "#galeria" },
        { name: "Nosotros", href: "#nosotros" },
        { name: "Contacto", href: "#contacto" },
    ]


    return (
        <nav className={`Navbar ${isScrolled ? 'Navbar--scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-Title">
                    Triana Beauty Studio ®
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`hamburger ${isOpen ? "active" : ""}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button className="nav-button">
                    <a href="#contacto">Reservar</a>
                </button>
            </div>

            {isOpen && (
                <div className="nav-links-mobile">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <button className="nav-button-mobile" >
                        <a href="#contacto">Reservar</a>
                    </button>
                </div>
            )}
        </nav>
    )
}