'use client'

import styles from './css/Why_Us.module.css'
import SectionTitle from '../Components/SectionTitle'
import { motion } from 'motion/react'

const reasons = [
  {
    number: '1',
    title: 'Atención personalizada',
    description: 'Cada diseño se adapta a tu estilo y preferencias.',
    tone: 'rose',
  },
  {
    number: '2',
    title: 'Productos de calidad',
    description: 'Trabajamos con materiales profesionales para garantizar resultados duraderos.',
    tone: 'cream',
  },
  {
    number: '3',
    title: 'Tendencias actuales',
    description: 'Siempre estamos actualizadas con las últimas técnicas y diseños.',
    tone: 'soft',
  },
  {
    number: '4',
    title: 'Ambiente cómodo',
    description: 'Un espacio pensado para que disfrutes tu momento de belleza.',
    tone: 'wine',
  },
]

export default function Why_Us() {
  return (
    <section className={styles.WhyUs}>
      <div className={styles['WhyUs__inner']}>
        <SectionTitle number="05" title="Por qué nosotros" color="#000" />

        <div className={styles['WhyUs__content']}>
          <motion.div
            className={styles['WhyUs__images']}
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <motion.img
              src="/images/why-us-1.PNG"
              alt="Diseño de uñas verde"
              className={`${styles['WhyUs__image']} ${styles['WhyUs__image--one']}`}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
            <motion.img
              src="/images/why-us-2.PNG"
              alt="Diseño de uñas elegante"
              className={`${styles['WhyUs__image']} ${styles['WhyUs__image--two']}`}
              initial={{ opacity: 0, x: 45, y: 35 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            />
          </motion.div>

          <div className={styles['WhyUs__cards']}>
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.number}
                className={`${styles['WhyUs__card']} ${styles[`WhyUs__card--${reason.tone}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
              >
                <span className={styles['WhyUs__number']}>{reason.number}</span>
                <h3 className={styles['WhyUs__title']}>{reason.title}</h3>
                <p className={styles['WhyUs__description']}>{reason.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}