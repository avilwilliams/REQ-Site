import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Contact Us | Nexus Consulting",
  description: "Get in touch with our team of experts",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy-700">
                Contact Us
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Get in touch with our team of experts to discuss how we can help your organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">Get in Touch</h2>
                <p className="text-gray-600 md:text-lg/relaxed">
                  Fill out the form below, and one of our experts will contact you shortly to discuss your needs.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="organization"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Organization
                  </label>
                  <Input id="organization" placeholder="Enter your organization name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Service of Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare Solutions</SelectItem>
                      <SelectItem value="staffing">Staffing Excellence</SelectItem>
                      <SelectItem value="business">Business Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs and how we can help"
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Submit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our Office"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy-700">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-gray-600">123 Business Avenue, Suite 500</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@nexusconsulting.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy-700">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">Our Locations</h2>
              <p className="max-w-[900px] text-gray-600 md:text-lg/relaxed">
                We have offices across the country to serve you better
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden border">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Office Locations Map"
              width={1200}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy-700">New York</h3>
              <p className="text-gray-600">123 Business Avenue, Suite 500</p>
              <p className="text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy-700">Chicago</h3>
              <p className="text-gray-600">456 Consulting Street, Floor 12</p>
              <p className="text-gray-600">Chicago, IL 60601</p>
              <p className="text-gray-600">(555) 234-5678</p>
            </div>
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy-700">San Francisco</h3>
              <p className="text-gray-600">789 Innovation Drive, Suite 300</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
              <p className="text-gray-600">(555) 345-6789</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-700">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-lg/relaxed">
                Find answers to common questions about our consulting services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">What industries do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve healthcare organizations of all sizes, from small clinics to large hospital systems.
                We also work with businesses in various industries that require staffing and operational optimization
                solutions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">How long does a typical consulting engagement last?</h3>
              <p className="text-gray-600">
                The duration varies based on the scope and complexity of the project. Some engagements may be completed
                in a few weeks, while others may span several months. We work with you to establish clear timelines and
                milestones.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">Do you offer virtual consulting services?</h3>
              <p className="text-gray-600">
                Yes, we offer both on-site and virtual consulting services. Our virtual consulting options provide
                flexibility while maintaining the same level of expertise and quality.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">
                How do you measure the success of your consulting services?
              </h3>
              <p className="text-gray-600">
                We establish clear, measurable objectives at the beginning of each engagement and track progress
                throughout. We provide regular reports and analytics to demonstrate the impact of our solutions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">What makes your consulting approach different?</h3>
              <p className="text-gray-600">
                Our approach combines deep industry expertise with a collaborative partnership model. We don't just
                provide recommendations; we work alongside your team to implement solutions and ensure sustainable
                results.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-navy-700">
                Do you offer ongoing support after the initial engagement?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various support options after the initial engagement, including follow-up assessments,
                training, and maintenance services to ensure the long-term success of implemented solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-navy-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Organization?
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Schedule a consultation with our experts to discuss your specific challenges and goals
              </p>
            </div>
            <div>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="#top">
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
