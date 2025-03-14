import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="block text-gray-900">contract.</span>
                <span className="block text-gray-900">life.</span>
                <span className="block text-emerald-600">&amp; only. like you.</span>
              </h1>
              <p className="text-xl text-gray-600">Simple &amp; easy. forever.</p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Know NOVIS
                <Image
                  src="/images/play.svg"
                  alt="Play"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/images/leaf.svg"
              alt="Novis Leaf"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
