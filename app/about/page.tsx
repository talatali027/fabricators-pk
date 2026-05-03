import React from 'react'
import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SectionTitle from '@/components/SectionTitle'
import { BRAND, STATS } from '@/lib/data'
export const metadata: Metadata = {
title: 'About Us',
description: `Learn about ${BRAND.name}, our mission, vision, and our commitment to quality fabrication in Pakistan.`,
}
export default function AboutPage() {
return (
<div className="pb-24">
{/* Hero */}
<section className="bg-steel-900 border-b border-steel-800 py-20 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="font-bebas text-6xl md:text-7xl text-metallic tracking-widest mb-4">ABOUT FABRICATORS</h1>
<p className="font-rajdhani text-xl text-chrome-dark tracking-wide">
Forging excellence in steel since our inception.
</p>
</div>
</section>

{/* Story */}
  <section className="py-24 px-6 max-w-5xl mx-auto">
    <AnimatedSection>
      <SectionTitle title="OUR STORY" />
      <div className="prose prose-invert prose-lg font-inter text-chrome-dark max-w-none">
        <p className="text-xl text-chrome-mid leading-relaxed mb-6">
          Based in Lahore, Pakistan, {BRAND.name} was born out of a necessity for high-quality, reliable, and precise stainless steel fabrication. We noticed a gap in the market where food businesses and commercial ventures were struggling to find equipment that could withstand heavy daily use while maintaining a premium aesthetic.
        </p>
        <p className="leading-relaxed mb-6">
          What started as a small workshop has grown into a fully equipped fabrication facility. Today, we proudly serve clients across Lahore, Gujranwala, Rawalpindi, Islamabad, and beyond. Our specialty lies in custom mobile food carts, robust commercial kitchen equipment, and intricate laser-cut signage.
        </p>
        <p className="leading-relaxed">
          We believe that steel is not just a material; it's a foundation for businesses to grow on. Every cut, every weld, and every polish is executed with the end-user in mind. We don't just build products; we build reliable assets for your business.
        </p>
      </div>
    </AnimatedSection>
  </section>

  {/* Stats */}
  <section className="bg-steel-900 border-y border-steel-800 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-steel-800">
      {STATS.map((stat, i) => (
        <AnimatedSection key={i} delay={i * 0.1} className="text-center px-4">
          <div className="font-bebas text-5xl md:text-6xl text-chrome-shine mb-2">{stat.value}</div>
          <div className="font-rajdhani text-sm md:text-base text-chrome-dark uppercase tracking-widest">{stat.label}</div>
        </AnimatedSection>
      ))}
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <AnimatedSection>
        <div className="card-metal p-12 h-full">
          <h2 className="font-bebas text-4xl tracking-widest text-chrome-light mb-6">OUR MISSION</h2>
          <p className="font-inter text-lg text-chrome-dark leading-relaxed">
            {BRAND.mission} We aim to empower entrepreneurs by providing them with the physical tools and setups they need to succeed in the competitive food and retail industries.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="card-metal p-12 h-full bg-steel-800 border-chrome-dark">
          <h2 className="font-bebas text-4xl tracking-widest text-chrome-light mb-6">OUR VISION</h2>
          <p className="font-inter text-lg text-chrome-dark leading-relaxed">
            {BRAND.vision} We strive to set the industry standard for craftsmanship, durability, and customer satisfaction in the metalworking sector.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>

  {/* Core Values */}
  <section className="py-24 px-6 bg-steel-950 border-t border-steel-800">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="CORE VALUES" centered={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {[
          { title: 'Quality First', desc: 'No compromises on material grade or welding integrity.' },
          { title: 'Innovation', desc: 'Constantly improving our designs for better workflow and aesthetics.' },
          { title: 'Reliability', desc: 'Delivering on time, every time, respecting your business timelines.' },
          { title: 'Partnership', desc: 'We view our clients as partners, growing together through success.' },
        ].map((value, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="border border-steel-700 p-8 text-center h-full hover:bg-steel-900 transition-colors">
              <h3 className="font-rajdhani font-bold text-xl text-chrome-light tracking-wide mb-4 uppercase">{value.title}</h3>
              <p className="font-inter text-sm text-chrome-dark">{value.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
</div>
)
}