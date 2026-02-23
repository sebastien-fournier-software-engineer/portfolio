import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar } from "react-icons/ai";
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
      <span className="education-card__logo education-card__logo--img">
        <img src={logoUrl} alt="" onError={() => setImgFailed(true)} />
      </span>
    );
  }
  return (
    <span className="education-card__logo education-card__logo--initial" aria-hidden="true">
      {initial}
    </span>
  );
}

function EducationCard({ entry }) {
  const { start, end, separator } = parseEducationPeriod(entry.period);

  return (
    <div className="education-card">
      <header className="education-card__header">
        <span className="education-card__header-left">
          <EducationSchoolLogo entry={entry} />
          <span className="education-card__school">{entry.school}</span>
        </span>
        {entry.mention && (
          <span className="education-card__mention">{entry.mention}</span>
        )}
      </header>
      <h3 className="education-card__degree">{entry.degree}</h3>
      <div className="education-card__meta">
        <div className="education-card__period">
          <span className="education-card__period-icon" aria-hidden="true">
            <AiOutlineCalendar />
          </span>
          <span className="education-card__period-text">
            <span className="education-card__period-start">{start}</span>
            {end && <span className="education-card__period-end">{separator}{end}</span>}
          </span>
        </div>
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
