import Picture from "@/components/picture"
import Social from "@/components/social"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Picture />
          <Social />
        </div>
      </div>
    </main>
  )
}
