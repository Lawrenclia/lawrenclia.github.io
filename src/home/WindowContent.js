import {
  ArrowUpRight,
  AtSign,
  BookOpenText,
  Github,
  Play
} from "lucide-react";
import { html } from "./ui.js?v=20260723-home-v6";

const socialIcons = { AtSign, Github, Play };

function InteractiveLink({ href, className, children, label }) {
  const external = /^https?:/.test(href);
  return html`
    <a
      className=${className}
      href=${href}
      target=${external ? "_blank" : undefined}
      rel=${external ? "noopener noreferrer" : undefined}
      aria-label=${label}
      data-interactive="true"
      onClick=${(event) => event.stopPropagation()}
    >
      ${children}
    </a>
  `;
}

function AboutContent({ content }) {
  return html`
    <div className="about-window-content">
      <img className="desktop-avatar" src="images/avatar.png" alt="Lawrenclia 的头像" />
      <div className="about-window-copy">
        <span className="eyebrow">${content.school}</span>
        <h1>${content.name}</h1>
        <p className="major">${content.major}</p>
      </div>
      <div className="interest-list" aria-label="兴趣方向">
        ${content.interests.map((interest) => html`<span key=${interest}>${interest}</span>`)}
      </div>
    </div>
  `;
}

function ProjectPreview({ tone }) {
  return html`
    <div className=${`project-preview preview-${tone}`} aria-hidden="true">
      <span></span><span></span><span></span>
      <i></i><i></i>
    </div>
  `;
}

function ProjectsContent({ content }) {
  return html`
    <div className="project-window-list">
      ${content.projects.map((project) => html`
        <${InteractiveLink}
          key=${project.name}
          className="project-window-item"
          href=${project.href}
          label=${`${project.name} GitHub repository`}
        >
          <${ProjectPreview} tone=${project.tone} />
          <span className="project-window-copy">
            <strong>${project.name}</strong>
            <span className="stack-list">
              ${project.stack.map((item) => html`<em key=${item}>${item}</em>`)}
            </span>
          </span>
          <${ArrowUpRight} className="project-open-icon" size=${16} aria-hidden="true" />
        <//>
      `)}
    </div>
  `;
}

function ResearchContent({ content }) {
  return html`
    <div className="research-window-content">
      <div className="focus-grid">
        ${content.focus.map((item) => html`
          <section key=${item.title} className="focus-item">
            <span className="focus-index">0${content.focus.indexOf(item) + 1}</span>
            <strong>${item.title}</strong>
          </section>
        `)}
      </div>
      <div className="reading-row">
        <span className="reading-label">
          <${BookOpenText} size=${15} aria-hidden="true" />
          Reading
        </span>
        <div>
          ${content.reading.map((item) => html`<span key=${item}>${item}</span>`)}
        </div>
      </div>
    </div>
  `;
}

function ExperienceContent({ content }) {
  return html`
    <div className="timeline-list">
      ${content.timeline.map((item) => html`
        <section key=${item.title} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true"></span>
          <span className="timeline-period">${item.period}</span>
          <div>
            <strong>${item.title}</strong>
          </div>
        </section>
      `)}
    </div>
  `;
}

function ContactContent({ content }) {
  return html`
    <div className="contact-window-content">
      <img src="images/avatar.png" alt="" aria-hidden="true" />
      <div className="contact-links">
        ${content.links.map((link) => {
          const Icon = socialIcons[link.icon] || AtSign;
          return html`
            <${InteractiveLink}
              key=${link.label}
              className="contact-link"
              href=${link.href}
              label=${link.label}
            >
              <${Icon} size=${16} aria-hidden="true" />
              <span>${link.label}</span>
              <${ArrowUpRight} size=${14} aria-hidden="true" />
            <//>
          `;
        })}
      </div>
    </div>
  `;
}

export function WindowContent({ windowInfo }) {
  const props = { content: windowInfo.content };
  switch (windowInfo.id) {
    case "about":
      return html`<${AboutContent} ...${props} />`;
    case "projects":
      return html`<${ProjectsContent} ...${props} />`;
    case "research":
      return html`<${ResearchContent} ...${props} />`;
    case "experience":
      return html`<${ExperienceContent} ...${props} />`;
    case "contact":
      return html`<${ContactContent} ...${props} />`;
    default:
      return null;
  }
}
