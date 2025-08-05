"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`text-lg font-medium ${
                      isActive(route.path) ? "text-yellow-600" : "text-foreground hover:text-yellow-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-xl hidden sm:inline-block">REQ Consulting</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors ${
                isActive(route.path) ? "text-yellow-600" : "text-foreground hover:text-yellow-600"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
