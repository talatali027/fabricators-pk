import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import SectionTitle from '@/components/SectionTitle'
import { BRAND, SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive stainless steel fabrication services in Pakistan including food carts, fries counters, commercial kitchens, signage, and custom stalls.',
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-steel-900 border-b border-steel-800 py-20 px-6 text-center">
        <p className="text-chrome-mid text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>
          What We Do
        </p>
        <h1 className="text-6xl md:text-8xl tracking-widest text-chrome-light mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
          OUR SERVICES
        </h1>
        <p className="text-xl text-steel-400 tracking-wide max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-rajdhani)' }}>
          Industrial-grade fabrication tailored to your business needs.
        </p>
      </section>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <AnimatedSection key={service.id}>
              <div
                id={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group scroll-mt-28`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden border border-steel-700">
                  <Image
                    src={service.image}
                    alt={service.alt ?? service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-steel-950/20" />
                  <div
                    className="absolute bottom-6 left-6 text-chrome-mid tracking-widest uppercase text-sm border border-steel-700 px-4 py-2 bg-steel-950/80 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-rajdhani)' }}
                  >
                    {service.title}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="text-8xl text-steel-800 leading-none mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                    0{index + 1}
                  </div>
                  <h2 className="text-4xl md:text-5xl tracking-widest text-chrome-light mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {service.title}
                  </h2>
                  <p className="text-steel-400 leading-relaxed mb-8 text-lg" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                    {service.fullDesc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-chrome-mid" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                        <CheckCircle2 size={20} className="text-chrome-shine mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Inquire About This Service
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-steel-900 border-t border-steel-800 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="NEED SOMETHING CUSTOM?" centered={true} />
          <p className="text-steel-400 mb-8 text-lg" style={{ fontFamily: 'var(--font-rajdhani)' }}>
            If you do not see what you are looking for, reach out. We can fabricate almost anything from steel.
          </p>
          <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-chrome">
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
