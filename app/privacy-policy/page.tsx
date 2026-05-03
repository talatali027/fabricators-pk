import React from 'react'
import { Metadata } from 'next'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${BRAND.name}`,
}
export default function PrivacyPolicyPage() {
return (
<div className="pt-20 pb-24 px-6 max-w-4xl mx-auto">
<h1 className="font-bebas text-5xl md:text-6xl text-metallic tracking-widest mb-12 border-b border-steel-800 pb-6">
PRIVACY POLICY
</h1>

<div className="prose prose-invert prose-steel max-w-none font-inter text-chrome-dark space-y-8">
    <section className="bg-steel-900 border border-steel-800 p-8">
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">1. Information We Collect</h2>
      <p className="leading-relaxed">
        When you interact with {BRAND.name} via our website or WhatsApp, we may collect the following information:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2 text-chrome-mid">
        <li><strong>Personal Identification Information:</strong> Name, phone number, and email address (if provided).</li>
        <li><strong>Project Details:</strong> Information regarding your fabrication requirements, business name, and location for delivery purposes.</li>
        <li><strong>Communication Data:</strong> Records of correspondence via WhatsApp or email.</li>
      </ul>
    </section>

    <section className="bg-steel-900 border border-steel-800 p-8">
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">2. How We Use Your Information</h2>
      <p className="leading-relaxed">
        The information we collect is used in the following ways:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2 text-chrome-mid">
        <li>To provide accurate quotations for your custom fabrication projects.</li>
        <li>To communicate with you regarding order status, delivery, and post-sales support.</li>
        <li>To improve our website, products, and customer service based on your feedback.</li>
      </ul>
    </section>

    <section className="bg-steel-900 border border-steel-800 p-8">
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">3. Third-Party Services</h2>
      <p className="leading-relaxed">
        Our primary method of communication is WhatsApp. Please note that when you click our WhatsApp links, you are directed to their platform, which operates under its own Privacy Policy. We also link to our social media profiles (Facebook, Instagram), which are governed by Meta's privacy policies. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
      </p>
    </section>

    <section className="bg-steel-900 border border-steel-800 p-8">
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">4. Data Security</h2>
      <p className="leading-relaxed">
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
      </p>
    </section>

    <section className="bg-steel-900 border border-steel-800 p-8">
      <h2 className="font-bebas text-3xl text-chrome-light tracking-wider mb-4">5. Contact Us</h2>
      <p className="leading-relaxed">
        If there are any questions regarding this privacy policy, you may contact us using the information below:
      </p>
      <div className="mt-4 text-chrome-mid">
        <p><strong>Company:</strong> {BRAND.name}</p>
        <p><strong>Address:</strong> {BRAND.address}</p>
        <p><strong>Email:</strong> {BRAND.email}</p>
        <p><strong>Phone:</strong> {BRAND.phone}</p>
      </div>
    </section>
  </div>
</div>
)
}