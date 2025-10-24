import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gray-700 mb-4">
              <Image
                src="/bp1377.jpeg"
                alt="Tim Rines profile picture"
                fill
                className="object-cover"
              />
            </div>
            <CardTitle className="text-4xl text-center">Tim Rines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I&apos;ll make this short and sweet. I grew up in Cary, North Carolina
              after my dad was transferred from MA with a company called Data
              General. He later worked for IBM and brought home one of the first{" "}
              <a
                href="https://en.wikipedia.org/wiki/IBM_Aptiva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IBM Aptiva
              </a>{" "}
              PCs. I was hooked on PC gaming, networking, building gaming computers,
              and LAN parties. In the end, I decided I didn&apos;t want to make my hobby
              my job, so instead, got into sales after college.
            </p>

            <p>
              After a successful career in telecommunications sales and Airbnb
              rental investing in Charleston, SC, my focus has shifted back to my
              original hobby, technology. In March of 2020, right before NYC was
              shut down, I finished my in-person Software Engineering 15-week
              immersive at Flatiron School Manhattan. I feel so thankful to have
              been able to finish my whole program in person. The sense of community
              and passion for making a difference in the world, with code, seemed as if it were a fragrance you pick up as
              soon as you walk in the door.
            </p>

            <p>
              For safety reasons (2020, right?), I have moved back to Charleston,
              where I remotely interned at{" "}
              <a
                href="http://www.errundsonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Errunds
              </a>
              . I worked with a great company called{" "}
              <a
                href="http://www.hatchways.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Hatchways.io
              </a>
              . They have a great program where you build a project in a team setting, with other junior developers,
              guided by an industry leader who provides guidance and actionable feedback avenues including
              code reviews, technical reviews/interviews, and peer reviews. You can
              check out the final product{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mock-interview-platform.herokuapp.com/"
                className="text-primary hover:underline"
              >
                here
              </a>
              . I am currently working at Animoto.com where we make it easy to create professional videos with ease. I have a passion for the up and coming Web3 internet, guiding my children towards a path of happiness, and learning something new each day.
              If you have a project or an opportunity and I have some spare time, reach out! My email is{" "}
              <a href="mailto:tim@rines.io" className="text-primary hover:underline">
                tim@rines.io
              </a>
              .
            </p>

            <div className="flex justify-end pt-4">
              <Button asChild variant="outline">
                <Link href="/">Back</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
