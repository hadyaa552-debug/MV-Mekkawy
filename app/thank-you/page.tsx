"use client"
import Link from "next/link"

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-3">Thank You!</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">Your request has been received. Our sales consultant will contact you shortly.</p>
        </div>
        <div className="border border-border p-5 text-left space-y-3">
          <a href="tel:+201119770408" className="flex items-center justify-between py-2 border-b border-border hover:text-primary transition-colors">
            <span className="font-bold text-sm" dir="ltr">01119770408</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Call Direct</span>
          </a>
          <a href="https://wa.me/201119770408" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between py-2 hover:text-primary transition-colors">
            <span className="font-bold text-sm text-green-600">WhatsApp</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Instant Reply</span>
          </a>
        </div>
        <Link href="/" className="inline-block bg-foreground text-white px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-foreground/90 transition-colors">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
