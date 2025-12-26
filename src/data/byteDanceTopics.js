// ByteDance-specific interview preparation topics
// This extends the main system design data with additional ByteDance interview focus areas

export const byteDanceInterviewTopics = {
  "ByteDance Interview Prep": {
    subsections: [
      {
        name: "Algorithm Patterns (ByteDance Focused)",
        topics: [
          {
            title: "Dynamic Programming Patterns",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/dynamic-programming/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=oBt53YbR9Kk", label: "freeCodeCamp DP" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/458695/dynamic-programming-patterns", label: "LeetCode Patterns" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Graph Algorithms (DFS, BFS, Dijkstra)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU", label: "freeCodeCamp Graphs" },
              { type: "Video", url: "https://www.youtube.com/watch?v=09_LlHjoEiY", label: "William Fiset" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Tree Traversals & Tree DP",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=9PHkk0UavIM", label: "Abdul Bari" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/1337373/tree-question-pattern-2021", label: "LeetCode Tree Patterns" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Binary Search & Its Variants",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/binary-search/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=f6UU7V3szVw", label: "Errichto Binary Search" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template", label: "Binary Search Template" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Sliding Window Technique",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/window-sliding-technique/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=jM2dhDPYMQM", label: "NeetCode" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/657507/Sliding-Window-for-Beginners-Problems-or-Template", label: "Sliding Window Template" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Two Pointers Technique",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/two-pointers-technique/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=On03HWe2tZM", label: "NeetCode" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/1688903/solved-all-two-pointers-problems-in-100-days", label: "Two Pointers Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Backtracking Problems",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/backtracking-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Zq4upTEaQyM", label: "Abdul Bari" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/1405817/backtracking-algorithm-problems-to-practice", label: "Backtracking Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Greedy Algorithms",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/greedy-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ARvQcqJ_-NY", label: "Abdul Bari" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/669996/greedy-for-beginners-problems-sample-solutions", label: "Greedy Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Trie Data Structure",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/trie-insert-and-search/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=AXjmTQ8LEoI", label: "Tushar Roy" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/931977/beginner-friendly-guide-to-trie-tutorial-practice-problems", label: "Trie Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Union Find / Disjoint Set",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/union-find/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ibjEGG7ylHk", label: "William Fiset" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/1072665/Disjoint-Set-Union-(DSU)Union-Find-A-Complete-Guide", label: "DSU Complete Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Segment Tree & Fenwick Tree",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/", label: "Segment Tree" },
              { type: "Article", url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/", label: "Fenwick Tree" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Oq2E2yGadnU", label: "Tushar Roy Segment Tree" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "String Algorithms (KMP, Rabin-Karp)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/", label: "KMP Algorithm" },
              { type: "Article", url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/", label: "Rabin-Karp" },
              { type: "Video", url: "https://www.youtube.com/watch?v=BXCEFAzhxGY", label: "Abdul Bari KMP" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Bit Manipulation Tricks",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/bit-manipulation-tricks/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=efL86w9pJds", label: "Errichto" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/1151183/bits-manipulation-ultimate-guide", label: "Bit Manipulation Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Math for Competitive Programming",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/mathematical-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=V80l8M4GpJQ", label: "Errichto Math" },
              { type: "Article", url: "https://cp-algorithms.com/", label: "CP Algorithms" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Matrix Operations & 2D Arrays",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/matrix/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=S1LK_-KzJkM", label: "NeetCode 2D Arrays" },
              { type: "Article", url: "https://leetcode.com/discuss/study-guide/2037982/matrix-rotation-in-place-with-detailed-explanation", label: "Matrix Guide" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Database & SQL Mastery",
        topics: [
          {
            title: "Complex SQL Queries & Joins",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw", label: "freeCodeCamp SQL" },
              { type: "Article", url: "https://mode.com/sql-tutorial/", label: "Mode SQL Tutorial" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Window Functions",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/window-functions-in-sql/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Ww71knvhQ-s", label: "Alex The Analyst" },
              { type: "Article", url: "https://mode.com/sql-tutorial/sql-window-functions/", label: "Window Functions Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Database Transactions & ACID",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/acid-properties-in-dbms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=pomxJOFVcQs", label: "Hussein Nasser" },
              { type: "Article", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", label: "PostgreSQL Transactions" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Query Optimization & Explain Plans",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sql-query-optimization/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=BHwzDmr6d7s", label: "Hussein Nasser" },
              { type: "Article", url: "https://use-the-index-luke.com/", label: "Use The Index Luke" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Stored Procedures & Triggers",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sql-stored-procedures/", label: "Stored Procedures" },
              { type: "Article", url: "https://www.geeksforgeeks.org/sql-trigger-student-database/", label: "SQL Triggers" },
              { type: "Video", url: "https://www.youtube.com/watch?v=TdtQY_-hhwo", label: "Programming with Mosh" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Testing & Code Quality",
        topics: [
          {
            title: "Unit Testing with JUnit & Mockito",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/unit-testing-software-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=flpmSXVTqBI", label: "Amigoscode Testing" },
              { type: "Article", url: "https://junit.org/junit5/docs/current/user-guide/", label: "JUnit 5 Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Integration Testing",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/software-testing-integration-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=r4dQzDPyd-A", label: "Java Brains" },
              { type: "Article", url: "https://spring.io/guides/gs/testing-web/", label: "Spring Testing" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Test-Driven Development (TDD)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/test-driven-development-tdd/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Jv2uxzhPFl4", label: "Continuous Delivery" },
              { type: "Article", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", label: "Martin Fowler TDD" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Code Review Best Practices",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/code-review-best-practices/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=a9_0UUUNt-Y", label: "Google Code Review" },
              { type: "Article", url: "https://google.github.io/eng-practices/review/", label: "Google Review Guide" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Behavioral & Soft Skills",
        topics: [
          {
            title: "STAR Method for Interviews",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.themuse.com/advice/star-interview-method", label: "The Muse STAR" },
              { type: "Video", url: "https://www.youtube.com/watch?v=0Z9X0xarhdY", label: "Self Made Millennial" },
              { type: "Article", url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique", label: "Indeed STAR Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Leadership & Collaboration",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", label: "Amazon LP" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Qmb2m9RfDs8", label: "Dan Croitor" },
              { type: "Article", url: "https://igotanoffer.com/blogs/tech/amazon-leadership-principles", label: "LP Interview Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Communication Skills",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.indeed.com/career-advice/interviewing/interview-communication-skills", label: "Indeed Guide" },
              { type: "Video", url: "https://www.youtube.com/watch?v=3Z9Ry8SB4vE", label: "Linda Raynier" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Problem-Solving Approach",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/how-to-approach-a-coding-problem/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=GBuHSRDGZBY", label: "Clément Mihailescu" },
              { type: "Article", url: "https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/", label: "freeCodeCamp" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Technical Communication",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.themuse.com/advice/4-tips-for-explaining-complex-technical-concepts-simply", label: "The Muse" },
              { type: "Video", url: "https://www.youtube.com/watch?v=owSbL1l3u3s", label: "TechLead" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Handling Pressure & Deadlines",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.indeed.com/career-advice/interviewing/time-management-interview-questions", label: "Indeed Guide" },
              { type: "Video", url: "https://www.youtube.com/watch?v=cxOHYKu6nfU", label: "Interview Tips" },
            ],
            hasOfflineNotes: true
          }
        ]
      }
    ]
  }
};

export const TOTAL_BYTEDANCE_TOPICS = (() => {
  let count = 0;
  Object.values(byteDanceInterviewTopics).forEach(section => {
    section.subsections.forEach(sub => {
      count += sub.topics.length;
    });
  });
  return count;
})();
