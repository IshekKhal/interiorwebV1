"use client"

import { useEffect, useRef } from "react"

const serviceCategories = [
  {
    title: "Residential",
    description: "Luxury homes designed with elegance and comfort",
    image: "/luxury-residential-interior-design.jpg",
  },
  {
    title: "Commercial",
    description: "Professional spaces that inspire productivity",
    image: "/commercial-office-interior-design.jpg",
  },
  {
    title: "Retail",
    description: "Stunning retail environments that engage customers",
    image: "/luxury-retail-store-interior-design.jpg",
  },
  {
    title: "Restaurant",
    description: "Sophisticated dining spaces with unique ambiance",
    image: "/luxury-restaurant-interior-design.jpg",
  },
  {
    title: "Office Fit-Out",
    description: "Modern workspace solutions for contemporary businesses",
    image: "/modern-office-fitout-interior-design.jpg",
  },
  {
    title: "Joinery Works",
    description: "Bespoke carpentry and custom built-in solutions",
    image: "/luxury-joinery-woodwork-interior-design.jpg",
  },
]

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        container.scrollLeft += e.deltaY > 0 ? 100 : -100
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <section id="services" className="py-12 xs:py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
            Comprehensive interior design solutions tailored to your needs
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="hidden sm:flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
          {serviceCategories.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-80 md:w-96 snap-center group cursor-pointer">
              <div className="bg-card rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base flex-grow">{service.description}</p>
                  <button className="mt-3 sm:mt-4 text-accent font-semibold hover:text-accent/80 transition-colors duration-300 text-xs sm:text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid View */}
        <div className="grid grid-cols-1 sm:hidden gap-4">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <button className="text-accent font-semibold hover:text-accent/80 transition-colors duration-300 text-xs">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
