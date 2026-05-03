import React from 'react'
import { BRAND } from '@/lib/data'

interface ProductCardProps { name: string; description: string; category: string; tag?: string }

export default function ProductCard({ name, description, category, tag }: ProductCardProps) {
  const waMessage = encodeURIComponent(`Hi, I'm interested in the ${name} from your products list.`)
  const link = `https://wa.me/${BRAND.whatsapp}?text=${waMessage}`

  return (
    <div className="card-metal p-6 flex flex-col h-full group relative">
      {tag && (
        <span className="absolute top-4 right-4 text-xs font-rajdhani font-bold tracking-widest uppercase bg-chrome-mid text-steel-950 px-2 py-1">{tag}</span>
      )}
      <div className="mb-4">
        <span className="text-xs font-rajdhani tracking-widest text-steel-500 uppercase border border-steel-700 px-2 py-1 rounded-sm">{category}</span>
      </div>
      <h3 className="font-bebas text-2xl tracking-wider text-chrome-light mb-3 group-hover:text-chrome-shine transition-colors">{name}</h3>
      <p className="font-inter text-sm text-chrome-dark leading-relaxed flex-grow mb-6">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full py-2 text-xs">Inquire Now</a>
    </div>
  )
}