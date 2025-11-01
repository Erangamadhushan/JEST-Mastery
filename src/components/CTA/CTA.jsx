import React from 'react';

export function CTA(){
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Get Started?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                    Join thousands of satisfied customers already using our platform
                </p>
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105">
                    Start Your Journey
                </button>
            </div>
      </section>
    )
}