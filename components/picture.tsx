import Image from "next/image"

export default function Picture() {
  return (
    <div className="flex justify-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gray-700">
        <Image
          src="/bp1377.jpeg"
          alt="Tim Rines profile picture"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
