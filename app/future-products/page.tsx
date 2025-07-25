import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, FileText, Megaphone, Users, Palette, BarChart3, Mail, Smartphone } from "lucide-react"
import Image from "next/image"

const futureProducts = [
  {
    icon: CreditCard,
    title: "Business Card Templates",
    description:
      "Professional business card designs for course creators and entrepreneurs. Choose from hundreds of templates or create custom designs.",
    status: "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "500+ professional templates",
      "Custom branding options",
      "High-resolution downloads",
      "Print-ready formats",
    ],
    timeline: "Q1 2024",
  },
  {
    icon: FileText,
    title: "Landing Page Builder",
    description: "Create stunning landing pages for your courses with drag-and-drop simplicity. No coding required.",
    status: "In Development",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Drag-and-drop interface",
      "Mobile-responsive designs",
      "A/B testing capabilities",
      "SEO optimization tools",
    ],
    timeline: "Q2 2024",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Automated email sequences and marketing campaigns for course promotion and student engagement.",
    status: "Coming Q2 2024",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Email sequence automation", "Behavioral triggers", "Advanced segmentation", "Performance analytics"],
    timeline: "Q2 2024",
  },
  {
    icon: Users,
    title: "Community Platform",
    description: "Build engaged communities around your courses with forums, discussions, and peer-to-peer learning.",
    status: "Coming Q3 2024",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Discussion forums", "Private groups", "Live chat integration", "Moderation tools"],
    timeline: "Q3 2024",
  },
  {
    icon: Palette,
    title: "Brand Kit Creator",
    description:
      "Generate complete brand identities including logos, color palettes, and style guides for your course business.",
    status: "Planned",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "AI-powered logo generation",
      "Color palette suggestions",
      "Typography recommendations",
      "Brand guideline templates",
    ],
    timeline: "Q4 2024",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Suite",
    description:
      "Deep insights into student behavior, course performance, and revenue optimization with predictive analytics.",
    status: "Planned",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Predictive analytics", "Custom dashboards", "Revenue forecasting", "Student journey mapping"],
    timeline: "Q4 2024",
  },
  {
    icon: Mail,
    title: "Newsletter Platform",
    description:
      "Built-in newsletter system to keep your audience engaged and drive course sales through content marketing.",
    status: "Research Phase",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Newsletter templates", "Subscriber management", "Automated campaigns", "Integration with courses"],
    timeline: "2025",
  },
  {
    icon: Smartphone,
    title: "Mobile App Builder",
    description:
      "Create native mobile apps for your courses, allowing students to learn on-the-go with offline capabilities.",
    status: "Research Phase",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Native iOS & Android apps", "Offline content access", "Push notifications", "App store publishing"],
    timeline: "2025",
  },
]

const statusColors = {
  "Coming Soon": "bg-green-500",
  "In Development": "bg-blue-500",
  "Coming Q2 2024": "bg-purple-500",
  "Coming Q3 2024": "bg-orange-500",
  Planned: "bg-gray-500",
  "Research Phase": "bg-yellow-500",
}

export default function FutureProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Creator Tools
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We're constantly expanding our platform with new tools and features to help you grow your online business.
              Get a sneak peek at what's coming next and be the first to know when these products launch.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Roadmap</h2>
            <p className="text-gray-600">Our planned releases for the next 18 months</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Coming Soon</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">In Development</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Q2 2024</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Q3 2024</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Planned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 ${statusColors[product.status as keyof typeof statusColors]} text-white text-sm font-medium rounded-full`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      {product.timeline}
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

                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                    disabled={product.status === "Research Phase"}
                  >
                    {product.status === "Coming Soon" ? "Get Early Access" : "Get Notified"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay in the Loop</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be the first to know when new products launch and get exclusive early access to beta features.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                  Get Updates
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Join 5,000+ creators already on our waitlist. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
