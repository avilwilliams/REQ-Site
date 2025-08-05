"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Building2, HeartPulse, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if user has seen the intro video before
    const hasSeenIntro = localStorage.getItem("hasSeenIntroVideo")

    if (!hasSeenIntro) {
      // Show video after a short delay
      const timer = setTimeout(() => {
        setShowVideo(true)
        if (videoRef.current) {
          videoRef.current.play()
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleVideoEnd = () => {
    setVideoEnded(true)
    setShowVideo(false)
    localStorage.setItem("hasSeenIntroVideo", "true")
  }

  return (
    <div className="flex flex-col relative">
      {/* Background Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            <source src="/placeholder-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Skip button */}
          <button
            onClick={handleVideoEnd}
            className="absolute top-8 right-8 bg-black/70 hover:bg-black/90 text-white px-6 py-3 rounded-full transition-colors text-sm font-medium z-10"
          >
            Skip Intro
          </button>

          {/* Play intro again button */}
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0
                videoRef.current.play()
              }
            }}
            className="absolute bottom-8 left-8 bg-yellow-500/80 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition-colors text-sm font-medium z-10"
          >
            Replay
          </button>

          {/* Loading indicator - only show when video is loading */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white opacity-50"></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                  One Company's Excuse is Another's Opportunity
                </h1>
                <p className="uppercase text-yellow-600 md:text-xl font-semibold">PROFESSIONAL BUSINESS CONSULTING</p>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Our focus is the most important asset of your business: your employee. We provide comprehensive,
                  strategic, focused services to help your business to thrive in today's constantly changing landscape.
                </p>
                <p className="text-lg font-semibold text-yellow-600 italic">"WE ARE THE KEY TO SUCCESS"</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/contact">
                    Join Our Community! <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-navy-600 text-navy-600 bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Business professionals in a meeting"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Our Expertise
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Comprehensive consulting services tailored to your organization's unique needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-100">
                <HeartPulse className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">Recruiting</h3>
              <p className="text-center text-gray-600">Attract top talent with our strategic recruiting solutions.</p>
              <Button asChild variant="link" className="text-yellow-600">
                <Link href="/services#recruiting">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-100">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">Retention</h3>
              <p className="text-center text-gray-600">Keep your best employees with our retention strategies.</p>
              <Button asChild variant="link" className="text-yellow-600">
                <Link href="/services#retention">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-100">
                <Building2 className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">Benefits</h3>
              <p className="text-center text-gray-600">
                Offer competitive benefits packages to attract and retain employees.
              </p>
              <Button asChild variant="link" className="text-yellow-600">
                <Link href="/services#benefits">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-100">
                <Building2 className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">Dispute Resolution</h3>
              <p className="text-center text-gray-600">Resolve workplace disputes quickly and effectively.</p>
              <Button asChild variant="link" className="text-yellow-600">
                <Link href="/services#dispute">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-100">
                <Building2 className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">Coaching</h3>
              <p className="text-center text-gray-600">
                Develop your employees' skills and potential with our coaching programs.
              </p>
              <Button asChild variant="link" className="text-yellow-600">
                <Link href="/services#coaching">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Our approach combines industry expertise with innovative solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="text-4xl font-bold text-yellow-400">15+</div>
              <p className="text-center text-gray-300">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="text-4xl font-bold text-yellow-400">200+</div>
              <p className="text-center text-gray-300">Clients Served</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="text-4xl font-bold text-yellow-400">95%</div>
              <p className="text-center text-gray-300">Client Retention</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4">
              <div className="text-4xl font-bold text-yellow-400">50+</div>
              <p className="text-center text-gray-300">Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Client Success Stories
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Hear what our clients have to say about our consulting services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="REQ Consulting helped us unlock our potential and transform our HR operations. They truly are the key to success!"
              author="Dr. Sarah Johnson"
              position="CEO, Regional Medical Center"
            />
            <TestimonialCard
              quote="Their staffing solutions addressed our critical talent gaps and reduced our turnover rate by 40% within just six months."
              author="Michael Chen"
              position="HR Director, HealthPlus"
            />
            <TestimonialCard
              quote="The business optimization strategies they implemented helped us achieve a 28% increase in revenue while streamlining our operations."
              author="Rebecca Torres"
              position="COO, MedTech Solutions"
            />
          </div>
        </div>
      </section>

      {/* Latest Insights Preview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-700">
                Latest Insights
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Stay informed with our latest industry insights and thought leadership
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Employee Engagement Trends"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy-700">The Future of Employee Engagement</h3>
                <p className="text-gray-600">
                  Exploring new strategies for keeping employees motivated and engaged in the modern workplace.
                </p>
                <Button asChild variant="link" className="text-yellow-600 p-0">
                  <Link href="/insights">Read More</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Recruiting Strategies"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy-700">Innovative Recruiting Strategies for 2025</h3>
                <p className="text-gray-600">
                  New approaches to talent acquisition and retention in a competitive market.
                </p>
                <Button asChild variant="link" className="text-yellow-600 p-0">
                  <Link href="/insights">Read More</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Workplace Dispute Resolution"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy-700">Effective Workplace Dispute Resolution</h3>
                <p className="text-gray-600">
                  Best practices for resolving conflicts and maintaining a positive work environment.
                </p>
                <Button asChild variant="link" className="text-yellow-600 p-0">
                  <Link href="/insights">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-navy-700 hover:bg-navy-800">
              <Link href="/insights">View All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-yellow-500 text-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Unlock Your Success?
                </h2>
                <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed">
                  Schedule a consultation with our experts to discover how we can be the key to your organization's
                  success.
                </p>
              </div>
              <div>
                <Button asChild className="bg-navy-700 text-white hover:bg-navy-800">
                  <Link href="/contact">
                    Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Business consultation"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
