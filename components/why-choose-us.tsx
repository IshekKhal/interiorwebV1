"use client"

import { useEffect, useState } from "react"
import { Award, Hammer, CheckCircle, Clock } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description: "Award-winning designers with international recognition",
  },
  {
    icon: Hammer,
    title: "Quality Materials",
    description: "Premium materials sourced from around the world",
  },
  {
    icon: CheckCircle,
    title: "Professional Execution",
    description: "Meticulous attention to detail in every project",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed on schedule, every time",
  },
]

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(reasons.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Array(reasons.length).fill(true))
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("why-choose-us-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us-section" className="py-12 xs:py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose Company 
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
            Discover what sets us apart in the world of luxury interior design
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className={`bg-card p-4 xs:p-6 sm:p-8 rounded-sm shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="w-10 xs:w-12 h-10 xs:h-12 text-accent mb-3 sm:mb-4" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
