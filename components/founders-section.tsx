import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin } from "lucide-react"
import Image from "next/image"

const founders = [
  {
    name: "Apan Desai",
    role: "Chief Executive Officer (CEO)",
    description:
      "Meet Apan Desai, the driving force behind Reakar Electric. A young and self-taught entrepreneur, Apan embarked on the path of electric mobility with a vision to redefine the way we move. His hands-on approach to learning, coupled with an insatiable curiosity, has fueled the company's ethos of continuous innovation and adaptability. As CEO, Apan actively oversees the financial landscape and critical business decisions, ensuring a holistic approach to the company's growth.",
    experience: "Founder & Visionary Leader",
    location: "Business Strategy & Innovation",
    image: "/apan-desai-ceo.png",
  },
  {
    name: "Radoslav Takev",
    role: "Chief Technology Officer (CTO)",
    description:
      "With over 30 years of industry expertise, Radoslav stands as a luminary in the realm of embedded systems and software development. His profound knowledge, honed through decades of hands-on experience, forms the bedrock of Reakar Electric's technological advancements. Radoslav's professional journey has been marked by a legacy of innovation and leadership with major industry players, shaping the trajectory of industrial automation and vehicle electronics.",
    experience: "30+ Years in Embedded Systems",
    location: "Technology & Software Development",
    image: "/radoslav-takev-cto.png",
  },
  {
    name: "Eduard Hustinx",
    role: "Chief Systems Officer (CSO)",
    description:
      "Hailing from the Netherlands, Eduard brings over 30 years of invaluable experience in electric mobility. His illustrious career spans over three decades, marking him as a true pioneer in the electric vehicle domain. As a consultant to some of the largest Original Equipment Manufacturers (OEMs), he has played a pivotal role in shaping the strategies of industry giants, contributing to the development of their electric vehicle portfolios.",
    experience: "30+ Years in Electric Vehicles",
    location: "Netherlands - Systems Integration",
    image: "/eduard-hustinx-cso.png",
  },
]

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Meet Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The visionary leaders driving Reakar Electric's mission to revolutionize sustainable transportation through
            innovative electric vehicle technology and collaborative innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="h-full hover-glow bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary/10 glow-effect">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{founder.name}</h3>
                  <p className="text-accent font-semibold mb-4">{founder.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{founder.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{founder.experience}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{founder.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
