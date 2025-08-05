import { ArrowRight, BarChart3, Building2, CheckCircle, HeartPulse, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Our Services | Nexus Consulting",
  description: "Comprehensive consulting services for healthcare, staffing, and business solutions",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                Our Services
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Comprehensive consulting solutions tailored to your organization's unique needs and challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Solutions */}
      <section id="recruiting" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Recruiting Solutions"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Recruiting Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">Attracting Top Talent</h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our recruiting consulting services help organizations attract and hire top talent. We focus on
                developing effective recruitment strategies, optimizing the hiring process, and ensuring a positive
                candidate experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Recruitment Strategy Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Employer Branding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Interview Process Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Candidate Experience Enhancement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Offer Negotiation</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Solutions */}
      <section id="retention" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Retention Excellence
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Keeping Your Best People
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our retention solutions help organizations reduce employee turnover and retain their best people. We
                focus on understanding the reasons behind employee departures and developing strategies to improve
                employee satisfaction and engagement.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Employee Surveys & Feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Retention Strategy Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Employee Engagement Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Leadership Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Exit Interviews & Analysis</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Retention Solutions"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Solutions */}
      <section id="benefits" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Benefits Solutions"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Benefits Optimization
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Attract and Retain with Competitive Benefits
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our benefits consulting services help organizations design and implement competitive benefits packages
                that attract and retain top talent. We focus on understanding employee needs and developing
                cost-effective benefits solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Benefits Needs Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Benefits Plan Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Benefits Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Benefits Administration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Compliance</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section id="dispute" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Conflict Resolution
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Resolving Workplace Disputes
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our dispute resolution services help organizations effectively manage and resolve workplace conflicts.
                We provide mediation, facilitation, and investigation services to address a wide range of employee
                disputes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Mediation Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Facilitation Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Workplace Investigations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Conflict Resolution Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Policy Development</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Dispute Resolution"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching */}
      <section id="coaching" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Coaching Solutions"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Employee Coaching
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Empowering Your Employees
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our coaching services help organizations empower their employees to reach their full potential. We
                provide one-on-one coaching, group coaching, and leadership development programs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">One-on-One Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Group Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Leadership Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Performance Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Career Coaching</span>
                </div>
              </div>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Specialized Service Offerings
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Tailored solutions to address your specific challenges
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={<HeartPulse className="h-10 w-10 text-emerald-600" />}
              title="Recruiting Strategy"
              description="Develop and implement effective recruiting strategies to attract top talent to your organization."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-emerald-600" />}
              title="Employee Retention"
              description="Implement programs and strategies to improve employee satisfaction and reduce turnover."
            />
            <ServiceCard
              icon={<Building2 className="h-10 w-10 text-emerald-600" />}
              title="Benefits Optimization"
              description="Design and implement competitive benefits packages that meet the needs of your employees."
            />
            <ServiceCard
              icon={
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
                  className="h-10 w-10 text-emerald-600"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
              }
              title="Dispute Resolution"
              description="Provide mediation and facilitation services to resolve workplace conflicts."
            />
            <ServiceCard
              icon={
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
                  className="h-10 w-10 text-emerald-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h10"></path>
                  <path d="M7 12h10"></path>
                  <path d="M7 17h10"></path>
                </svg>
              }
              title="Employee Coaching"
              description="Offer one-on-one and group coaching to empower employees and improve performance."
            />
            <ServiceCard
              icon={<BarChart3 className="h-10 w-10 text-emerald-600" />}
              title="Leadership Development"
              description="Develop leadership skills and improve team performance through coaching and training."
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                A collaborative process focused on delivering measurable results
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-center text-gray-300">
                We conduct a thorough assessment of your current employee programs, challenges, and goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold">Strategy Development</h3>
              <p className="text-center text-gray-300">
                We develop tailored strategies and solutions based on our assessment findings to improve employee
                engagement and performance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-center text-gray-300">
                We work alongside your team to implement the strategies and solutions effectively, providing ongoing
                support and guidance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold">Evaluation & Refinement</h3>
              <p className="text-center text-gray-300">
                We continuously evaluate results and refine our approach to ensure optimal outcomes and a positive
                impact on your workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Organization?
              </h2>
              <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed">
                Schedule a consultation with our experts to discuss your specific challenges and goals
              </p>
            </div>
            <div>
              <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
