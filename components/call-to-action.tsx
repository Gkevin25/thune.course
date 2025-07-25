import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Star } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-white text-lg">Trusted by 10,000+ creators</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Launch Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Course Empire?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Join thousands of successful course creators who are already building their online education businesses.
              Start your free trial today - no credit card required.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">14-day free trial • No credit card required • Cancel anytime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">30 min</div>
              <div className="text-gray-400">Average setup time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">0%</div>
              <div className="text-gray-400">Platform fees until you earn</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Customer support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
