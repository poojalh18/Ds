// Google-specific SDE-1 and SDE-2 interview preparation topics
// Comprehensive coverage of Google's interview style, tech stack, and requirements

export const googleInterviewTopics = {
  "Google Interview Prep": {
    subsections: [
      {
        name: "Google's Core Technologies",
        topics: [
          {
            title: "Google File System (GFS)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-file-system-gfs/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=eRgFNW4QFDc", label: "MIT Lecture" },
              { type: "Article", url: "https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "MapReduce Programming Model",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/map-reduce-a-paradigm-for-large-scale-data-processing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=MAJ0aW5g17c", label: "MIT Lecture" },
              { type: "Article", url: "https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Bigtable - Distributed Storage",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-bigtable/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2cXBNQClehA", label: "InfoQ Talk" },
              { type: "Article", url: "https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Google Spanner - Global Database",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-spanner/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=mYV6_OaZeEs", label: "Eric Brewer Talk" },
              { type: "Article", url: "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Protocol Buffers (Protobuf)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-protocol-buffers/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=46O73On0gyI", label: "Tech Primers" },
              { type: "Article", url: "https://protobuf.dev/", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Google's Borg - Container Orchestration",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-borg-cluster-management/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=0W49z8hVn0k", label: "Kubernetes Origins" },
              { type: "Article", url: "https://research.google/pubs/pub43438/", label: "Borg Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Chubby - Distributed Lock Service",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-chubby/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=PqItueBaiRg", label: "InfoQ" },
              { type: "Article", url: "https://static.googleusercontent.com/media/research.google.com/en//archive/chubby-osdi06.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "PageRank Algorithm",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/page-rank-algorithm-implementation/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=P8Kt6Abq_rM", label: "Computerphile" },
              { type: "Article", url: "http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf", label: "Original Paper" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Advanced Algorithms (Google Style)",
        topics: [
          {
            title: "Advanced Graph Algorithms (Tarjan, Kosaraju)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/", label: "Tarjan's Algorithm" },
              { type: "Article", url: "https://www.geeksforgeeks.org/strongly-connected-components/", label: "Kosaraju's Algorithm" },
              { type: "Video", url: "https://www.youtube.com/watch?v=wUgWX0nc4NY", label: "William Fiset" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Network Flow Algorithms",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/max-flow-problem-introduction/", label: "Max Flow" },
              { type: "Article", url: "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/", label: "Ford-Fulkerson" },
              { type: "Video", url: "https://www.youtube.com/watch?v=LdOnanfc5TM", label: "MIT OCW" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Suffix Arrays & Suffix Trees",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/suffix-array-set-1-introduction/", label: "Suffix Arrays" },
              { type: "Article", url: "https://www.geeksforgeeks.org/pattern-searching-using-suffix-tree/", label: "Suffix Trees" },
              { type: "Video", url: "https://www.youtube.com/watch?v=VA9m_l6LpwI", label: "William Fiset" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Advanced DP (Digit DP, Bitmask DP)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/digit-dp-introduction/", label: "Digit DP" },
              { type: "Article", url: "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/", label: "Bitmask DP" },
              { type: "Video", url: "https://www.youtube.com/watch?v=iwFiihP2wEU", label: "Errichto" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Heavy-Light Decomposition",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/heavy-light-decomposition-set-1-introduction/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=EKY-5ksPmxc", label: "William Fiset" },
              { type: "Article", url: "https://cp-algorithms.com/graph/hld.html", label: "CP Algorithms" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Convex Hull & Computational Geometry",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/convex-hull-set-1-jarviss-algorithm-or-wrapping/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=B7A0TdTVZwg", label: "MIT OCW" },
              { type: "Article", url: "https://cp-algorithms.com/geometry/convex-hull.html", label: "CP Algorithms" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Persistent Data Structures",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/persistent-data-structures/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=WqCWghETNDc", label: "MIT OCW" },
              { type: "Article", url: "https://cp-algorithms.com/data_structures/persistent-segment-tree.html", label: "Persistent Segment Tree" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Mo's Algorithm & Square Root Decomposition",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/mos-algorithm-query-square-root-decomposition/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=BJhzd_VG3ic", label: "Errichto" },
              { type: "Article", url: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html", label: "CP Algorithms" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Meet in the Middle Technique",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/meet-in-the-middle/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=57SUNQL4JFA", label: "Colin Galen" },
              { type: "Article", url: "https://usaco.guide/gold/meet-in-the-middle", label: "USACO Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Randomized Algorithms",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/randomized-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=6x2LWMZd4EU", label: "MIT OCW" },
              { type: "Article", url: "https://cp-algorithms.com/others/randomized-algorithms.html", label: "CP Algorithms" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Google-Scale System Design",
        topics: [
          {
            title: "Design Google Search",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-search-engine-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=CeGtqouT8eA", label: "Gaurav Sen" },
              { type: "Video", url: "https://www.youtube.com/watch?v=0LTXCcVRQi0", label: "How Google Search Works" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Gmail",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-email-service-like-gmail/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=tndzLznxq40", label: "System Design Interview" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Drive",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-dropbox-a-system-design-interview-question/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=U0xTu6E2CT8", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Maps Navigation",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-google-maps-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=jk3yvVfNvds", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design YouTube at Google Scale",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-video-sharing-system-like-youtube/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=psQzyFfsUGU", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Analytics",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-metrics-monitoring-system/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=kIcq1_pBQSY", label: "System Design Interview" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Photos",
            difficulty: "Hard",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=HgcUy_pP1lI", label: "System Design Interview" },
              { type: "Article", url: "https://www.geeksforgeeks.org/design-image-hosting-service-like-imgur/", label: "GeeksforGeeks" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Calendar",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-calendar-application/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=YTlOJxcGCck", label: "System Design Interview" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Docs (Real-time Collaboration)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-google-docs/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2auwirNBvGg", label: "Exponent" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Google Meet / Video Conferencing",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-video-conferencing-system-like-zoom/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=G32ThJakeHk", label: "ByteByteGo" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Google Interview Behavioral",
        topics: [
          {
            title: "Googleyness & Leadership",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://careers.google.com/how-we-hire/", label: "Google Hiring Process" },
              { type: "Video", url: "https://www.youtube.com/watch?v=k-baHBzWe4k", label: "Life at Google" },
              { type: "Article", url: "https://igotanoffer.com/blogs/tech/google-behavioral-interview", label: "Behavioral Interview Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Past Projects & Technical Depth",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/how-to-answer-tell-me-about-yourself-in-interview/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=TYOeQfXqkjU", label: "Dan Croitor" },
              { type: "Article", url: "https://www.thebalancemoney.com/job-interview-question-describe-a-project-2061210", label: "Project Discussion" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Problem-Solving & Innovation",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/how-to-approach-a-coding-problem/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=GBuHSRDGZBY", label: "Problem Solving" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Teamwork & Collaboration",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.themuse.com/advice/behavioral-interview-questions-answers-teamwork", label: "Teamwork Questions" },
              { type: "Video", url: "https://www.youtube.com/watch?v=PJKYqLP6MRE", label: "Google Team Culture" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Handling Ambiguity & Trade-offs",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.indeed.com/career-advice/interviewing/how-to-handle-ambiguity", label: "Indeed Guide" },
              { type: "Video", url: "https://www.youtube.com/watch?v=aHVXl8VMkVc", label: "System Design Trade-offs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Growth Mindset & Learning",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.mindsetworks.com/science/", label: "Growth Mindset" },
              { type: "Video", url: "https://www.youtube.com/watch?v=hiiEeMN7vbQ", label: "Carol Dweck TED" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Competitive Programming for Google",
        topics: [
          {
            title: "Google Code Jam Strategies",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-code-jam/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=uWlqI8DhHJc", label: "Errichto Code Jam" },
              { type: "Article", url: "https://codingcompetitions.withgoogle.com/codejam", label: "Official Code Jam" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Google Kick Start Practice",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-kickstart/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8p5xVnEjpUQ", label: "Kick Start Tips" },
              { type: "Article", url: "https://codingcompetitions.withgoogle.com/kickstart", label: "Official Kick Start" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Interactive Problems",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/interactive-problems-in-competitive-programming/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8YI7M6c9NKY", label: "Errichto Interactive" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Time & Space Complexity Optimization",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=__vX2sjlpXU", label: "MIT OCW" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Mock Interviews & Practice",
        topics: [
          {
            title: "LeetCode Google Tagged Problems",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://leetcode.com/company/google/", label: "LeetCode Google" },
              { type: "Video", url: "https://www.youtube.com/watch?v=GBuHSRDGZBY", label: "Google Interview Tips" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Phone Screen Practice",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-interview-preparation-for-software-engineer/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=XKu_SEDAykw", label: "Clément Mihailescu" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Virtual Onsite Preparation",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://igotanoffer.com/blogs/tech/google-software-engineer-interview", label: "Complete Guide" },
              { type: "Video", url: "https://www.youtube.com/watch?v=YJZCUhxNCv8", label: "Google Interview Experience" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Whiteboard Coding Practice",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/how-to-prepare-for-google-interview/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=uQdy914JRKQ", label: "Gayle McDowell" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "System Design Mock Interviews",
            difficulty: "Hard",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=q0KGYwNbf-0", label: "Mock Interview 1" },
              { type: "Video", url: "https://www.youtube.com/watch?v=F-rRxKQ9TsI", label: "Mock Interview 2" },
              { type: "Article", url: "https://www.educative.io/blog/google-system-design-interview", label: "Educative Guide" },
            ],
            hasOfflineNotes: true
          }
        ]
      }
    ]
  }
};

export const TOTAL_GOOGLE_TOPICS = (() => {
  let count = 0;
  Object.values(googleInterviewTopics).forEach(section => {
    section.subsections.forEach(sub => {
      count += sub.topics.length;
    });
  });
  return count;
})();
