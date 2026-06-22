'use client'

import styles from './css/CTA.module.css'
import { motion } from 'motion/react'

export default function CTA() {
    return (
        <section className={styles.CTA} id="contacto">
            <motion.div
                className={styles['CTA__content']}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <motion.h2
                    className={styles['CTA__title']}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    ¿Lista para tu próximo diseño?
                </motion.h2>

                <motion.p
                    className={styles['CTA__description']}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
                >
                    Agenda tu cita y déjanos transformar tus ideas en un diseño único.
                </motion.p>

                <motion.a
                    href="#contact"
                    className={styles['CTA__button']}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.35, delay: 0.34, ease: 'easeOut' }}
                >
                    Reservar Ahora
                </motion.a>
            </motion.div>
        </section>
    )
}
