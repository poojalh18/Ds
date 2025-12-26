import { useState, useEffect, useMemo, useCallback } from "react"
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Search,
  Trophy,
  BookOpen,
  Clock,
  LayoutGrid,
  List,
  Sparkles,
  Filter,
  ExternalLink,
  StickyNote,
  X,
  Save,
  FileText,
  Video,
  Globe,
  Snowflake,
} from "lucide-react"
import WelcomeModal from "./WelcomeModal"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { systemDesignData, TOTAL_SD_TOPICS } from "../data/systemDesign"
import { byteDanceInterviewTopics, TOTAL_BYTEDANCE_TOPICS } from "../data/byteDanceTopics"
import { googleInterviewTopics, TOTAL_GOOGLE_TOPICS } from "../data/googleTopics"
import { webApiTopics, TOTAL_WEB_API_TOPICS } from "../data/webApiTopics"
import { genAiTopics, TOTAL_GENAI_TOPICS } from "../data/genAiTopics"
import { fullStackTopics, TOTAL_FULLSTACK_TOPICS } from "../data/fullStackTopics"
import { aiMlFoundations, TOTAL_AIML_TOPICS } from "../data/aiMlFoundations"

export default function SystemDesignTracker() {
  const [userName, setUserName] = useState("")
  const [expandedSections, setExpandedSections] = useState(new Set(["SOLID Principles"]))
  const [completedTopics, setCompletedTopics] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("list")

  const handleNameSubmit = useCallback((name) => {
    setUserName(name)
  }, [])

  useEffect(() => {
    const savedName = localStorage.getItem("user_name")
    if (savedName) {
      setUserName(savedName)
    }
  }, [])

  const fullTopicsList = useMemo(() => {
    let globalId = 1
    const allData = { 
      ...systemDesignData, 
      ...byteDanceInterviewTopics, 
      ...googleInterviewTopics,
      ...webApiTopics,
      ...genAiTopics,
      ...fullStackTopics,
      ...aiMlFoundations
    }
    return Object.entries(allData).map(([category, data]) => ({
      name: category,
      subsections: data.subsections.map((sub) => ({
        ...sub,
        topics: sub.topics.map((t) => ({
          ...t,
          id: globalId++,
        })),
      })),
    }))
  }, [])

  const totalTopics = TOTAL_SD_TOPICS + TOTAL_BYTEDANCE_TOPICS + TOTAL_GOOGLE_TOPICS + TOTAL_WEB_API_TOPICS + TOTAL_GENAI_TOPICS + TOTAL_FULLSTACK_TOPICS + TOTAL_AIML_TOPICS

  useEffect(() => {
    const savedProgress = localStorage.getItem("sd-progress")
    if (savedProgress) setCompletedTopics(new Set(JSON.parse(savedProgress)))
  }, [])

  useEffect(() => {
    localStorage.setItem("sd-progress", JSON.stringify(Array.from(completedTopics)))
  }, [completedTopics])

  const toggleTopic = (id) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const progress = Math.round((completedTopics.size / totalTopics) * 100)

  // Calculate dynamic stats
  const dynamicStats = useMemo(() => {
    let easyCount = 0, mediumCount = 0, hardCount = 0
    let easySolved = 0, mediumSolved = 0, hardSolved = 0

    fullTopicsList.forEach(section => {
      section.subsections.forEach(sub => {
        sub.topics.forEach(topic => {
          if (topic.difficulty === "Easy") {
            easyCount++
            if (completedTopics.has(topic.id)) easySolved++
          } else if (topic.difficulty === "Medium") {
            mediumCount++
            if (completedTopics.has(topic.id)) mediumSolved++
          } else if (topic.difficulty === "Hard") {
            hardCount++
            if (completedTopics.has(topic.id)) hardSolved++
          }
        })
      })
    })

    const accuracy = completedTopics.size > 0 ? 100 : 0

    const lastActiveDate = localStorage.getItem("sd_last_active_date")
    const today = new Date().toDateString()
    let streak = parseInt(localStorage.getItem("sd_daily_streak") || "0")
    
    if (lastActiveDate !== today && completedTopics.size > 0) {
      const lastDate = new Date(lastActiveDate || today)
      const currentDate = new Date(today)
      const diffTime = currentDate - lastDate
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 1) {
        streak++
      } else if (diffDays > 1) {
        streak = 1
      }
      
      localStorage.setItem("sd_daily_streak", streak.toString())
      localStorage.setItem("sd_last_active_date", today)
    }

    const avgTime = "2h" // Mock value

    return {
      easyCount,
      mediumCount,
      hardCount,
      easySolved,
      mediumSolved,
      hardSolved,
      accuracy,
      streak,
      avgTime
    }
  }, [fullTopicsList, completedTopics])

  const filteredSections = useMemo(() => {
    if (!searchQuery) return fullTopicsList
    
    return fullTopicsList.map(section => ({
      ...section,
      subsections: section.subsections.map(sub => ({
        ...sub,
        topics: sub.topics.filter(topic =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(sub => sub.topics.length > 0)
    })).filter(section => section.subsections.length > 0)
  }, [fullTopicsList, searchQuery])

  const getResourceIcon = (type) => {
    switch(type) {
      case "Video": return <Video className="h-3 w-3" />
      case "Article": return <FileText className="h-3 w-3" />
      default: return <Globe className="h-3 w-3" />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Welcome Modal */}
      <WelcomeModal onNameSubmit={handleNameSubmit} />

      {/* Continuous Snowfall */}
      <div className="fixed inset-0 z-[5] overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-white/10 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 15}s`,
              fontSize: `${8 + Math.random() * 12}px`,
            }}
          />
        ))}
      </div>

      {/* Background with overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Top Navbar */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                CodeMastery Pro
              </span>
              <span className="text-[10px] text-zinc-500 -mt-1">Your FAANG Journey Starts Here</span>
            </div>
          </div>

          {userName && (
            <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full border border-emerald-400/30 backdrop-blur-sm">
              <Snowflake className="h-5 w-5 text-emerald-400 animate-pulse" />
              <span className="text-xl font-bold text-white drop-shadow-lg">
                Welcome back, {userName}! 🎄
              </span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Trophy className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border border-white/10 flex items-center justify-center font-bold text-white text-sm">
              {userName ? userName.charAt(0).toUpperCase() : "?"}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:px-8">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div>
              {userName && (
                <div className="mb-4">
                  <p className="text-3xl md:text-4xl font-light text-zinc-300 mb-1">
                    Hey {userName}! 👋
                  </p>
                  <p className="text-emerald-400 font-medium flex items-center gap-2">
                    <Snowflake className="h-4 w-4" />
                    Ready to ace your interviews? 🚀
                  </p>
                </div>
              )}
              <h1 className="text-5xl font-bold tracking-tighter mb-4 text-white">
                Complete Interview <span className="text-emerald-500">Mastery</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-xl">
                760+ curated topics covering DSA, System Design, AI/ML, Full-Stack, and Gen AI.
                Everything you need for FAANG success in one place.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full md:w-80 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-zinc-200">Total Completion</span>
                <span className="text-2xl font-bold text-white">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest font-bold text-zinc-300">
                <span>{completedTopics.size} Completed</span>
                <span>{totalTopics} Total</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Study Streak", value: `${dynamicStats.streak} Days`, icon: Clock },
              { label: "Mastery", value: `${dynamicStats.accuracy}%`, icon: Sparkles },
              { label: "Hard Topics", value: `${dynamicStats.hardSolved}/${dynamicStats.hardCount}`, icon: Trophy },
              { label: "Avg. Time", value: dynamicStats.avgTime, icon: BookOpen },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 group hover:bg-white/15 transition-all border border-white/20"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-bold">{stat.label}</p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search topics..."
              className="pl-10 bg-zinc-900/50 border-white/5 h-12 text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-zinc-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="bg-zinc-900/50 p-1 rounded-lg border border-white/5 flex">
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-10 px-4"
              >
                <List className="h-4 w-4 mr-2" /> List
              </Button>
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-10 px-4"
              >
                <LayoutGrid className="h-4 w-4 mr-2" /> Grid
              </Button>
            </div>
            <Button variant="outline" className="h-12 border-white/5 bg-zinc-900/50">
              <Filter className="h-4 w-4 mr-2" /> Filters
            </Button>
          </div>
        </div>

        {/* Topics View */}
        <div className="space-y-6">
          {filteredSections.map((section, idx) => {
            const allTopics = section.subsections.flatMap((s) => s.topics)
            const isExpanded = expandedSections.has(section.name)
            const sectionCompleted = allTopics.filter((t) => completedTopics.has(t.id)).length
            const sectionTotal = allTopics.length
            const displayTotal = sectionTotal || 1

            return (
              <div key={idx} className="group">
                <button
                  onClick={() => {
                    setExpandedSections((prev) => {
                      const next = new Set(prev)
                      if (next.has(section.name)) next.delete(section.name)
                      else next.add(section.name)
                      return next
                    })
                  }}
                  className="w-full flex items-center justify-between p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/20 transition-colors">
                      {isExpanded ? <ChevronDown className="h-5 w-5 text-emerald-400" /> : <ChevronRight className="h-5 w-5 text-emerald-400" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {section.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium tracking-wider uppercase mt-1">
                        {sectionCompleted} / {sectionTotal} Topics Completed
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-6">
                    <div className="w-32">
                      <Progress value={(sectionCompleted / displayTotal) * 100} className="h-1 bg-white/20" />
                    </div>
                    <Badge variant="outline" className="border-white/30 bg-white/10 text-white">
                      {Math.round((sectionCompleted / displayTotal) * 100)}%
                    </Badge>
                  </div>
                </button>

                {isExpanded && (
                  <div className="mt-4 ml-4 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <div className="flex items-center gap-3 ml-2">
                          <div className="h-px w-8 bg-emerald-400/50" />
                          <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-[0.2em]">{sub.name}</h4>
                        </div>

                        <div
                          className={
                            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-2"
                          }
                        >
                          {sub.topics.map((topic) => {
                            const isCompleted = completedTopics.has(topic.id)

                            return viewMode === "grid" ? (
                              <div
                                key={topic.id}
                                className={`p-4 rounded-xl border transition-all duration-300 group/item relative backdrop-blur-sm ${
                                  isCompleted
                                    ? "bg-emerald-500/10 border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                    : "bg-white/10 border-white/20 hover:border-white/30 hover:bg-white/15"
                                }`}
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={() => toggleTopic(topic.id)}
                                      className={`p-1 rounded-md transition-colors ${
                                        isCompleted ? "text-emerald-500" : "text-zinc-600 hover:text-zinc-400"
                                      }`}
                                    >
                                      {isCompleted ? (
                                        <CheckCircle2 className="h-5 w-5" />
                                      ) : (
                                        <Circle className="h-5 w-5" />
                                      )}
                                    </button>
                                    <span className="text-xs font-mono text-zinc-400">#{topic.id}</span>
                                  </div>
                                  <Badge
                                    className={`${
                                      topic.difficulty === "Easy"
                                        ? "bg-emerald-500/10 text-emerald-500"
                                        : topic.difficulty === "Medium"
                                          ? "bg-amber-500/10 text-amber-500"
                                          : "bg-rose-500/10 text-rose-500"
                                    } border-none text-[10px] h-5`}
                                  >
                                    {topic.difficulty}
                                  </Badge>
                                </div>
                                <h5 className="font-medium text-white mb-3 line-clamp-2 min-h-[3rem]">{topic.title}</h5>
                                
                                {/* Resources */}
                                <div className="space-y-2 mb-4">
                                  {topic.resources.slice(0, 2).map((resource, rIdx) => (
                                    <a
                                      key={rIdx}
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
                                    >
                                      {getResourceIcon(resource.type)}
                                      <span className="truncate">{resource.label}</span>
                                    </a>
                                  ))}
                                </div>

                                <div className="flex items-center justify-between">
                                  <div className="flex gap-2">
                                  </div>
                                  {isCompleted && (
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div
                                key={topic.id}
                                className={`group/item flex items-center justify-between p-3 rounded-lg border transition-all duration-200 backdrop-blur-sm ${
                                  isCompleted
                                    ? "bg-emerald-500/10 border-emerald-400/30"
                                    : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"
                                }`}
                              >
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                  <button
                                    onClick={() => toggleTopic(topic.id)}
                                    className={`transition-colors flex-shrink-0 ${
                                      isCompleted ? "text-emerald-500" : "text-zinc-700 hover:text-zinc-500"
                                    }`}
                                  >
                                    {isCompleted ? (
                                      <CheckCircle2 className="h-5 w-5" />
                                    ) : (
                                      <Circle className="h-5 w-5" />
                                    )}
                                  </button>
                                  <span className="text-[10px] font-mono text-zinc-400 w-8 flex-shrink-0">#{topic.id}</span>
                                  <span
                                    className={`text-sm font-medium transition-colors truncate ${isCompleted ? "text-white" : "text-zinc-200 group-hover/item:text-white"}`}
                                  >
                                    {topic.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-4 flex-shrink-0">
                                  <Badge
                                    className={`${
                                      topic.difficulty === "Easy"
                                        ? "text-emerald-400 bg-emerald-500/20"
                                        : topic.difficulty === "Medium"
                                          ? "text-amber-400 bg-amber-500/20"
                                          : "text-rose-400 bg-rose-500/20"
                                    } border-none text-[10px] font-bold tracking-wider`}
                                  >
                                    {topic.difficulty.toUpperCase()}
                                  </Badge>
                                  <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    {topic.resources[0]?.url && (
                                      <a
                                        href={topic.resources[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-8 w-8 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>

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
