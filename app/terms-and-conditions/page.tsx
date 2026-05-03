import React from 'react'
import { Metadata } from 'next'
import { BRAND } from '@/lib/data'
export const metadata: Metadata = {
title: 'Terms & Conditions',
description: `Terms and Conditions for ${BRAND.name}`,
}
export default function TermsPage() {
return (
<div className="pt-20 pb-24 px-6 max-w-4xl mx-auto">
<h1 className="font-bebas text-5xl md:text-6xl text-metallic tracking-widest mb-12 border-b border-steel-800 pb-6">
TERMS & CONDITIONS
</h1>

<div className="prose prose-invert prose-steel max-w-none font-inter text-chrome-dark space-y-8">
    
    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">1. Introduction</h2>
      <p className="leading-relaxed">
        Welcome to {BRAND.name}. By accessing our website or engaging our fabrication services, you agree to be bound by these Terms and Conditions. Please read them carefully.
      </p>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">2. Quotations & Orders</h2>
      <ul className="list-disc pl-6 space-y-2 text-chrome-mid">
        <li>All quotations provided via WhatsApp, email, or in person are valid for 7 days due to fluctuating steel prices.</li>
        <li>An order is confirmed only upon receipt of an agreed advance payment (typically 50% to 70% depending on the project scale).</li>
        <li>Custom fabrication orders cannot be canceled once production has commenced.</li>
      </ul>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">3. Pricing & Payments</h2>
      <ul className="list-disc pl-6 space-y-2 text-chrome-mid">
        <li>Prices are quoted in Pakistani Rupees (PKR) unless stated otherwise.</li>
        <li>Full payment must be cleared before the delivery or handover of the fabricated items.</li>
        <li>Delivery charges are separate and will be quoted based on the client's location.</li>
      </ul>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">4. Production & Delivery Timelines</h2>
      <p className="leading-relaxed mb-4">
        Estimated completion dates are provided in good faith. While we strive to meet all deadlines, {BRAND.name} shall not be liable for delays caused by unforeseen circumstances such as power outages, raw material shortages, or extreme weather conditions.
      </p>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">5. Warranty & Workmanship</h2>
      <ul className="list-disc pl-6 space-y-2 text-chrome-mid">
        <li>We offer a 3-month limited warranty on structural welding and workmanship under normal use conditions.</li>
        <li>This warranty does not cover damage caused by misuse, lack of maintenance, unauthorized alterations, or normal wear and tear (such as scratches on steel).</li>
        <li>Electrical components (if included in carts/counters) carry the manufacturer's original warranty only.</li>
      </ul>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">6. Intellectual Property</h2>
      <p className="leading-relaxed">
        Any custom designs, blueprints, or 3D models created by {BRAND.name} remain our intellectual property unless explicitly transferred in writing. We reserve the right to photograph completed projects and use them for marketing purposes on our website and social media.
      </p>
    </section>

    <section>
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">7. Governing Law</h2>
      <p className="leading-relaxed">
        These terms are governed by and construed in accordance with the laws of Pakistan. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Lahore, Pakistan.
      </p>
    </section>

    <section className="mt-12 pt-8 border-t border-steel-800 text-sm">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <p>Contact: {BRAND.email} | {BRAND.phone}</p>
    </section>

  </div>
</div>
)
}