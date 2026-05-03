'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bebas text-5xl md:text-6xl tracking-widest text-chrome-light mb-4">{title}</h2>
        {subtitle && (
          <p className="font-rajdhani text-lg text-chrome-dark tracking-wide max-w-2xl">{subtitle}</p>
        )}
        <div className={`h-px bg-gradient-to-r from-chrome-dark to-transparent mt-6 ${centered ? 'mx-auto w-24 via-chrome-dark' : 'w-32'}`}></div>
      </motion.div>
    </div>
  )
}