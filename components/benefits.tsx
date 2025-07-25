import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Launch your course in under 30 minutes",
  "No monthly fees - only pay when you earn",
  "Automatic student certificates and completion tracking",
  "24/7 customer support for you and your students",
  "Built-in marketing tools and affiliate program",
  "White-label options for your brand",
]

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Course Creators
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Choose Our Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful course creators who've built thriving online education businesses without
                the technical headaches.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Course Creator Success"
              width={600}
              height={500}
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
