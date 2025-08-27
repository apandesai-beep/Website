"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Residential Customer",
    rating: 5,
    text: "Reakar Electric did an amazing job rewiring our entire home. The team was professional, clean, and completed the work on time. Highly recommended!",
  },
  {
    name: "Mike Chen",
    location: "Business Owner",
    rating: 5,
    text: "We needed emergency electrical repairs for our restaurant. They responded within an hour and had us back up and running quickly. Excellent service!",
  },
  {
    name: "Lisa Rodriguez",
    location: "Homeowner",
    rating: 5,
    text: "The LED upgrade they installed has already started saving us money on our electric bill. The lighting looks fantastic and the installation was flawless.",
  },
  {
    name: "David Thompson",
    location: "Property Manager",
    rating: 5,
    text: "Reakar Electric handles all the electrical work for our commercial properties. They are reliable, fairly priced, and always deliver quality work.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">What Our Customers Say</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-400">
            Don't just take our word for it. Here's what our satisfied customers have to say about our electrical
            services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted">{testimonials[currentIndex].location}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-secondary" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
