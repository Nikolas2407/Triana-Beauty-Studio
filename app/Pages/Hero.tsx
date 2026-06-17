'use client'
import "./css/Hero.css"
import { motion } from "motion/react"
export default function Hero() {
    return (
        <motion.section className="Hero Hero-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className="overlay"></div>
            <div className="hero-content">
                <motion.h1 className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    Uñas que reflejan tu estilo y personalidad
                </motion.h1>
                <motion.p className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    Diseños exclusivos, acabados impecables y una experiencia pensada para que te sientas hermosa en cada detalle.
                </motion.p>
                <motion.a href="#servicios" className="hero-button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{
                        scale: 1.05,
                        y: -2
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    Ver Trabajos
                </motion.a>
            </div>
        </motion.section>
    )

}