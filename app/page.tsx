import React from 'react'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import ProductCard from '@/components/ProductCard'
import { BRAND, SERVICES, PRODUCTS, STATS, TESTIMONIALS } from '@/lib/data'
export default function Home() {
const featuredProducts = PRODUCTS.slice(0, 3)
return (
<>
{/* 1. HERO SECTION */}
<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden hero-grain px-6">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-steel-950/50 to-steel-950 z-0 pointer-events-none"></div>

<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
      <AnimatedSection>
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-8xl leading-[0.9] tracking-widest flex flex-col items-center mb-6">
          <span className="text-chrome-light">CRAFTING YOUR VISION</span>
          <span className="text-metallic">INTO STEEL REALITY</span>
        </h1>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <p className="font-rajdhani text-xl md:text-2xl text-chrome-dark max-w-2xl mx-auto mb-10 tracking-wide">
          Premium stainless steel fabrication for commercial kitchens, mobile food carts, and bespoke industrial projects across Pakistan.
        </p>
      </AnimatedSection>
      
      <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row items-center gap-6">
        <Link href="/gallery" className="btn-ghost w-full sm:w-auto">
          VIEW OUR WORK
        </Link>
        <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-chrome w-full sm:w-auto">
          GET A QUOTE
        </a>
      </AnimatedSection>
    </div>

    {/* Marquee Bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-b border-steel-800 bg-steel-950/80 py-3 z-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...SERVICES, ...SERVICES].map((service, i) => (
          <span key={i} className="mx-8 font-rajdhani font-bold text-sm tracking-[0.2em] text-steel-500 uppercase">
            {service.title} <span className="mx-8 text-steel-700">•</span>
          </span>
        ))}
      </div>
    </div>
  </section>

  {/* 2. STATS BAR */}
  <section className="bg-steel-900 border-b border-steel-800 py-16 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-steel-800">
        {STATS.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="text-center px-4">
            <div className="font-bebas text-5xl md:text-6xl text-chrome-shine mb-2">{stat.value}</div>
            <div className="font-rajdhani text-sm md:text-base text-chrome-dark uppercase tracking-widest">{stat.label}</div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>

  {/* 3. SERVICES OVERVIEW */}
  <section className="py-24 bg-steel-950 relative">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle 
        title="OUR SERVICES" 
        subtitle="Precision engineering meets functional design. We build to last."
        centered={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <AnimatedSection key={service.id} delay={i * 0.1}>
            <ServiceCard 
              id={service.id}
              title={service.title}
              shortDesc={service.shortDesc}
              iconName={service.icon}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>

  <div className="max-w-7xl mx-auto px-6"><div className="section-divider"></div></div>

  {/* 4. FEATURED PRODUCTS */}
  <section className="py-12 bg-steel-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <SectionTitle title="WHAT WE BUILD" subtitle="Explore our most requested fabrication projects." />
        <Link href="/products" className="btn-ghost whitespace-nowrap mb-16 md:mb-0">
          View All Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product, i) => (
          <AnimatedSection key={product.id} delay={i * 0.1}>
            <ProductCard {...product} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>

  {/* 5. WHY CHOOSE US */}
  <section className="py-24 bg-steel-900 border-y border-steel-800">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle title="THE FABRICATORS EDGE" centered={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {[
          { num: '01', title: 'Premium Materials', desc: 'We strictly use high-grade stainless steel (304/201) ensuring longevity, hygiene, and rust resistance.' },
          { num: '02', title: 'Precision Craftsmanship', desc: 'Our experienced welders and fabricators pay obsessive attention to detail, resulting in seamless finishes.' },
          { num: '03', title: 'Custom Tailored', desc: 'No two businesses are the same. We design and build exactly to your specific dimensions and workflow needs.' },
          { num: '04', title: 'Timely Delivery', desc: 'We respect your launch dates. Our optimized workshop processes ensure we deliver on our promises, every time.' },
        ].map((feature, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="flex gap-6">
            <div className="font-bebas text-6xl text-steel-700 leading-none">{feature.num}</div>
            <div>
              <h3 className="font-rajdhani text-2xl font-bold tracking-wider text-chrome-light mb-3">{feature.title}</h3>
              <p className="font-inter text-chrome-dark leading-relaxed">{feature.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>

  {/* 6. TESTIMONIALS */}
  <section className="py-24 bg-steel-950">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle title="WHAT OUR CLIENTS SAY" centered={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {TESTIMONIALS.map((t, i) => (
          <AnimatedSection key={t.id} delay={i * 0.1}>
            <div className="card-metal p-8 h-full flex flex-col relative">
              <Quote size={40} className="text-steel-800 absolute top-6 right-6" />
              <p className="font-inter text-chrome-mid italic leading-relaxed flex-grow mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="border-t border-steel-700 pt-4 mt-auto">
                <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide">{t.name}</h4>
                <span className="font-inter text-xs text-steel-500 uppercase tracking-widest">{t.city}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>

  {/* 7. CTA BANNER */}
  <section className="py-32 bg-steel-900 border-t border-steel-800 text-center px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]"></div>
    <AnimatedSection className="relative z-10 max-w-3xl mx-auto">
      <h2 className="font-bebas text-5xl md:text-7xl tracking-widest text-chrome-light mb-6">READY TO BUILD SOMETHING GREAT?</h2>
      <p className="font-rajdhani text-xl text-chrome-dark mb-10">Let's discuss your project requirements and get a free quotation.</p>
      <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-chrome text-lg px-12 py-4">
        CHAT ON WHATSAPP
      </a>
    </AnimatedSection>
  </section>
</>
)
}