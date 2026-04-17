"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          project: formData.project || "Not specified",
          _subject: "New Lead – Mountain View",
          _captcha: "false",
          _template: "table",
        }),
      })
      if (res.ok) { router.push("/thank-you") }
      else throw new Error()
    } catch { setLoading(false) }
  }

  return (
    <Card className="shadow-2xl border-0 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-black text-foreground">Contact Sales Team</CardTitle>
        <p className="text-sm text-muted-foreground">Our consultant will reach you within 24 hours</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input placeholder="Full Name *" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required className="h-11" />
          <Input type="tel" placeholder="Phone Number *" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required className="h-11" />
          <Select value={formData.project} onValueChange={(v) => setFormData({ ...formData, project: v })}>
            <SelectTrigger className="h-11 bg-white border border-input">
              <SelectValue placeholder="Select Project *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="icity">iCity – New Cairo</SelectItem>
              <SelectItem value="aliva">Aliva – Mostakbal City</SelectItem>
              <SelectItem value="jirian">Jirian – Sheikh Zayed</SelectItem>
              <SelectItem value="all">Multiple Projects</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" disabled={loading}
            className="w-full h-12 bg-foreground hover:bg-foreground/90 text-white font-black text-sm tracking-widest uppercase">
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
