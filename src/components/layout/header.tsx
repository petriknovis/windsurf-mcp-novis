'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-novis.svg"
            alt="Novis"
            width={120}
            height={40}
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
          <Link href="/why-novis" className="text-muted-foreground hover:text-foreground transition-colors">Why NOVIS</Link>
          <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</Link>
          <Button asChild variant="outline">
            <Link href="/partner">NOVIS Partner Area</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}
