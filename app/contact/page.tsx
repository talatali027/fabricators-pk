'use client'
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import SectionTitle from '@/components/SectionTitle'
import { BRAND, SERVICES } from '@/lib/data'
export default function ContactPage() {
const[formData, setFormData] = useState({
name: '',
phone: '',
service: '',
message: ''
})
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault()
const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interested In:* ${formData.service}%0A*Message:* ${formData.message}`
window.open(`https://wa.me/${BRAND.whatsapp}?text=${text}`, '_blank')
}
return (
<div className="pb-24">
{/* Hero */}
<section className="bg-steel-900 border-b border-steel-800 py-20 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="font-bebas text-6xl md:text-7xl text-metallic tracking-widest mb-4">CONTACT US</h1>
<p className="font-rajdhani text-xl text-chrome-dark tracking-wide">
Let's discuss your project. Get in touch with our fabrication experts.
</p>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Form Side */}
      <AnimatedSection>
        <SectionTitle title="SEND A MESSAGE" subtitle="Fill out the form below and we'll connect via WhatsApp." />
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-rajdhani text-sm text-chrome-mid tracking-widest uppercase">Your Name</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-steel-900 border border-steel-700 text-chrome-light px-4 py-3 focus:outline-none focus:border-chrome-mid transition-colors font-inter"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="font-rajdhani text-sm text-chrome-mid tracking-widest uppercase">Phone Number</label>
              <input 
                required
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-steel-900 border border-steel-700 text-chrome-light px-4 py-3 focus:outline-none focus:border-chrome-mid transition-colors font-inter"
                placeholder="03XX-XXXXXXX"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-rajdhani text-sm text-chrome-mid tracking-widest uppercase">Service of Interest</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-steel-900 border border-steel-700 text-chrome-light px-4 py-3 focus:outline-none focus:border-chrome-mid transition-colors font-inter appearance-none"
            >
              <option value="" disabled>Select a service</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other / Custom</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-rajdhani text-sm text-chrome-mid tracking-widest uppercase">Project Details</label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-steel-900 border border-steel-700 text-chrome-light px-4 py-3 focus:outline-none focus:border-chrome-mid transition-colors font-inter resize-none"
              placeholder="Tell us about dimensions, requirements, etc."
            ></textarea>
          </div>

          <button type="submit" className="btn-chrome w-full gap-2">
            <Send size={18} /> Send via WhatsApp
          </button>
        </form>
      </AnimatedSection>

      {/* Info Side */}
      <AnimatedSection delay={0.2}>
        <div className="bg-steel-900 border border-steel-700 p-8 md:p-12 h-full">
          <h3 className="font-bebas text-4xl tracking-widest text-chrome-light mb-8">CONTACT INFORMATION</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-steel-800 border border-steel-700 flex items-center justify-center text-chrome-mid flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide mb-1">Workshop Address</h4>
                <p className="font-inter text-chrome-dark text-sm leading-relaxed">{BRAND.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-steel-800 border border-steel-700 flex items-center justify-center text-chrome-mid flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide mb-1">Phone / WhatsApp</h4>
                <p className="font-inter text-chrome-dark text-sm mb-1">{BRAND.phone}</p>
                <p className="font-inter text-chrome-dark text-sm">+{BRAND.whatsapp}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-steel-800 border border-steel-700 flex items-center justify-center text-chrome-mid flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide mb-1">Email Address</h4>
                <p className="font-inter text-chrome-dark text-sm">{BRAND.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-steel-800 border border-steel-700 flex items-center justify-center text-chrome-mid flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide mb-1">Working Hours</h4>
                <p className="font-inter text-chrome-dark text-sm mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="font-inter text-chrome-dark text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-steel-800">
            <h4 className="font-rajdhani font-bold text-lg text-chrome-light tracking-wide mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {BRAND.serviceAreas.map((area, i) => (
                <span key={i} className="px-3 py-1 bg-steel-800 border border-steel-700 text-xs font-inter text-chrome-mid rounded-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* Map Section */}
  <section className="h-[400px] w-full border-y border-steel-800 bg-steel-900 relative">
    {/* Placeholder for iframe to keep code clean and functional without API keys */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108924.97544061585!2d74.24921612450372!3d31.442801452819894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714671400000!5m2!1sen!2s" 
      width="100%" 
      height="100%" 
      style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Fabricators Location"
    ></iframe>
  </section>
</div>
)
}
