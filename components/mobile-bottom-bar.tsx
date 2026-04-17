const phone = "201119770408"
const msg = encodeURIComponent("I'm interested in Mountain View projects")

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 shadow-lg">
      <a href={`tel:+${phone}`} className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-black text-xs tracking-widest uppercase">📞 Call Now</a>
      <a href={`https://wa.me/${phone}?text=${msg}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-black text-xs tracking-widest uppercase">💬 WhatsApp</a>
    </div>
  )
}
