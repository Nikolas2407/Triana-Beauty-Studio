'use client'
import styles from './css/Footer.module.css'
import { motion } from 'motion/react'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook, IoMailOutline } from 'react-icons/io5'
import { useState } from 'react'
import Reservar from '../Components/Reservar'

const links = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Portafolio', href: '#gallery' },
    { label: '¿Por que nosotros?', href: '#why-us' },
    { label: 'Testimonios', href: '#testimonials' },
]

const socials = [
    { label: 'WhatsApp', href: 'https://wa.me/+573123048235', Icon: IoLogoWhatsapp },
    { label: 'Instagram', href: 'https://www.instagram.com/trianabeautystudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', Icon: IoLogoInstagram },
/*     { label: 'Facebook', href: 'https://facebook.com/', Icon: IoLogoFacebook },
    { label: 'Correo', href: 'mailto:contacto@trianabeautystudio.com', Icon: IoMailOutline }, */
]



export default function Footer() {
    const [open, setOpen] = useState(false);
    return (
        <footer className={styles.Footer}>
            <div className={styles['Footer__inner']}>
                <motion.nav
                    className={styles['Footer__nav']}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    aria-label="Navegación del footer"
                >
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className={styles['Footer__link']}>
                            {link.label}
                        </a>
                    ))}

                <motion.button
                    
                    className={styles['CTA__button']}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.35, delay: 0.34, ease: 'easeOut' }}
                    onClick={() => setOpen(true)}
                >
                    Reservar Ahora
                </motion.button>
                {open && (
                    <Reservar
                        onClose={() => setOpen(false)}
                    />
                )}
                </motion.nav>

                <motion.div
                    className={styles['Footer__socials']}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                >
                    {socials.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            className={styles['Footer__social']}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={label}
                        >
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </motion.div>

                <motion.h2
                    className={styles['Footer__title']}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
                >
                    Diseños únicos para cada personalidad.
                </motion.h2>
            </div>

            <div className={styles['Footer__bottom']}>
                <p>Derechos reservados © 2026 Triana Beauty Studio - ApexScale</p>
            </div>
        </footer>
    )
}