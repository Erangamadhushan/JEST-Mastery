import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Sparkles className="h-8 w-8 text-purple-400" />
                        <span className="text-2xl font-bold text-white">Nexus</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
                        <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
                        <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition">Pricing</a>
                        <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
                    </div>
                    
                    <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition transform hover:scale-105">
                    Get Started
                    </button>
                    
                    <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a href="#features" className="block text-gray-300 hover:text-purple-400 py-2">Features</a>
                        <a href="#about" className="block text-gray-300 hover:text-purple-400 py-2">About</a>
                        <a href="#pricing" className="block text-gray-300 hover:text-purple-400 py-2">Pricing</a>
                        <a href="#contact" className="block text-gray-300 hover:text-purple-400 py-2">Contact</a>
                        <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full mt-2">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
      </nav>
    )
}