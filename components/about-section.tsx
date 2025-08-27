import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, Battery, Leaf, Globe } from "lucide-react"

const stats = [
  { icon: Battery, number: "30+", label: "Years Combined Experience" },
  { icon: Users, number: "3", label: "Expert Founders" },
  { icon: Globe, number: "3", label: "Global Offices" },
  { icon: Leaf, number: "0", label: "Carbon Emissions" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 section-text">Our Vision</h2>
            <p className="text-lg section-text mb-8 leading-relaxed">
              At Reakar Electric, our vision is not merely to build electric vehicles; it's to usher in a new era of
              transportation. We believe in a future where clean, efficient, and intelligent mobility is accessible to
              all. Our commitment extends beyond manufacturing electric vehicles to providing comprehensive solutions
              that empower companies to develop their own EV platforms.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 section-text">Collaborative Innovation</h3>
                  <p className="section-text text-sm opacity-75">
                    We work hand-in-hand with companies to understand their unique requirements, providing tailored
                    solutions that propel them towards an electrified future.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 section-text">Complete EV Solutions</h3>
                  <p className="section-text text-sm opacity-75">
                    From concept to production, we guide companies through the entire process, ensuring seamless
                    integration of components and cutting-edge technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 section-text">Global Presence</h3>
                  <p className="section-text text-sm opacity-75">
                    With offices across India, Netherlands, and Canada, we offer a truly global perspective and superior
                    quality support worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-secondary/10 rounded-full">
                      <stat.icon className="h-8 w-8 text-amber-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-serif text-primary mb-2">{stat.number}</div>
                  <div className="text-sm section-text">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
