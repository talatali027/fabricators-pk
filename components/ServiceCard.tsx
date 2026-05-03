import React from 'react'
import Link from 'next/link'
import { Truck, Flame, Store, ChefHat, PenTool, Wrench, ArrowRight } from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = { Truck, Flame, Store, ChefHat, PenTool, Wrench }

interface ServiceCardProps { id: string; title: string; shortDesc: string; iconName: string }

export default function ServiceCard({ id, title, shortDesc, iconName }: ServiceCardProps) {
  const Icon = ICON_MAP[iconName] || Wrench
  return (
    <Link href={`/services#${id}`} className="block group h-full">
      <div className="card-metal p-8 h-full flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chrome-mid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="w-14 h-14 rounded bg-steel-800 border border-steel-700 flex items-center justify-center text-chrome-mid group-hover:text-chrome-shine group-hover:border-chrome-mid transition-all duration-300 mb-6 relative z-10">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="font-bebas text-2xl tracking-wider text-chrome-light mb-3 relative z-10">{title}</h3>
        <p className="font-inter text-sm text-chrome-dark leading-relaxed flex-grow relative z-10">{shortDesc}</p>
        <div className="mt-8 flex items-center gap-2 text-chrome-mid font-rajdhani font-bold text-sm uppercase tracking-widest group-hover:text-chrome-shine transition-colors relative z-10">
          Explore <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  )
}