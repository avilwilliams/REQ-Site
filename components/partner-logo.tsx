import Image from "next/image"

interface PartnerLogoProps {
  name: string
  imageSrc: string
}

export default function PartnerLogo({ name, imageSrc }: PartnerLogoProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="h-24 w-full flex items-center justify-center p-4 bg-white rounded-lg border">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={200}
          height={100}
          className="max-h-16 w-auto object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  )
}
