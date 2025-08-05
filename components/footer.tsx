import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="text-yellow-400" />
              <span className="font-bold text-xl">REQ Consulting</span>
            </div>
            <p className="text-gray-300">We are the key to your business success.</p>
            <p className="text-yellow-400 font-semibold italic">"WE ARE THE KEY TO SUCCESS"</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-yellow-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#recruiting" className="text-gray-300 hover:text-yellow-400">
                  Recruiting
                </Link>
              </li>
              <li>
                <Link href="/services#retention" className="text-gray-300 hover:text-yellow-400">
                  Retention
                </Link>
              </li>
              <li>
                <Link href="/services#benefits" className="text-gray-300 hover:text-yellow-400">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/services#dispute" className="text-gray-300 hover:text-yellow-400">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/services#coaching" className="text-gray-300 hover:text-yellow-400">
                  Coaching
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-300 hover:text-yellow-400">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-yellow-400">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-gray-300">
                  456 Corporate Street, Suite 700
                  <br />
                  Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">(555) 789-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@reqconsulting.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} REQ Consulting. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-yellow-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-yellow-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-yellow-400 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
