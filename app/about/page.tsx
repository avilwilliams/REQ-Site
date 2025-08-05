import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TeamMember from "@/components/team-member"

export const metadata = {
  title: "About Us | Nexus Consulting",
  description: "Learn about our mission, values, and the team behind Nexus Consulting",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                  Our Story
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Founded on a vision to transform businesses through employee-focused consulting solutions.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Our office"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Empowering Organizations Through Their Employees
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                We are dedicated to providing innovative, sustainable solutions that empower organizations to optimize
                their workforce, enhance employee engagement, and achieve their strategic goals. Through collaborative
                partnerships, we deliver tailored strategies that drive meaningful results and create lasting value for
                both the company and its employees.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-navy-100 px-3 py-1 text-sm text-navy-700">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Shaping the Future of Work
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                To be the leading consulting partner that transforms the business landscape through innovative
                employee-focused solutions, strategic insights, and exceptional service. We envision a future where
                organizations operate at peak efficiency, foster a thriving work environment, and contribute positively
                to the lives of their employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Our Core Values
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                The principles that guide our work and relationships
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-emerald-100">
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
                  className="h-6 w-6 text-emerald-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Employee Focus</h3>
              <p className="text-center text-gray-600">
                We prioritize the well-being and development of employees, recognizing them as the greatest asset.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-emerald-100">
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
                  className="h-6 w-6 text-emerald-600"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Integrity</h3>
              <p className="text-center text-gray-600">
                We act with honesty, transparency, and ethical conduct in all our interactions and decisions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-emerald-100">
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
                  className="h-6 w-6 text-emerald-600"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Innovation</h3>
              <p className="text-center text-gray-600">
                We embrace creativity and forward-thinking approaches to solve complex challenges in HR and employee
                engagement.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-emerald-100">
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
                  className="h-6 w-6 text-emerald-600"
                >
                  <path d="M17 6.1H3"></path>
                  <path d="M21 12.1H3"></path>
                  <path d="M15.1 18H3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Collaboration</h3>
              <p className="text-center text-gray-600">
                We work closely with our clients, building partnerships based on mutual respect and shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Meet Our Leadership Team
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Industry experts in HR and employee consulting
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TeamMember
              name="Greg Ehlers"
              position="Chief Executive Officer"
              bio="As CEO of REQ Consulting, Greg leads the company's strategic vision and growth initiatives, bringing extensive experience in business consulting and employee-focused solutions."
              imageSrc="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Alex Pomponio"
              position="Managing Member"
              bio="Alex serves as Managing Member, overseeing operational excellence and strategic partnerships to deliver comprehensive consulting solutions to our clients."
              imageSrc="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Jackie Harris"
              position="Chief Operations Officer"
              bio="As COO, Jackie ensures seamless delivery of our consulting services and manages day-to-day operations to maintain our high standards of client service."
              imageSrc="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">Our Journey</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">From our founding to where we are today</p>
            </div>
          </div>
          <div className="mt-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="text-xl font-bold text-emerald-600">2010</div>
                <div className="hidden md:block w-px h-full bg-gray-300 mt-4"></div>
              </div>
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-navy-700">Company Founded</h3>
                <p className="mt-2 text-gray-600">
                  Nexus Consulting was established with a focus on HR and employee benefits consulting.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="text-xl font-bold text-emerald-600">2013</div>
                <div className="hidden md:block w-px h-full bg-gray-300 mt-4"></div>
              </div>
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-navy-700">Expansion into Talent Acquisition</h3>
                <p className="mt-2 text-gray-600">
                  Launched our talent acquisition division to address critical workforce challenges for our clients.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="text-xl font-bold text-emerald-600">2016</div>
                <div className="hidden md:block w-px h-full bg-gray-300 mt-4"></div>
              </div>
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-navy-700">Employee Engagement Practice</h3>
                <p className="mt-2 text-gray-600">
                  Added comprehensive employee engagement services to our portfolio, focusing on improving employee
                  experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="text-xl font-bold text-emerald-600">2020</div>
                <div className="hidden md:block w-px h-full bg-gray-300 mt-4"></div>
              </div>
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-navy-700">HR Technology Focus</h3>
                <p className="mt-2 text-gray-600">
                  Launched specialized HR technology services to help clients navigate the rapidly evolving
                  technological landscape in HR.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="text-xl font-bold text-emerald-600">Today</div>
              </div>
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-navy-700">Industry Leader</h3>
                <p className="mt-2 text-gray-600">
                  Now recognized as a leading consulting firm with over 200 clients across North America and a team of
                  50+ industry experts in HR and employee consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                We're always looking for talented professionals to join our growing team
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
