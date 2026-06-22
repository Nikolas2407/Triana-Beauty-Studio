'use client'

import { motion } from 'motion/react'
import styles from './css/About.module.css'
import SectionTitle from '../Components/SectionTitle'
import logo from '../../public/Logo-1.svg'

const images = [
  {
    src: '/images/nails-1.jpg',
    className: styles['About__image--top-left'],
    initial: { opacity: 0, x: -40, y: 40 },
    delay: 0,
  },
  {
    src: '/images/nails-2.jpg',
    className: styles['About__image--top-right'],
    initial: { opacity: 0, x: 40, y: -40 },
    delay: 0.12,
  },
  {
    src: '/images/nails-3.jpg',
    className: styles['About__image--bottom-left'],
    initial: { opacity: 0, x: -40, y: 40 },
    delay: 0.24,
  },
  {
    src: '/images/nails-4.jpg',
    className: styles['About__image--bottom-right'],
    initial: { opacity: 0, x: 40, y: 40 },
    delay: 0.36,
  },
]

export default function About() {
  return (
    <section className={styles.About} id='nosotros'>
      <div className={styles['About__inner']}>
        <SectionTitle number="02" title="Sobre Nosotros" />

        <div className={styles['About__content']}>
          <div className={styles['About__decorations']} aria-hidden="true">
            {images.map((image) => (
              <motion.img
                key={image.src}
                src={image.src}
                alt=""
                className={`${styles['About__image']} ${image.className}`}
                initial={image.initial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: image.delay, ease: 'easeOut' }}
              />
            ))}
          </div>

          <motion.div
            className={styles['About__brand']}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <motion.img
              src={logo.src}
              alt="Triana Beauty Studio"
              className={styles['About__logo']}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className={styles['About__welcome']}>Bienvenido a Triana Beauty Studio</p>
          </motion.div>

          <motion.div
            className={styles['About__text']}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className={styles['About__title']}>
              Más que uñas, una experiencia de belleza
            </h1>
            <p className={styles['About__description']}>
              Nos especializamos en el cuidado y diseño de uñas, ofreciendo servicios personalizados que combinan creatividad, calidad y las últimas tendencias para resaltar tu estilo único.
            </p>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
