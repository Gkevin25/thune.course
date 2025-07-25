import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, DollarSign, ExternalLink } from "lucide-react"
import Image from "next/image"

const portfolioItems = [
  {
    name: "Dr. Amanda Foster",
    course: "Advanced Psychology Masterclass",
    category: "Education",
    students: 2847,
    revenue: 142350,
    rating: 4.9,
    testimonial:
      "CourseCreator Pro transformed my teaching career. I went from struggling with tech to focusing purely on what I love - educating students. The platform handled everything seamlessly.",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "Launched in 3 weeks instead of 6 months",
      "Zero technical issues since launch",
      "Automated certificate generation saved 20+ hours/week",
    ],
  },
  {
    name: "Marcus Rodriguez",
    course: "Digital Marketing Bootcamp",
    category: "Business",
    students: 5234,
    revenue: 261700,
    rating: 4.8,
    testimonial:
      "The analytics dashboard gives me insights I never had before. I can see exactly how students engage with my content and optimize accordingly. My completion rates increased by 40%.",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "40% increase in course completion rates",
      "Integrated payment processing saved $15k annually",
      "Mobile-first design boosted engagement by 60%",
    ],
  },
  {
    name: "Chef Isabella Chen",
    course: "Authentic Asian Cuisine Mastery",
    category: "Lifestyle",
    students: 1923,
    revenue: 96150,
    rating: 4.9,
    testimonial:
      "As someone who's not tech-savvy, I was amazed how easy it was to upload my cooking videos and create a professional-looking course. The drag-and-drop interface is a game-changer.",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "Professional course launched without technical knowledge",
      "Video streaming optimized for cooking demonstrations",
      "Student community features increased retention by 35%",
    ],
  },
  {
    name: "James Thompson",
    course: "Financial Freedom Blueprint",
    category: "Finance",
    students: 3456,
    revenue: 172800,
    rating: 4.7,
    testimonial:
      "The built-in marketing tools helped me reach students I never could have found on my own. The affiliate program alone brought in 30% of my students. Incredible platform!",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "30% of students came through affiliate program",
      "Marketing automation increased conversions by 25%",
      "White-label solution maintained brand consistency",
    ],
  },
  {
    name: "Dr. Sarah Kim",
    course: "Medical Coding Certification",
    category: "Healthcare",
    students: 1567,
    revenue: 78350,
    rating: 4.8,
    testimonial:
      "The content protection features were crucial for my certification course. Students can't download or share the materials inappropriately, which protects my intellectual property.",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "100% content protection with DRM",
      "Automated certification tracking",
      "Compliance features met healthcare standards",
    ],
  },
  {
    name: "Alex Rivera",
    course: "Web Development Fundamentals",
    category: "Technology",
    students: 4123,
    revenue: 206150,
    rating: 4.9,
    testimonial:
      "The code playground integration was perfect for my programming course. Students can practice coding directly in the browser without any setup. It's exactly what I needed.",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=100&width=100",
    results: [
      "Interactive coding exercises increased engagement",
      "Zero setup friction for students",
      "Progress tracking helped identify struggling students",
    ],
  },
]

export default function PortfolioPage() {
  const totalStudents = portfolioItems.reduce((sum, item) => sum + item.students, 0)
  const totalRevenue = portfolioItems.reduce((sum, item) => sum + item.revenue, 0)
  const averageRating = portfolioItems.reduce((sum, item) => sum + item.rating, 0) / portfolioItems.length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Success Stories from Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Beta Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              See how early adopters transformed their expertise into thriving online course businesses using our
              platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{totalStudents.toLocaleString()}+</div>
                <div className="text-gray-400">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">${(totalRevenue / 1000).toFixed(0)}K+</div>
                <div className="text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.course}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <Image
                        src={item.avatar || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                        <p className="text-purple-600 font-medium">{item.course}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-purple-500 mr-1" />
                          <span className="font-bold text-gray-900">{item.students.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <DollarSign className="h-5 w-5 text-green-500 mr-1" />
                          <span className="font-bold text-gray-900">${(item.revenue / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Star className="h-5 w-5 text-yellow-500 mr-1 fill-current" />
                          <span className="font-bold text-gray-900">{item.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                      "{item.testimonial}"
                    </blockquote>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {item.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="self-start border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      View Course
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join These Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey today and become our next success story. Join thousands of creators who are already
            building thriving course businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4"
            >
              Start Your Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
