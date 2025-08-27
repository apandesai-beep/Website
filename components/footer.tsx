import { Zap, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-black" />
              <span className="text-2xl font-bold font-serif">Reakar Electric</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional electrical services you can trust. Licensed, insured, and committed to excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@reakarelectric.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Greater Metropolitan Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Residential Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  LED Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Safety Inspections
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-secondary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Free Quote
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <div className="font-medium">Monday - Friday</div>
                <div className="text-sm">7:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Saturday</div>
                <div className="text-sm">8:00 AM - 4:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Sunday</div>
                <div className="text-sm">Emergency Only</div>
              </div>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                <div className="font-semibold text-secondary">24/7 Emergency Service</div>
                <div className="text-sm">Available for urgent electrical issues</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Reakar Electric. All rights reserved. Licensed & Insured.
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
