import Image from "next/image"

interface TeamMemberProps {
  name: string
  position: string
  bio: string
  imageSrc: string
}

export default function TeamMember({ name, position, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative w-48 h-48 rounded-full overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-700">{name}</h3>
        <p className="text-emerald-600 font-medium">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  )
}
