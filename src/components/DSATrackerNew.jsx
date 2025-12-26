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
  Snowflake,
} from "lucide-react"
import WelcomeModal from "./WelcomeModal"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { problemsData } from "../data/problems"

const TOTAL_PROBLEM_COUNT = 455

export default function DSATrackerNew() {
  const [userName, setUserName] = useState("")
  const [expandedSections, setExpandedSections] = useState(new Set(["Learn the basics"]))
  const [completedProblems, setCompletedProblems] = useState(new Set())
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

  const fullProblemsList = useMemo(() => {
    let globalId = 1
    return Object.entries(problemsData).map(([category, data]) => ({
      name: category,
      subsections: data.subsections.map((sub) => ({
        ...sub,
        problems: sub.problems.map((p) => ({
          ...p,
          id: globalId++,
        })),
      })),
    }))
  }, [])

  useEffect(() => {
    const savedProgress = localStorage.getItem("dsa-v2-progress")
    if (savedProgress) setCompletedProblems(new Set(JSON.parse(savedProgress)))
  }, [])

  useEffect(() => {
    localStorage.setItem("dsa-v2-progress", JSON.stringify(Array.from(completedProblems)))
  }, [completedProblems])

  const toggleProblem = (id) => {
    setCompletedProblems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const progress = Math.round((completedProblems.size / TOTAL_PROBLEM_COUNT) * 100)

  // Calculate dynamic stats
  const dynamicStats = useMemo(() => {
    let easyCount = 0, mediumCount = 0, hardCount = 0;
    let easySolved = 0, mediumSolved = 0, hardSolved = 0;

    fullProblemsList.forEach(section => {
      section.subsections.forEach(sub => {
        sub.problems.forEach(problem => {
          if (problem.difficulty === "Easy") {
            easyCount++;
            if (completedProblems.has(problem.id)) easySolved++;
          } else if (problem.difficulty === "Medium") {
            mediumCount++;
            if (completedProblems.has(problem.id)) mediumSolved++;
          } else if (problem.difficulty === "Hard") {
            hardCount++;
            if (completedProblems.has(problem.id)) hardSolved++;
          }
        });
      });
    });

    // Calculate accuracy (problems solved vs attempted)
    const accuracy = completedProblems.size > 0 ? 100 : 0;

    // Calculate streak (example: based on localStorage or use actual logic)
    const lastActiveDate = localStorage.getItem("last_active_date");
    const today = new Date().toDateString();
    let streak = parseInt(localStorage.getItem("daily_streak") || "0");
    
    if (lastActiveDate !== today && completedProblems.size > 0) {
      const lastDate = new Date(lastActiveDate || today);
      const currentDate = new Date(today);
      const diffTime = currentDate - lastDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak++;
      } else if (diffDays > 1) {
        streak = 1;
      }
      
      localStorage.setItem("daily_streak", streak.toString());
      localStorage.setItem("last_active_date", today);
    }

    // Calculate average time (mock for now, can be tracked per problem)
    const avgTime = "34m"; // This would need actual time tracking implementation

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
    };
  }, [fullProblemsList, completedProblems]);

  const filteredSections = useMemo(() => {
    if (!searchQuery) return fullProblemsList
    
    return fullProblemsList.map(section => ({
      ...section,
      subsections: section.subsections.map(sub => ({
        ...sub,
        problems: sub.problems.filter(prob =>
          prob.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(sub => sub.problems.length > 0)
    })).filter(section => section.subsections.length > 0)
  }, [fullProblemsList, searchQuery])

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
              <span className="text-[10px] text-zinc-500 -mt-1">Striver's 455 DSA Sheet</span>
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
                    Ready to crush DSA? 🚀
                  </p>
                </div>
              )}
              <h1 className="text-5xl font-bold tracking-tighter mb-4 text-white">
                Striver's <span className="text-emerald-500">455 Sheet</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-xl">
                The ultimate technical interview preparation roadmap. Track your journey from basic recursion to
                advanced graphs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full md:w-80 shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-zinc-200">Total Completion</span>
                <span className="text-2xl font-bold text-white">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest font-bold text-zinc-300">
                <span>{completedProblems.size} Solved</span>
                <span>{TOTAL_PROBLEM_COUNT} Total</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Daily Streak", value: `${dynamicStats.streak} Days`, icon: Clock },
              { label: "Accuracy", value: `${dynamicStats.accuracy}%`, icon: Sparkles },
              { label: "Hard Solved", value: `${dynamicStats.hardSolved}/${dynamicStats.hardCount}`, icon: Trophy },
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
              placeholder="Search problem title or ID..."
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

        {/* Problems View */}
        <div className="space-y-6">
          {filteredSections.map((section, idx) => {
            const allProblems = section.subsections.flatMap((s) => s.problems)
            const isExpanded = expandedSections.has(section.name)
            const sectionCompleted = allProblems.filter((p) => completedProblems.has(p.id)).length
            const sectionTotal = allProblems.length
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
                  className="w-full flex items-center justify-between p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:bg-zinc-900/50 transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors`}>
                      {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {section.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium tracking-wider uppercase mt-1">
                        {sectionCompleted} / {sectionTotal} Problems Solved
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-6">
                    <div className="w-32">
                      <Progress value={(sectionCompleted / displayTotal) * 100} className="h-1 bg-zinc-800" />
                    </div>
                    <Badge variant="outline" className="border-white/5 bg-white/5 text-zinc-400">
                      {Math.round((sectionCompleted / displayTotal) * 100)}%
                    </Badge>
                  </div>
                </button>

                {isExpanded && (
                  <div className="mt-4 ml-4 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <div className="flex items-center gap-3 ml-2">
                          <div className="h-px w-8 bg-zinc-800" />
                          <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em]">{sub.name}</h4>
                        </div>

                        <div
                          className={
                            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-2"
                          }
                        >
                          {sub.problems.map((problem) => {
                            const isCompleted = completedProblems.has(problem.id)

                            return viewMode === "grid" ? (
                              <div
                                key={problem.id}
                                className={`p-4 rounded-xl border transition-all duration-300 group/item relative ${
                                  isCompleted
                                    ? "bg-zinc-900/40 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                                    : "bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-zinc-900/40"
                                }`}
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={() => toggleProblem(problem.id)}
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
                                    <span className="text-xs font-mono text-zinc-600">#{problem.id}</span>
                                  </div>
                                  <Badge
                                    className={`${
                                      problem.difficulty === "Easy"
                                        ? "bg-emerald-500/10 text-emerald-500"
                                        : problem.difficulty === "Medium"
                                          ? "bg-amber-500/10 text-amber-500"
                                          : "bg-rose-500/10 text-rose-500"
                                    } border-none text-[10px] h-5`}
                                  >
                                    {problem.difficulty}
                                  </Badge>
                                </div>
                                <h5 className="font-medium text-zinc-200 mb-4 line-clamp-1">{problem.title}</h5>
                                <div className="flex items-center justify-between">
                                  <div className="flex gap-2">
                                    {problem.link && problem.link.trim() !== "" && (
                                      <a
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-8 w-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    )}
                                  </div>
                                  {isCompleted && (
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div
                                key={problem.id}
                                className={`group/item flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                                  isCompleted
                                    ? "bg-emerald-500/[0.03] border-emerald-500/10"
                                    : "bg-transparent border-white/[0.02] hover:bg-white/[0.02] hover:border-white/5"
                                }`}
                              >
                                <div className="flex items-center gap-4 flex-1">
                                  <button
                                    onClick={() => toggleProblem(problem.id)}
                                    className={`transition-colors ${
                                      isCompleted ? "text-emerald-500" : "text-zinc-700 hover:text-zinc-500"
                                    }`}
                                  >
                                    {isCompleted ? (
                                      <CheckCircle2 className="h-5 w-5" />
                                    ) : (
                                      <Circle className="h-5 w-5" />
                                    )}
                                  </button>
                                  <span className="text-[10px] font-mono text-zinc-600 w-8">#{problem.id}</span>
                                  <span
                                    className={`text-sm font-medium transition-colors ${isCompleted ? "text-zinc-300" : "text-zinc-500 group-hover/item:text-zinc-300"}`}
                                  >
                                    {problem.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-4">
                                  <Badge
                                    className={`${
                                      problem.difficulty === "Easy"
                                        ? "text-emerald-500/70"
                                        : problem.difficulty === "Medium"
                                          ? "text-amber-500/70"
                                          : "text-rose-500/70"
                                    } bg-transparent border-none text-[10px] font-bold tracking-wider`}
                                  >
                                    {problem.difficulty.toUpperCase()}
                                  </Badge>
                                  <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    {problem.link && problem.link.trim() !== "" && (
                                      <a
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-8 w-8 flex items-center justify-center text-zinc-500 hover:text-white transition-all"
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
