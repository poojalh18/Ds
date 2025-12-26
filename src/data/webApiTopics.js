// Web Development, APIs, Performance, and Scaling Topics
// Comprehensive coverage of web fundamentals, APIs, performance optimization, and scaling strategies

export const webApiTopics = {
  "Web & API Mastery": {
    subsections: [
      {
        name: "Web Fundamentals & Protocols",
        topics: [
          {
            title: "HTTP/HTTPS Protocol Deep Dive",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/http-full-form/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0", label: "Traversy Media" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP", label: "MDN HTTP" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HTTP/2 vs HTTP/3 (QUIC)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/difference-between-http-and-http-2/", label: "HTTP/2 vs HTTP/1" },
              { type: "Video", url: "https://www.youtube.com/watch?v=GIDzA7Jx9cM", label: "Hussein Nasser HTTP/3" },
              { type: "Article", url: "https://www.cloudflare.com/learning/performance/what-is-http3/", label: "Cloudflare HTTP/3" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "TCP vs UDP",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=uwoD5YsGACg", label: "Practical Networking" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "WebSockets & Real-time Communication",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8ARodQ4Wlf4", label: "Fireship" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", label: "MDN WebSockets" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Server-Sent Events (SSE)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/server-sent-events-in-html5/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=4HlNv1qpZFY", label: "Web Dev Simplified" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events", label: "MDN SSE" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "DNS & Domain Resolution",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=mpQZVYPuDGU", label: "Computerphile" },
              { type: "Article", url: "https://www.cloudflare.com/learning/dns/what-is-dns/", label: "Cloudflare DNS" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "SSL/TLS & HTTPS Handshake",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/secure-socket-layer-ssl/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=86cQJ0MMses", label: "Hussein Nasser" },
              { type: "Article", url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/", label: "TLS Handshake" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "CORS (Cross-Origin Resource Sharing)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/cross-origin-resource-sharing-cors/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=4KHiSt0oLJ0", label: "Web Dev Simplified" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", label: "MDN CORS" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "RESTful API Design",
        topics: [
          {
            title: "REST API Principles & Best Practices",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/rest-api-introduction/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=lsMQRaeKNDk", label: "Programming with Mosh" },
              { type: "Article", url: "https://restfulapi.net/", label: "RESTful API Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HTTP Methods (GET, POST, PUT, PATCH, DELETE)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/different-kinds-of-http-requests/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=guYMSP7JVTA", label: "Web Dev Simplified" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods", label: "MDN HTTP Methods" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HTTP Status Codes Deep Dive",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/http-response-status-codes/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=wJa5CTIFj7U", label: "Fireship" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", label: "MDN Status Codes" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Versioning Strategies",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/api-versioning/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=iKrUqgH5h8s", label: "ByteByteGo" },
              { type: "Article", url: "https://restfulapi.net/versioning/", label: "API Versioning Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Pagination Techniques",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/pagination-in-rest-api/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=WUICbOOtAic", label: "Code with Ania Kubów" },
              { type: "Article", url: "https://nordicapis.com/everything-you-need-to-know-about-api-pagination/", label: "Pagination Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Rate Limiting & Throttling",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/rate-limiting-in-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=mhUQe4BKZXs", label: "ByteByteGo" },
              { type: "Article", url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/", label: "Cloudflare Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Authentication (JWT, OAuth, API Keys)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/json-web-token-jwt/", label: "JWT" },
              { type: "Video", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM", label: "Web Dev Simplified JWT" },
              { type: "Video", url: "https://www.youtube.com/watch?v=996OiexHze0", label: "OAuth 2.0" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Documentation (OpenAPI/Swagger)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/what-is-swagger/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=pRS9LRBgjYg", label: "freeCodeCamp" },
              { type: "Article", url: "https://swagger.io/docs/", label: "Swagger Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HATEOAS & REST Maturity Model",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/richardson-maturity-model/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=g8uoRLFgjUw", label: "Hussein Nasser" },
              { type: "Article", url: "https://martinfowler.com/articles/richardsonMaturityModel.html", label: "Martin Fowler" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "GraphQL & Modern APIs",
        topics: [
          {
            title: "GraphQL Fundamentals",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/graphql/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ed8SzALpx1Q", label: "freeCodeCamp" },
              { type: "Article", url: "https://graphql.org/learn/", label: "Official GraphQL" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "GraphQL vs REST",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/graphql-vs-rest/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=yWzKJPw_VzM", label: "ByteByteGo" },
              { type: "Article", url: "https://www.howtographql.com/basics/1-graphql-is-the-better-rest/", label: "HowToGraphQL" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "GraphQL Queries, Mutations, Subscriptions",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/graphql-queries-and-mutations/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=7wzR4Ig5pTI", label: "Academind" },
              { type: "Article", url: "https://graphql.org/learn/queries/", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC & Protocol Buffers",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/what-is-grpc/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=gnchfOojMk4", label: "Gaurav Sen" },
              { type: "Article", url: "https://grpc.io/docs/what-is-grpc/introduction/", label: "Official gRPC" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "API Gateway Patterns",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/api-gateway-in-microservices/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=vHQqQBYJtLI", label: "IBM Technology" },
              { type: "Article", url: "https://microservices.io/patterns/apigateway.html", label: "Microservices.io" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "BFF (Backend for Frontend) Pattern",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/backend-for-frontend-bff-design-pattern/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=SSo-z28TcBk", label: "Tech Primers" },
              { type: "Article", url: "https://samnewman.io/patterns/architectural/bff/", label: "Sam Newman" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Web Performance Optimization",
        topics: [
          {
            title: "Critical Rendering Path",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/critical-rendering-path/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=PkOBnYxqj3k", label: "Google Chrome Developers" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Browser Rendering & Reflow/Repaint",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/browser-rendering-engine/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=SmE4OwHztCc", label: "JSConf" },
              { type: "Article", url: "https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg", label: "Reflow/Repaint" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Lazy Loading & Code Splitting",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/lazy-loading-in-es6/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=JU6sl_yyZqs", label: "Web Dev Simplified" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Image Optimization Techniques",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/image-optimization-techniques/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2QYpkrX2N48", label: "Kevin Powell" },
              { type: "Article", url: "https://web.dev/fast/#optimize-your-images", label: "Web.dev" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Caching Strategies (Browser, CDN, Server)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/caching-in-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=U3RkDLtS7uY", label: "ByteByteGo" },
              { type: "Article", url: "https://web.dev/http-cache/", label: "Web.dev HTTP Cache" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Service Workers & PWA",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/service-workers-in-javascript/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ksXwaWHCW6k", label: "Fireship PWA" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Web Vitals (LCP, FID, CLS)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/core-web-vitals/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=AQqFZ5t8uNc", label: "Google Chrome Developers" },
              { type: "Article", url: "https://web.dev/vitals/", label: "Web.dev" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Resource Hints (preload, prefetch, preconnect)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/resource-hints-in-html/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=AkfmJi3pAA4", label: "Harry Wolff" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Compression (Gzip, Brotli)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/gzip-compression/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=whGwm0Lky2s", label: "Hussein Nasser" },
              { type: "Article", url: "https://web.dev/codelab-text-compression/", label: "Web.dev" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HTTP/2 Server Push",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/http-2-server-push/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=XkGKmV1mKP8", label: "Hussein Nasser" },
              { type: "Article", url: "https://web.dev/performance-http2/", label: "Web.dev" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Scaling & Architecture",
        topics: [
          {
            title: "Horizontal vs Vertical Scaling",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/system-design-horizontal-and-vertical-scaling/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=xpDnVSmNFX0", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Load Balancing Algorithms",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/load-balancing-algorithms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY", label: "Gaurav Sen" },
              { type: "Article", url: "https://www.nginx.com/resources/glossary/load-balancing/", label: "NGINX Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Auto-Scaling & Elasticity",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/auto-scaling-in-cloud-computing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=jLc3fJfkmBc", label: "AWS Auto Scaling" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Database Replication & Sharding",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/database-sharding-a-system-design-concept/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=5faMjKuB9bc", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Connection Pooling",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/connection-pooling/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ivykqxeHq5c", label: "Hussein Nasser" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Database Indexing Strategies",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=-qNSXK7s7_w", label: "Hussein Nasser" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "N+1 Query Problem",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/n1-query-problem/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=uCbFMZYQbxE", label: "Hussein Nasser" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Circuit Breaker Pattern",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/circuit-breaker-design-pattern/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ADHcBxEXvFA", label: "Defog Tech" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Bulkhead Pattern",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/bulkhead-pattern/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=R2FT5edyKOg", label: "CodeOpinion" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Retry & Exponential Backoff",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/exponential-backoff-algorithm/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=W2WI1KYkfCk", label: "AWS" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Web Security",
        topics: [
          {
            title: "OWASP Top 10 Vulnerabilities",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/owasp-top-10-vulnerabilities/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=rWHvp7rUka8", label: "Fireship" },
              { type: "Article", url: "https://owasp.org/www-project-top-ten/", label: "OWASP Official" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "XSS (Cross-Site Scripting)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/what-is-cross-site-scripting-xss/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=EoaDgUgS6QA", label: "PwnFunction" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "CSRF (Cross-Site Request Forgery)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/cross-site-request-forgery-csrf/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=eWEgUcHPle0", label: "PwnFunction" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "SQL Injection Prevention",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sql-injection/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ciNHn38EyRc", label: "Computerphile" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Content Security Policy (CSP)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/content-security-policy/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=txHc4zk6w3s", label: "Web Dev Simplified" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP", label: "MDN CSP" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Authentication Best Practices",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/authentication-vs-authorization/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=926mknSW9Lo", label: "ByteByteGo" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Rate Limiting for DDoS Protection",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/rate-limiting-in-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=mhUQe4BKZXs", label: "ByteByteGo" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Modern Web Technologies",
        topics: [
          {
            title: "WebAssembly (WASM)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/web-assembly/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=cbB3QEwWMlA", label: "Fireship" },
              { type: "Article", url: "https://webassembly.org/", label: "Official Site" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Web Workers",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/web-workers-in-html5/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Gcp7triXFjg", label: "Fireship" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "IndexedDB & Browser Storage",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/indexeddb/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=g4U5WRzHitM", label: "dcode" },
              { type: "Article", url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API", label: "MDN" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "WebRTC",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/webrtc-introduction/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=WmR9IMUD_CY", label: "Fireship" },
              { type: "Article", url: "https://webrtc.org/", label: "Official Site" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "HTTP/3 & QUIC Protocol",
            difficulty: "Hard",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=GIDzA7Jx9cM", label: "Hussein Nasser" },
              { type: "Article", url: "https://www.cloudflare.com/learning/performance/what-is-http3/", label: "Cloudflare" },
            ],
            hasOfflineNotes: true
          }
        ]
      }
    ]
  }
};

export const TOTAL_WEB_API_TOPICS = (() => {
  let count = 0;
  Object.values(webApiTopics).forEach(section => {
    section.subsections.forEach(sub => {
      count += sub.topics.length;
    });
  });
  return count;
})();
