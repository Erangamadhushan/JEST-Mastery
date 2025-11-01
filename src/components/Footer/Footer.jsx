import { Sparkles } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900/50 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                    <span className="text-xl font-bold text-white">Nexus</span>
                </div>
                <p className="text-gray-400 mb-4">
                    Building the future, one innovation at a time
                </p>
                <p className="text-gray-500 text-sm">
                    © 2025 Nexus. All rights reserved.
                </p>
            </div>
      </footer>
    )
}