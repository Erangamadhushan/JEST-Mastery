import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build the Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                With Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your ideas into reality with our cutting-edge platform. 
              Experience the power of modern technology at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-full text-lg font-semibold transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
