import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectIcity from "@/components/project-icity"
import ProjectAliva from "@/components/project-aliva"
import ProjectJirian from "@/components/project-jirian"
import AboutDeveloper from "@/components/about-developer"
import ContactForm from "@/components/contact-form"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectIcity />
      <ProjectAliva />
      <ProjectJirian />
      <AboutDeveloper />

      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">We're Here to Help</h2>
            <p className="text-muted-foreground text-sm">Register your interest and our team will reach out shortly</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <a href="tel:+201119770408" className="text-2xl font-black text-foreground hover:text-primary block mb-8" dir="ltr">01119770408</a>
              <div className="space-y-0">
                {[
                  { name: "iCity New Cairo", loc: "Fifth Settlement • Ring Road" },
                  { name: "Aliva Mostakbal City", loc: "Mostakbal City • East Cairo" },
                  { name: "Jirian", loc: "Sheikh Zayed • On The Nile" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-border">
                    <div>
                      <p className="font-black text-foreground text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground tracking-wide">{p.loc}</p>
                    </div>
                    <div className="w-1.5 h-1.5 bg-primary" />
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
