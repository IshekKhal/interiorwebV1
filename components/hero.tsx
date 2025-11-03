"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  "/luxury-modern-living-room-interior-design.jpg",
  "/elegant-bedroom-interior-design-dubai.jpg",
  "/contemporary-office-interior-design.jpg",
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="home" className="relative w-full pt-16 overflow-hidden" style={{ height: "min(100vh, 600px)" }}>
      <div className="relative w-full h-full">
        {projects.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src || "/placeholder.svg"} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 sm:px-4">
        <div className="max-w-2xl">
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-balance">
            Transforming Spaces with Precision & Passion
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-xl mx-auto">
            Leading Interior Design Firm in Dubai
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
            <button className="px-6 xs:px-8 py-2.5 xs:py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300 rounded-sm text-sm xs:text-base w-full xs:w-auto">
              View Our Work
            </button>
            <button className="px-6 xs:px-8 py-2.5 xs:py-3 bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors duration-300 rounded-sm backdrop-blur-sm border border-white/30 text-sm xs:text-base w-full xs:w-auto">
              Get Consultation
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 xs:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 xs:p-3 bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full backdrop-blur-sm border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="xs:w-6 xs:h-6 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 xs:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 xs:p-3 bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full backdrop-blur-sm border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="xs:w-6 xs:h-6 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 xs:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 xs:gap-2 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-accent w-6 xs:w-8 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
