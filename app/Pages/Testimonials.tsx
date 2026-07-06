'use client'

import styles from './css/Testimonials.module.css'
import SectionTitle from '../Components/SectionTitle'
import { motion } from 'motion/react'

const testimonials = [
  {
    image: '/images/Testimonials-1.jpg',
    text: '“Me encantó el resultado. Mis uñas quedaron exactamente como las imaginaba.”',
  },
  {
    image: '/images/Testimonials-2.jpg',
    text: '“Excelente atención y diseños hermosos. Definitivamente volveré.”',
  },
  {
    image: '/images/Testimonials-3.jpg',
    text: '“El mejor lugar para consentirme y lucir unas uñas increíbles.”',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.Testimonials}>
      <div className={styles['Testimonials__inner']}>
        <SectionTitle number="06" title="Testimonios" color="#fff" />

        <div className={styles['Testimonials__grid']}>
          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              className={styles['Testimonials__card']}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt="Testimonio cliente"
                className={styles['Testimonials__image']}
              />

              <div className={styles['Testimonials__overlay']}>
                <p className={styles['Testimonials__text']}>
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}