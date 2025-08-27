import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Battery, Zap, Wrench, Cpu, Settings } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Complete EV Solutions",
    description:
      "End-to-end solutions for electric vehicles from concept to production, ensuring seamless integration of components and cutting-edge technologies.",
    features: ["EV Platform Development", "Component Integration", "Production Guidance", "Customized Solutions"],
  },
  {
    icon: Battery,
    title: "Advanced Battery Technology",
    description:
      "High-performance batteries with unparalleled expertise in energy storage, designed to power vehicles and serve as benchmarks for excellence.",
    features: ["Custom Battery Packs", "Battery Management Systems", "Energy Optimization", "Safety Integration"],
  },
  {
    icon: Cpu,
    title: "EV Controls Components",
    description:
      "State-of-the-art BMS, MCU, and VCU systems ensuring optimal operation, performance, efficiency, and safety for electric vehicles.",
    features: ["Battery Management Systems", "Motor Control Units", "Vehicle Control Units", "System Integration"],
  },
  {
    icon: Zap,
    title: "Fast Charging Solutions",
    description:
      "Swift and convenient charging experiences with high-power charging technologies to minimize charging time and maximize vehicle uptime.",
    features: ["High-Power Charging", "Public Infrastructure", "Private Networks", "Smart Charging"],
  },
  {
    icon: Settings,
    title: "Industrial Automation",
    description:
      "Advanced automation solutions offering increased productivity, enhanced quality, reduced costs, and improved workplace safety across industries.",
    features: ["Robotic Systems", "Control Systems", "Machine Vision", "Data Analytics"],
  },
  {
    icon: Wrench,
    title: "Consultation Services",
    description:
      "Comprehensive EV systems and industrial automation consultancy, providing expert guidance from concept development to implementation.",
    features: ["EV Systems Consultancy", "Automation Consultancy", "Technical Support", "Implementation Guidance"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">What We Do</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-300">
            From complete EV solutions to industrial automation, we provide comprehensive technologies and services that
            empower companies to develop their own EV platforms and optimize their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-transparent">
                    <service.icon className="h-8 w-8 text-amber-300 bg-transparent" />
                  </div>
                  <CardTitle className="text-xl font-serif text-center">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
