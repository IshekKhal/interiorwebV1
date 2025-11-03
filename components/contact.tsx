"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Address</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Company Address
                  <br />
                  Dubai, UAE
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Email</h3>
                <a
                  href="mailto:info@alabbar.com"
                  className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base break-all"
                >
                  youremailhere@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Phone</h3>
                <a
                  href="tel:+97144445566"
                  className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base"
                >
                  +1 111 111111
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Business Hours</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2 bg-secondary p-4 xs:p-6 sm:p-8 rounded-sm shadow-md">
            <h3 className="font-serif text-xl xs:text-2xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Quick Query Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2 sm:py-2.5 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm xs:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2 sm:py-2.5 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm xs:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2 sm:py-2.5 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm xs:text-base"
                  placeholder="+971 50 000 0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 xs:px-4 py-2 sm:py-2.5 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none text-sm xs:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 xs:px-6 py-2.5 xs:py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300 rounded-sm text-sm xs:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
