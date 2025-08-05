import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 rounded-full bg-emerald-100">{icon}</div>
      <h3 className="text-xl font-bold text-navy-700 text-center">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  )
}
