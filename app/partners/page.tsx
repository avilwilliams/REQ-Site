import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PartnerLogo from "@/components/partner-logo"

export const metadata = {
  title: "Our Partners | Nexus Consulting",
  description: "Strategic partnerships that enhance our consulting services",
}

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                Our Partners
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Strategic partnerships that enhance our ability to deliver exceptional consulting services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Partners */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Healthcare Partners
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Leading Healthcare Organizations
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                We partner with leading healthcare organizations to deliver comprehensive solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <PartnerLogo name="MedTech Solutions" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="HealthPlus Network" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="CareFirst Systems" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="MedData Analytics" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="HealthTech Innovations" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="MedSupply Co." imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="PatientCare Solutions" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="MedStaff Pro" imageSrc="/placeholder.svg?height=100&width=200" />
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Technology Partners
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Innovative Technology Providers
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                We collaborate with leading technology providers to deliver cutting-edge solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <PartnerLogo name="TechSolutions Inc." imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="DataSync Systems" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="CloudHealth Technologies" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="AI Medical Solutions" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="SecureHealth Networks" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="InnovateTech" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="Digital Health Systems" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="TechCare Solutions" imageSrc="/placeholder.svg?height=100&width=200" />
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Strategic Alliances
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Industry Associations & Organizations
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                We maintain strategic alliances with key industry associations and organizations
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <PartnerLogo name="Healthcare Leadership Council" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="American Hospital Association" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo
              name="Healthcare Financial Management Association"
              imageSrc="/placeholder.svg?height=100&width=200"
            />
            <PartnerLogo name="Medical Group Management Association" imageSrc="/placeholder.svg?height=100&width=200" />
            <PartnerLogo
              name="Healthcare Information Management Systems Society"
              imageSrc="/placeholder.svg?height=100&width=200"
            />
            <PartnerLogo
              name="American College of Healthcare Executives"
              imageSrc="/placeholder.svg?height=100&width=200"
            />
            <PartnerLogo
              name="National Association for Healthcare Quality"
              imageSrc="/placeholder.svg?height=100&width=200"
            />
            <PartnerLogo name="Healthcare Compliance Association" imageSrc="/placeholder.svg?height=100&width=200" />
          </div>
        </div>
      </section>

      {/* Featured Partner */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Featured Partnership"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Featured Partnership
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                MedTech Solutions Alliance
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our strategic partnership with MedTech Solutions has enabled us to deliver cutting-edge healthcare
                technology solutions to our clients. Together, we've helped over 50 healthcare organizations implement
                innovative technologies that improve patient care and operational efficiency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">Integrated healthcare technology solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">Advanced data analytics capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">Innovative patient engagement tools</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/insights/medtech-partnership-case-study">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Become a Partner</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Join our network of strategic partners and collaborate with us to deliver exceptional solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center space-y-4 p-6 bg-navy-800 rounded-lg">
                <div className="p-3 rounded-full bg-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Technology Partners</h3>
                <p className="text-center text-gray-300">
                  Partner with us to integrate your technology solutions into our consulting services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-navy-800 rounded-lg">
                <div className="p-3 rounded-full bg-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Service Partners</h3>
                <p className="text-center text-gray-300">
                  Collaborate with us to provide complementary services to our clients.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-navy-800 rounded-lg">
                <div className="p-3 rounded-full bg-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Strategic Alliances</h3>
                <p className="text-center text-gray-300">
                  Form a strategic alliance to address complex industry challenges together.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">
                  Contact Us to Explore Partnership Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
