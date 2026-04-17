import { Building2, Award, MapPin, Users } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "2005", label: "Founded" },
    { icon: MapPin, number: "20+", label: "Projects" },
    { icon: Award, number: "1st", label: "Smart City in Egypt" },
    { icon: Users, number: "2,540", label: "Total Acres" },
  ]
  return (
    <section id="about" className="py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">ABOUT US</p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Mountain View<br/><span className="text-primary">DMG</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Founded in 2005, Mountain View has become one of Egypt's most prominent real estate developers. Known for introducing American-style suburban living to Egypt, the company continues to push boundaries with smart, sustainable, integrated communities across New Cairo, Mostakbal City, Sheikh Zayed, the North Coast, and Ain Sokhna.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="border border-white/10 p-8">
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
