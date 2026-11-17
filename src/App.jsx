import React, { useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/bachusai8";
const githubUrl = "https://github.com/Bachusai12";

function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Bachu Sai home">
        Bachu Sai<span> </span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Let’s connect <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> OPEN TO OPPORTUNITIES
        </p>
        <h1>
          Hi, I’m
          <br />
          <span className="accent-text">Bachu Sai</span>
        </h1>
        <p className="hero-description">
          Python full stack developer building practical web applications with
          Django, FastAPI, and SQL. I’m looking for an entry-level opportunity
          where I can keep learning and contribute to real-world software.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-quiet" href="#work">
            Explore my profile <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="social-links" aria-label="Social profiles">
          <ExternalLink href={linkedinUrl}>
            <span className="social-icon" aria-hidden="true">
              in
            </span>
            LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>
          <ExternalLink href={githubUrl}>
            <span className="social-icon github-icon" aria-hidden="true">
              ⌘
            </span>
            GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
      <div className="hero-visual" aria-label="Profile photo area">
        <div className="photo-frame">
          <div className="photo-crop">
            <img
              className={photoLoaded ? "profile-photo is-loaded" : "profile-photo"}
              src="/profile-cutout.png"
              alt="Bachu Sai"
              onLoad={() => setPhotoLoaded(true)}
              onError={() => setPhotoLoaded(false)}
            />
            <div
              className={photoLoaded ? "photo-placeholder is-hidden" : "photo-placeholder"}
            >
              <span>BS</span>
              <p>Add your photo</p>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about section-wrap section-block" id="about">
      <div className="section-label">
        <span>01</span> A LITTLE ABOUT ME
      </div>
      <div className="about-content">
        <h2>
          Building useful
          <br />
          things with <span className="serif-accent">code</span>
        </h2>
        <div className="about-text">
          <p>
            I’m a Python full stack developer with hands-on internship
            experience building and testing web applications and REST APIs. I
            work with FastAPI, Django, JavaScript, and SQL, and enjoy turning
            practical problems into clear, reliable software.
          </p>
          <p className="profile-detail">
            <strong>Internship:</strong> Python Full Stack Developer Intern at
            QSpiders Pvt. Ltd. (Feb–Oct 2026), building and testing applications
            and REST APIs with FastAPI, Django, and PostgreSQL.
          </p>
          <p className="profile-detail">
            <strong>Education:</strong> B.Tech in Civil Engineering, Guru Nanak
            Institutions of Technical, Hyderabad (2022–2026; CGPA 7.41).
          </p>
          <ExternalLink className="text-link" href={linkedinUrl}>
            Connect with me on LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { name: "All skills", value: "all" },
  { name: "Backend", value: "backend" },
  { name: "Frontend", value: "frontend" },
  { name: "Databases", value: "databases" },
];

const skills = [
  { name: "Python", category: "backend", mark: "Py", detail: "Application development" },
  { name: "Django", category: "backend", mark: "Dj", detail: "Full-stack web apps" },
  { name: "FastAPI", category: "backend", mark: "API", detail: "REST API development" },
  { name: "REST APIs", category: "backend", mark: "{ }", detail: "Reliable integrations" },
  { name: "JavaScript", category: "frontend", mark: "JS", detail: "Interactive interfaces" },
  { name: "HTML & CSS", category: "frontend", mark: "< >", detail: "Responsive layouts" },
  { name: "SQL", category: "databases", mark: "SQL", detail: "Queries and data" },
  { name: "PostgreSQL", category: "databases", mark: "Pg", detail: "Relational databases" },
  { name: "SQLite", category: "databases", mark: "Sq", detail: "Lightweight storage" },
];

function Skills() {
  const [activeGroup, setActiveGroup] = useState("all");
  const visibleSkills =
    activeGroup === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeGroup);

  return (
    <section className="skills section-wrap section-block" id="skills">
      <div className="section-heading skills-heading">
        <div className="section-label">
          <span>02</span> TOOLS I WORK WITH
        </div>
        <h2>
          My <span className="serif-accent">toolkit</span>
        </h2>
        <p>Technologies I use to build practical, reliable web applications.</p>
      </div>
      <div className="skill-filters" role="group" aria-label="Filter skills by category">
        {skillGroups.map((group) => (
          <button
            className={activeGroup === group.value ? "skill-filter is-active" : "skill-filter"}
            type="button"
            key={group.value}
            aria-pressed={activeGroup === group.value}
            onClick={() => setActiveGroup(group.value)}
          >
            {group.name}
          </button>
        ))}
      </div>
      <div className="skills-grid" aria-live="polite">
        {visibleSkills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
            <span className="skill-card-copy">
              <strong>{skill.name}</strong>
              <span>{skill.detail}</span>
            </span>
            <span className="skill-card-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-wrap section-block" id="work">
      <div className="section-heading">
        <div className="section-label">
          <span>03</span> PROJECTS
        </div>
        <h2>
          Selected <span className="serif-accent">work</span>
        </h2>
        <p>Web applications built with Python, APIs, and relational databases.</p>
      </div>
      <div className="projects-grid">
        <ExternalLink className="project-card" href={githubUrl}>
          <div className="project-art art-one">
            <span className="art-orbit orbit-a" />
            <span className="art-orbit orbit-b" />
            <span className="art-center">01</span>
          </div>
          <div className="project-info">
            <div>
              <span className="project-type">PYTHON FULL STACK</span>
              <h3>Smart Job Portal</h3>
              <span className="project-subtitle">Application Tracking System</span>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="project-description">
            A responsive job portal where candidates can search, save, and apply
            while recruiters manage postings. Includes REST APIs, role-based
            access, application tracking, and dashboards.
          </p>
        </ExternalLink>
        <ExternalLink className="project-card" href={githubUrl}>
          <div className="project-art art-two">
            <span className="art-orbit orbit-a" />
            <span className="art-orbit orbit-b" />
            <span className="art-center">02</span>
          </div>
          <div className="project-info">
            <div>
              <span className="project-type">PYTHON &amp; SQL</span>
              <h3>Restaurant Management</h3>
              <span className="project-subtitle">Ordering and payments</span>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="project-description">
            A menu-driven ordering system using object-oriented programming.
            Calculates order totals and supports cash and UPI payment flows
            through abstract payment classes and method overriding.
          </p>
        </ExternalLink>
        <ExternalLink
          className="project-card"
          href="https://github.com/Bachusai12/Flight-Management-System"
        >
          <div className="project-art art-three">
            <span className="art-orbit orbit-a" />
            <span className="art-orbit orbit-b" />
            <span className="art-center">03</span>
          </div>
          <div className="project-info">
            <div>
              <span className="project-type">DJANGO &amp; SQLITE</span>
              <h3>Flight Management System</h3>
              <span className="project-subtitle">Flight search and booking</span>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="project-description">
            A Django flight booking app where users can register, log in, view
            available flights, search flight details, and book tickets. Built
            with Python, Django, HTML, CSS, and SQLite.
          </p>
        </ExternalLink>
      </div>
      <div className="work-note">
        <span aria-hidden="true"></span> Explore more on{" "}
        <ExternalLink href={githubUrl}>GitHub</ExternalLink>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap section-block" id="contact">
      <div className="section-label">
        <span>04</span> GET IN TOUCH
      </div>
      <div className="contact-card">
        <div>
          <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
          <h2>
            Let’s make
            <br />
            something <span className="serif-accent">matter</span>
          </h2>
        </div>
        <div className="contact-links">
          <ExternalLink href={linkedinUrl}>
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </ExternalLink>
          <ExternalLink href={githubUrl}>
            Explore my GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
          <a href="mailto:saibachu8@gmail.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+918367589706">
            Call +91 8367589706 <span aria-hidden="true">↗</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Open my resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          Bachu Sai<span></span>
        </a>
        <p>
          Designed to grow with me <span aria-hidden="true">✳</span>
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
