import { Button } from "@/components/ui/button"
import { Phone, Zap, Battery, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative gradient-bg text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-accent/20 text-primary-foreground shadow-lg backdrop-blur-sm bg-amber-400">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight hero-text">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text neon-text text-gray-50">
              {" "}
              Electric Mobility
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 section-text leading-relaxed">
            Revolutionary electric vehicle solutions designed to reshape sustainable transportation with cutting-edge
            technology and zero emissions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground hover-glow font-semibold"
            >
              Explore Our EVs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us: (555) 123-456
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-glow">
              <Zap className="h-8 w-8 text-accent" />
              <div>
                <div className="font-semibold section-text">Zero Emissions</div>
                <div className="text-sm section-text opacity-75">100% electric, 100% clean</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-glow">
              <Battery className="h-8 w-8 text-accent" />
              <div>
                <div className="font-semibold section-text">Advanced Technology</div>
                <div className="text-sm section-text opacity-75">Cutting-edge EV innovation</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-glow">
              <Cpu className="h-8 w-8 text-accent" />
              <div>
                <div className="font-semibold section-text">Expert Team</div>
                <div className="text-sm section-text opacity-75">60+ years combined experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
