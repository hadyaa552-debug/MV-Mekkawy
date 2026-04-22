"use client"
import { LangProvider } from "@/lib/lang-context"
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
import { useLang } from "@/lib/lang-context"

function ContactSection() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const phone = "+201008900076"

  return (
    <section id="contact" className="py-24 bg-muted/30" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{isAr ? "تواصل معنا" : "GET IN TOUCH"}</p>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">{isAr ? "نحن هنا لمساعدتك" : "We're Here to Help"}</h2>
          <p className="text-muted-foreground text-sm">{isAr ? "سجل اهتمامك وسيتواصل معك فريقنا قريباً" : "Register your interest and our team will reach out shortly"}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <a href={`tel:${phone}`} className="text-2xl font-black text-foreground hover:text-primary block mb-8" dir="ltr">01008900076</a>
            <div className="space-y-0">
              {[
                { en: "iCity New Cairo", ar: "iCity القاهرة الجديدة", locEn: "Fifth Settlement • Ring Road", locAr: "التجمع الخامس • Ring Road" },
                { en: "Aliva", ar: "أليفا", locEn: "Mostakbal City • East Cairo", locAr: "مدينة المستقبل • شرق القاهرة" },
                { en: "Jirian", ar: "جيريان", locEn: "Sheikh Zayed • On The Nile", locAr: "الشيخ زايد • على النيل" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-border">
                  <div>
                    <p className="font-black text-foreground text-sm">{isAr ? p.ar : p.en}</p>
                    <p className="text-xs text-muted-foreground tracking-wide">{isAr ? p.locAr : p.locEn}</p>
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
  )
}

export default function Home() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <ProjectIcity />
        <ProjectAliva />
        <ProjectJirian />
        <AboutDeveloper />
        <ContactSection />
        <Footer />
        <WhatsAppWidget />
        <MobileBottomBar />
      </main>
    </LangProvider>
  )
}
