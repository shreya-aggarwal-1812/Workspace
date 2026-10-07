# Workspace — Interactive Projects

A collection of web-based projects built to solve practical problems across **strategy, pricing, productivity, AI, and digital decision-making**.

## Live Projects

| Project | Description | Live Demo |
|---|---|---|
| **PlainSight** | A multi-page digital publication/news-style website with sections for national, international, sports, entertainment, editorials, and individual articles. | [Open PlainSight](https://shreya-aggarwal-1812.github.io/Workspace/) |
| **Sekhani Pricing Simulator** | An interactive pricing decision engine that evaluates pricing decisions using factors such as order volume, complexity, batch size, urgency, customer relationship, capacity, and cost-to-serve. | [Open Pricing Simulator](https://shreya-aggarwal-1812.github.io/Workspace/sekhani-pricing-simulator/) |
| **DSA Planner** | An AI-assisted academic planning tool designed to organize course attendance, session-wise cases/readings, and professor questions into a structured study workflow. | [Open DSA Planner](https://shreya-aggarwal-1812.github.io/Workspace/dsa-planner/) |
| **AI Learning Hub** | A browser-based learning platform designed to organize and present learning resources through a simple interactive interface. | Included in repository |

---

## 1. PlainSight

**PlainSight** is a static, multi-page digital publication website designed to bring different categories of content into a single browsing experience.

### Key sections
- National
- International
- Sports
- Entertainment
- Editorials
- Individual article pages
- Digital newspaper/PDF content
- Shared CSS, JavaScript, and image assets

### Highlights
- Multi-page website architecture
- Reusable visual styling and assets
- Article-based content structure
- Responsive web interface
- Static deployment through GitHub Pages

**Entry page:** `PS.html`

---

## 2. Sekhani Pricing Simulator

The **Sekhani Pricing Simulator** is an interactive pricing decision tool developed around the idea that pricing should account for more than simply cost plus margin.

### Decision factors
The simulator considers multiple dimensions of a customer/order before arriving at a pricing recommendation, including:

- Order volume
- Product/service complexity
- Batch size
- Urgency
- Customer relationship
- Available capacity
- Cost-to-serve

### Purpose

The project translates pricing strategy concepts into an interactive decision-support interface. It can be used to demonstrate how different commercial conditions can influence the appropriate pricing approach.

### Core value
Instead of treating price as a single input, the simulator encourages a **structured, multi-factor pricing decision**.

---

## 3. DSA Planner

The **DSA Planner** is an AI-assisted academic productivity tool designed to make course planning easier by bringing academic information into one structured workflow.

### Key capabilities
- Attendance tracking across courses
- Session-wise organization of cases and readings
- Professor-question tracking
- Study planning
- Structured academic information for day-to-day planning
- AI-assisted planning through an LLM integration

### Technology / approach
The project was built using **Antigravity** with **Gemini LLM** integration.

### Problem it addresses

Students often have academic information distributed across multiple sources—course schedules, attendance requirements, cases, readings, and professor questions. The DSA Planner brings these elements together so that planning can be more systematic and actionable.

> **Deployment note:** The frontend is hosted on GitHub Pages. If a particular version of the application requires a separate backend/API, that backend must be hosted independently because GitHub Pages supports static websites rather than server-side applications.

---

## 4. AI Learning Hub

The **AI Learning Hub** is a straightforward browser-based learning website designed to provide a centralized, interactive space for learning resources.

### Key characteristics
- Browser-based learning interface
- Structured presentation of learning content
- Interactive front-end experience
- Designed to run directly in the browser without a server-side application
- Built as a static website using **HTML, CSS, and JavaScript**

### Technology

The project uses a lightweight front-end architecture:

- `index.html` — application structure and content
- `styles.css` — interface styling
- `app.js` — client-side interactions and application logic

### Deployment

The AI Learning Hub is packaged as `ai-learning-hub.zip` in the repository. It is configured for GitHub Pages deployment through the repository's GitHub Actions workflow.

---

## Repository Structure

```text
Workspace/
├── .github/
│   └── workflows/
│       └── deploy-ai-learning-hub.yml
├── PlainSight.zip
├── sekhani-pricing-simulator.zip
├── DSA.zip
├── ai-learning-hub.zip
└── README.md
```

The GitHub Actions workflow extracts the projects and publishes the web-ready files to GitHub Pages.

## Deployment

The projects are deployed from the `main` branch using **GitHub Actions** and **GitHub Pages**.

The deployment workflow:

1. Checks out the repository.
2. Extracts the project ZIP files.
3. Prepares the static website directory.
4. Places each project under its corresponding path.
5. Uploads the website as a Pages artifact.
6. Deploys the artifact to GitHub Pages.

### Project paths

```text
/                           → PlainSight
/sekhani-pricing-simulator/ → Sekhani Pricing Simulator
/dsa-planner/               → DSA Planner
```

The AI Learning Hub is maintained in the repository as `ai-learning-hub.zip`.

## Projects at a Glance

| Project | Primary Problem | Main Concept |
|---|---|---|
| PlainSight | Digital content presentation | Web development & content architecture |
| Sekhani Pricing Simulator | Structured pricing decisions | Pricing strategy & decision modelling |
| DSA Planner | Academic planning and information overload | AI-assisted productivity |
| AI Learning Hub | Organizing learning resources | Front-end development & interactive learning |

---

## Author

**Shreya Aggarwal**  
Integrated Programme in Management, IIM Rohtak

This repository contains selected projects combining **business strategy, technology, analytics, AI, and interactive web applications**.
