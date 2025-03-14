'use client';

import Image from 'next/image'

export function Achievements() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">NEW WORLD OF INSURANCE</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">NOVIS Insurance Company has achieved significant successes during its operation</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-emerald-600 text-xl">•</span>
                <p>We provide our clients with exceptional insurance utilizing 25+ significant innovations. According to feedback from our customers and business partners, it is the most interesting offer insurers have created in recent years.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 text-xl">•</span>
                <p>NOVIS is an international insurance company based in Bratislava with clients in Slovakia, Czech Republic, Germany, Austria, Poland, Finland, Italy and Hungary. In the year 2018, we entered the markets in Sweden, Lithuania and Iceland.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 text-xl">•</span>
                <p>Insurance from NOVIS is unique thanks to its range of insurance coverage, completely new investment options, incredible flexibility, liquidity and new forms of capital use.</p>
              </li>
            </ul>
          </div>
          
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <h3 className="absolute top-4 left-4 text-xl font-semibold">STABILITY AND INTERNATIONAL EXPERIENCE</h3>
            <Image
              src="/images/map.png"
              alt="NOVIS International Presence"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
