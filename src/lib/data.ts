export const siteConfig = {
  name: "Prem Raj Oli",
  title: "Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 6+ years of experience building cloud-native, distributed systems. Crafting scalable solutions across finance, healthcare, and telecom.",
  email: "premrajoli008@gmail.com",
  phone: "214-519-9096",
  github: "https://github.com/devpremoli",
  linkedin: "https://www.linkedin.com/in/premthedev/",
  twitter: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java 8/11/17", "Go", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Backend & Frameworks",
    items: ["Spring Boot", "Spring Cloud", "Spring WebFlux", "FastAPI", "gRPC", "GraphQL", "Kafka"],
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "Redux Toolkit", "NgRx", "RxJS", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Oracle", "Amazon Aurora", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (ECS, EKS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Helm"],
  },
  {
    category: "AI/ML & Data",
    items: ["LangChain", "Hugging Face", "RAG Pipelines", "Vector Databases", "PySpark", "AWS Glue", "Pandas"],
  },
];

export const experiences = [
  {
    role: "Senior Full Stack Software Engineer",
    company: "Paycom",
    location: "Irving, TX",
    period: "Apr. 2025 – Present",
    description:
      "Building Spring Boot microservices with Java 17, implementing LLM-powered RAG pipelines with LangChain and vector databases, and orchestrating event-driven architectures with Kafka. Provisioning AWS infrastructure with Terraform and deploying to ECS Fargate with full CI/CD automation.",
    technologies: ["Java 17", "Spring Boot", "LangChain", "Kafka", "React", "Terraform", "AWS ECS"],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Comcast",
    location: "Philadelphia, PA",
    period: "Jan. 2024 – Mar. 2025",
    description:
      "Developed REST and GraphQL APIs with Spring WebFlux for high-volume subscriber workloads. Built gRPC services in Go for low-latency inter-service communication. Refactored monolith into Spring Cloud microservices and created ETL pipelines with AWS Glue and PySpark.",
    technologies: ["Java 17", "Go", "Spring Cloud", "GraphQL", "Angular", "AWS EKS", "PySpark"],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Fidelity Investments",
    location: "Westlake, TX",
    period: "Nov. 2022 – Dec. 2023",
    description:
      "Built portfolio valuation and transaction processing microservices with Spring Boot. Implemented multithreaded calculation engines using CompletableFuture for high market-volume windows. Developed fraud risk scoring endpoints with FastAPI and Python.",
    technologies: ["Java 11", "Spring Boot", "Kafka", "FastAPI", "Angular", "AWS", "Docker"],
  },
  {
    role: "Full Stack Java Developer",
    company: "Cardinal Health",
    location: "Dublin, OH",
    period: "Aug. 2021 – Oct. 2022",
    description:
      "Developed backend REST APIs with Spring Boot and PostgreSQL. Built event-driven services using AWS Lambda, S3, and SNS/SQS for inventory workflows. Implemented healthcare data integrations using HL7/FHIR standards.",
    technologies: ["Java 11", "Spring Boot", "AWS Lambda", "PostgreSQL", "HL7/FHIR", "Docker"],
  },
  {
    role: "Java Developer",
    company: "HSBC Bank",
    location: "Shelton, CT",
    period: "Jan. 2019 – Jul. 2021",
    description:
      "Developed high-volume transaction processing, settlements, and reconciliation services with Spring Boot and Spring Batch. Built React UI components for internal dashboards and configured Kafka for ordered transaction workflows.",
    technologies: ["Java 8", "Spring Boot", "Spring Batch", "Kafka", "React", "PostgreSQL", "Oracle"],
  },
];

export const projects = [
  {
    title: "RAG-Powered Knowledge Engine",
    description:
      "LLM-powered retrieval-augmented generation pipeline with vector embeddings, semantic search, document chunking, and context injection within event-driven microservices.",
    image: "/projects/rag-engine.png",
    technologies: ["LangChain", "Hugging Face", "FastAPI", "Vector DB", "Kafka"],
    github: "https://github.com/devpremoli",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Event Processing Platform",
    description:
      "Distributed event-driven architecture with Apache Kafka, Avro schema evolution, exactly-once delivery, dead-letter queues, and resilience patterns using Resilience4j.",
    image: "/projects/event-platform.png",
    technologies: ["Java 17", "Spring Boot", "Kafka", "Avro", "PostgreSQL"],
    github: "https://github.com/devpremoli",
    live: "#",
    featured: true,
  },
  {
    title: "Cloud-Native Microservices Platform",
    description:
      "Full microservices ecosystem with service discovery, config server, API gateway, gRPC inter-service communication, and infrastructure-as-code with Terraform on AWS.",
    image: "/projects/microservices.png",
    technologies: ["Spring Cloud", "Go", "gRPC", "Terraform", "AWS EKS", "Docker"],
    github: "https://github.com/devpremoli",
    live: "#",
    featured: true,
  },
  {
    title: "ETL Data Pipeline",
    description:
      "Large-scale data processing pipeline using AWS Glue and PySpark, transforming subscriber datasets with schema mapping, partitioned processing, and S3/Aurora loading.",
    image: "/projects/etl-pipeline.png",
    technologies: ["Python", "PySpark", "AWS Glue", "Aurora", "S3"],
    github: "https://github.com/devpremoli",
    live: "#",
    featured: false,
  },
];

export const blogPosts = [
  {
    title: "Building RAG Pipelines with LangChain and Vector Databases",
    excerpt:
      "A deep dive into implementing Retrieval-Augmented Generation pipelines with semantic search, document chunking, and context injection for enterprise applications.",
    date: "2025-12-15",
    slug: "rag-pipelines-langchain",
    readTime: "10 min read",
    tags: ["AI/ML", "LangChain", "RAG"],
  },
  {
    title: "Event-Driven Architecture with Kafka and Spring Boot",
    excerpt:
      "Lessons learned building fault-tolerant, exactly-once delivery systems with Apache Kafka, Avro schemas, and resilience patterns in production.",
    date: "2025-11-20",
    slug: "kafka-event-driven",
    readTime: "8 min read",
    tags: ["Kafka", "Spring Boot", "Microservices"],
  },
  {
    title: "My Engineering Journey: Building at Scale",
    excerpt:
      "How I built a career engineering distributed systems at scale across finance, healthcare, and telecom.",
    date: "2025-10-05",
    slug: "engineering-journey",
    readTime: "12 min read",
    tags: ["Career", "Personal"],
  },
];
