"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const offices = [
  {
    country: "India",
    address: "nr. Maple County Road Zion Z1, office 614, Ahmedabad, Gujarat 380054",
    phone: "(+91) 94295 79951",
    email: "info@reakar-electric.com",
  },
  {
    country: "Canada",
    address: "6242 ROSEVILLE GARDEN DRIVE; WINDSOR; ONTARIO; N8T 3A4",
    phone: "Contact India Office",
    email: "info@reakar-electric.com",
  },
  {
    country: "Netherlands",
    address: "Stationsstraat 32B, Heythuysen, 6093BL",
    phone: "Contact India Office",
    email: "info@reakar-electric.com",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gold">Our Global Reach</h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Connect with us across three continents. Our tri-continental presence positions us as a company with a truly
            global perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-serif flex items-center gap-2 text-silver">
                  <MapPin className="h-5 w-5 text-gold" />
                  {office.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1 text-silver">Address</h4>
                  <p className="text-gray-400 text-sm">{office.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-silver">Phone</h4>
                  <p className="text-gray-400 text-sm">{office.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-silver">Email</h4>
                  <p className="text-gray-400 text-sm">{office.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 text-gold">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-silver">Primary Contact</h4>
                    <p className="text-gray-300">(+91) 94295 79951</p>
                    <p className="text-sm text-gray-400">India Headquarters</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-silver">Email</h4>
                    <p className="text-gray-300">info@reakar-electric.com</p>
                    <p className="text-sm text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-silver">Global Presence</h4>
                    <p className="text-gray-300">India • Netherlands • Canada</p>
                    <p className="text-sm text-gray-400">Tri-continental operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-silver">Business Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm text-gray-400">Multiple timezone support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gold">Request Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-silver">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-silver">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-silver">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-silver">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="ev-solutions">Complete EV Solutions</option>
                    <option value="battery-tech">Battery Technology</option>
                    <option value="ev-controls">EV Controls Components</option>
                    <option value="charging">Fast Charging Solutions</option>
                    <option value="automation">Industrial Automation</option>
                    <option value="consultation">Consultation Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-silver">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your EV project or requirements..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
