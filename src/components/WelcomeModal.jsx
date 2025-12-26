import { useState, useEffect } from "react"
import { Snowflake, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function WelcomeModal({ onNameSubmit }) {
  const [name, setName] = useState("")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if user already has a name saved
    const savedName = localStorage.getItem("user_name")
    if (savedName) {
      setIsVisible(false)
      onNameSubmit(savedName)
    }
  }, [onNameSubmit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem("user_name", name.trim())
      setIsVisible(false)
      onNameSubmit(name.trim())
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
      {/* Snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-white/30 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              fontSize: `${10 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-in zoom-in fade-in duration-500">
        <div className="bg-gradient-to-br from-emerald-900/40 via-zinc-900/90 to-red-900/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="p-8 text-center border-b border-white/10 bg-gradient-to-r from-emerald-500/10 via-transparent to-red-500/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              🎄 Season's Greetings! 🎅
            </h2>
            <p className="text-zinc-300 text-sm">
              Welcome to your ultimate FAANG interview preparation platform
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-6 text-center">
              <p className="text-zinc-300 mb-2">
                Ho Ho Ho! 🎁 Before we begin your journey to FAANG success...
              </p>
              <p className="text-white font-medium">
                What should we call you?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-emerald-500"
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                disabled={!name.trim()}
                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold"
              >
                Let's Get Started! 🚀
              </Button>
            </form>

            <p className="text-xs text-zinc-500 text-center mt-4">
              Your name is stored locally and never shared
            </p>
          </div>

          {/* Footer Decoration */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  )
}
