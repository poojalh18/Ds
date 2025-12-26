// Generative AI & LLM Topics
// Comprehensive coverage of Gen AI, LLMs, RAG, and AI System Design

export const genAiTopics = {
  "Generative AI & LLMs": {
    subsections: [
      {
        name: "LLM Fundamentals",
        topics: [
          {
            title: "Transformer Architecture Deep Dive",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/transformer-neural-network/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=4Bdc55j80l8", label: "3Blue1Brown" },
              { type: "Video", url: "https://www.youtube.com/watch?v=zxQyTK8quyY", label: "Andrej Karpathy" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Attention Mechanisms (Self, Multi-Head, Cross)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/attention-mechanism-in-neural-networks/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=PSs6nxngL6k", label: "StatQuest" },
              { type: "Article", url: "https://jalammar.github.io/illustrated-transformer/", label: "Illustrated Transformer" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Tokenization & BPE (Byte Pair Encoding)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/byte-pair-encoding-bpe-in-nlp/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=HEikzVL-lZU", label: "Andrej Karpathy" },
              { type: "Article", url: "https://huggingface.co/learn/nlp-course/chapter6/5", label: "HuggingFace" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Positional Encoding & Embeddings",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/positional-encoding-in-transformers/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=1biZfFLPRSY", label: "CodeEmporium" },
              { type: "Article", url: "https://kazemnejad.com/blog/transformer_architecture_positional_encoding/", label: "PE Explained" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Pre-training, Fine-tuning & Transfer Learning",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/transfer-learning/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=5T-iXNNiwIs", label: "IBM Technology" },
              { type: "Article", url: "https://huggingface.co/learn/nlp-course/chapter3/1", label: "Fine-tuning Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Parameter Efficient Fine-Tuning (PEFT, LoRA, QLoRA)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/lora-for-fine-tuning-llms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=DhRoTONcyZE", label: "Trelis Research" },
              { type: "Article", url: "https://huggingface.co/docs/peft/index", label: "PEFT Documentation" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Quantization (INT8, INT4, GPTQ, AWQ)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/model-quantization/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=0VdNflU08yA", label: "Trelis Research" },
              { type: "Article", url: "https://huggingface.co/docs/optimum/concept_guides/quantization", label: "Quantization Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Prompt Engineering Best Practices",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/prompt-engineering/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=_ZvnD73m40o", label: "Isa Fulford OpenAI" },
              { type: "Article", url: "https://platform.openai.com/docs/guides/prompt-engineering", label: "OpenAI Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Few-Shot & Zero-Shot Learning",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/few-shot-learning/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=hER7w7w6d2w", label: "Yannic Kilcher" },
              { type: "Article", url: "https://arxiv.org/abs/2005.14165", label: "GPT-3 Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Chain of Thought (CoT) Prompting",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/chain-of-thought-prompting/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=H4J59iG3t5o", label: "AI Explained" },
              { type: "Article", url: "https://arxiv.org/abs/2201.11903", label: "CoT Paper" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "RAG (Retrieval Augmented Generation)",
        topics: [
          {
            title: "RAG Architecture & Workflow",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/retrieval-augmented-generation-rag/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=T-D1OfcDW1M", label: "IBM Technology" },
              { type: "Article", url: "https://arxiv.org/abs/2005.11401", label: "RAG Paper" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Vector Databases (Pinecone, Weaviate, Chroma)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/vector-databases/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=klTvEwg3oJ4", label: "AssemblyAI" },
              { type: "Article", url: "https://www.pinecone.io/learn/vector-database/", label: "Pinecone Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Embedding Models (Sentence Transformers, E5, BGE)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/sentence-embeddings/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=QdDoFfkVkcw", label: "AssemblyAI" },
              { type: "Article", url: "https://www.sbert.net/", label: "Sentence Transformers" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Semantic Search & Similarity Metrics",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/cosine-similarity/", label: "Cosine Similarity" },
              { type: "Video", url: "https://www.youtube.com/watch?v=e9U0QAFbfLI", label: "Pinecone" },
              { type: "Article", url: "https://www.elastic.co/what-is/semantic-search", label: "Elastic Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Chunking Strategies for Documents",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/text-chunking/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8OJC21T2SL4", label: "LangChain" },
              { type: "Article", url: "https://python.langchain.com/docs/modules/data_connection/document_transformers/", label: "LangChain Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Hybrid Search (Keyword + Semantic)",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/hybrid-search/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=6pAKEv2lvxo", label: "Weaviate" },
              { type: "Article", url: "https://weaviate.io/blog/hybrid-search-explained", label: "Hybrid Search Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Re-ranking & Query Optimization",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/query-optimization-in-information-retrieval/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=NDjN65dL_zA", label: "LlamaIndex" },
              { type: "Article", url: "https://docs.llamaindex.ai/en/stable/examples/node_postprocessor/CohereRerank.html", label: "Re-ranking Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Context Window Management",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/context-window-in-llms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=PpqyxCKKJHw", label: "AI Explained" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "RAG Evaluation Metrics (Faithfulness, Relevance)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/evaluation-metrics-for-rag/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=cEyHsMzbZBs", label: "DeepLearning.AI" },
              { type: "Article", url: "https://docs.ragas.io/en/stable/", label: "RAGAS Framework" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "LLM APIs & Integration",
        topics: [
          {
            title: "OpenAI API (GPT-4, GPT-4 Turbo, Vision)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/openai-api-tutorial/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=uRQH2CFvedY", label: "freeCodeCamp" },
              { type: "Article", url: "https://platform.openai.com/docs/introduction", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Anthropic Claude API (Claude 3 Opus, Sonnet, Haiku)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/anthropic-claude-api/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=7C2MgKuAp4Y", label: "Anthropic" },
              { type: "Article", url: "https://docs.anthropic.com/claude/docs", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Google Gemini API (Gemini Pro, Ultra)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/google-gemini-api/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=gK-jWY5mLYk", label: "Google AI" },
              { type: "Article", url: "https://ai.google.dev/tutorials/python_quickstart", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Cohere API (Embed, Generate, Rerank)",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/cohere-api/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=8qL7nRe_c4g", label: "Cohere" },
              { type: "Article", url: "https://docs.cohere.com/docs", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Hugging Face Inference API",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/hugging-face-transformers/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=QEaBAZQCtwE", label: "HuggingFace" },
              { type: "Article", url: "https://huggingface.co/docs/api-inference/index", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LangChain Framework Deep Dive",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/langchain/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=LbT1yp6quS8", label: "freeCodeCamp" },
              { type: "Article", url: "https://python.langchain.com/docs/get_started/introduction", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LlamaIndex for Data Frameworks",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/llamaindex/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=N0MvYf3kNpk", label: "LlamaIndex" },
              { type: "Article", url: "https://docs.llamaindex.ai/en/stable/", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Function Calling & Tool Use",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/function-calling-in-llms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=0lOSvOoF2to", label: "Trelis Research" },
              { type: "Article", url: "https://platform.openai.com/docs/guides/function-calling", label: "OpenAI Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Streaming Responses & SSE",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/server-sent-events-in-html5/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=4HlNv1qpZFY", label: "Web Dev Simplified" },
              { type: "Article", url: "https://platform.openai.com/docs/api-reference/streaming", label: "Streaming API" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Token Management & Cost Optimization",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/token-management-in-llms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=nMkNb_7EQsk", label: "AI Jason" },
              { type: "Article", url: "https://openai.com/pricing", label: "Pricing Guide" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Advanced gRPC for AI Systems",
        topics: [
          {
            title: "gRPC Fundamentals & Protocol Buffers",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/what-is-grpc/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=gnchfOojMk4", label: "Gaurav Sen" },
              { type: "Article", url: "https://grpc.io/docs/what-is-grpc/introduction/", label: "Official Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC vs REST vs GraphQL",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-vs-rest/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=yWzKJPw_VzM", label: "ByteByteGo" },
              { type: "Article", url: "https://blog.dreamfactory.com/grpc-vs-rest-how-does-grpc-compare-with-traditional-rest-apis/", label: "Comparison" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Streaming (Unary, Server, Client, Bidirectional)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-streaming/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2Gmk-JjJdmQ", label: "Hussein Nasser" },
              { type: "Article", url: "https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle", label: "Streaming Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC for ML Model Serving (TensorFlow Serving)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/tensorflow-serving/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=q_IkJcPyNl0", label: "TensorFlow" },
              { type: "Article", url: "https://www.tensorflow.org/tfx/guide/serving", label: "TF Serving Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Load Balancing & Service Mesh",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-load-balancing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2N_sUmpjzZk", label: "Google Cloud" },
              { type: "Article", url: "https://grpc.io/blog/grpc-load-balancing/", label: "Load Balancing Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Error Handling & Status Codes",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-error-handling/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=MW5kVEKIzSY", label: "Hussein Nasser" },
              { type: "Article", url: "https://grpc.io/docs/guides/error-handling/", label: "Error Handling" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Interceptors & Middleware",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-interceptors/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=R_b5z9QzP60", label: "CodeWithYu" },
              { type: "Article", url: "https://grpc.io/docs/guides/interceptors/", label: "Interceptors Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Security (TLS, Authentication, Authorization)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-authentication/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=AG5gx57-o_k", label: "Tech School" },
              { type: "Article", url: "https://grpc.io/docs/guides/auth/", label: "Auth Guide" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC-Web for Browser Communication",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-web/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=RtyKEDZipsM", label: "Hussein Nasser" },
              { type: "Article", url: "https://grpc.io/docs/platforms/web/basics/", label: "gRPC-Web Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "gRPC Performance Optimization",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/grpc-performance/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=BOW7jd136Ok", label: "Google Cloud" },
              { type: "Article", url: "https://grpc.io/docs/guides/performance/", label: "Performance Guide" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "AI System Design",
        topics: [
          {
            title: "Design LLM-powered Chatbot",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/design-chatbot-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=2oJ7FK3LyN0", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design RAG System for Enterprise",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/rag-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=T-D1OfcDW1M", label: "IBM Technology" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Content Moderation System",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/content-moderation-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=DxkrHIhCXwo", label: "System Design Interview" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design Recommendation System with LLMs",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/recommendation-system-system-design/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=CtmygYDz9bE", label: "Gaurav Sen" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Design AI Code Assistant (GitHub Copilot-like)",
            difficulty: "Hard",
            resources: [
              { type: "Video", url: "https://www.youtube.com/watch?v=8FQPSe7GFw0", label: "ByteByteGo" },
              { type: "Article", url: "https://www.geeksforgeeks.org/github-copilot-system-design/", label: "GeeksforGeeks" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LLM Inference Optimization & Caching",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/llm-inference-optimization/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=51Tvx-VaQ28", label: "AI Explained" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Multi-Modal AI Systems (Vision + Language)",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/multimodal-ai/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=brhACGFHv4s", label: "Yannic Kilcher" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "AI Agent Architecture & AutoGPT",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/ai-agents/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=bRFLE9qi3tI", label: "AI Explained" },
              { type: "Article", url: "https://docs.agpt.co/", label: "AutoGPT Docs" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LLM Monitoring & Observability",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/llm-monitoring/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=RqJqjrIxEu8", label: "Arize AI" },
              { type: "Article", url: "https://www.langchain.com/langsmith", label: "LangSmith" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Ethical AI & Bias Mitigation",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/bias-in-ai/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=59bMh59JQDo", label: "IBM Technology" },
              { type: "Article", url: "https://www.microsoft.com/en-us/ai/responsible-ai", label: "Responsible AI" },
            ],
            hasOfflineNotes: true
          }
        ]
      },
      {
        name: "Gen AI Production & MLOps",
        topics: [
          {
            title: "Model Deployment Strategies",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/ml-model-deployment/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=JlK46EzL6jI", label: "DeepLearning.AI" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "A/B Testing for LLM Applications",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/ab-testing/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=g2S7DKIbZFQ", label: "ByteByteGo" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LLM Fine-tuning Pipeline",
            difficulty: "Hard",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/fine-tuning-llms/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=eC6Hd1hFvos", label: "DeepLearning.AI" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "Prompt Version Control & Management",
            difficulty: "Easy",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/prompt-management/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=YkUG1VYEe4U", label: "Weights & Biases" },
            ],
            hasOfflineNotes: true
          },
          {
            title: "LLM Safety & Content Filtering",
            difficulty: "Medium",
            resources: [
              { type: "Article", url: "https://www.geeksforgeeks.org/content-filtering/", label: "GeeksforGeeks" },
              { type: "Video", url: "https://www.youtube.com/watch?v=W7KGYEbAeC0", label: "OpenAI" },
              { type: "Article", url: "https://platform.openai.com/docs/guides/moderation", label: "Moderation API" },
            ],
            hasOfflineNotes: true
          }
        ]
      }
    ]
  }
};

export const TOTAL_GENAI_TOPICS = (() => {
  let count = 0;
  Object.values(genAiTopics).forEach(section => {
    section.subsections.forEach(sub => {
      count += sub.topics.length;
    });
  });
  return count;
})();
