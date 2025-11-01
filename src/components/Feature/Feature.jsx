import { Zap, Shield, Sparkles } from "lucide-react";


export function Feature() {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition transform hover:scale-105">
              <div className="bg-purple-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">
                Experience blazing fast performance with our optimized infrastructure and cutting-edge technology stack.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition transform hover:scale-105">
              <div className="bg-purple-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure by Default</h3>
              <p className="text-gray-400">
                Enterprise-grade security ensures your data is protected with advanced encryption and authentication.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition transform hover:scale-105">
              <div className="bg-purple-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Beautiful Design</h3>
              <p className="text-gray-400">
                Stunning user interfaces that delight users and provide an exceptional experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}