// Full-Stack Frontend Development Topics
// Comprehensive coverage of React, Next.js, State Management, Testing, and Modern Frontend

export const fullStackTopics = {
  "Full-Stack Frontend Mastery": {
    subsections: [
      {
        name: "React Fundamentals",
        topics: [
          {
            title: "React Components & JSX",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-components/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", label: "freeCodeCamp" },
              { type: "Article", url: "https://react.dev/learn", label: "Official React Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Hooks (useState, useEffect, useContext)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/reactjs-hooks/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=O6P86uwfdR0", label: "Web Dev Simplified" },
              { type: "Article", url: "https://react.dev/reference/react", label: "Hooks Reference" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Custom Hooks & Hook Patterns",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/custom-hooks-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=6ThXsUwLWvc", label: "Web Dev Simplified" },
              { type: "Article", url: "https://usehooks.com/", label: "useHooks Collection" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Performance Optimization (useMemo, useCallback, memo)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-performance-optimization/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Zl2dxZRq8-M", label: "Jack Herrington" },
              { type: "Article", url: "https://react.dev/learn/render-and-commit", label: "React Rendering" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Portals & Refs",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/reactjs-portals/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=LyLa7dU5tp8", label: "Web Dev Simplified" },
              { type: "Article", url: "https://react.dev/learn/manipulating-the-dom-with-refs", label: "Refs Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Error Boundaries & Suspense",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/error-boundaries-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=DNYXgtZBRPE", label: "Codevolution" },
              { type: "Article", url: "https://react.dev/reference/react/Suspense", label: "Suspense Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Context API Deep Dive",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/context-api-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc", label: "Web Dev Simplified" },
              { type: "Article", url: "https://react.dev/learn/passing-data-deeply-with-context", label: "Context Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Server Components (RSC)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-server-components/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=TQQPAU21ZUw", label: "Vercel" },
              { type: "Article", url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023", label: "RSC Update" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React 19 Features (use hook, Actions, Transitions)",
            difficulty: "Hard",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=ELGONlQP_HU", label: "Jack Herrington" },
              { type: "Article", url: "https://react.dev/blog/2024/04/25/react-19", label: "React 19 Release" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Next.js Framework",
        topics: [
          {
            title: "Next.js App Router vs Pages Router",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/next-js-app-router/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=gSSsZReIFRk", label: "Vercel" },
              { type: "Article", url: "https://nextjs.org/docs/app", label: "App Router Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/server-side-rendering-ssr-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=f1rF9YKm1Ms", label: "Fireship" },
              { type: "Article", url: "https://nextjs.org/docs/pages/building-your-application/rendering", label: "Next.js Rendering" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Incremental Static Regeneration (ISR)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/incremental-static-regeneration-in-nextjs/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=nrfuN_Fjmow", label: "Lee Robinson" },
              { type: "Article", url: "https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration", label: "ISR Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js API Routes & Route Handlers",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/nextjs-api-routes/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=WuyqHanK_5c", label: "Web Dev Simplified" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers", label: "Route Handlers" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js Middleware & Edge Functions",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/nextjs-middleware/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=3RQZnLu3ml0", label: "Vercel" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/routing/middleware", label: "Middleware Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js Image Optimization",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/nextjs-image-component/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=IU_qq_c_lKA", label: "Lee Robinson" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/optimizing/images", label: "Image Component" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js Caching Strategies",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/caching-in-nextjs/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=VBlSe8tvg4U", label: "Vercel" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/caching", label: "Caching Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js Server Actions",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/nextjs-server-actions/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=dDpZfOQBMaU", label: "Lee Robinson" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations", label: "Server Actions" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Next.js Deployment & Performance",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/deploying-nextjs-application/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2HBIzEx6IZA", label: "Vercel Deployment" },
              { type: "Article", url: "https://nextjs.org/docs/app/building-your-application/deploying", label: "Deployment Docs" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "State Management",
        topics: [
          {
            title: "Redux Toolkit (RTK) & Redux Fundamentals",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/redux-tutorial/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=9boMnm5X9ak", label: "Codevolution" },
              { type: "Article", url: "https://redux-toolkit.js.org/introduction/getting-started", label: "RTK Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Redux Middleware (Thunk, Saga)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/redux-thunk/", label: "Redux Thunk" },
              { type: "Video", url: "https://www.youtube.com/watch?v=_K1Zimbo5pkP", label: "Academind" },
              { type: "Article", url: "https://redux-saga.js.org/", label: "Redux Saga" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Zustand - Lightweight State Management",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/zustand/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=_ngCLZ5Iz-0", label: "Jack Herrington" },
              { type: "Article", url: "https://docs.pmnd.rs/zustand/getting-started/introduction", label: "Zustand Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Jotai - Atomic State Management",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/jotai/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=eVfw4pRDUIY", label: "Jack Herrington" },
              { type: "Article", url: "https://jotai.org/docs/introduction", label: "Jotai Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "TanStack Query (React Query) - Server State",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-query/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8K1N3fE-cDs", label: "Codevolution" },
              { type: "Article", url: "https://tanstack.com/query/latest/docs/framework/react/overview", label: "TanStack Query" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Recoil - Facebook's State Management",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/recoil-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=_ISAA_Jt9kI", label: "Fireship" },
              { type: "Article", url: "https://recoiljs.org/docs/introduction/getting-started", label: "Recoil Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "MobX - Observable State Management",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/mobx/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=pnhIJA64ByY", label: "Fireship" },
              { type: "Article", url: "https://mobx.js.org/README.html", label: "MobX Docs" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Frontend Testing",
        topics: [
          {
            title: "Jest Testing Framework",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/jest-testing-framework/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=FgnxcUQ5vho", label: "Traversy Media" },
              { type: "Article", url: "https://jestjs.io/docs/getting-started", label: "Jest Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React Testing Library",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-testing-library/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=7dTTFW7yACQ", label: "Codevolution" },
              { type: "Article", url: "https://testing-library.com/docs/react-testing-library/intro/", label: "RTL Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Vitest - Vite-Native Testing",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/vitest/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=7f-71kYhK00", label: "Web Dev Simplified" },
              { type: "Article", url: "https://vitest.dev/guide/", label: "Vitest Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Cypress E2E Testing",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/cypress-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=u8vMu7viCm8", label: "freeCodeCamp" },
              { type: "Article", url: "https://docs.cypress.io/guides/overview/why-cypress", label: "Cypress Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Playwright - Modern E2E Testing",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/playwright-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=wawbt1cATsk", label: "Microsoft" },
              { type: "Article", url: "https://playwright.dev/docs/intro", label: "Playwright Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Storybook - Component Testing",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/storybook/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=BySFuXgG-ow", label: "freeCodeCamp" },
              { type: "Article", url: "https://storybook.js.org/docs/react/get-started/introduction", label: "Storybook Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Visual Regression Testing (Chromatic, Percy)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/visual-regression-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=QXLcXqc8S6s", label: "Storybook" },
              { type: "Article", url: "https://www.chromatic.com/docs/", label: "Chromatic Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Test-Driven Development (TDD) for Frontend",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/test-driven-development-tdd/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=Jv2uxzhPFl4", label: "Continuous Delivery" },
              { type: "Article", url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library", label: "Testing Best Practices" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Build Tools & Bundlers",
        topics: [
          {
            title: "Vite - Next Generation Build Tool",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/vite/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=KCrXgy8qtjM", label: "Fireship" },
              { type: "Article", url: "https://vitejs.dev/guide/", label: "Vite Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Webpack Configuration & Optimization",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/webpack/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=MpGLUVbqoYQ", label: "freeCodeCamp" },
              { type: "Article", url: "https://webpack.js.org/concepts/", label: "Webpack Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "esbuild - Fast JavaScript Bundler",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/esbuild/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=vV7Krm05Qlg", label: "Fireship" },
              { type: "Article", url: "https://esbuild.github.io/getting-started/", label: "esbuild Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Turbopack - Webpack Successor by Vercel",
            difficulty: "Medium",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=T4K5hds7t3M", label: "Vercel" },
              { type: "Article", url: "https://turbo.build/pack/docs", label: "Turbopack Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Rollup - Module Bundler",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/rollup-bundler/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=ICeH-Yc3GjQ", label: "Fireship" },
              { type: "Article", url: "https://rollupjs.org/introduction/", label: "Rollup Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Module Federation & Micro-Frontends",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/micro-frontends/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=s_Fs4AXsTnA", label: "Jack Herrington" },
              { type: "Article", url: "https://webpack.js.org/concepts/module-federation/", label: "Module Federation" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "TypeScript for React",
        topics: [
          {
            title: "TypeScript Basics & Type System",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/typescript-tutorial/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=d56mG7DezGs", label: "Programming with Mosh" },
              { type: "Article", url: "https://www.typescriptlang.org/docs/handbook/intro.html", label: "TS Handbook" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "React with TypeScript Best Practices",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-with-typescript/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=TPACABQTHvM", label: "Codevolution" },
              { type: "Article", url: "https://react-typescript-cheatsheet.netlify.app/", label: "React TS Cheatsheet" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Advanced TypeScript Patterns (Generics, Utility Types)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/typescript-generics/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=nePDL5lQSE4", label: "Matt Pocock" },
              { type: "Article", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html", label: "Utility Types" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Type-Safe API Calls with TypeScript",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/type-safe-api-typescript/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=I6ypD7qv3Z8", label: "ByteGrad" },
              { type: "Article", url: "https://www.totaltypescript.com/", label: "Total TypeScript" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "CSS & Styling Solutions",
        topics: [
          {
            title: "Tailwind CSS Mastery",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/tailwind-css-tutorial/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=mr15Xzb1Ook", label: "Traversy Media" },
              { type: "Article", url: "https://tailwindcss.com/docs", label: "Tailwind Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "CSS-in-JS (Styled Components, Emotion)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/styled-components/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=syqw5UJrfoc", label: "Traversy Media" },
              { type: "Article", url: "https://styled-components.com/docs", label: "Styled Components" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "CSS Modules",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/css-modules/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=1oGIj1c5lE4", label: "Web Dev Simplified" },
              { type: "Article", url: "https://github.com/css-modules/css-modules", label: "CSS Modules Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Sass/SCSS Advanced Features",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sass-tutorial/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=_a5j7KoflTs", label: "freeCodeCamp" },
              { type: "Article", url: "https://sass-lang.com/guide", label: "Sass Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Responsive Design & Mobile-First Approach",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/responsive-web-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=srvUrASNj0s", label: "freeCodeCamp" },
              { type: "Article", url: "https://web.dev/responsive-web-design-basics/", label: "Web.dev" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Forms & Validation",
        topics: [
          {
            title: "React Hook Form",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/react-hook-form/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=KzcPKB9SOEw", label: "Codevolution" },
              { type: "Article", url: "https://react-hook-form.com/get-started", label: "RHF Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Formik - Form Library",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/formik-in-react/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=a94FOvaBomQ", label: "Codevolution" },
              { type: "Article", url: "https://formik.org/docs/overview", label: "Formik Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Zod - TypeScript Schema Validation",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/zod-validation/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=AeQ3f4zmSMs", label: "ByteGrad" },
              { type: "Article", url: "https://zod.dev/", label: "Zod Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Yup - Schema Validation",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/yup-validation/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=1Ah-vOUDC_k", label: "Codevolution" },
              { type: "Article", url: "https://github.com/jquense/yup", label: "Yup Docs" },
            ],
            hasOfflineNotes: true
          }
        ]
      }
    ]
  }
};

export const TOTAL_FULLSTACK_TOPICS = (() => {
  let count = 0;
  Object.values(fullStackTopics).forEach(section => {
    section.subsections.forEach(sub => {
      count += sub.topics.length;
    });
  });
  return count;
})();
