"use client";

import { useEffect, useState } from "react";
import {
  siBun,
  siCloudflare,
  siDocker,
  siDrizzle,
  siExpress,
  siFastapi,
  siGin,
  siGit,
  siGo,
  siHono,
  siJetpackcompose,
  siJsonwebtokens,
  siKotlin,
  siLaravel,
  siLinux,
  siMongodb,
  siMongoose,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siPrisma,
  siPython,
  siReact,
  siSqlalchemy,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from "simple-icons";

type Project = {
  title: string;
  type: string;
  summary: string;
  stack: string[];
  contributions: string[];
  repositories: {
    label: string;
    url: string;
  }[];
  mark: string;
};

const projects: Project[] = [
  {
    title: "Kaenthong Mansion Dormitory Management",
    type: "Senior Project",
    summary:
      "Full-stack dormitory management system for rooms, tenants, contracts, billing, maintenance, and tenant services.",
    stack: ["Next.js", "Hono", "Bun", "Drizzle ORM", "PostgreSQL", "FastAPI", "Cloudflare R2"],
    contributions: [
      "Led project architecture and technology selection across the frontend, backend, database, and intelligent services.",
      "Implemented authentication, session management, RBAC, room management, tenant management, contracts, move-in/move-out, and tenant requests.",
      "Developed billing workflows covering rent, utility calculations, additional costs, late fees, payment extensions, and payment history.",
      "Built maintenance workflows, material management, workflow timelines, and Telegram notification integration.",
      "Integrated Cloudflare R2 for document and image storage, and connected FastAPI services for Thai ID-card OCR.",
    ],
    repositories: [
      { label: "Backend", url: "https://github.com/sangketkit01/Backend-Dorminitory-Management" },
      { label: "Frontend", url: "https://github.com/sangketkit01/Frontend-Dorminitory-Management" },
      { label: "Intelligent service", url: "https://github.com/sangketkit01/Dormitory-Intelligent" },
    ],
    mark: "I",
  },
  {
    title: "Times Square Stock Management",
    type: "External Project",
    summary:
      "Inventory management system for managing ingredients, suppliers, stock counting, and purchase orders for a dessert business.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "React.js", "TypeScript"],
    contributions: [
      "Developed ingredient, unit, category, storage-location, and supplier management features with multi-unit and fractional quantity support.",
      "Implemented stock-counting sessions with draft/completed states, audit history, quantity conversion, and reversible corrections.",
      "Built purchase-order workflows from drafting and ordering to partial receiving and final stock confirmation.",
      "Added role-based access control, low-stock alerts, database locking for stock consistency, real-time collaboration, and purchase-order export.",
    ],
    repositories: [
      { label: "Backend", url: "https://github.com/sangketkit01/Times-Square-Stock-Backend" },
      { label: "Frontend", url: "https://github.com/sangketkit01/Times-Square-Stock-Frontend" },
    ],
    mark: "II",
  },
  {
    title: "Faculty Car Rental",
    type: "Course Project · Individual",
    summary:
      "Full-stack car-rental system for browsing vehicles, submitting reservations, and managing approval workflows.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Go", "Fiber", "GORM", "PostgreSQL", "Paseto"],
    contributions: [
      "Built user registration, login, profile management, driver-license records, and organization-card uploads.",
      "Developed vehicle browsing, vehicle details, and reservation submission through the Next.js frontend.",
      "Implemented reservation rules including document requirements, maximum rental duration, monthly limits, availability checks, and date-conflict detection.",
      "Built admin workflows for adding vehicles with multiple images, reviewing reservation details, approving, rejecting, and completing reservations.",
    ],
    repositories: [
      { label: "Backend", url: "https://github.com/sangketkit01/Backend-Faculty-Car-Rental" },
      { label: "Frontend", url: "https://github.com/sangketkit01/Frontend-Faculty-Car-Rental" },
    ],
    mark: "III",
  },
  {
    title: "Nonthong School PP.5 Evaluation System",
    type: "External Project",
    summary:
      "Full-stack academic evaluation and student grading system (ปพ.5) for school administration, handling curriculum management, grade assessments, competency evaluations, and official document generation.",
    stack: ["Next.js", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker"],
    contributions: [
      "Architected and developed a full-stack academic assessment platform (ปพ.5) supporting dual roles: school administrators and teachers.",
      "Built curriculum, classroom, student, and subject management modules with Excel (.xlsx) bulk import and automated data validation.",
      "Implemented granular scoring workflows, grade point calculations, student attribute and competency evaluations, and attendance tracking.",
      "Developed batch print engine for official Ministry of Education PP.5 documents and transcripts with dynamic score aggregation.",
      "Containerized backend services with Docker & Docker Compose and deployed frontend infrastructure on Cloudflare.",
    ],
    repositories: [
      { label: "Frontend", url: "https://github.com/sangketkit01/edu-eval-frontend" },
      { label: "Backend", url: "https://github.com/sangketkit01/edu-eval-backend" },
    ],
    mark: "IV",
  },
  {
    title: "Readora",
    type: "Course Project · Team of five",
    summary:
      "Web platform for reading and publishing novels and comics, developed as part of a five-member team.",
    stack: ["Laravel", "PHP", "MySQL", "PostgreSQL"],
    contributions: [
      "Implemented core authentication, middleware, database design, Eloquent ORM relationships, and Google OAuth integration.",
      "Developed novel and comic creation, chapter management, reading, editing, deletion, and recovery workflows.",
      "Built content discovery features including genre browsing, recommendations, trending content, and search.",
      "Implemented user and administrative features including comments, reports, privacy controls, and content moderation.",
    ],
    repositories: [{ label: "GitHub repository", url: "https://github.com/sangketkit01/Readora" }],
    mark: "V",
  },
  {
    title: "Personal Financial API",
    type: "Practice Project",
    summary:
      "Go REST API for managing personal income, expenses, budgets, and financial summaries.",
    stack: ["Go", "Gin", "PostgreSQL", "sqlc", "pgx", "JWT", "Docker"],
    contributions: [
      "Designed REST APIs for authentication, financial records, budgets, and financial summaries.",
      "Implemented income and expense tracking with categories and monthly/yearly analysis.",
      "Built budget usage tracking with spending-percentage calculations.",
      "Applied JWT authentication, ownership-based authorization, SQL migrations, generated queries, and automated tests.",
    ],
    repositories: [{ label: "GitHub repository", url: "https://github.com/sangketkit01/personal-financial" }],
    mark: "VI",
  },
  {
    title: "Media Library API",
    type: "Practice Project",
    summary:
      "REST API for managing media-library resources with authenticated access.",
    stack: ["Go", "Fiber", "PostgreSQL", "Paseto", "pgx", "Docker"],
    contributions: [
      "Implemented REST API endpoints for media-library resource management.",
      "Applied Paseto authentication, request validation, UUID-based identifiers, and password hashing.",
      "Structured the application with separated handlers, models, database access, and routing layers.",
      "Added Docker and Docker Compose configuration for the application and database environment.",
    ],
    repositories: [{ label: "GitHub repository", url: "https://github.com/sangketkit01/media-library-api" }],
    mark: "VII",
  },
  {
    title: "7 Coding Test",
    type: "Backend Coding Challenge",
    summary:
      "RESTful user-management API developed from a company coding-test specification.",
    stack: ["Go", "Fiber", "MongoDB", "JWT", "gRPC", "Docker"],
    contributions: [
      "Built user registration, login, protected routes, user listing, updating, and deletion.",
      "Implemented MongoDB persistence with unique email indexing and bcrypt password hashing.",
      "Added JWT authentication middleware, request validation, and execution-time logging.",
      "Implemented the bonus gRPC service, background user-count logging, Docker setup, and graceful shutdown handling.",
    ],
    repositories: [{ label: "GitHub repository", url: "https://github.com/sangketkit01/7-coding-test" }],
    mark: "VIII",
  },
  {
    title: "Personal Blog",
    type: "Practice Project",
    summary:
      "Personal blog application where users can create posts, comment, and interact with comments.",
    stack: ["Go", "Chi", "PostgreSQL", "Go Templates", "SCS", "Nosurf", "Docker"],
    contributions: [
      "Built authentication, signup/login/logout, session management, and profile-management features.",
      "Developed post creation, personal post listing, post details, comments, and comment interactions.",
      "Implemented post likes and comment likes with like/unlike operations.",
      "Applied Hexagonal Architecture, server-side sessions, CSRF protection, caching, and database migrations.",
    ],
    repositories: [{ label: "GitHub repository", url: "https://github.com/sangketkit01/Personal-Block" }],
    mark: "IX",
  },
  {
    title: "Kanchanarat Place",
    type: "Course Project · Individual",
    summary:
      "Android dormitory management application covering room reservations, contracts, billing, maintenance, and move-out workflows.",
    stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Node.js", "Express.js", "MySQL", "Multer"],
    contributions: [
      "Built room browsing, room reservation, reservation tracking, contract submission, and contract approval workflows.",
      "Implemented monthly rent, water, and electricity billing with meter readings and previous-month usage calculations.",
      "Developed payment-slip upload and bill approval workflows for tenants and dormitory owners.",
      "Built maintenance requests with image attachments, repair approval, cost tracking, status updates, and move-out management.",
    ],
    repositories: [
      { label: "Frontend", url: "https://github.com/sangketkit01/Kanchanarat-Place" },
      { label: "Backend", url: "https://github.com/sangketkit01/Kanchanarat-Place-Server" },
    ],
    mark: "X",
  },
  {
    title: "Electronic Magazine",
    type: "Course Project · Individual",
    summary:
      "Android application for reading, searching, and publishing electronic magazines and articles.",
    stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Node.js", "Express.js", "MySQL", "Multer"],
    contributions: [
      "Built magazine and article browsing, reading, and detail experiences with Jetpack Compose.",
      "Implemented search and discovery workflows for electronic publications.",
      "Developed publishing and content-management flows with image uploads.",
      "Integrated the Android application with the Express and MySQL backend through Retrofit.",
    ],
    repositories: [
      { label: "Frontend", url: "https://github.com/sangketkit01/Electronic-Magazine" },
      { label: "Backend", url: "https://github.com/sangketkit01/Electronic-Magazine-Server" },
    ],
    mark: "XI",
  },
  {
    title: "FixFlow Maintenance & Repair Management",
    type: "Course Project",
    summary:
      "Full-stack maintenance and repair management application connecting tenants, technicians, and administrators for issue reporting, task assignment, and progress tracking.",
    stack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    contributions: [
      "Designed and implemented full-stack maintenance ticket lifecycle connecting users, technicians, and administrators.",
      "Built multi-role authentication and authorization (User, Technician, Admin) using JWT and bcrypt for secure access control.",
      "Developed repair request submission, technician task assignment, proof-of-work image uploads, and status tracking.",
      "Built administrative dashboard views for managing repair categories, monitoring service orders, and tracking technician workflows.",
    ],
    repositories: [
      { label: "Frontend", url: "https://github.com/sangketkit01/FixFlow-Frontend" },
      { label: "Backend", url: "https://github.com/sangketkit01/FixFlow-Backend" },
    ],
    mark: "XII",
  },
];

const stackGroups = [
  {
    number: "01",
    title: "Languages",
    items: ["Go", "Java", "TypeScript", "Python"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Gin", "Fiber", "Hono", "Express", "Spring Boot", "gRPC"],
  },
  {
    number: "03",
    title: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle ORM", "GORM", "SQLC"],
  },
  {
    number: "05",
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Linux"],
  },
];

const techIcons: Record<string, SimpleIcon> = {
  Bun: siBun,
  "Cloudflare R2": siCloudflare,
  Docker: siDocker,
  "Drizzle ORM": siDrizzle,
  Express: siExpress,
  "Express.js": siExpress,
  FastAPI: siFastapi,
  Gin: siGin,
  Git: siGit,
  Go: siGo,
  Hono: siHono,
  "Hono.js": siHono,
  Java: siOpenjdk,
  "Jetpack Compose": siJetpackcompose,
  JWT: siJsonwebtokens,
  Kotlin: siKotlin,
  Laravel: siLaravel,
  Linux: siLinux,
  MongoDB: siMongodb,
  Mongoose: siMongoose,
  MySQL: siMysql,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  Postman: siPostman,
  Prisma: siPrisma,
  Python: siPython,
  React: siReact,
  "React.js": siReact,
  SQLAlchemy: siSqlalchemy,
  "Spring Boot": siSpringboot,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  Vite: siVite,
};

function TechBadge({ name, compact = false }: { name: string; compact?: boolean }) {
  const icon = techIcons[name];
  const initials = name
    .replace(/\./g, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className={compact ? "tech-badge is-compact" : "tech-badge"}>
      {icon ? (
        <svg
          className="tech-icon"
          viewBox="0 0 24 24"
          role="img"
          aria-label={`${name} logo`}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="tech-fallback" aria-hidden="true">{initials}</span>
      )}
      <span>{name}</span>
    </span>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Go to the top">
          <span className="wordmark-mark">Θ</span>
          <span>THIRAPHAT</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-ornament" aria-hidden="true">
          <span className="column capital" />
          <span className="column shaft" />
          <span className="column base" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span /> Software Engineer · System Thinker</p>
          <p className="hero-description">
            <span className="hero-intro">I&apos;m</span>
            <strong className="hero-name">Thiraphat Sangketkit</strong>
            <span className="hero-role">
              A fourth-year IT student interested in{" "}
              <em>backend architecture</em> and{" "}
              <em>platform engineering.</em>
            </span>
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s work together <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside className="hero-status" aria-label="Current availability">
          <span className="status-dot" />
          <div>
            <span className="status-label">Currently seeking</span>
            <strong>Software Engineer</strong>
            <small>Co-op · Nov 2026 — Mar 2027</small>
          </div>
        </aside>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to discover</span>
          <i />
        </div>
      </section>

      <div className="meander-divider" aria-hidden="true" />

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="section-index">I · ABOUT</p>
          <h2>Built with intent.</h2>
        </div>

        <div className="about-grid">
          <p className="about-lead">
            I&apos;m a fourth-year Information Technology student at Khon Kaen
            University, focused on <em>backend architecture</em> and the
            invisible decisions that make software dependable.
          </p>
          <div className="about-body">
            <p>
              My work begins with the system: its boundaries, data, failure
              modes, and the people who rely on it. I enjoy moving from the
              conceptual model to implementation—then testing the edges until
              the design proves itself.
            </p>
            <p>
              I&apos;m most at home with Go, PostgreSQL, event-driven workflows,
              authentication, and platform concerns. My long-term direction is
              backend architecture and platform engineering.
            </p>
          </div>
        </div>

      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading heading-row">
          <div>
            <p className="section-index">II · EXPERTISE</p>
            <h2>Tools of the craft.</h2>
          </div>
          <p className="heading-note">
            Technologies I use to shape ideas into working systems.
          </p>
        </div>

        <div className="stack-table">
          {stackGroups.map((group) => (
            <article className="stack-row" key={group.title}>
              <span className="stack-number">{group.number}</span>
              <h3>{group.title}</h3>
              <div className="stack-list">
                {group.items.map((item) => <TechBadge key={item} name={item} />)}
              </div>
            </article>
          ))}
        </div>

        <div className="interest-band">
          <span className="interest-kicker">Interested in</span>
          <p>
            Backend Architecture <i>✦</i> Platform Engineering <i>✦</i>
            Distributed Systems <i>✦</i> Developer Infrastructure
          </p>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading heading-row">
          <div>
            <p className="section-index">III · PROJECTS</p>
            <h2>Projects.</h2>
          </div>
          <p className="heading-note">
            Selected projects across product, client, and engineering work.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <button
              className="project-card"
              type="button"
              key={project.title}
              onClick={() => setActiveProject(project)}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-topline">
                <span>{project.type}</span>
                <span>{project.mark}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-stack">
                {project.stack.slice(0, 5).map((item) => (
                  <TechBadge key={item} name={item} compact />
                ))}
              </div>
              <span className="project-open">Detail <ArrowIcon /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-sun" aria-hidden="true">Θ</div>
        <p className="section-index">IV · CONTACT</p>
        <h2>Let&apos;s build something<br /><em>that matters.</em></h2>
        <p className="contact-copy">
          I&apos;m looking for a Software Engineer co-op opportunity where I
          can contribute, learn from experienced engineers, and work on systems
          with meaningful technical depth.
        </p>

        <div className="social-links">
          <a href="https://github.com/sangketkit01" target="_blank" rel="noreferrer">
            GitHub <ArrowIcon />
          </a>
          <a
            href="https://www.facebook.com/thiraphat.sangketkit.27/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook <ArrowIcon />
          </a>
          <a
            href="https://www.instagram.com/thirough5/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowIcon />
          </a>
          <a
            href="https://line.me/ti/p/~newthira5"
            target="_blank"
            rel="noreferrer"
          >
            LINE <ArrowIcon />
          </a>
        </div>
      </section>

      {activeProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveProject(null);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              autoFocus
              aria-label="Close project details"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="modal-rail">
              <span>{activeProject.mark}</span>
              <p>{activeProject.type}</p>
            </div>

            <div className="modal-content">
              <p className="section-index">PROJECT CASE STUDY</p>
              <h2 id="modal-title">{activeProject.title}</h2>
              <p className="modal-summary">{activeProject.summary}</p>

              <div className="modal-section">
                <h3>What I did</h3>
                <ul>
                  {activeProject.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technology</h3>
                <div className="modal-stack">
                  {activeProject.stack.map((item) => (
                    <TechBadge key={item} name={item} />
                  ))}
                </div>
              </div>

              {activeProject.repositories.length > 0 && (
                <div className="modal-links">
                  {activeProject.repositories.map((repository) => (
                    <a
                      href={repository.url}
                      target="_blank"
                      rel="noreferrer"
                      key={repository.url}
                    >
                      {repository.label} <ArrowIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
