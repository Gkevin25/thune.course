import { Card, CardContent } from "@/components/ui/card"
import { Upload, Zap, CreditCard, BarChart3, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Upload,
    title: "Drag & Drop Content",
    description:
      "Upload videos, PDFs, and course materials with our intuitive interface. No technical skills required.",
  },
  {
    icon: Zap,
    title: "Instant Publishing",
    description: "Your course goes live immediately. No waiting for approvals or complex setup processes.",
  },
  {
    icon: CreditCard,
    title: "Built-in Payments",
    description: "Accept payments from students worldwide with integrated Stripe and PayPal support.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track student progress, engagement metrics, and revenue with detailed analytics dashboards.",
  },
  {
    icon: Shield,
    title: "Content Protection",
    description: "Your content is secure with DRM protection, watermarking, and access controls.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Students can access courses on any device with our responsive, mobile-first design.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Launch Your Course
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to create, market, and sell your online courses
            successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
