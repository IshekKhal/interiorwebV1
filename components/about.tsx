"use client"

import { useEffect, useState } from "react"

export default function About() {
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

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 bg-background">
      <div id="about-section" className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div
            className={`order-2 md:order-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img
              src="/luxury-interior-design-studio-dubai.jpg"
              alt="Al-Abbar Studio"
              className="w-full rounded-sm shadow-lg sm:shadow-xl"
            />
          </div>

          {/* Content */}
          <div
            className={`order-1 md:order-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About Company{" "}
            </h2>
            <p className="text-muted-foreground text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              With over 25 years of experience in interior design, Company has established itself as Dubai&#39;s premier design firm. We specialize in creating luxury spaces that blend timeless elegance with contemporary functionality.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">250+</h3>
                <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">500+</h3>
                <p className="text-muted-foreground text-xs xs:text-sm sm:text-base">Happy Clients</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm xs:text-base sm:text-lg leading-relaxed">
              Our team of award-winning designers and craftspeople are dedicated to transforming your vision into
              reality. Every project receives our unwavering commitment to excellence and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
