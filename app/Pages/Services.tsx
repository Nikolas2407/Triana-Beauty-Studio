'use client'

import { motion } from 'motion/react'
import styles from './css/Services.module.css'
import SectionTitle from '../Components/SectionTitle'
import { IoSparklesOutline, IoHandLeftOutline, IoColorPaletteOutline, IoWaterOutline } from 'react-icons/io5'

const services = [
    {
        title: 'Manicure Semipermanente',
        description: 'Color, brillo y duración para mantener tus uñas perfectas durante semanas.',
        image: '/images/services-1.jpg',
        Icon: IoSparklesOutline,
        reverse: false,
    },
    {
        title: 'Uñas Acrílicas',
        description: 'Diseños resistentes y personalizados adaptados a tu estilo.',
        image: '/images/services-2.jpg',
        Icon: IoHandLeftOutline,
        reverse: true,
    },
    {
        title: 'Nail Art',
        description: 'Decoraciones exclusivas, minimalistas o creativas para destacar en cualquier ocasión.',
        image: '/images/services-3.jpg',
        Icon: IoColorPaletteOutline,
        reverse: false,
    },
    {
        title: 'Spa de Manos',
        description: 'Hidratación, cuidado y relajación para unas manos saludables y hermosas.',
        image: '/images/services-4.jpg',
        Icon: IoWaterOutline,
        reverse: true,
    },
]

export default function Services() {
    return (
        <section className={styles.Services} id="servicios">
            <div className={styles['Services__inner']}>
                <SectionTitle number="03" title="Nuestros Servicios" />

                <div className={styles['Services__list']}>
                    {services.map((service, index) => {
                        const Icon = service.Icon

                        return (
                            <motion.article
                                key={service.title}
                                className={`${styles['Services__item']} ${service.reverse ? styles['Services__item--reverse'] : ''}`}
                                initial={{ opacity: 0, y: 45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.28 }}
                                transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className={styles['Services__imageBox']}
                                    whileHover={{ scale: 1.025 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className={styles['Services__image']}
                                    />
                                </motion.div>

                                <div className={styles['Services__info']}>
                                    <div className={styles['Services__heading']}>
                                        <span className={styles['Services__icon']}>
                                            <Icon aria-hidden="true" />
                                        </span>
                                        <h3 className={styles['Services__title']}>{service.title}</h3>
                                    </div>
                                    <p className={styles['Services__description']}>{service.description}</p>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
