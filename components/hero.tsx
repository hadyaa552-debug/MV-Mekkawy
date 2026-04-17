"use client"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://prod-images.nawy.com/processed/compound_image/image/11804/default.webp"
          alt="Mountain View" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{background:"linear-gradient(to right, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 100%)"}} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left: Text */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Mountain View • DMG</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-4">
              Experience<br/><span className="text-primary">Happiness</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Three extraordinary communities — Egypt's first smart city, the largest compound in Mostakbal City, and the first city on the Nile.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["New Cairo", "Mostakbal City", "Sheikh Zayed", "On The Nile"].map((t, i) => (
                <span key={i} className="border border-white/20 text-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide">{t}</span>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 border-t border-white/10 pt-8">
              {[{ v: "2005", l: "Founded" }, { v: "2,540", l: "Total Acres" }, { v: "20+", l: "Years" }].map((s, i) => (
                <div key={i} className="text-left border-r border-white/10 pr-6 last:border-r-0 last:pr-0 mr-6 last:mr-0">
                  <div className="text-3xl font-black text-primary">{s.v}</div>
                  <div className="text-xs text-white/40 mt-1 tracking-wide uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
