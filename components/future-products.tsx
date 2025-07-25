import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, FileText, Megaphone, Users } from "lucide-react"
import Image from "next/image"

const futureProducts = [
  {
    icon: CreditCard,
    title: "Business Card Templates",
    description: "Professional business card designs for course creators and entrepreneurs",
    status: "Coming Soon",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: FileText,
    title: "Landing Page Builder",
    description: "Create stunning landing pages for your courses with drag-and-drop simplicity",
    status: "In Development",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Automated email sequences and marketing campaigns for course promotion",
    status: "Coming Q2 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Users,
    title: "Community Platform",
    description: "Build engaged communities around your courses with forums and discussions",
    status: "Coming Q3 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function FutureProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Creator Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly expanding our platform with new tools and features to help you grow your online business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {futureProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                    {product.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
          >
            Get Notified About New Features
          </Button>
        </div>
      </div>
    </section>
  )
}
