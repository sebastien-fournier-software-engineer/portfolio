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
    AiOutlineTool,
} from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../Context/LanguageContext";

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
 * Enveloppe les valeurs chiffrées (ex: 35%, 50%) dans un span pour le style results.
 */
function formatResultWithNumbers(text) {
    if (typeof text !== "string") return text;
    const parts = text.split(/(\d+%?)/g);
    return parts.map((part, i) =>
        /^\d+%?$/.test(part) ? (
            <span key={i} className="experiences-result-number">{part}</span>
        ) : (
            part
        )
    );
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
                    <FaBriefcase className="experiences-meta-icon" />
                    <strong>{exp.role}</strong>
                </div>
            </div>

            {/* Row 2+ : period/duration/location | project/missions/achievements/results/tags */}
            <div className="experiences-grid-col1 experiences-grid-row2 experiences-meta">
                <div className="experiences-period">
                    <AiOutlineCalendar className="experiences-meta-icon" />
                    <span>{exp.period}</span>
                </div>
                {duration && (
                    <div className="experiences-meta-row">
                        <AiOutlineClockCircle className="experiences-meta-icon" />
                        <span>{duration}</span>
                    </div>
                )}
                {exp.location && (
                    <div className="experiences-meta-row">
                        <AiOutlineEnvironment className="experiences-meta-icon" />
                        <span>{exp.location}</span>
                    </div>
                )}
            </div>
            <div className="experiences-grid-col2 experiences-grid-row2 experiences-content">
                <ExperienceProjectBlock project={exp.project} />

                {LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                    <ExperienceListBlock
                        key={labelKey}
                        labelKey={labelKey}
                        Icon={Icon}
                        items={exp[dataKey]}
                    />
                ))}

                {exp.tags?.length > 0 && (
                    <div className="experiences-block experiences-block--tools">
                        <ExperienceBlockHeader labelKey="tools" Icon={AiOutlineTool} />
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
