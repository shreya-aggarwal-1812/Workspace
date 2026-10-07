// 1. Glossary Data
const glossaryTerms = [
    {
        term: "Artificial Intelligence (AI)",
        category: "fundamental",
        definition: "The broad science of training machines to perform tasks that typically require human intelligence, such as reasoning, learning, and decision-making.",
        details: "AI is the umbrella term that encompasses machine learning, deep learning, natural language processing, and robotics."
    },
    {
        term: "GPT (Generative Pre-trained Transformer)",
        category: "fundamental",
        definition: "A type of state-of-the-art language model architecture developed to generate human-like text by predicting the next word (token) in a sequence.",
        details: "GPT models are 'pre-trained' on massive web datasets using self-supervised learning, and then fine-tuned (often via RLHF) to act as helpful conversational agents."
    },
    {
        term: "AGI (Artificial General Intelligence)",
        category: "fundamental",
        definition: "A theoretical form of AI that possesses the ability to understand, learn, and apply knowledge across any intellectual task at a level equal to or greater than a human.",
        details: "Unlike narrow AI (which handles specific tasks like Chess or Translation), AGI would adapt to completely new domains autonomously."
    },
    {
        term: "Machine Learning (ML)",
        category: "fundamental",
        definition: "A subset of AI where computers learn patterns from data without being explicitly programmed.",
        details: "Instead of writing rules, developers train algorithms on historical datasets, allowing the system to make predictions on new data."
    },
    {
        term: "Deep Learning (DL)",
        category: "fundamental",
        definition: "A subfield of ML based on artificial neural networks with multiple layers (hence 'deep').",
        details: "It mimics the structure of the human brain to learn representations of data. DL drives modern image recognition, voice recognition, and LLMs."
    },
    {
        term: "Large Language Model (LLM)",
        category: "fundamental",
        definition: "A deep learning model trained on massive amounts of text data to understand and generate human-like language.",
        details: "LLMs like Gemini predict the next token (word/character) in a sequence, allowing them to write code, translate, and converse."
    },
    {
        term: "Transformer Architecture",
        category: "fundamental",
        definition: "The neural network architecture introduced in 2017 ('Attention Is All You Need') that powers modern LLMs.",
        details: "It processes input sequences in parallel (unlike older RNNs) and uses self-attention to understand context across long distances in text."
    },
    {
        term: "RLHF (Reinforcement Learning from Human Feedback)",
        category: "fundamental",
        definition: "A method of aligning LLMs to human preferences by training them based on human ratings of their responses.",
        details: "Human evaluators grade multiple responses, a reward model learns their preferences, and the LLM is optimized to generate helpful, safe outputs."
    },
    {
        term: "LoRA (Low-Rank Adaptation)",
        category: "fundamental",
        definition: "An efficient fine-tuning technique that reduces training memory by freezing base weights and adding tiny trainable matrices.",
        details: "LoRA makes it practical to customize large LLMs on consumer-grade hardware by only training a fraction of a percent of the parameters."
    },
    {
        term: "Context Window",
        category: "fundamental",
        definition: "The maximum amount of text (tokens) an LLM can read and process in a single prompt-response cycle.",
        details: "A larger context window allows the model to remember entire codebases or long books. For example, Gemini 1.5 Pro supports up to 2 million tokens."
    },
    {
        term: "RAG (Retrieval-Augmented Generation)",
        category: "fundamental",
        definition: "A technique that retrieves relevant information from external databases and appends it to the user's prompt.",
        details: "RAG connects the static LLM to live, dynamic information or private documents, eliminating the need to constantly retrain the model."
    },
    {
        term: "AI Agent",
        category: "agentic",
        definition: "An AI system that is given a goal and autonomously plans, uses tools, and executes steps to achieve it.",
        details: "Unlike a standard LLM which just responds to a prompt, an agent operates in a loop: planning, using tools (search, file edit, calculator), observing results, and correcting its path."
    },
    {
        term: "Agentic AI",
        category: "agentic",
        definition: "A paradigm shift from static conversational chatbots to proactive, goal-oriented AI systems that work autonomously.",
        details: "Agentic AI uses loops and iterative reasoning to solve multi-step problems over hours or days without constant human intervention."
    },
    {
        term: "ReAct Framework (Reasoning + Acting)",
        category: "agentic",
        definition: "A design pattern where an agent alternates between 'Thought' (reasoning) and 'Action' (invoking tools).",
        details: "By writing out its thinking process first, the agent plans more effectively. The cycle repeats: Thought -> Action -> Observation -> Thought -> Final Answer."
    },
    {
        term: "Model Context Protocol (MCP)",
        category: "mcp",
        definition: "An open standard that defines how AI models connect securely to local or remote tools and data sources.",
        details: "MCP solves the fragmentation of AI integrations by standardizing how applications (like IDEs) expose resources, prompts, and tools to LLMs."
    },
    {
        term: "Vector Database",
        category: "agentic",
        definition: "A specialized database designed to store and query high-dimensional vector embeddings efficiently.",
        details: "Used heavily in RAG systems and Agentic memory, vector databases allow agents to retrieve semantic matches at lightning speed."
    },
    {
        term: "Embeddings",
        category: "fundamental",
        definition: "High-dimensional vectors mapping the semantic meaning of text, allowing computers to compare similarity between words or concepts.",
        details: "For example, 'king' and 'queen' will be mapped closer to each other in vector space than 'banana'."
    },
    {
        term: "Jailbreaking",
        category: "fundamental",
        definition: "The act of bypass-triggering safety guardrails in an LLM to generate restricted, dangerous, or unaligned text.",
        details: "Users use roleplay, translation loops, or adversarial tokens to trick the model's safety classifiers."
    }
];

// 2. Prepopulated AI News articles (drawn strictly from the 15 specified websites)
const aiNewsArticles = [
    {
        title: "Small Businesses Accelerate AI Adoption to Tackle Administrative Load",
        source: "AllBusiness.com",
        date: "July 2, 2026",
        summary: "A survey of small business founders reveals that 64% have integrated task agents to manage bookkeeping and inventory. The focus has shifted from hypothetical benefits to practical, bottom-line operations.",
        link: "https://www.allbusiness.com/ai-adoption-small-business-2026"
    },
    {
        title: "Claude Sonnet 5 Launches: The New Startup Integration Standard",
        source: "TechCrunch (AI)",
        date: "July 1, 2026",
        summary: "Anthropic's latest release, Sonnet 5, sets records for enterprise developers. TechCrunch explores how early-stage startups are replacing expensive custom pipelines with native Sonnet agents to slash API expenses.",
        link: "https://www.techcrunch.com/anthropic-claude-sonnet-5-startup-launch"
    },
    {
        title: "How Financial Leaders are Using AIOps to Combat Ledger Fraud",
        source: "Forbes (AI)",
        date: "July 1, 2026",
        summary: "Forbes analyzes the growth of autonomous financial audits. Major banks are utilizing neural networks to analyze millions of transactions per second, identifying discrepancies before books close.",
        link: "https://www.forbes.com/ai-financial-aiops-ledger-fraud"
    },
    {
        title: "The Ethical Dilemma of Brain-to-Text MEG Scanning Interfaces",
        source: "Time.com",
        date: "June 30, 2026",
        summary: "Following Meta's release of non-invasive words decoding scanners, TIME explores the long-term privacy concerns of cognitive monitoring and what it means for neurodiversity laws.",
        link: "https://www.time.com/meta-brain-to-text-ethics"
    },
    {
        title: "Introducing GPT-5: Expanding Multimodal Reasoning and Logic Chains",
        source: "OpenAI Blog",
        date: "June 28, 2026",
        summary: "Our latest frontier model introduces structural upgrades to mathematical reasoning, coding syntax checks, and a larger context window optimized for parallel agent pipelines.",
        link: "https://www.openai.com/blog/introducing-gpt-5"
    },
    {
        title: "Constitutional Safety Guidelines for Multi-Agent Workspaces",
        source: "Anthropic Research",
        date: "June 27, 2026",
        summary: "Anthropic outlines a training handbook to ensure secondary agents inherit system principles. The research focuses on preventing cascading instructions loops when multiple agents collaborate.",
        link: "https://www.anthropic.co/constitutional-safety-multi-agent-workspaces"
    },
    {
        title: "The Rise of Specialized Newsletters: How Substack Shaped the AI Debate",
        source: "Substack (AI Newsletters)",
        date: "June 26, 2026",
        summary: "Writers like Ethan Mollick utilize Substack to discuss real-world classrooms integrations, bypassing academic publication delays to share operational findings directly with educators.",
        link: "https://www.substack.com/ai-newsletter-shaping-dialogue"
    },
    {
        title: "MIT Tech Review: Separating LLM Hype from Production-Grade Reality",
        source: "MIT Technology Review",
        date: "June 25, 2026",
        summary: "MIT correspondents publish a study revealing that while 80% of companies built prototype chatbots in early 2026, only a fraction succeeded in scaling them due to database security constraints.",
        link: "https://www.technologyreview.com/llm-hype-versus-production-reality"
    },
    {
        title: "Stanford HAI Releases 2026 AI Index: Global Policy Gaps Widen",
        source: "Stanford HAI",
        date: "June 24, 2026",
        summary: "The Stanford Institute for Human-Centered Artificial Intelligence publishes its yearly report. Highlights include rising data-center carbon footprints and the urgent need for international transparency codes.",
        link: "https://hai.stanford.edu/news/2026-ai-index-report-policy-gaps"
    },
    {
        title: "The Batch: Andrew Ng Discusses Reinforcement Learning in Agriculture",
        source: "The Batch (DeepLearning.AI)",
        date: "June 23, 2026",
        summary: "In this week's issue, Andrew Ng details how neural vision sensors inside tractors learn to target soil deficiencies, reducing chemical costs while boosting corn yields.",
        link: "https://www.deeplearning.ai/the-batch/andrew-ng-reinforcement-learning-agriculture"
    },
    {
        title: "Tech Giants File Confidential IPO Documents Amid AI Consolidation",
        source: "The Wall Street Journal",
        date: "June 22, 2026",
        summary: "The Wall Street Journal reports on confidential financial filings. Tech labs seek public market capitalizations to fund massive data center hardware purchases.",
        link: "https://www.wsj.com/ai-startup-confidential-ipo-filings"
    },
    {
        title: "Hugging Face Expands Hub to Support Model Context Protocol (MCP)",
        source: "Hugging Face Blog",
        date: "June 21, 2026",
        summary: "The open-source community integrates MCP directly. Developers can now download open-weight models that automatically discover and connect to local operating systems tools.",
        link: "https://www.huggingface.co/blog/hugging-face-mcp-integration"
    },
    {
        title: "AlphaFold 3 Maps Cell-Level Protein-Ligand Chemistry at Scale",
        source: "Google DeepMind Blog",
        date: "June 20, 2026",
        summary: "DeepMind researchers share molecular modeling updates. AlphaFold 3 successfully maps complex chemical bonds, reducing drug formulation schedules from months to hours.",
        link: "https://www.deepmind.com/blog/alphafold-3-protein-ligand-breakthrough"
    },
    {
        title: "NVIDIA Introduces Blackwell-2 Architecture Optimized for Agentic Loops",
        source: "NVIDIA Technical Blog",
        date: "June 19, 2026",
        summary: "NVIDIA's developer team outlines memory upgrades tailored to multi-agent reasoning loops, boosting context fetching speeds by 4x to minimize agent latency.",
        link: "https://developer.nvidia.com/blog/blackwell-2-agentic-loop-optimization"
    },
    {
        title: "Deep Dive: Why Self-Attention Remains the Bottleneck of context",
        source: "The Gradient",
        date: "June 18, 2026",
        summary: "The Gradient publishes a technical essay discussing the quadratic cost of self-attention calculations and alternative neural architectures vying for contextual supremacy.",
        link: "https://www.thegradient.pub/self-attention-quadratic-bottleneck"
    }
];

// 3. Sector Data
const sectorMatrix = [
    {
        sector: "Technology & Cloud Services",
        level: "High",
        class: "lvl-high",
        desc: "Core developers of foundation models, high-performance computing clusters, APIs, and hosting infrastructure.",
        companies: [
            { name: "Google", case: "Powers search with Gemini, launches AlphaFold in biotech, and operates Vertex AI cloud orchestration." },
            { name: "Microsoft", case: "Partners with OpenAI to integrate Copilot in Office suite and builds Azure AI superclusters." }
        ]
    },
    {
        sector: "E-Commerce",
        level: "High",
        class: "lvl-high",
        desc: "Uses predictive analytics for shopping trends, semantic recommendation networks, and automated support.",
        companies: [
            { name: "Amazon", case: "Uses AI for warehouse robotics coordination, product review summaries, and dynamic merchant ads." },
            { name: "Shopify", case: "Deploys Shopify Sidekick, an AI agent helping merchants manage sales, code templates, and customer emails." }
        ]
    },
    {
        sector: "Logistics & Delivery",
        level: "High",
        class: "lvl-high",
        desc: "Algorithmic route optimization, automated package sorting, and dynamic delivery window predictions.",
        companies: [
            { name: "UPS", case: "Uses ORION (On-road Integrated Optimization and Navigation) to save miles and optimize driver routing." },
            { name: "FedEx", case: "Utilizes FedEx Surround for real-time sensor analytics, predicting weather delays before packages transit." }
        ]
    },
    {
        sector: "Healthcare & Diagnostics",
        level: "Transforming",
        class: "lvl-trans",
        desc: "Uses computer vision for oncology screening, generative AI for drug discovery, and RAG for patient summaries.",
        companies: [
            { name: "Mayo Clinic", case: "Integrates clinical AI assistants to draft replies to patient portal queries and summarize records." },
            { name: "Tempus", case: "Applies machine learning to genomic data to match cancer patients with personalized clinical trials." }
        ]
    },
    {
        sector: "Finance & Trading",
        level: "High",
        class: "lvl-high",
        desc: "Algorithmic quantitative trading, predictive credit scoring, fraud detection, and AI assistant portfolios.",
        companies: [
            { name: "JPMorgan Chase", case: "Built IndexGPT to analyze market trends and recommend personalized retail investing products." },
            { name: "Stripe", case: "Integrates LLM verification loops to detect transaction anomalies and automate customer checkout disputes." }
        ]
    },
    {
        sector: "Automotive & Self-Driving",
        level: "Transforming",
        class: "lvl-trans",
        desc: "Autonomous vehicles driven by end-to-end deep neural networks mapping camera pixel arrays directly to physics outputs.",
        companies: [
            { name: "Waymo", case: "Operates commercial robotaxis globally, using sensor-fusion transformers to predict pedestrian motions." },
            { name: "Tesla", case: "Deploys FSD neural net autopilot trained on millions of video clips from consumer vehicles." }
        ]
    },
    {
        sector: "Retail & Supermarkets",
        level: "Medium",
        class: "lvl-med",
        desc: "Dynamic shelf pricing engines, stock replenishment algorithms, and checkout-free computer vision sensors.",
        companies: [
            { name: "Walmart", case: "Uses AI demand forecasting to prevent empty shelves and offers AI-powered semantic shopping search." },
            { name: "Target", case: "Deploys 'Store Companion' AI chatbots to answer store operations and inventory questions for employees." }
        ]
    },
    {
        sector: "Agriculture & Farming",
        level: "Medium",
        class: "lvl-med",
        desc: "Computer-vision weed targeting, autonomous steering systems, and soil moisture analytics via satellite.",
        companies: [
            { name: "John Deere", case: "Builds See & Spray select herbicide sprayers using camera-CNN systems to target weeds while sparing crops." },
            { name: "Monarch Tractor", case: "Exposes all-electric autonomous tractors that monitor micro-climate crop hazards in real-time." }
        ]
    },
    {
        sector: "Entertainment & Streaming",
        level: "High",
        class: "lvl-high",
        desc: "Algorithmic recommendation feeds, localized audio translations, and synthetic visual rendering tools.",
        companies: [
            { name: "Netflix", case: "Uses deep reinforcement learning to personalize homepage artwork and feed recommendations to users." },
            { name: "Spotify", case: "Runs 'AI DJ' providing synthetic narration and customized music transitions based on listening history." }
        ]
    },
    {
        sector: "Cybersecurity",
        level: "High",
        class: "lvl-high",
        desc: "Automated network threat scanning, anomaly correlation engines, and generative vulnerability repair.",
        companies: [
            { name: "CrowdStrike", case: "Deploys Charlotte AI to query endpoint data logs and identify active server intrusion attempts." },
            { name: "Cloudflare", case: "Applies real-time ML classifiers to evaluate and filter HTTP request packets, blocking DDoS attacks." }
        ]
    },
    {
        sector: "Education & EdTech",
        level: "Medium",
        class: "lvl-med",
        desc: "Personalized classroom curriculums, synthetic voice conversational practice, and automated teaching feedback.",
        companies: [
            { name: "Duolingo", case: "Features Duolingo Max, using Gemini models to explain grammatical errors and roleplay scenarios." },
            { name: "Khan Academy", case: "Integrated 'Khanmigo', an AI tutor helping students solve algebra without feeding them the direct answer." }
        ]
    },
    {
        sector: "Energy & Smart Grid",
        level: "Medium",
        class: "lvl-med",
        desc: "Smart grid supply predictions for renewable systems, thermal cooling optimization, and predictive power failure logs.",
        companies: [
            { name: "Siemens", case: "Utilizes AI for predictive maintenance on wind turbine gears and energy grids to minimize downtime." },
            { name: "Schneider Electric", case: "Implements EcoStruxure AI to optimize cooling systems in data centers, lowering energy waste by 30%." }
        ]
    }
];

// 4. Pioneers list
const aiPioneers = [
    {
        name: "Alan Turing",
        era: "1950s",
        desc: "Proposed the 'Turing Test' in his seminal 1950 paper 'Computing Machinery and Intelligence', setting the philosophical foundation for machine intelligence.",
        youtube: {
            title: "Turing Machines Explained (Computerphile)",
            link: "https://www.youtube.com/watch?v=dNRDvLAG180"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#indigoGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#indigoGrad)"/></svg>`
    },
    {
        name: "Geoffrey Hinton",
        era: "1980s - 2010s",
        desc: "Often referred to as the 'Godfather of Deep Learning'. Popularized the Backpropagation algorithm for training multi-layer neural networks and co-won the Turing Award in 2018.",
        youtube: {
            title: "But what is a Neural Network? (3Blue1Brown)",
            link: "https://www.youtube.com/watch?v=aircAruvnKk"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#fuchsiaGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#fuchsiaGrad)"/></svg>`
    },
    {
        name: "Yann LeCun",
        era: "1990s - Present",
        desc: "Pioneered Convolutional Neural Networks (CNNs) in 1989 (LeNet) to read handwritten digits, laying the groundwork for modern computer vision and OCR.",
        youtube: {
            title: "Yann LeCun: Lex Fridman Interview",
            link: "https://www.youtube.com/watch?v=SGs3H67F338"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#tealGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#tealGrad)"/></svg>`
    },
    {
        name: "Yoshua Bengio",
        era: "2000s - Present",
        desc: "Co-recipient of the 2018 Turing Award. Renowned for neural language models, sequence training, and his critical research warnings regarding AGI safety and existential risk.",
        youtube: {
            title: "AI Safety & Alignment Lecture (Bengio)",
            link: "https://www.youtube.com/watch?v=f9vK2aPscR4"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#indigoGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#indigoGrad)"/></svg>`
    },
    {
        name: "Demis Hassabis",
        era: "2010s - Present",
        desc: "Co-founder & CEO of Google DeepMind. Spearheaded AlphaGo, the historical protein-folding AlphaFold, and Google's Gemini multimodal ecosystem.",
        youtube: {
            title: "AlphaFold: The Biotech Revolution",
            link: "https://www.youtube.com/watch?v=knDiOT7_Tpg"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#fuchsiaGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#fuchsiaGrad)"/></svg>`
    },
    {
        name: "Sam Altman",
        era: "2020s - Present",
        desc: "CEO of OpenAI. Successfully navigated the launch of ChatGPT and DALL-E, accelerating the commercialization of large foundation models.",
        youtube: {
            title: "What is a GPT? Transformer Math (3Blue1Brown)",
            link: "https://www.youtube.com/watch?v=wjZofJX0v4M"
        },
        svg: `<svg viewBox="0 0 100 100" class="pioneer-avatar"><circle cx="50" cy="50" r="45" fill="none" stroke="url(#tealGrad)" stroke-width="3"/><path d="M50 30a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 38c-18 0-30 10-30 20v2h60v-2c0-10-12-20-30-20z" fill="url(#tealGrad)"/></svg>`
    }
];

// Agent Simulation Data
const agentTemplates = {
    factchecker: {
        name: "Fact Checker & Source Provider",
        prompt: "Verify the authenticity of the user's claim, find primary sources, and cross-reference fact databases to provide a verified consensus.",
        tools: ["web_search", "fact_db_check", "source_verifier"],
        logs: [
            { type: "system", text: "Initializing Fact Checker & Source Provider Agent..." },
            { type: "system", text: "System prompt configured. Tools loaded: [Web Search, Fact DB, Source Verifier]." },
            { type: "thought", text: "THOUGHT: The user wants to verify the claim: 'Apollo 11 landed on the moon on July 20, 1969'. I need to search for primary historical documentation and official records." },
            { type: "action", text: "ACTION: web_search(query='Apollo 11 lunar landing July 20 1969 primary sources')" },
            { type: "observation", text: "OBSERVATION: Retrieved official logs from NASA Historic Archives and Smithsonian National Air and Space Museum. Records show Eagle lunar module landed in Sea of Tranquility at 20:17 UTC, July 20, 1969. Commander Neil Armstrong stepped onto the surface at 02:56 UTC, July 21." },
            { type: "thought", text: "THOUGHT: The historical facts are confirmed by official space agencies. To provide a thorough fact-check, I must cross-reference fact-checking databases for any prominent counter-claims or debunked theories regarding this event." },
            { type: "action", text: "ACTION: fact_db_check(claim='Apollo 11 moon landing conspiracy theories hoax')" },
            { type: "observation", text: "OBSERVATION: Fact databases (Snopes, Britannica, NASA Science) list moon landing conspiracy claims as debunked. Scientific proof cited: over 800 lbs of moon rocks brought back, laser retroreflectors left on lunar surface still used today by global observatories, and independent tracking of Apollo signals by Soviet Union and amateur radio operators." },
            { type: "thought", text: "THOUGHT: I have gathered official sources, fact-checking consensus, and physical evidence. I am ready to compile the final verified report with direct source links." },
            { type: "result", text: "RESULT: [CLAIM STATUS: VERIFIED TRUE]\n\n• Fact Summary: Neil Armstrong and Buzz Aldrin successfully landed the Apollo 11 Lunar Module on the Moon on July 20, 1969.\n• Primary Source: NASA Apollo 11 Mission Log (https://www.nasa.gov/mission_pages/apollo/apollo11.html)\n• Supporting Evidence: Smithsonian Air & Space Museum Records, Laser Retroreflector tracking, and 382 kg of verified lunar samples." }
        ]
    },
    researcher: {
        name: "Web Search Research Agent",
        prompt: "Perform deep research on a technical topic, extract key findings, and summarize implications for developers.",
        tools: ["web_search", "academic_retrieval"],
        logs: [
            { type: "system", text: "Initializing Web Search Research Agent..." },
            { type: "system", text: "System prompt configured. Tools loaded: [Web Search, Academic Retrieval]." },
            { type: "thought", text: "THOUGHT: The user is researching 'Latest advancements in room-temperature superconductors (2025/2026)'. I will start by searching recent arXiv publications and scientific breakthroughs." },
            { type: "action", text: "ACTION: academic_retrieval(query='room temperature superconductor breakthrough 2025 2026')" },
            { type: "observation", text: "OBSERVATION: Found 3 relevant preprints discussing high-pressure hydride compounds exhibiting superconductivity at 240K (near-ambient) under 1.5 Megabars of pressure. No confirmed ambient-pressure room-temperature superconductor exists yet; recent claims have been retracted or disputed." },
            { type: "thought", text: "THOUGHT: So ambient pressure remains the primary bottleneck. Let me search news databases to see if any new materials like LK-99 spin-offs or polymer-based materials have gained peer-reviewed traction recently." },
            { type: "action", text: "ACTION: web_search(query='ambient pressure room temperature superconductor peer reviewed 2025 2026')" },
            { type: "observation", text: "OBSERVATION: Search reveals intense research on Nickelate thin films and bilayer graphene superlattices. These show fractional quantum Hall effects and superconductivity at low temperatures but remain active pathways for understanding high-temperature mechanics." },
            { type: "thought", text: "THOUGHT: I have enough data to write a research brief clarifying the difference between high-pressure successes and the ongoing search for ambient-pressure materials." },
            { type: "result", text: "RESULT: [RESEARCH BRIEF: SUPERCONDUCTORS 2026]\n\n• Current Status: Ambient-pressure room-temperature superconductivity remains unachieved. High-pressure hydrides continue to set records near 240K but require extreme compression.\n• Active Pathways: Bilayer graphene and Nickelate systems are driving theoretical breakthroughs.\n• Key Takeaway: Developers and engineers should treat ambient-pressure claims with caution until replicated independently." }
        ]
    },
    debugger: {
        name: "Code Debugger Agent",
        prompt: "Analyze the provided code block, identify potential bugs or performance bottlenecks, and output a corrected version.",
        tools: ["code_interpreter", "syntax_linter"],
        logs: [
            { type: "system", text: "Initializing Code Debugger Agent..." },
            { type: "system", text: "System prompt configured. Tools loaded: [Code Interpreter, Syntax Linter]." },
            { type: "thought", text: "THOUGHT: The user's code is a custom python caching decorator: \n\ndef cache(func):\n    mem = {} \n    def inner(x):\n        if x not in mem: mem[x] = func(x)\n        return mem[x]\n    return inner\n\nI need to check for bugs when handling unhashable types (like lists/dicts) as arguments or keyword arguments." },
            { type: "action", text: "ACTION: code_interpreter(run='cache_test.py')" },
            { type: "observation", text: "OBSERVATION: Executing cache decorator with list input `inner([1, 2])` throws: `TypeError: unhashable type: 'list'`. Also, it does not support multiple arguments or keyword arguments (*args, **kwargs)." },
            { type: "thought", text: "THOUGHT: The analysis is clear. The decorator fails if any argument is unhashable or if the decorated function has multiple parameters. I should refactor the code to serialize arguments (e.g., using pickle or frozenset) and support arbitrary signature (*args, **kwargs)." },
            { type: "action", text: "ACTION: syntax_linter(code='modified_decorator.py')" },
            { type: "observation", text: "OBSERVATION: Linting passed. Modified code uses `functools.wraps` to preserve metadata and handles serialization of complex arguments." },
            { type: "thought", text: "THOUGHT: The solution is solid. I will present the refactored version along with explanations of the changes." },
            { type: "result", text: "RESULT: [BUG REPORT & FIX]\n\n• Bug Identified: Original code crashed when passed mutable arguments (lists/dicts) and lacked support for multiple arguments (*args, **kwargs).\n• Refactored Code:\n\nimport functools\n\ndef robust_cache(func):\n    mem = {}\n    @functools.wraps(func)\n    def inner(*args, **kwargs):\n        # Create a hashable key by serializing arguments\n        key = (args, frozenset(kwargs.items()))\n        if key not in mem:\n            mem[key] = func(*args, **kwargs)\n        return mem[key]\n    return inner" }
        ]
    }
};

// Global App State
let activeTab = "news"; // Default to News tab as it's at the top
let globalSearchQuery = "";
let customNewsArticles = [];

// Onboarding Tour Steps Definition
const tourSteps = [
    {
        title: "Welcome to AI Playground!",
        desc: "We have upgraded the site with custom cherry red styling, dual themes, and split navigation. Let's take a quick 4-step tour to see what's new.",
        target: "logo-brand"
    },
    {
        title: "Split Navigation Headers",
        desc: "The top bar now holds the primary reference feeds: AI News Feed and Glossary. The rest of the interactive tabs are moved to the bottom bar to declutter.",
        target: "top-nav-guide"
    },
    {
        title: "Newspaper Drag-and-Drop Hub",
        desc: "You can drag and drop raw .txt newspaper files directly here, select which of the 15 verified AI sources it belongs to, and instantly parse the headline!",
        target: "newspaper-panel-guide"
    },
    {
        title: "Interactive Tokenizer",
        desc: "Head down to the Sandbox and look at the bottom visualizer to inspect how large language models break your text down into numeric coordinates.",
        target: "bottom-nav-guide"
    }
];
let currentTourStep = 0;

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    initGlobalSearch();
    initGlossary();
    initNewsFeed();
    initSectors();
    initTimelinePioneers();
    initSandbox();
    initTokenizer();
    initMcpVisuals();
    initOnboardingTour();
});

// Theme Management
function initTheme() {
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    
    // Read persisted theme
    const savedTheme = localStorage.getItem("site-theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        icon.textContent = "☀️";
    } else {
        document.body.classList.remove("light-theme");
        icon.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            icon.textContent = "🌙";
            localStorage.setItem("site-theme", "dark");
        } else {
            document.body.classList.add("light-theme");
            icon.textContent = "☀️";
            localStorage.setItem("site-theme", "light");
        }
    });
}

// Navigation Controller (Top Nav + Bottom Floating Nav)
function initNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const sections = document.querySelectorAll(".view-section");
    const globalSearchInput = document.getElementById("global-search");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.tab;
            
            // Remove active states from all buttons in both nav docks
            tabButtons.forEach(b => b.classList.remove("active"));
            
            // Highlight all button instances matching target tab
            document.querySelectorAll(`.tab-btn[data-tab="${target}"]`).forEach(b => {
                b.classList.add("active");
            });
            
            // Toggle active section
            sections.forEach(s => s.classList.remove("active"));
            const targetSec = document.getElementById(target);
            if (targetSec) targetSec.classList.add("active");
            
            activeTab = target;

            // Reset search input on tab change
            globalSearchInput.value = "";
            globalSearchQuery = "";
            applyTabFilters();
        });
    });

    // Quick links redirects on dashboard
    document.querySelectorAll(".feature-item").forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.dataset.goto;
            const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
            if (targetBtn) targetBtn.click();
        });
    });
}

// Global Header Search Controller
function initGlobalSearch() {
    const searchInput = document.getElementById("global-search");
    searchInput.addEventListener("input", (e) => {
        globalSearchQuery = e.target.value.toLowerCase();
        applyTabFilters();
    });
}

function applyTabFilters() {
    if (activeTab === "glossary") {
        filterGlossary();
    } else if (activeTab === "news") {
        filterNews();
    } else if (activeTab === "sectors") {
        filterSectors();
    } else if (activeTab === "timeline") {
        filterTimelineNodes();
    }
}

// Glossary Filter
function initGlossary() {
    filterGlossary();
}

function filterGlossary() {
    const grid = document.getElementById("glossary-grid");
    if (!grid) return;

    const filtered = glossaryTerms.filter(item => {
        return item.term.toLowerCase().includes(globalSearchQuery) || 
               item.definition.toLowerCase().includes(globalSearchQuery) ||
               item.details.toLowerCase().includes(globalSearchQuery);
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="glass-card" style="grid-column: 1/-1; text-align: center; color: var(--text-dark);">No matching glossary terms found.</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = `glass-card glossary-card ${item.category}`;
        
        let badgeText = "Fundamental";
        if (item.category === "agentic") badgeText = "Agentic AI";
        if (item.category === "mcp") badgeText = "MCP / Tools";
        
        card.innerHTML = `
            <span class="glossary-tag">${badgeText}</span>
            <h3>${item.term}</h3>
            <p><strong>Definition:</strong> ${item.definition}</p>
            <div style="font-size: 0.9rem; color: var(--text-dark); margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
                <strong>Details:</strong> ${item.details}
            </div>
        `;
        grid.appendChild(card);
    });
}

// News Feed Controller (with drag & drop file uploader + Local Storage persistence)
function initNewsFeed() {
    const pasteInput = document.getElementById("news-paste-area");
    const pasteBtn = document.getElementById("news-paste-submit");
    const sourceSelect = document.getElementById("news-source-select");
    const dropzone = document.getElementById("news-dropzone");
    const fileInput = document.getElementById("news-file-input");

    // Load custom news from localStorage
    const savedNews = localStorage.getItem("custom-ai-news");
    if (savedNews) {
        customNewsArticles = JSON.parse(savedNews);
    }

    // Drag over effects
    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        const file = e.dataTransfer.files[0];
        if (file && file.type === "text/plain") {
            readTextFile(file);
        } else {
            alert("Please drop a valid plain text (.txt) file.");
        }
    });

    // File Input clicks
    dropzone.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            readTextFile(file);
        }
    });

    function readTextFile(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            pasteInput.value = event.target.result;
            alert(`File "${file.name}" loaded! Check/edit the text and click Parse below.`);
        };
        reader.readAsText(file);
    }

    // Manual Submit
    pasteBtn.addEventListener("click", () => {
        const text = pasteInput.value.trim();
        if (!text) return;

        const lines = text.split("\n").filter(l => l.trim() !== "");
        if (lines.length === 0) return;

        const title = lines[0].replace(/^[#*\s-]+/, "");
        const summary = lines.slice(1).join(" ");
        const sourceAttr = sourceSelect.value;

        const newArticle = {
            title: title.length > 85 ? title.substring(0, 85) + "..." : title,
            source: sourceAttr,
            date: "Today (Parsed)",
            summary: summary || "Custom uploaded article content parsed locally.",
            link: "#"
        };

        customNewsArticles.unshift(newArticle);
        
        // Save to localStorage
        localStorage.setItem("custom-ai-news", JSON.stringify(customNewsArticles));

        // Reset
        pasteInput.value = "";
        fileInput.value = "";
        filterNews();
        alert("Article successfully parsed, saved locally, and added to the news feed!");
    });

    filterNews();
}

function filterNews() {
    const grid = document.getElementById("news-grid");
    if (!grid) return;

    const fullNewsList = [...customNewsArticles, ...aiNewsArticles];
    const filtered = fullNewsList.filter(article => {
        return article.title.toLowerCase().includes(globalSearchQuery) ||
               article.summary.toLowerCase().includes(globalSearchQuery) ||
               article.source.toLowerCase().includes(globalSearchQuery);
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="glass-card" style="grid-column: 1/-1; text-align: center; color: var(--text-dark);">No matching news articles found.</div>`;
        return;
    }

    filtered.forEach(article => {
        const card = document.createElement("div");
        card.className = "glass-card news-card";
        
        // Highlight custom parsed files with a secondary tint
        if (customNewsArticles.some(c => c.title === article.title)) {
            card.style.borderLeftColor = "var(--secondary)";
        }
        
        card.innerHTML = `
            <div class="news-header">
                <span class="news-source">${article.source}</span>
                <span class="news-date">${article.date}</span>
            </div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-summary">${article.summary}</p>
            <a href="${article.link}" target="_blank" class="news-link">Open Source Outlet &rarr;</a>
        `;
        grid.appendChild(card);
    });
}

// 3. Sectors Controller
function initSectors() {
    filterSectors();
}

function filterSectors() {
    const grid = document.getElementById("sectors-grid");
    if (!grid) return;

    const filtered = sectorMatrix.filter(item => {
        const matchesSector = item.sector.toLowerCase().includes(globalSearchQuery) ||
                              item.desc.toLowerCase().includes(globalSearchQuery);
        const matchesCompanies = item.companies.some(c => c.name.toLowerCase().includes(globalSearchQuery) || c.case.toLowerCase().includes(globalSearchQuery));
        return matchesSector || matchesCompanies;
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="glass-card" style="grid-column: 1/-1; text-align: center; color: var(--text-dark);">No matching industries or companies found.</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "glass-card sector-card";
        
        let casesHtml = "";
        item.companies.forEach(c => {
            casesHtml += `
                <div class="company-case">
                    <strong>${c.name}:</strong> <span>${c.case}</span>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="sector-header">
                <h3>${item.sector}</h3>
                <span class="integration-badge ${item.class}">Integration: ${item.level}</span>
            </div>
            <p>${item.desc}</p>
            <div class="company-cases-box">
                <h4 style="font-size: 0.85rem; color: var(--accent); margin-bottom: 0.5rem; text-transform: uppercase;">Company Case Studies</h4>
                ${casesHtml}
            </div>
        `;
        grid.appendChild(card);
    });
}

// 4. Timeline Pioneers Loader
function initTimelinePioneers() {
    const pioneersGrid = document.getElementById("pioneers-grid");
    if (!pioneersGrid) return;

    pioneersGrid.innerHTML = "";
    aiPioneers.forEach(p => {
        const card = document.createElement("div");
        card.className = "glass-card pioneer-card";
        card.innerHTML = `
            <div class="pioneer-header">
                ${p.svg}
                <div>
                    <h3 style="margin-bottom: 0.1rem;">${p.name}</h3>
                    <span class="pioneer-era">${p.era} Contribution</span>
                </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">${p.desc}</p>
            <a href="${p.youtube.link}" target="_blank" class="video-btn">
                📺 Play: ${p.youtube.title} &rarr;
            </a>
        `;
        pioneersGrid.appendChild(card);
    });
}

function filterTimelineNodes() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(globalSearchQuery)) {
            item.style.opacity = "1";
            item.style.filter = "none";
        } else {
            item.style.opacity = "0.3";
            item.style.filter = "grayscale(80%)";
        }
    });
}

// 5. Agent Sandbox Simulation (Inherited)
function initSandbox() {
    const templateSelect = document.getElementById("agent-template");
    const systemPromptInput = document.getElementById("system-prompt");
    const checkboxes = document.querySelectorAll(".tool-checkbox");
    const consoleOutput = document.getElementById("console-output");
    const runBtn = document.getElementById("run-simulation");
    const statusDot = document.getElementById("status-dot");
    const statusText = document.getElementById("status-text");

    function loadTemplate(key) {
        const template = agentTemplates[key];
        if (!template) return;
        
        systemPromptInput.value = template.prompt;
        
        checkboxes.forEach(cb => {
            cb.checked = template.tools.includes(cb.value);
        });
    }

    templateSelect.addEventListener("change", (e) => {
        loadTemplate(e.target.value);
    });

    let simInterval = null;
    runBtn.addEventListener("click", () => {
        if (runBtn.disabled) return;
        
        const key = templateSelect.value;
        const template = agentTemplates[key];
        if (!template) return;

        runBtn.disabled = true;
        runBtn.textContent = "Simulating Agent Loop...";
        statusDot.className = "status-dot running";
        statusText.textContent = "RUNNING";
        consoleOutput.innerHTML = `<div class="log-entry system">[SYSTEM] Constructing agent graph and initializing environment...</div>`;
        
        let step = 0;
        const logs = template.logs;

        function runStep() {
            if (step >= logs.length) {
                clearInterval(simInterval);
                runBtn.disabled = false;
                runBtn.textContent = "Run Agent Simulation";
                statusDot.className = "status-dot idle";
                statusText.textContent = "IDLE";
                return;
            }
            
            const log = logs[step];
            const div = document.createElement("div");
            div.className = `log-entry ${log.type}`;
            
            let prefix = "";
            if (log.type === "thought") prefix = "💭 ";
            if (log.type === "action") prefix = "🔧 ";
            if (log.type === "observation") prefix = "👁️ ";
            if (log.type === "result") prefix = "🏁 ";
            if (log.type === "system") prefix = "⚙️ ";

            div.innerHTML = `${prefix}${log.text.replace(/\n/g, '<br>')}`;
            consoleOutput.appendChild(div);
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
            
            step++;
            
            let nextDelay = 1500;
            if (logs[step] && logs[step].type === "observation") nextDelay = 1000;
            if (logs[step] && logs[step].type === "result") nextDelay = 2000;
            
            simTimeout = setTimeout(runStep, nextDelay);
        }

        let simTimeout = setTimeout(runStep, 800);
    });

    loadTemplate("factchecker");
}

// 6. Interactive Tokenizer Visualizer Engine
function initTokenizer() {
    const input = document.getElementById("tokenizer-input");
    const btn = document.getElementById("btn-tokenize");
    const results = document.getElementById("token-results");
    const chipsContainer = document.getElementById("token-chips");
    const countLabel = document.getElementById("token-count");
    const charLabel = document.getElementById("char-count");
    const vectorLabel = document.getElementById("vector-embedding");

    function getMockEmbedding(text) {
        let h = 0;
        for (let i = 0; i < text.length; i++) {
            h = (h << 5) - h + text.charCodeAt(i);
            h |= 0;
        }
        let v = [];
        for (let i = 0; i < 5; i++) {
            // Generate a mathematical mock coordinate in space
            let val = Math.sin(h + i) * 0.95;
            v.push(val.toFixed(3));
        }
        return `[${v.join(", ")}]`;
    }

    btn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;

        // Simple regex tokenizer: splits words, keeps spaces and punctuation as separate chips
        const tokens = text.match(/[\w]+|[^\w\s]|\s+/g) || [];
        
        chipsContainer.innerHTML = "";
        tokens.forEach(tok => {
            const chip = document.createElement("span");
            chip.className = "token-chip";
            
            // Format space visual
            if (tok.match(/^\s+$/)) {
                chip.innerHTML = "&nbsp;&nbsp;&nbsp;";
                chip.style.opacity = "0.45";
                chip.style.border = "1px dotted var(--border-color)";
                chip.title = "Whitespace token";
            } else {
                chip.textContent = tok;
                chip.title = `Token content: "${tok}"`;
            }
            chipsContainer.appendChild(chip);
        });

        countLabel.textContent = tokens.length;
        charLabel.textContent = text.length;
        vectorLabel.textContent = getMockEmbedding(text);
        
        results.style.display = "block";
    });
}

// 7. Onboarding Interactive Tour Controller
function initOnboardingTour() {
    const overlay = document.getElementById("tour-overlay");
    const title = document.getElementById("tour-title");
    const desc = document.getElementById("tour-desc");
    const nextBtn = document.getElementById("tour-next");
    const skipBtn = document.getElementById("tour-skip");

    // Check if tour was already shown
    const isTourCompleted = localStorage.getItem("tour-completed");
    if (isTourCompleted) return;

    // Show tour overlay
    overlay.style.display = "flex";
    currentTourStep = 0;
    showTourStep(0);

    function showTourStep(index) {
        const step = tourSteps[index];
        title.textContent = step.title;
        desc.textContent = step.desc;

        // Temporarily highlight target elements
        document.querySelectorAll(".tour-highlight").forEach(el => el.classList.remove("tour-highlight"));
        const targetEl = document.getElementById(step.target);
        if (targetEl) {
            targetEl.classList.add("tour-highlight");
            // Scroll to elements if needed
            targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (index === tourSteps.length - 1) {
            nextBtn.textContent = "Finish Tour";
        } else {
            nextBtn.textContent = "Next Step \u2192";
        }
    }

    nextBtn.addEventListener("click", () => {
        currentTourStep++;
        if (currentTourStep >= tourSteps.length) {
            // Done
            overlay.style.display = "none";
            document.querySelectorAll(".tour-highlight").forEach(el => el.classList.remove("tour-highlight"));
            localStorage.setItem("tour-completed", "true");
        } else {
            showTourStep(currentTourStep);
        }
    });

    skipBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        document.querySelectorAll(".tour-highlight").forEach(el => el.classList.remove("tour-highlight"));
        localStorage.setItem("tour-completed", "true");
    });
}

// 8. MCP Visualizer Detail Cards
function initMcpVisuals() {
    const nodes = document.querySelectorAll(".diagram-node");
    const detailCard = document.getElementById("mcp-details-card");
    
    const descriptions = {
        host: {
            title: "MCP Host (e.g., Antigravity IDE)",
            text: "The Host is the client-facing application initiating the AI session. It holds the active chat, knows your workspace files, and determines when the AI needs a tool. It coordinates with the client to route queries and responses."
        },
        client: {
            title: "MCP Client (Internal Coordinator)",
            text: "Built inside the host app, the MCP Client maintains connections to all active MCP servers. When the AI model asks to write a file or run a tool, the client translates that request into standard JSON-RPC and forwards it to the correct server."
        },
        server: {
            title: "MCP Server (e.g., Git, Filesystem, Slack)",
            text: "MCP Servers are independent programs that expose resources (files, APIs) and tools (git log, execute command) to the Client. They act as the AI's hands, implementing the concrete actions and returning observations back."
        }
    };

    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const role = node.dataset.role;
            const data = descriptions[role];
            if (!data) return;

            nodes.forEach(n => n.classList.remove("active"));
            node.classList.add("active");

            detailCard.innerHTML = `
                <h4 style="color: var(--accent); margin-bottom: 0.5rem;">${data.title}</h4>
                <p style="font-size: 0.95rem; margin-bottom: 0;">${data.text}</p>
            `;
        });
    });
}
