import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Users,
    title: "Creator-First",
    description:
      "Everything we build is designed with course creators in mind, prioritizing ease of use and powerful functionality.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure our success by your success. Our platform is built to help you achieve your educational and business goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously innovate to stay ahead of industry trends and provide cutting-edge tools for modern educators.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We believe in building a supportive community where creators can learn, grow, and succeed together.",
  },
]

const team = [
  {
    name: "Gnowa Rickneil",
    role: "CEO & Co-Founder",
    bio: "Former online educator with 10+ years of experience building successful course businesses.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Gnowa Kevin",
    role: "CTO & Co-Founder",
    bio: "Tech veteran with expertise in scalable platforms and educational technology solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
 
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Empowering Creators to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Share Knowledge
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We believe that everyone has valuable knowledge to share. Our mission is to remove the technical barriers
              that prevent passionate educators from reaching their audience and building successful online businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CourseCreator Pro was born from frustration. Our founders, Sarah and Michael, were successful online
                  educators who spent more time wrestling with technology than creating content. They knew there had to
                  be a better way.
                </p>
                <p>
                  After helping hundreds of creators launch their courses, they realized that the biggest barrier wasn't
                  lack of expertise or passion—it was the overwhelming technical complexity of building and maintaining
                  an online course platform.
                </p>
                <p>
                  In 2022, they decided to build the platform they wished they'd had when starting their own journey.
                  Today, CourseCreator Pro powers over 10,000 successful course creators worldwide, generating millions
                  in revenue for our community.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of educators, engineers, and entrepreneurs dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to share your knowledge or a talented individual wanting to join our team,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4"
            >
              Start Creating Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 bg-transparent"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
