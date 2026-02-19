import React from "react";
import { Container } from "react-bootstrap";
import {
    AiOutlineCalendar,
    AiOutlineProject,
    AiOutlineCheckCircle,
    AiOutlineRocket,
    AiOutlineLineChart,
    AiOutlineClockCircle,
    AiOutlineEnvironment,
} from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Calcule la durée entre startDate (YYYY-MM) et aujourd'hui.
 * Retourne une chaîne formatée selon la langue (ex: "9 mois", "2 ans 3 mois").
 */
function formatDurationFromStart(startDateStr, t) {
    const [year, month] = startDateStr.split("-").map(Number);
    const start = new Date(year, month - 1, 1);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1;
    months = Math.max(1, months);

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const fmt = (key) => t(`experiences.durationFormat.${key}`);

    if (years === 0) {
        return remainingMonths <= 1 ? `1 ${fmt("month")}` : `${remainingMonths} ${fmt("months")}`;
    }
    if (remainingMonths === 0) {
        return years === 1 ? `1 ${fmt("year")}` : `${years} ${fmt("years")}`;
    }
    const yPart = years === 1 ? `1 ${fmt("year")}` : `${years} ${fmt("years")}`;
    const mPart = remainingMonths === 1 ? `1 ${fmt("month")}` : `${remainingMonths} ${fmt("months")}`;
    return `${yPart} ${mPart}`;
}

const LIST_BLOCKS = [
    { labelKey: "missions", Icon: AiOutlineCheckCircle, dataKey: "missions" },
    { labelKey: "achievements", Icon: AiOutlineRocket, dataKey: "achievements" },
    { labelKey: "results", Icon: AiOutlineLineChart, dataKey: "results" },
];

function ExperienceBlockHeader({ labelKey, Icon }) {
    const { t } = useLanguage();
    const label = t(`experiences.labels.${labelKey}`);
    return (
        <div className="experiences-block-header">
            <span className="experiences-block-icon-wrap">
                <Icon className="experiences-block-icon" />
            </span>
            <span className="experiences-block-label">{label}</span>
        </div>
    );
}

/**
 * Enveloppe la première valeur chiffrée (sans le séparateur "·") dans un span pour le style results.
 * Gère les nombres avec séparateur de milliers, pourcentages, unités (h) et unités avec espace (milli-seconde).
 */
function formatResultWithNumbers(text) {
    if (typeof text !== "string") return text;
    const splitPattern = /(\d+(?:\s\d{3})*(?:%|[a-zA-Z])?(?:\s+[\w-]+)?)(\s*·)/;
    const numberTest = /^\d+(?:\s\d{3})*(?:%|[a-zA-Z])?(?:\s+[\w-]+)?$/;
    const parts = text.split(splitPattern);
    let firstNumberFound = false;
    return parts.map((part, i) => {
        if (numberTest.test(part) && !firstNumberFound) {
            firstNumberFound = true;
            return <span key={i} className="experiences-result-number">{part}</span>;
        }
        return part;
    });
}

function ExperienceListBlock({ labelKey, Icon, items }) {
    if (!items || (Array.isArray(items) && items.length === 0)) return null;

    const list = Array.isArray(items) ? items : [items];
    const isResults = labelKey === "results";

    return (
        <div className={`experiences-block experiences-block--${labelKey}`}>
            <ExperienceBlockHeader labelKey={labelKey} Icon={Icon} />
            <ul className="experiences-block-list">
                {list.map((item, i) => (
                    <li key={i}>{isResults ? formatResultWithNumbers(item) : item}</li>
                ))}
            </ul>
        </div>
    );
}

function ExperienceProjectBlock({ project }) {
    if (!project) return null;

    return (
        <div className="experiences-block experiences-block--project">
            <ExperienceBlockHeader labelKey="project" Icon={AiOutlineProject} />
            <p className="experiences-block-text">{project}</p>
        </div>
    );
}

/**
 * Parse period string "start – end" or "start - end" into { start, end, separator }.
 * Falls back to full period if no separator found.
 */
function parsePeriod(period) {
    if (!period || typeof period !== "string") return { start: period, end: null, separator: null };
    const match = period.match(/^(.+?)\s+[–-]\s+(.+)$/);
    if (match) {
        return { start: match[1].trim(), end: match[2].trim(), separator: " – " };
    }
    return { start: period, end: null, separator: null };
}

function ExperiencePeriod({ period }) {
    const { start, end, separator } = parsePeriod(period);
    if (!start) return null;

    return (
        <div className="experiences-period">
            <span className="experiences-meta-icon-wrap">
                <AiOutlineCalendar className="experiences-meta-icon" />
            </span>
            <div className="experiences-period-content">
                <span className="experiences-period-start">{start}</span>
                {end && <span className="experiences-period-end">{separator}{end}</span>}
            </div>
        </div>
    );
}

function ExperienceSubProjectBlock({ subProject }) {
    if (!subProject) return null;

    return (
        <div className="experiences-subproject">
            <div className="experiences-subproject-title">{subProject.title}</div>
            {LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                <ExperienceListBlock
                    key={labelKey}
                    labelKey={labelKey}
                    Icon={Icon}
                    items={subProject[dataKey]}
                />
            ))}
            {subProject.tags?.length > 0 && (
                <div className="experiences-block experiences-block--tags">
                    <ExperienceBlockHeader labelKey="tags" Icon={FaTag} />
                    <div className="experiences-tags">
                        {subProject.tags.map((tag, i) => (
                            <span key={i} className="experiences-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function ExperienceCard({ exp }) {
    const { t } = useLanguage();
    const duration = exp.isCurrent && exp.startDate
        ? formatDurationFromStart(exp.startDate, t)
        : exp.duration;

    return (
        <div className={`experiences-card experiences-card--grid${exp.isCurrent ? " experiences-card--ongoing" : ""}`}>
            {/* Row 1 : company | role */}
            <div className="experiences-grid-col1 experiences-grid-row1">
                <div className="experiences-company">
                    {exp.company}
                    {exp.isCurrent && (
                        <span className="experiences-ongoing-badge">{t("experiences.ongoing")}</span>
                    )}
                </div>
            </div>
            <div className="experiences-grid-col2 experiences-grid-row1">
                <div className="experiences-role">
                    {exp.role}
                    {exp.experienceType && (
                        <span className={`experiences-type-badge experiences-type-badge--${exp.experienceType}`}>
                            {t(`experiences.experienceTypeBadges.${exp.experienceType}`)}
                        </span>
                    )}
                </div>
            </div>

            {/* Row 2+ : period/duration/location | project/missions/achievements/results/tags */}
            <div className="experiences-grid-col1 experiences-grid-row2 experiences-meta">
                <ExperiencePeriod period={exp.period} />
                {duration && (
                    <div className="experiences-meta-row">
                        <span className="experiences-meta-icon-wrap">
                            <AiOutlineClockCircle className="experiences-meta-icon" />
                        </span>
                        <span>{duration}</span>
                    </div>
                )}
                {exp.location && (
                    <div className="experiences-meta-row experiences-meta-row--location">
                        <span className="experiences-meta-icon-wrap">
                            <AiOutlineEnvironment className="experiences-meta-icon" />
                        </span>
                        <span>{exp.location}</span>
                    </div>
                )}
            </div>
            <div className="experiences-grid-col2 experiences-grid-row2 experiences-content">
                <ExperienceProjectBlock project={exp.project} />

                {exp.projects ? (
                    exp.projects.map((subProject, idx) => (
                        <ExperienceSubProjectBlock key={idx} subProject={subProject} />
                    ))
                ) : (
                    LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                        <ExperienceListBlock
                            key={labelKey}
                            labelKey={labelKey}
                            Icon={Icon}
                            items={exp[dataKey]}
                        />
                    ))
                )}

                {exp.tags?.length > 0 && (
                    <div className="experiences-block experiences-block--tags">
                        <ExperienceBlockHeader labelKey="tags" Icon={FaTag} />
                        <div className="experiences-tags">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="experiences-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ExperienceTimelineItem({ exp }) {
    return (
        <div className={`experiences-timeline-item${exp.isCurrent ? " experiences-timeline-item--ongoing" : ""}`}>
            <div className="experiences-timeline-node">
                <span className="experiences-timeline-node-dot" />
            </div>
            <div className="experiences-timeline-connector" aria-hidden="true" />
            <ExperienceCard exp={exp} />
        </div>
    );
}

function Experiences() {
    const { t } = useLanguage();
    const entries = t("experiences.entries") || [];

    return (
        <section id="experiences" className="experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
            <Container>
                <h1 className="project-heading">{t("experiences.title")}</h1>
                <p className="experiences-subtitle">{t("experiences.subtitle")}</p>

                <div className="experiences-timeline">
                    <div className="experiences-timeline-track" aria-hidden="true" />
                    {entries.map((exp, index) => (
                        <ExperienceTimelineItem key={index} exp={exp} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Experiences;
