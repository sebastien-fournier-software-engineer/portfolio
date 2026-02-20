import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

import insaLogo from "../../assets/Schools/insa.png";
import strathclydeLogo from "../../assets/Schools/strathclyde.png";

const EDUCATION_LOCAL_LOGOS = {
  insa: insaLogo,
  strathclyde: strathclydeLogo,
};

function parseEducationPeriod(period) {
  if (!period || typeof period !== "string") return { start: period, end: null, separator: null };
  const match = period.match(/^(.+?)\s+[–-]\s+(.+)$/);
  if (match) return { start: match[1].trim(), end: match[2].trim(), separator: " – " };
  return { start: period, end: null, separator: null };
}

function EducationSchoolLogo({ entry }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const logoUrl = entry.logoKey ? EDUCATION_LOCAL_LOGOS[entry.logoKey] : entry.logo;
  const showImg = logoUrl && !imgFailed;
  const initial = (entry.school || "?").charAt(0).toUpperCase();

  if (showImg) {
    return (
      <span className="experiences-company-logo experiences-company-logo--img">
        <img src={logoUrl} alt="" onError={() => setImgFailed(true)} />
      </span>
    );
  }
  return (
    <span className="experiences-company-logo experiences-company-logo--initial" aria-hidden="true">
      {initial}
    </span>
  );
}

function EducationCard({ entry }) {
  const { t } = useLanguage();
  const { start, end, separator } = parseEducationPeriod(entry.period);

  return (
    <div className="experiences-card experiences-card--grid">
      <div className="experiences-grid-col1 experiences-grid-row1">
        <div className="experiences-company">
          <EducationSchoolLogo entry={entry} />
          <span className="experiences-company-name">{entry.school}</span>
        </div>
      </div>
      <div className="experiences-grid-col2 experiences-grid-row1">
        <div className="experiences-role">{entry.degree}</div>
      </div>

      <div className="experiences-grid-col1 experiences-grid-row2 experiences-meta">
        <div className="experiences-period">
          <span className="experiences-meta-icon-wrap">
            <AiOutlineCalendar className="experiences-meta-icon" />
          </span>
          <div className="experiences-period-content">
            <span className="experiences-period-start">{start}</span>
            {end && <span className="experiences-period-end">{separator}{end}</span>}
          </div>
        </div>
      </div>
      <div className="experiences-grid-col2 experiences-grid-row2 experiences-content">
        {entry.description && (
          <div className="experiences-description">{entry.description}</div>
        )}
        {entry.tags && entry.tags.length > 0 && (
          <div className="experiences-block experiences-block--tags">
            <div className="experiences-block-header">
              <span className="experiences-block-icon-wrap">
                <MdOutlineMenuBook className="experiences-block-icon" />
              </span>
              <span className="experiences-block-label">{t("education.labels.subjects")}</span>
            </div>
            <div className="experiences-tags">
              {entry.tags.map((tag, i) => (
                <span key={i} className="experiences-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Education() {
  const { t } = useLanguage();
  const entries = t("education.entries") || [];

  return (
    <section id="education" className="education-section experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
      <Container>
        <h1 className="project-heading">{t("education.title")}</h1>
        <p className="experiences-subtitle">{t("education.subtitle")}</p>

        <div className="experiences-timeline">
          <div className="experiences-timeline-track" aria-hidden="true" />
          {entries.map((entry, index) => (
            <div key={index} className="experiences-timeline-item">
              <div className="experiences-timeline-node">
                <span className="experiences-timeline-node-dot" />
              </div>
              <div className="experiences-timeline-connector" aria-hidden="true" />
              <EducationCard entry={entry} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
