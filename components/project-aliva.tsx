"use client"

export default function Projectaliva() {
  const phone = "+201119770408"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("I'm interested in Aliva by Mountain View")}`

  const details = [
    { label: "Area", value: "640 Acres — 7 Zones" },
    { label: "Location", value: "Mostakbal City — East Cairo" },
    { label: "Units", value: "Apartments • iVillas • Standalone Villas" },
    { label: "Highlight", value: "8-Acre Navigable River — Kayaking" },
    { label: "Payment", value: "Flexible Plans Available" },
  ]
  const features = ["8-Acre River + Kayaking", "Lagoon Beach Park", "Farmer's Market", "River Park", "Club Park", "AI Systems"]
  const images = [
    "https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/6327/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/6327/default.webp",
    "https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp",
  ]
  const flip = true

  return (
    <section id="aliva" className="bg-muted/30">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex items-end justify-between border-b border-border">
        <div>
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">02 — MOSTAKBAL CITY • EAST CAIRO</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-none">Aliva</h2>
          <p className="text-muted-foreground text-sm mt-2 tracking-wide">Mountain View • 640 Acres • 7 Residential Zones</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors">
          Enquire Now →
        </a>
      </div>

      {/* Main Content */}
      <div className={`grid lg:grid-cols-2 min-h-[85vh] ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
        {/* Image */}
        <div className="relative overflow-hidden min-h-[50vw] lg:min-h-0">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp" alt="Aliva" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-5xl font-black opacity-20 italic">02</p>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 ${flip ? "bg-foreground text-white" : "bg-white"}`}>
          <div className="w-8 h-0.5 bg-primary mb-6" />
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">MOUNTAIN VIEW</p>
          <h3 className="text-4xl font-black mb-1 leading-none">Aliva</h3>
          <p className={`text-xs tracking-widest uppercase mb-8 ${flip ? "text-white/40" : "text-muted-foreground"}`}>MOSTAKBAL CITY • EAST CAIRO</p>

          <p className={`text-sm leading-relaxed mb-2 ${flip ? "text-white/70" : "text-muted-foreground"}`}>The largest compound in Mostakbal City. 640 acres with 7 residential zones. Features the Middle East's first navigable artificial river — 8 acres you can kayak through. Designed by The Lighthouse Firm using AI systems.</p>
          <p className={`text-sm leading-relaxed mb-8 ${flip ? "text-white/50" : "text-muted-foreground/70"}`}>أكبر كمبوند في مدينة المستقبل. نهر اصطناعي بالقوارب — الأول في الشرق الأوسط. ٧ مناطق سكنية بهوية مختلفة.</p>

          {/* Details */}
          <div className="mb-8 space-y-0">
            {details.map((d, i) => (
              <div key={i} className={`flex justify-between py-3 ${flip ? "border-b border-white/10" : "border-b border-border"}`}>
                <span className={`text-sm font-bold ${flip ? "text-white" : "text-foreground"}`}>{d.value}</span>
                <span className={`text-xs ${flip ? "text-white/40" : "text-muted-foreground"}`}>{d.label}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {features.map((f, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1.5 ${flip ? "bg-white/10 text-primary border border-white/10" : "bg-primary/10 text-primary border border-primary/20"}`}>{f}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
              WhatsApp
            </a>
            <a href={`tel:${phone}`}
              className={`border px-8 py-3 text-xs font-black tracking-widest uppercase transition-colors ${flip ? "border-white/30 text-white hover:bg-white/10" : "border-foreground text-foreground hover:bg-foreground hover:text-white"}`}>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Strip */}
      <div className="grid grid-cols-6 gap-0.5 h-48">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img src={src} alt={`Aliva ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
