"use client"
import Link from "next/link"
import { useLang } from "@/lib/lang-context"

export default function ThankYou() {
  const { lang } = useLang()
  const isAr = lang === "ar"

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4" dir={isAr ? "rtl" : "ltr"}>
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-3">{isAr ? "شكراً لك!" : "Thank You!"}</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {isAr ? "تم استلام طلبك بنجاح. سيتواصل معك أحد مستشاري المبيعات في أقرب وقت." : "Your request has been received. Our sales consultant will contact you shortly."}
          </p>
        </div>
        <div className="border border-border p-5 text-left space-y-3">
          <a href="tel:+201008900076" className="flex items-center justify-between py-2 border-b border-border hover:text-primary transition-colors">
            <span className="font-bold text-sm" dir="ltr">01008900076</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{isAr ? "اتصال مباشر" : "Call Direct"}</span>
          </a>
          <a href="https://wa.me/201008900076" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between py-2 hover:text-primary transition-colors">
            <span className="font-bold text-sm text-green-600">WhatsApp</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{isAr ? "رد فوري" : "Instant Reply"}</span>
          </a>
        </div>
        <Link href="/" className="inline-block bg-primary text-white px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
          {isAr ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>
    </main>
  )
}
