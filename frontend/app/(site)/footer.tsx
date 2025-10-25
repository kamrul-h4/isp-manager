import { Globe } from "lucide-react"

const footerSections = [
  {
    id: 1,
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Documentation", href: "#docs" },
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Support", href: "#support" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "API Docs", href: "#api" },
      { name: "System Status", href: "#status" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-border border-t bg-card">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Globe className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground text-lg">Mikrolink</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional internet user management platform for modern service providers.
            </p>
          </div>

          {footerSections.map((section) => (
            <div className="space-y-4" key={section.id}>
              <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-border border-t pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 Mikrolink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
