import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsightCard from "@/components/insight-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Insights | Nexus Consulting",
  description: "Latest insights, articles, and resources from our industry experts",
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                Insights & Resources
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Stay informed with the latest industry insights, trends, and thought leadership from our experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Digital Transformation in Healthcare"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                Featured Article
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Digital Transformation in Healthcare: Navigating the Future
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>August 1, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dr. Jennifer Reynolds</span>
                </div>
              </div>
              <p className="text-gray-600 md:text-lg/relaxed">
                The healthcare industry is experiencing a digital revolution that is transforming how care is delivered,
                managed, and experienced. From artificial intelligence and machine learning to telehealth and remote
                patient monitoring, digital technologies are reshaping the healthcare landscape...
              </p>
              <div>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/insights/digital-transformation-healthcare">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Categories */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Insights</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="staffing">Staffing</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InsightCard
                  title="The Future of Healthcare Technology"
                  excerpt="Exploring emerging technologies that are transforming patient care and healthcare operations."
                  date="July 25, 2025"
                  author="Dr. Aisha Patel"
                  category="Healthcare"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="future-healthcare-technology"
                />
                <InsightCard
                  title="Innovative Staffing Strategies for 2025"
                  excerpt="New approaches to talent acquisition and retention in a competitive market."
                  date="July 18, 2025"
                  author="Robert Johnson"
                  category="Staffing"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="innovative-staffing-strategies"
                />
                <InsightCard
                  title="Strategic Planning for Sustainable Growth"
                  excerpt="Key considerations for businesses looking to achieve long-term sustainable growth."
                  date="July 10, 2025"
                  author="Sarah Williams"
                  category="Business"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="strategic-planning-growth"
                />
                <InsightCard
                  title="Navigating Healthcare Regulatory Changes"
                  excerpt="How healthcare organizations can adapt to evolving regulatory requirements."
                  date="June 28, 2025"
                  author="Dr. Jennifer Reynolds"
                  category="Healthcare"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="healthcare-regulatory-changes"
                />
                <InsightCard
                  title="Building Resilient Healthcare Workforces"
                  excerpt="Strategies for developing and maintaining resilient healthcare teams."
                  date="June 15, 2025"
                  author="Robert Johnson"
                  category="Staffing"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="resilient-healthcare-workforces"
                />
                <InsightCard
                  title="Digital Transformation Roadmap"
                  excerpt="A step-by-step guide to implementing digital transformation in your organization."
                  date="June 5, 2025"
                  author="David Garcia"
                  category="Business"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="digital-transformation-roadmap"
                />
              </div>
            </TabsContent>
            <TabsContent value="healthcare" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InsightCard
                  title="The Future of Healthcare Technology"
                  excerpt="Exploring emerging technologies that are transforming patient care and healthcare operations."
                  date="July 25, 2025"
                  author="Dr. Aisha Patel"
                  category="Healthcare"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="future-healthcare-technology"
                />
                <InsightCard
                  title="Navigating Healthcare Regulatory Changes"
                  excerpt="How healthcare organizations can adapt to evolving regulatory requirements."
                  date="June 28, 2025"
                  author="Dr. Jennifer Reynolds"
                  category="Healthcare"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="healthcare-regulatory-changes"
                />
                <InsightCard
                  title="Patient Experience in the Digital Age"
                  excerpt="How technology is reshaping patient expectations and experiences."
                  date="May 20, 2025"
                  author="Dr. Aisha Patel"
                  category="Healthcare"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="patient-experience-digital-age"
                />
              </div>
            </TabsContent>
            <TabsContent value="staffing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InsightCard
                  title="Innovative Staffing Strategies for 2025"
                  excerpt="New approaches to talent acquisition and retention in a competitive market."
                  date="July 18, 2025"
                  author="Robert Johnson"
                  category="Staffing"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="innovative-staffing-strategies"
                />
                <InsightCard
                  title="Building Resilient Healthcare Workforces"
                  excerpt="Strategies for developing and maintaining resilient healthcare teams."
                  date="June 15, 2025"
                  author="Robert Johnson"
                  category="Staffing"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="resilient-healthcare-workforces"
                />
                <InsightCard
                  title="The Future of Work in Healthcare"
                  excerpt="How changing work models are affecting healthcare staffing and operations."
                  date="May 5, 2025"
                  author="Sarah Williams"
                  category="Staffing"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="future-work-healthcare"
                />
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InsightCard
                  title="Strategic Planning for Sustainable Growth"
                  excerpt="Key considerations for businesses looking to achieve long-term sustainable growth."
                  date="July 10, 2025"
                  author="Sarah Williams"
                  category="Business"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="strategic-planning-growth"
                />
                <InsightCard
                  title="Digital Transformation Roadmap"
                  excerpt="A step-by-step guide to implementing digital transformation in your organization."
                  date="June 5, 2025"
                  author="David Garcia"
                  category="Business"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="digital-transformation-roadmap"
                />
                <InsightCard
                  title="Financial Optimization for Healthcare Organizations"
                  excerpt="Strategies to improve financial performance while maintaining quality care."
                  date="May 12, 2025"
                  author="Michael Chen"
                  category="Business"
                  imageSrc="/placeholder.svg?height=200&width=400"
                  slug="financial-optimization-healthcare"
                />
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="border-navy-600 text-navy-600 bg-transparent">
              <Link href="#">Load More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">Resources</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Download our latest whitepapers, guides, and case studies
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-2 bg-emerald-100 rounded-md w-fit">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">2025 Healthcare Industry Outlook</h3>
              <p className="text-gray-600">
                A comprehensive analysis of trends, challenges, and opportunities in the healthcare industry.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
                <Link href="#">Download Whitepaper</Link>
              </Button>
            </div>
            <div className="flex flex-col space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-2 bg-emerald-100 rounded-md w-fit">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Guide to Effective Workforce Planning</h3>
              <p className="text-gray-600">
                A step-by-step guide to developing and implementing effective workforce planning strategies.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
                <Link href="#">Download Guide</Link>
              </Button>
            </div>
            <div className="flex flex-col space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-2 bg-emerald-100 rounded-md w-fit">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700">Case Study: Regional Hospital Transformation</h3>
              <p className="text-gray-600">
                How we helped a regional hospital improve operational efficiency and patient satisfaction.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
                <Link href="#">Download Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Informed</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Subscribe to our newsletter to receive the latest insights and updates
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900"
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
