import React from 'react'
import { Phone } from 'lucide-react'
import { BRAND } from '@/lib/data'
export default function WhatsAppButton() {
return (
<a
href={BRAND.whatsappLink}
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 whatsapp-pulse group"
aria-label="Chat on WhatsApp"
>
<Phone size={28} fill="currentColor" />

{/* Tooltip */}
  <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-steel-900 text-chrome-light text-xs font-rajdhani font-bold px-3 py-2 rounded border border-steel-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
    Chat with us!
  </span>
</a>
)
}