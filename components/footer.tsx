export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-4 py-12 xs:py-14 sm:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-1 xs:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 xs:w-8 h-7 xs:h-8 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-serif font-bold text-sm xs:text-lg">{"I"}</span>
              </div>
              <span className="font-serif font-bold text-sm xs:text-base">{"Company"}</span>
            </div>
            <p className="text-primary-foreground/70 text-xs xs:text-sm mb-4">
              Leading interior design firm in Dubai specializing in luxury residential, commercial, and retail spaces.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-base xs:text-lg mb-3 xs:mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-xs xs:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base xs:text-lg mb-3 xs:mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Residential Design",
                "Commercial Design",
                "Retail Spaces",
                "Restaurant Design",
                "Office Fit-Out",
                "Joinery Works",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-xs xs:text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 xs:pt-10 sm:pt-12 mb-8 xs:mb-10 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-8">
            <div>
              <h4 className="font-semibold text-base xs:text-lg mb-3 xs:mb-4">Contact Information</h4>
              <div className="space-y-2 text-primary-foreground/70 text-xs xs:text-sm">
                <p>
                  <span className="text-accent font-semibold">Address:</span>
                  <br /> Company Address, Dubai, UAE
                </p>
                <p>
                  <span className="text-accent font-semibold">Email:</span>{" "}
                  <a href="mailto:info@alabbar.com" className="hover:text-accent transition-colors break-all">
                    youremailhere@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-accent font-semibold">Phone:</span>{" "}
                  <a href="tel:+97144445566" className="hover:text-accent transition-colors">
                    +1 111 111111
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-base xs:text-lg mb-3 xs:mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 xs:w-10 h-9 xs:h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all"
                  >
                    <span className="text-xs font-semibold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary/80 border-t border-primary-foreground/20">
        <div className="container mx-auto px-3 sm:px-4 py-4 xs:py-5 sm:py-6 text-center text-primary-foreground/70 text-xs xs:text-sm">
          <p>{"© 2025 Abhishek Khanra All Rights Reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
