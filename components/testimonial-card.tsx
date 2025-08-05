interface TestimonialCardProps {
  quote: string
  author: string
  position: string
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-sm">
      <div>
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
          className="h-8 w-8 text-emerald-600 opacity-50"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="text-gray-600 italic">{quote}</p>
      <div>
        <p className="font-bold text-navy-700">{author}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  )
}
