'use client'

import { motion } from 'motion/react'
import styles from './css/Gallery.module.css'
import SectionTitle from '../Components/SectionTitle'

const galleryItems = [
    {
        image: '/images/gallery-1.jpg',
        text: 'Descubre\nalgunos',
    },
    {
        image: '/images/gallery-2.jpg',
        text: 'de nuestros\ntrabajos',
    },
    {
        image: '/images/gallery-3.jpg',
        text: 'y\nencuentra',
    },
    {
        image: '/images/gallery-4.jpg',
    },
    {
        image: '/images/gallery-5.jpg',
    },
    {
        image: '/images/gallery-6.jpg',
    },
    {
        image: '/images/gallery-7.jpg',
        text: 'inspiración\npara',
    },
    {
        image: '/images/gallery-8.jpg',
        text: 'y\nencuentra',
    },
    {
        image: '/images/gallery-9.jpg',
        text: 'tu\npróxima\ncita',
    },
]

export default function Gallery() {
    return (
        <section className={styles.Gallery} id="galeria">
            <div className={styles['Gallery__inner']}>
                <SectionTitle number="04" title="Galeria"  />

                <div className={styles['Gallery__grid']}>
                    {galleryItems.map((item, index) => (
                        <motion.article
                            key={`${item.image}-${index}`}
                            className={styles['Gallery__item']}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, delay: index * 0.05, ease: 'easeOut' }}
                        >
                            <motion.img
                                src={item.image}
                                alt="Trabajo de uñas en Triana Beauty Studio"
                                className={styles['Gallery__image']}
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                            />

                            {item.text && (
                                <motion.p
                                    className={styles['Gallery__text']}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.25 + index * 0.04 }}
                                >
                                    {item.text.split('\n').map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </motion.p>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}