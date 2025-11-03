"use client"

import { useEffect, useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Penthouse",
    category: "Residential",
    image: "/luxury-penthouse-interior-design.jpg",
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/luxury-corporate-office-interior-design.jpg",
  },
  {
    id: 3,
    title: "Boutique Retail",
    category: "Retail",
    image: "/luxury-boutique-retail-interior-design.jpg",
  },
  {
    id: 4,
    title: "Fine Dining Restaurant",
    category: "Restaurant",
    image: "/upscale-fine-dining-restaurant-interior-design.jpg",
  },
  {
    id: 5,
    title: "Tech Startup Office",
    category: "Office Fit-Out",
    image: "/modern-tech-office-fitout-interior-design.jpg",
  },
  {
    id: 6,
    title: "Villa Master Suite",
    category: "Residential",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    title: "Executive Lounge",
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    title: "Contemporary Kitchen",
    category: "Residential",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("portfolio-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio-section" className="py-12 xs:py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
            A curated collection of our finest interior design projects
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-sm cursor-pointer group h-56 xs:h-64 sm:h-72 lg:h-80 transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === item.id ? "scale-110" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 text-balance">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
