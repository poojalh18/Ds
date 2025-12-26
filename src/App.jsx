import { useState } from 'react';
import { Code2, Network } from 'lucide-react';
import DSATrackerNew from './components/DSATrackerNew';
import SystemDesignTracker from './components/SystemDesignTracker';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dsa'); // 'dsa' or 'systemdesign'

  return (
    <div className="relative">
      {/* Floating Navigation Toggle */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={() => setCurrentPage('dsa')}
          className={`group relative p-3 rounded-xl border transition-all duration-300 ${
            currentPage === 'dsa'
              ? 'bg-emerald-600 border-emerald-500 shadow-lg shadow-emerald-500/20'
              : 'bg-zinc-900/80 border-white/5 hover:border-white/20 hover:bg-zinc-800/80'
          } backdrop-blur-sm`}
          title="DSA Tracker"
        >
          <Code2 className={`h-5 w-5 ${currentPage === 'dsa' ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            DSA Tracker
          </span>
        </button>
        
        <button
          onClick={() => setCurrentPage('systemdesign')}
          className={`group relative p-3 rounded-xl border transition-all duration-300 ${
            currentPage === 'systemdesign'
              ? 'bg-emerald-600 border-emerald-500 shadow-lg shadow-emerald-500/20'
              : 'bg-zinc-900/80 border-white/5 hover:border-white/20 hover:bg-zinc-800/80'
          } backdrop-blur-sm`}
          title="System Design"
        >
          <Network className={`h-5 w-5 ${currentPage === 'systemdesign' ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            System Design
          </span>
        </button>
      </div>

      {/* Page Content */}
      {currentPage === 'dsa' ? <DSATrackerNew /> : <SystemDesignTracker />}
    </div>
  );
};

export default App;
