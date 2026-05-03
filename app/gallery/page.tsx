'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { BRAND, GALLERY } from '@/lib/data'

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY[0] | null>(null)

  const categories = ['All', ...Array.from(new Set(GALLERY.map((g) => g.category)))]
  const filteredGallery = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)

  return (
    <div>
      {/* Hero */}
      <section className="bg-steel-900 border-b border-steel-800 py-20 px-6 text-center">
        <p className="text-chrome-mid text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>
          Our Work
        </p>
        <h1 className="text-6xl md:text-8xl tracking-widest text-chrome-light mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
          PROJECT GALLERY
        </h1>
        <p className="text-xl text-steel-400 tracking-wide max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-rajdhani)' }}>
          A showcase of our finest steel fabrication work across Pakistan.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-bold tracking-widest uppercase text-sm border transition-all duration-300 ${
                filter === cat
                  ? 'bg-chrome-mid text-steel-950 border-chrome-mid'
                  : 'bg-transparent text-steel-400 border-steel-700 hover:border-chrome-mid hover:text-chrome-light'
              }`}
              style={{ fontFamily: 'var(--font-rajdhani)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, index) => {
            const heights = ['h-64', 'h-80', 'h-96']
            const h = heights[index % heights.length]
            return (
              <AnimatedSection key={item.id} delay={index * 0.05} className="break-inside-avoid">
                <div
                  className={`relative w-full ${h} overflow-hidden group cursor-pointer border border-steel-700 hover:border-chrome-mid transition-colors duration-300`}
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-steel-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Maximize2 className="absolute top-6 right-6 text-chrome-light" size={24} />
                    <span className="text-xs tracking-widest text-chrome-mid uppercase mb-2" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                      {item.category}
                    </span>
                    <h3 className="text-2xl tracking-wider text-chrome-light mb-1" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-steel-400" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                      📍 {item.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-steel-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-chrome-mid hover:text-chrome-light z-10 transition-colors"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl bg-steel-900 border border-steel-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
              <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <span className="text-sm tracking-widest text-chrome-mid uppercase mb-2 block" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                    {selectedItem.category}
                  </span>
                  <h3 className="text-4xl tracking-wider text-chrome-light mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {selectedItem.title}
                  </h3>
                  <p className="text-steel-400" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                    📍 {selectedItem.location}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I saw the ${selectedItem.title} in your gallery and want something similar.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chrome whitespace-nowrap"
                >
                  Get Quote for This
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
