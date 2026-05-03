import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Phone, Youtube, Linkedin } from 'lucide-react'
import Logo from './Logo'
import { BRAND, SERVICES } from '@/lib/data'
export default function Footer() {
return (
<footer className="bg-steel-950 border-t border-steel-800 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

{/* Col 1: Brand */}
      <div className="space-y-6">
        <Logo size={48} showText={true} />
        <p className="text-chrome-dark font-inter text-sm leading-relaxed">
          {BRAND.tagline}. We specialize in high-quality stainless steel fabrication for commercial and industrial needs across Pakistan.
        </p>
        <div className="flex items-center gap-4">
  <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-steel-700 flex items-center justify-center text-chrome-mid hover:bg-chrome-mid hover:text-steel-950 transition-all">
    <Facebook size={18} />
  </a>
  <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-steel-700 flex items-center justify-center text-chrome-mid hover:bg-chrome-mid hover:text-steel-950 transition-all">
    <Instagram size={18} />
  </a>
  <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-steel-700 flex items-center justify-center text-chrome-mid hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
    <Youtube size={18} />
  </a>
  <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-steel-700 flex items-center justify-center text-chrome-mid hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
    <Linkedin size={18} />
  </a>
  <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-steel-700 flex items-center justify-center text-chrome-mid hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
    <Phone size={18} />
  </a>
</div>
      </div>

      {/* Col 2: Quick Links */}
      <div>
        <h4 className="font-bebas text-2xl tracking-wider text-chrome-light mb-6">Quick Links</h4>
        <ul className="space-y-3 font-rajdhani text-chrome-mid tracking-wide">
          <li><Link href="/" className="hover:text-chrome-shine transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-chrome-shine transition-colors">About Us</Link></li>
          <li><Link href="/gallery" className="hover:text-chrome-shine transition-colors">Project Gallery</Link></li>
          <li><Link href="/products" className="hover:text-chrome-shine transition-colors">All Products</Link></li>
          <li><Link href="/contact" className="hover:text-chrome-shine transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Col 3: Services */}
      <div>
        <h4 className="font-bebas text-2xl tracking-wider text-chrome-light mb-6">Our Services</h4>
        <ul className="space-y-3 font-rajdhani text-chrome-mid tracking-wide">
          {SERVICES.slice(0, 5).map(service => (
            <li key={service.id}>
              <Link href={`/services#${service.id}`} className="hover:text-chrome-shine transition-colors">
                {service.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/services" className="text-chrome-dark hover:text-chrome-shine transition-colors italic">
              View all services &rarr;
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 4: Contact Info */}
      <div>
        <h4 className="font-bebas text-2xl tracking-wider text-chrome-light mb-6">Contact Us</h4>
        <ul className="space-y-4 font-inter text-sm text-chrome-mid">
          <li className="flex items-start gap-3">
            <span className="text-steel-500 mt-1">📍</span>
            <span>{BRAND.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-steel-500">📞</span>
            <a href={`tel:${BRAND.phone}`} className="hover:text-chrome-shine transition-colors">{BRAND.phone}</a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-steel-500">✉️</span>
            <a href={`mailto:${BRAND.email}`} className="hover:text-chrome-shine transition-colors">{BRAND.email}</a>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-steel-800 flex flex-col md:flex-row items-center justify-between gap-4 font-inter text-xs text-steel-500">
      <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <Link href="/privacy-policy" className="hover:text-chrome-mid transition-colors">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="hover:text-chrome-mid transition-colors">Terms & Conditions</Link>
      </div>
    </div>
  </div>
</footer>
)
}