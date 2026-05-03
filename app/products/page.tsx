'use client'
import React, { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/data'
export default function ProductsPage() {
const[filter, setFilter] = useState('All')
const categories =['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))]
const filteredProducts = filter === 'All'
? PRODUCTS
: PRODUCTS.filter(p => p.category === filter)
return (
<div className="min-h-screen pb-24">
{/* Hero */}
<section className="bg-steel-900 border-b border-steel-800 py-20 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="font-bebas text-6xl md:text-7xl text-metallic tracking-widest mb-4">OUR PRODUCTS</h1>
<p className="font-rajdhani text-xl text-chrome-dark tracking-wide">
Browse our standard fabrication models. All items can be customized.
</p>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 py-16">
    {/* Filter Bar */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-6 py-2 font-rajdhani font-bold tracking-widest uppercase text-sm border transition-all duration-300 ${
            filter === cat 
              ? 'bg-chrome-mid text-steel-950 border-chrome-mid' 
              : 'bg-transparent text-chrome-dark border-steel-700 hover:border-chrome-mid hover:text-chrome-light'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product, index) => (
        <AnimatedSection key={product.id} delay={index * 0.05}>
          <ProductCard {...product} />
        </AnimatedSection>
      ))}
    </div>

    {filteredProducts.length === 0 && (
      <div className="text-center py-20 text-chrome-dark font-rajdhani text-xl">
        No products found in this category.
      </div>
    )}
  </div>
</div>
)
}