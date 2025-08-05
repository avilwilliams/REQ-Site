import { Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface InsightCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  imageSrc: string
  slug: string
}

export default function InsightCard({ title, excerpt, date, author, category, imageSrc, slug }: InsightCardProps) {
  return (
    <div className="flex flex-col space-y-4 overflow-hidden rounded-lg border">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 left-2">
          <span className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-4">
        <h3 className="text-xl font-bold text-navy-700">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
        <p className="text-gray-600">{excerpt}</p>
        <Button asChild variant="link" className="text-emerald-600 p-0">
          <Link href={`/insights/${slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  )
}
